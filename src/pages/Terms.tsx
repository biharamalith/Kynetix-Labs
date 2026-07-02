import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { termsPageContent } from "@/content/legal";
import { pageCopy, seo } from "@/lib/siteContent";

const Terms = () => (
  <LegalPageLayout
    content={{ ...termsPageContent, ...pageCopy.terms.hero }}
    seo={seo.terms}
  />
);

export default Terms;
