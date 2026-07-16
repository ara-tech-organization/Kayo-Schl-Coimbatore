import PageLayout from "../components/layout/PageLayout";
import CareersHero from "../components/Careers/CareersHero";
import CareersHighlights from "../components/Careers/CareersHighlights";
import CareersWhyJoin from "../components/Careers/CareersWhyJoin";
import CareersRoles from "../components/Careers/CareersRoles";
import CareersApplicationForm from "../components/Careers/CareersApplicationForm";
import useSeo from "../hooks/useSeo";

const CAREERS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Preschool Teacher",
  description:
    "Teach the proprietary NURTURE Lab curriculum at Kayo International's Saravanampatti, Coimbatore campus. Structured induction, founder-led training, and clear growth paths for early childhood educators.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://kayointernational.in",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.14, 1C Marutham Nagar, Saravanampatti",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641035",
      addressCountry: "IN",
    },
  },
  employmentType: "FULL_TIME",
  qualifications: "Bachelor's degree in Early Years Education or equivalent",
  industry: "Early Childhood Education",
  datePosted: "2026-07-08",
  validThrough: "2026-12-31",
  applicationContact: {
    "@type": "ContactPoint",
    contactType: "Recruitment",
    availableLanguage: ["English", "Tamil"],
  },
};

export default function CareersPage() {
  useSeo({
    title: "Careers | Kayo International Coimbatore",
    description:
      "Preschool teacher jobs in Coimbatore — join Kayo International's Saravanampatti campus. Founder-led training, respectful culture, real career growth for early childhood educators.",
    schema: CAREERS_SCHEMA,
  });

  return (
    <PageLayout>
      <CareersHero />
      <CareersHighlights />
      <CareersWhyJoin />
      <CareersRoles />
      <CareersApplicationForm />
    </PageLayout>
  );
}
