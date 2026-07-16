import { GraduationCap, HeartHandshake, ShieldCheck, TrendingUp, Users, Wand2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseWhyPartner.css";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "A Brand Built on Method, Not Marketing",
    text: "Parents recognise substance; a decade-old pedagogy converts enquiries better than a new logo ever can.",
    tone: "primary",
    size: "lg",
  },
  {
    icon: HeartHandshake,
    title: "Zero-Royalty Economics",
    text: "Every rupee your centre earns stays in your centre — reinvest in growth instead of remitting royalties.",
    tone: "secondary",
  },
  {
    icon: Wand2,
    title: "Hand-Held From Day Zero",
    text: "Site selection, layout, licensing, launch — you are guided through each stage by people who have done it before.",
    tone: "gold",
  },
  {
    icon: TrendingUp,
    title: "A Model With Receipts",
    text: "Admissions playbooks, fee structures, and operating routines already stress-tested in the Tamil Nadu market.",
    tone: "orange",
  },
  {
    icon: GraduationCap,
    title: "Academic Support That Never Stops",
    text: "Your teachers train in the Kayo way before your doors open, and keep training after.",
    tone: "secondary",
  },
  {
    icon: Users,
    title: "A Partner Community",
    text: "Join a network of centre owners who share what works — you are in business for yourself, never by yourself.",
    tone: "primary",
    size: "lg",
  },
];

export default function FranchiseWhyPartner() {
  return (
    <section className="fr-why" id="why-partner">
      <div className="container">
        <SectionHeading
          eyebrow="A Proven Preschool Franchise Opportunity"
          title="Why Partner with Kayo International?"
          description="Join a brand families already trust — and build a business with the systems, training and support to help you succeed."
        />

        <div className="fr-why__bento">
          {REASONS.map((r, i) => (
            <Reveal
              as="div"
              y={24}
              delay={0.06 * (i % 3)}
              key={r.title}
              className={`fr-why__card fr-why__card--${r.tone} ${
                r.size === "lg" ? "fr-why__card--lg" : ""
              }`}
            >
              <span className="fr-why__icon">
                <r.icon strokeWidth={1.6} />
              </span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
