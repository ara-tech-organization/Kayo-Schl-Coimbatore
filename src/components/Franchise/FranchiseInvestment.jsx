import { Building2, Laptop2, Megaphone, PiggyBank, Receipt, Wallet } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseInvestment.css";

const INVESTMENT = [
  {
    icon: Wallet,
    title: "Franchise Fee",
    text: "A single one-time payment; no royalty ever follows it.",
    tone: "primary",
  },
  {
    icon: Building2,
    title: "Infrastructure & Interiors",
    text: "Child-safe fit-out, Montessori materials, furniture, and play equipment to Kayo specification.",
    tone: "secondary",
  },
  {
    icon: Laptop2,
    title: "Technology Setup",
    text: "CCTV coverage, parent-communication systems, and centre-management software.",
    tone: "gold",
  },
  {
    icon: Megaphone,
    title: "Initial Marketing",
    text: "Launch campaign, local visibility, and your centre's digital presence.",
    tone: "orange",
  },
  {
    icon: PiggyBank,
    title: "Working Capital",
    text: "Runway for the opening months while admissions build.",
    tone: "primary",
  },
];

export default function FranchiseInvestment() {
  return (
    <section className="fr-invest" id="investment">
      <span className="fr-invest__curve fr-invest__curve--top" aria-hidden="true" />
      <span className="fr-invest__curve fr-invest__curve--bottom" aria-hidden="true" />

      <div className="fr-invest__backdrop" aria-hidden="true">
        <span className="fr-invest__blob fr-invest__blob--a" />
        <span className="fr-invest__blob fr-invest__blob--b" />
      </div>

      <div className="container fr-invest__inner">
        <SectionHeading
          eyebrow="What It Takes to Build"
          title="Investment Overview"
          description="Total outlay depends on your city, property, and catchment, but every Kayo franchise budget is built from the same five components:"
        />

        <div className="fr-invest__receipt-wrap">
          <span className="fr-invest__receipt-backing" aria-hidden="true" />

          <div className="fr-invest__receipt">
            <div className="fr-invest__receipt-head">
              <span className="fr-invest__receipt-icon">
                <Receipt size={18} strokeWidth={1.8} />
              </span>
              <div>
                <strong>Investment Breakdown</strong>
                <span>{INVESTMENT.length} components</span>
              </div>
            </div>

            <ul className="fr-invest__list">
              {INVESTMENT.map((item, i) => (
                <Reveal
                  as="li"
                  y={14}
                  delay={0.05 * i}
                  key={item.title}
                  className={`fr-invest__row fr-invest__row--${item.tone}`}
                >
                  <span className="fr-invest__row-icon">
                    <item.icon strokeWidth={1.7} />
                  </span>
                  <div className="fr-invest__row-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span className="fr-invest__row-index">{String(i + 1).padStart(2, "0")}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal y={18} delay={0.1} className="fr-invest__note">
          <p>
            In a confidential discussion we put real numbers on the table for your specific
            location &mdash; projected admissions, break-even timeline, and revenue scenarios
            &mdash; so your decision is made on arithmetic, not adjectives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
