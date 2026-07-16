import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./CurriculumHero.css";

const EASE = [0.16, 1, 0.3, 1];

const LETTERS = [
  { letter: "N", word: "Nurturing" },
  { letter: "U", word: "Unique" },
  { letter: "R", word: "Resources" },
  { letter: "T", word: "Through" },
  { letter: "U", word: "Understanding" },
  { letter: "R", word: "Respect &" },
  { letter: "E", word: "Exploration" },
];

export default function CurriculumHero() {
  const [active, setActive] = useState(null);

  return (
    <section className="curr-hero">
      <div className="curr-hero__backdrop" aria-hidden="true">
        <span className="curr-hero__blob curr-hero__blob--a" />
        <span className="curr-hero__blob curr-hero__blob--b" />
      </div>

      <div className="container curr-hero__inner">
        <nav className="curr-hero__crumb" aria-label="Breadcrumb">
          <Link to="/">
            <Home size={13} strokeWidth={2.2} /> Home
          </Link>
          <span>/</span>
          <span>Curriculum</span>
        </nav>

        <motion.span
          className="eyebrow curr-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Sparkles size={14} strokeWidth={2.2} /> The NURTURE Lab Curriculum
        </motion.span>

        <motion.h1
          className="curr-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          <span className="curr-hero__title-prefix">NURTURE Lab Curriculum:</span> Where Montessori
          Meets STEM in Coimbatore
        </motion.h1>

        <motion.p
          className="curr-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          At KAYO International, we believe every child arrives with remarkable potential waiting
          to be unlocked. Our NURTURE Lab curriculum brings together Montessori methodology, STEM
          education, play-based learning, and Howard Gardner&rsquo;s Multiple Intelligence Theory
          into one thoughtfully crafted approach designed to bring out that potential from the
          very start. Serving families across Saravanampatti, Kalapatti, Thudiyalur, and
          Ganapathy, we&rsquo;ve spent over a decade perfecting a preschool curriculum that goes
          beyond preparing children for primary school, it builds a genuine, lasting love of
          learning.
        </motion.p>

        <motion.p
          className="curr-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
        >
          Developed under the expert direction of our founder Veena Sundaramurthy, a qualified
          professional in Early Childhood Education and Child Psychology, our curriculum starts
          from the understanding that every child learns differently. That&rsquo;s why we&rsquo;ve
          shaped a curriculum that bends to fit your child&rsquo;s individual learning style,
          rather than asking your child to fit into a rigid mold.
        </motion.p>

        <motion.p
          className="curr-hero__lead curr-hero__name-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease: EASE }}
        >
          The name NURTURE captures our guiding philosophy:
        </motion.p>

        <motion.div
          className="curr-hero__letters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
        >
          {LETTERS.map((l, i) => (
            <button
              type="button"
              key={`${l.letter}-${i}`}
              className={`curr-hero__letter ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
            >
              <span className="curr-hero__letter-glyph">{l.letter}</span>
              <span className="curr-hero__letter-word">{l.word}</span>
            </button>
          ))}
        </motion.div>
        <p className="curr-hero__letters-caption">
          Nurturing Unique Resources Through Understanding, Respect &amp; Exploration
        </p>
      </div>
    </section>
  );
}
