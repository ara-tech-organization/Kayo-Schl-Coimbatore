import { useEffect, useState } from "react";
import {
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  FileSignature,
  MapPin,
  MapPinned,
  MessageSquare,
  Rocket,
  Sparkles,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseProcess.css";

const EASE = [0.16, 1, 0.3, 1];

const STEPS = [
  {
    icon: MessageSquare,
    title: "Enquiry With KAYO",
    text: "Tell us who you are, where you want to build, and what draws you to early education.",
  },
  {
    icon: Users2,
    title: "Meeting with a KAYO Representative",
    text: "A frank conversation about the model, the market, and whether we fit each other.",
  },
  {
    icon: MapPinned,
    title: "Finalizing the Location",
    text: "We evaluate your proposed sites against catchment data and Kayo's location criteria.",
  },
  {
    icon: FileSignature,
    title: "Agreement Signing",
    text: "Terms on paper, transparently — including everything the no-royalty model does and does not cover.",
  },
  {
    icon: Sparkles,
    title: "Preschool Setup & Registration",
    text: "Fit-out, branding, statutory registrations, and pre-launch checklists, guided end to end.",
  },
  {
    icon: BookOpenCheck,
    title: "Administrative & Teaching Training",
    text: "Your team learns the NURTURE Lab curriculum and Kayo's operating routines before day one.",
  },
  {
    icon: Rocket,
    title: "Launch of Your Own School",
    text: "Doors open with our launch-marketing support — and the ongoing partnership begins.",
  },
];

const LOCATIONS = [
  "Coimbatore",
  "Saravanampatti",
  "Kalapatti",
  "Vadavalli",
  "Singanallur",
  "Peelamedu",
  "Ramanathapuram",
  "Kovaipudur",
  "Thudiyalur",
  "Tiruppur",
  "Erode",
  "Salem",
  "Pollachi",
  "Mettupalayam",
];

export default function FranchiseProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function go(dir) {
    setActive((a) => (a + dir + STEPS.length) % STEPS.length);
  }

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="fr-process" id="how-to-apply">
      <div className="container">
        <SectionHeading
          eyebrow="Your Next Steps"
          title="Your Next Steps: How to Apply"
          description="Taking the first step towards owning your Kayo International preschool franchise is simple."
        />

        <div
          className="fr-process__coverflow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="fr-process__nav fr-process__nav--prev"
            aria-label="Previous step"
            onClick={() => go(-1)}
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          <div className="fr-process__stage">
            {STEPS.map((s, i) => {
              const offset = i - active;
              const abs = Math.abs(offset);
              const visible = abs <= 3;

              return (
                <motion.button
                  type="button"
                  key={s.title}
                  className={`fr-process__card ${offset === 0 ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  animate={{
                    x: offset * 190,
                    rotateY: offset === 0 ? 0 : offset < 0 ? 42 : -42,
                    scale: offset === 0 ? 1 : 0.8,
                    opacity: visible ? (offset === 0 ? 1 : 0.55) : 0,
                    zIndex: 10 - abs,
                  }}
                  transition={{ duration: 0.55, ease: EASE }}
                  style={{ pointerEvents: visible ? "auto" : "none" }}
                >
                  <span className="fr-process__step-label">Step {i + 1}</span>
                  <span className="fr-process__icon">
                    <s.icon strokeWidth={1.7} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </motion.button>
              );
            })}
          </div>

          <button
            type="button"
            className="fr-process__nav fr-process__nav--next"
            aria-label="Next step"
            onClick={() => go(1)}
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>

        <div className="fr-process__dots" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span
              key={s.title}
              className={active === i ? "is-active" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <Reveal y={20} className="fr-process__locations">
          <span className="fr-process__locations-icon">
            <MapPin strokeWidth={1.7} />
          </span>
          <div>
            <h3>Now Enrolling Franchise Partners In</h3>
            <p>
              Current priority markets: Coimbatore and Western Tamil Nadu. Within the city —
              Saravanampatti&rsquo;s surrounding corridors, Kalapatti, Vadavalli, Singanallur,
              Peelamedu, Ramanathapuram, Kovaipudur, and Thudiyalur. Beyond it — Tiruppur, Erode,
              Salem, Pollachi, and Mettupalayam, each with young-family demographics and thin
              quality-preschool supply.
            </p>
            <div className="fr-process__chips">
              {LOCATIONS.map((loc) => (
                <span key={loc}>{loc}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
