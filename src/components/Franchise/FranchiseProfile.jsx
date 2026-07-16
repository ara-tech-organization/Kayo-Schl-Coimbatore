import { useState } from "react";
import {
  Banknote,
  Handshake,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseProfile.css";

const TRAITS = [
  {
    icon: HeartHandshake,
    title: "Child-First Motivation",
    text: "You see the preschool as a service to families before you see it as a revenue line.",
  },
  {
    icon: Banknote,
    title: "Financial Readiness",
    text: "Capacity to fund a premium centre properly rather than cutting corners on what children touch.",
  },
  {
    icon: ShieldCheck,
    title: "Standards Discipline",
    text: "Willingness to run Kayo's safety, hygiene, and academic protocols exactly as designed.",
  },
  {
    icon: MapPinned,
    title: "Local Roots",
    text: "You know your locality's families, landmarks, and rhythms better than any market report.",
  },
  {
    icon: Handshake,
    title: "Builder's Ambition",
    text: "The intent to grow a durable institution, not flip a quick venture.",
  },
  {
    icon: UserRoundCog,
    title: "Operational Presence",
    text: "Hands-on involvement, or a dedicated centre director you trust with the day-to-day.",
  },
];

export default function FranchiseProfile() {
  const [flipped, setFlipped] = useState(() => new Set());

  function toggle(i) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section className="fr-profile" id="profile">
      <div className="container">
        <SectionHeading
          eyebrow="The Partner Profile"
          title="Who We're Looking For"
          description="We are selective, because every new centre carries the Kayo name into a neighbourhood of trusting parents. The partner profile we say yes to — tap a card to see what matters most."
        />

        <div className="fr-profile__cards">
          {TRAITS.map((t, i) => (
            <Reveal
              as="div"
              y={22}
              delay={0.07 * i}
              key={t.title}
              className="fr-profile__flip"
            >
              <button
                type="button"
                className={`fr-profile__card ${flipped.has(i) ? "is-flipped" : ""}`}
                onClick={() => toggle(i)}
                onMouseEnter={() => setFlipped((prev) => new Set(prev).add(i))}
                onMouseLeave={() =>
                  setFlipped((prev) => {
                    const next = new Set(prev);
                    next.delete(i);
                    return next;
                  })
                }
                aria-pressed={flipped.has(i)}
              >
                <span className="fr-profile__face fr-profile__face--front">
                  <span className="fr-profile__icon">
                    <t.icon strokeWidth={1.7} />
                  </span>
                  <span className="fr-profile__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t.title}</h3>
                </span>
                <span className="fr-profile__face fr-profile__face--back">
                  <p>{t.text}</p>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal y={18} delay={0.1} className="fr-profile__note">
          <p>
            Teaching experience is not on that list &mdash; deliberately. Our system supplies the
            pedagogy; you supply the commitment and the community standing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
