import { motion } from "framer-motion";
import { Home, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/1.png";
import "./CareersHero.css";

const EASE = [0.16, 1, 0.3, 1];

const BADGES = [
  { icon: Star, value: "4.9★", label: "Google Rating", top: "10%", left: "-8%", rotate: -6 },
  { icon: ShieldCheck, value: "10+", label: "Years Trusted", top: "72%", left: "58%", rotate: 5 },
];

export default function CareersHero() {
  return (
    <section className="cr-hero">
      <div className="container cr-hero__inner">
        <div className="cr-hero__visual" aria-hidden="true">
          <span className="cr-hero__frame-backing" />

          <div className="cr-hero__frame">
            <img src={heroImage} alt="" className="cr-hero__frame-img" />
            <span className="cr-hero__frame-tint" />
          </div>

          <span className="cr-hero__frame-tag">
            <Sparkles size={13} strokeWidth={2.2} />
            We're Hiring
          </span>

          {BADGES.map((b, i) => (
            <motion.div
              key={b.label}
              className="cr-hero__badge"
              style={{ top: b.top, left: b.left, "--badge-rotate": `${b.rotate}deg` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="cr-hero__badge-icon">
                <b.icon strokeWidth={1.8} />
              </span>
              <strong>{b.value}</strong>
              <span>{b.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="cr-hero__text">
          <nav className="cr-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </nav>

          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Join Team Kayo
          </motion.span>

          <motion.h1
            className="cr-hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          >
            Join Team Kayo — Meaningful Preschool Teaching Careers in Coimbatore
          </motion.h1>

          <motion.p
            className="cr-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
          >
            Coimbatore produces some of Tamil Nadu&rsquo;s finest teaching talent and too many of
            its preschools treat that talent as replaceable. Kayo International runs on the
            opposite conviction: the teacher is the curriculum&rsquo;s living edge, so investing
            in teachers is investing in children. If you have been hunting for early childhood
            educator roles in Saravanampatti or Montessori teaching positions anywhere in Kovai,
            read on.
          </motion.p>

          <motion.p
            className="cr-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: EASE }}
          >
            What working at our Saravanampatti campus actually looks like: structured induction
            into the NURTURE Lab curriculum before you ever lead a class; continuous training
            under founder-led academic direction; classrooms resourced properly so your energy
            goes into children, not improvisation; and a culture where educators are consulted,
            credited, and promoted from within.
          </motion.p>

          <motion.p
            className="cr-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26, ease: EASE }}
          >
            Whether you are a fresh Early Years graduate, an experienced Montessori practitioner,
            or a specialist in music, dance, sports, phonics, or art — there is a place on this
            team where your craft will be taken seriously. Apply below.
          </motion.p>

          <motion.div
            className="cr-hero__cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
          >
            <a href="#apply" className="btn btn-primary cr-hero__cta">
              Apply Now
            </a>
            <a href="#roles" className="btn btn-outline cr-hero__cta">
              View Open Roles
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
