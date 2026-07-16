import PageLayout from "../components/layout/PageLayout";
import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import Founders from "../components/About/Founders";
import OurTeam from "../components/About/OurTeam";
import EnquiryCTA from "../components/Home/EnquiryCTA";
import useSeo from "../hooks/useSeo";

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Kayo International Preschool and DayCare - Coimbatore",
  founder: {
    "@type": "Person",
    name: "Veena Sundaramurthy",
    jobTitle: "Founder & Early Childhood Educator",
  },
  foundingDate: "2013",
  description:
    "Trusted preschool brand with 10+ years of experience and qualified teachers, now serving Saravanampatti, Coimbatore.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.14, 1C Marutham Nagar",
    addressLocality: "Saravanampatti, Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641035",
    addressCountry: "IN",
  },
  areaServed: ["Saravanampatti, Coimbatore"],
};

export default function AboutPage() {
  useSeo({
    title: "About Us | Kayo International Preschool Coimbatore",
    description:
      "Discover Kayo International Preschool founded by Veena Sundaramurthy in 2013. 10+ years of nurturing 1000+ children, now in Saravanampatti, Coimbatore. Book a visit today.",
    schema: ABOUT_SCHEMA,
  });

  return (
    <PageLayout>
      <AboutHero />
      <OurStory />
      <Founders />
      <OurTeam />
      <EnquiryCTA />
    </PageLayout>
  );
}
