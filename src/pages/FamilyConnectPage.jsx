import PageLayout from "../components/layout/PageLayout";
import FamilyConnectHero from "../components/FamilyConnect/FamilyConnectHero";
import FamilyConnectEvents from "../components/FamilyConnect/FamilyConnectEvents";
import FamilyConnectResources from "../components/FamilyConnect/FamilyConnectResources";
import FamilyConnectBenefits from "../components/FamilyConnect/FamilyConnectBenefits";
import FamilyConnectCommunication from "../components/FamilyConnect/FamilyConnectCommunication";
import FamilyConnectCTA from "../components/FamilyConnect/FamilyConnectCTA";
import useSeo from "../hooks/useSeo";

const FAMILY_CONNECT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Parent & Family Engagement Programme",
  provider: {
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://www.kayointernational.in/",
  },
  areaServed: ["Saravanampatti, Coimbatore", "Tamil Nadu"],
};

export default function FamilyConnectPage() {
  useSeo({
    title: "Family Connect | Kayo International Coimbatore",
    description:
      "How Kayo International Saravanampatti keeps Coimbatore parents inside their child's day — daily updates, open communication, family events & a genuine open-door culture.",
    schema: FAMILY_CONNECT_SCHEMA,
  });

  return (
    <PageLayout>
      <FamilyConnectHero />
      <FamilyConnectEvents />
      <FamilyConnectResources />
      <FamilyConnectBenefits />
      <FamilyConnectCommunication />
      <FamilyConnectCTA />
    </PageLayout>
  );
}
