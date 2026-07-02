import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { privacyPageContent } from "@/content/legal";
import { pageCopy, seo } from "@/lib/siteContent";

const Privacy = () => (
  <LegalPageLayout
    content={{ ...privacyPageContent, ...pageCopy.privacy.hero }}
    seo={seo.privacy}
  />
);

export default Privacy;
