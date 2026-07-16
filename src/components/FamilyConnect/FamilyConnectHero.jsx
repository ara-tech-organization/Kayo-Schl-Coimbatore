import { motion } from "framer-motion";
import { Home, Star, Users, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";
import "./FamilyConnectHero.css";

const EASE = [0.16, 1, 0.3, 1];

const HIGHLIGHTS = [
  { icon: Star, label: "4.9★ Rating, 1,000+ Families" },
  { icon: Users, label: "10+ Years of Expertise" },
  { icon: DoorOpen, label: "Open-Door Policy" },
];

export default function FamilyConnectHero() {
  return (
    <section className="fc-hero">
      <div className="fc-hero__backdrop" aria-hidden="true">
        <span className="fc-hero__blob fc-hero__blob--a" />
        <span className="fc-hero__blob fc-hero__blob--b" />
      </div>

      <div className="container fc-hero__inner">
        <nav className="fc-hero__crumb" aria-label="Breadcrumb">
          <Link to="/">
            <Home size={13} strokeWidth={2.2} /> Home
          </Link>
          <span>/</span>
          <span>Family Connect</span>
        </nav>

        <motion.span
          className="eyebrow fc-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Family Engagement at Kayo International
        </motion.span>

        <motion.h1
          className="fc-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          Family Connect — Partnering with Parents for Your Child&rsquo;s Bright Future
        </motion.h1>

        <motion.p
          className="fc-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          There is a version of preschool where the gate closes at drop-off and the parent&rsquo;s
          knowledge of the day ends there. Kayo International was built as the refusal of that
          version. From our founding in 2013, one design principle has held across every campus:
          the family is inside the circle, always — informed daily, welcomed physically, and
          treated as the co-author of the child&rsquo;s growth.
        </motion.p>

        <motion.p
          className="fc-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: EASE }}
        >
          This matters doubly in Saravanampatti, where many of our parents spend their working
          hours at desks in the IT corridor, physically minutes away yet unable to drop in.
          Family Connect is our answer: a deliberate system of updates, events, and open channels
          that closes the distance between your workday and your child&rsquo;s school day.
        </motion.p>

        <motion.div
          className="fc-hero__highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: EASE }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <span className="fc-hero__chip" key={h.label} style={{ "--i": i }}>
              <h.icon size={16} strokeWidth={2} />
              {h.label}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="/#enquiry"
          className="btn btn-primary fc-hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: EASE }}
        >
          Book a Visit
        </motion.a>
      </div>

      <svg
        className="fc-hero__wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,110 1440,50 L1440,100 L0,100 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
