# Contact Form Setup Guide

The contact form uses Netlify Forms. Local development can validate UI behavior, but real submissions only work after the site is deployed to Netlify.

## Files involved

| File | Purpose |
|---|---|
| `src/components/contact/ProjectContactForm.tsx` | Visible form, Zod validation, submission handling |
| `public/contact-form.html` | Hidden Netlify form detection file |
| `src/lib/siteContent.ts -> company.email` | Email shown in UI and fallback error text |

## Netlify setup

1. Deploy the site to Netlify.
2. Open the site in the Netlify dashboard.
3. Go to Forms.
4. Confirm the `contact` form appears after a test submission.
5. Add an email notification for new form submissions.
6. Send one production test submission and confirm the email arrives.

## Important implementation rule

Keep these names in sync:

```text
form name="contact"
hidden input name="form-name" value="contact"
public/contact-form.html form name="contact"
```

If one name changes and the others do not, Netlify may not detect the form.

## Troubleshooting

- If submissions do not arrive, check Netlify Forms first.
- If Netlify does not show the form, redeploy and submit one test message.
- If the UI shows a fallback error, users can still email the address from `company.email`.
