import { company, routes } from "@/lib/siteContent";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPageContent {
  eyebrow: string;
  title: string;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
}

const contactLine = `Questions about these terms can be sent to ${company.email}.`;

export const privacyPageContent: LegalPageContent = {
  eyebrow: "Privacy",
  title: "Privacy policy",
  description:
    "A clear summary of how this website handles project inquiries, basic contact details, and standard website operation data.",
  effectiveDate: "July 2026",
  sections: [
    {
      heading: "Information you choose to send",
      body: [
        "When you submit the project brief form, we collect the details you provide such as name, email address, company or project name, project type, budget range, timeline, business goal, and optional message.",
        "This information is used to understand your inquiry and reply with a relevant next step. Do not send passwords, payment card details, government identity numbers, or sensitive private information through the website form.",
      ],
    },
    {
      heading: "Website operation data",
      body: [
        "The website may receive standard technical information from hosting and form-processing services, such as request time, browser type, IP-based region, and basic spam-protection signals.",
        "The site does not intentionally place advertising trackers or sell personal data to advertisers. If analytics or marketing cookies are added later, this policy should be updated before those tools are enabled.",
      ],
    },
    {
      heading: "How inquiry data is used",
      body: [
        "Project brief information is used for reviewing the request, replying to the sender, planning a discovery conversation, and improving the clarity of future project intake.",
        "Inquiry data should only be shared with people or service providers who need it to operate the website, process the form, or respond to the project request.",
      ],
    },
    {
      heading: "Retention and contact",
      body: [
        "Project inquiry details are kept only as long as needed for communication, project planning, or reasonable business records.",
        contactLine,
      ],
    },
  ],
};

export const termsPageContent: LegalPageContent = {
  eyebrow: "Website terms",
  title: "Terms of use",
  description:
    "Simple website terms for visitors using Kynetix Labs public pages, contact forms, articles, and service/product information.",
  effectiveDate: "July 2026",
  sections: [
    {
      heading: "Website information",
      body: [
        "The content on this website explains Kynetix Labs services, product directions, process, and contact paths. It is provided for general business information and project discussion.",
        "Product and service descriptions are not guarantees that every feature is available for every client without scoping, discovery, and written agreement.",
      ],
    },
    {
      heading: "Project inquiries",
      body: [
        "Submitting the project brief form does not create a contract, service obligation, partnership, or guaranteed delivery commitment.",
        "Any project work should be confirmed separately through an agreed scope, timeline, pricing, responsibilities, and delivery terms.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The Kynetix Labs name, website design, text, graphics, code structure, and brand assets belong to Kynetix Labs or their respective owners unless stated otherwise.",
        "Visitors may view and share public page links, but should not copy, resell, or republish website materials as their own work.",
      ],
    },
    {
      heading: "Responsible use",
      body: [
        "Do not misuse the website, submit spam, attempt to bypass form protection, probe for vulnerabilities, or send malicious content through forms or links.",
        contactLine,
      ],
    },
  ],
};

export const legalFooterLinks = [
  { name: "Privacy", path: routes.privacy },
  { name: "Terms", path: routes.terms },
];
