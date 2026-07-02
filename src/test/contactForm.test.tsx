import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Contact from "@/pages/Contact";
import { projectBriefBudgetRanges, projectBriefProjectTypes, projectBriefTimelineOptions } from "@/content/contact";
import { company } from "@/lib/siteContent";

const renderContactPage = () =>
  render(
    <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Contact />
    </MemoryRouter>,
  );

describe("contact conversion form", () => {
  let nowSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    nowSpy = vi.spyOn(Date, "now").mockReturnValue(10000);
  });

  afterEach(() => {
    nowSpy.mockRestore();
    vi.restoreAllMocks();
  });

  it("renders structured project brief fields from centralized content", () => {
    renderContactPage();

    expect(screen.getByRole("heading", { name: "Start with a clear software project brief." })).toBeInTheDocument();
    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(screen.getByLabelText("Project type *")).toBeInTheDocument();
    expect(screen.getByLabelText("Budget range *")).toBeInTheDocument();
    expect(screen.getByLabelText("Timeline *")).toBeInTheDocument();
    expect(screen.getByLabelText("Business goal *")).toBeInTheDocument();

    for (const option of projectBriefProjectTypes) {
      expect(screen.getByRole("option", { name: option.label })).toBeInTheDocument();
    }
  });

  it("shows validation errors before sending incomplete briefs", async () => {
    renderContactPage();

    fireEvent.click(screen.getByRole("button", { name: "Submit project brief" }));

    expect(await screen.findByText("Please enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(screen.getByText("Choose a project type.")).toBeInTheDocument();
  });

  it("submits a valid project brief and shows the success state", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    renderContactPage();

    fireEvent.change(screen.getByLabelText("Name *"), { target: { value: "Kushad" } });
    fireEvent.change(screen.getByLabelText("Email *"), { target: { value: "kushad@example.com" } });
    fireEvent.change(screen.getByLabelText("Company or project"), { target: { value: "Kynetix Labs" } });
    fireEvent.change(screen.getByLabelText("Project type *"), { target: { value: projectBriefProjectTypes[0].id } });
    fireEvent.change(screen.getByLabelText("Budget range *"), { target: { value: projectBriefBudgetRanges[0].id } });
    fireEvent.change(screen.getByLabelText("Timeline *"), { target: { value: projectBriefTimelineOptions[0].id } });
    fireEvent.change(screen.getByLabelText("Business goal *"), {
      target: { value: "We need a structured website intake flow that qualifies real project inquiries." },
    });
    fireEvent.change(screen.getByLabelText("Extra context"), {
      target: { value: "The project should avoid fake integrations and keep a fallback email path." },
    });

    nowSpy.mockReturnValue(12000);
    fireEvent.click(screen.getByRole("button", { name: "Submit project brief" }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(await screen.findByRole("heading", { name: "Project brief received" })).toBeInTheDocument();
  });

  it("shows a monitored fallback email path if submission fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    renderContactPage();

    fireEvent.change(screen.getByLabelText("Name *"), { target: { value: "Kushad" } });
    fireEvent.change(screen.getByLabelText("Email *"), { target: { value: "kushad@example.com" } });
    fireEvent.change(screen.getByLabelText("Project type *"), { target: { value: projectBriefProjectTypes[1].id } });
    fireEvent.change(screen.getByLabelText("Budget range *"), { target: { value: projectBriefBudgetRanges[1].id } });
    fireEvent.change(screen.getByLabelText("Timeline *"), { target: { value: projectBriefTimelineOptions[1].id } });
    fireEvent.change(screen.getByLabelText("Business goal *"), {
      target: { value: "We need a cloud dashboard that helps operators understand current business work." },
    });

    nowSpy.mockReturnValue(12000);
    fireEvent.click(screen.getByRole("button", { name: "Submit project brief" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(company.email);
  });
});
