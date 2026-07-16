import PageLayout from "../components/layout/PageLayout";
import ContactHero from "../components/Contact/ContactHero";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactMap from "../components/Contact/ContactMap";
import useSeo from "../hooks/useSeo";

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "KAYO International Preschool - Saravanampatti, Coimbatore",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.14, 1C Marutham Nagar, Saravanampatti",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641035",
    addressCountry: "IN",
  },
  telephone: "+91-93426-99339",
  email: "cbesaravanampatti@kayointernational.in",
  openingHours: "Mo-Sa 09:00-18:00",
  url: "https://kayointernational.in/contact-us",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "[pin from GBP]",
    longitude: "[pin from GBP]",
  },
};

export default function ContactPage() {
  useSeo({
    title: "Contact Us | Kayo International Preschool Coimbatore",
    description:
      "Visit Kayo International at Marutham Nagar, Saravanampatti, Coimbatore – 641035. Call +91 93426 99339 for admissions or book a campus tour. Enrolment open for 2026-27.",
    schema: CONTACT_SCHEMA,
  });

  return (
    <PageLayout>
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
    </PageLayout>
  );
}
