import { motion } from "framer-motion";
import { Heart, Home, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import contactImg from "../../assets/contact.png";
import "./ContactHero.css";

const EASE = [0.16, 1, 0.3, 1];

const CHANNELS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 93426 99339",
    href: "tel:+919342699339",
    pos: "a",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    href: "https://wa.me/919342699339",
    pos: "b",
  },
  {
    icon: Mail,
    label: "Email",
    value: "cbesaravanampatti@kayointernational.in",
    href: "mailto:cbesaravanampatti@kayointernational.in",
    pos: "c",
  },
];

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__backdrop" aria-hidden="true">
        <span className="contact-hero__shape contact-hero__shape--dot" />
        <span className="contact-hero__shape contact-hero__shape--ring" />
        <span className="contact-hero__shape contact-hero__shape--star">
          <Sparkles size={20} strokeWidth={1.6} />
        </span>
      </div>

      <div className="container contact-hero__grid">
        <motion.div
          className="contact-hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <nav className="contact-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>

          <span className="eyebrow">We'd Love to Hear From You</span>

          <h1>Get in Touch With KAYO International, Coimbatore</h1>

          <p className="contact-hero__lead">
            Every enrollment at Kayo begins the same way: with a conversation and a walk through
            the campus. We would rather you ask twenty questions before joining than carry one
            doubt after — so bring your questions, your in-laws, and your toddler. All three are
            welcome.
          </p>

          <p className="contact-hero__lead">
            Reach us however suits you, a phone call, a WhatsApp message, an email, or the form
            below. During school hours, most enquiries hear back from us within a few hours; form
            submissions receive a call from our admissions counsellor within one working day.
          </p>

          <div className="contact-hero__tag">
            <Heart size={14} strokeWidth={2.4} /> Enrolment Open for 2026&ndash;27
          </div>
        </motion.div>

        <motion.div
          className="contact-hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <img
            src={contactImg}
            alt="Happy children at KAYO International Preschool, Saravanampatti"
            className="contact-hero__image"
          />

          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className={`contact-hero__channel contact-hero__channel--${c.pos}`}
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 + i * 0.12, ease: EASE },
                scale: { duration: 0.6, delay: 0.4 + i * 0.12, ease: EASE },
                y: { duration: 4.5 + i, delay: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.06, y: -6 }}
            >
              <span className="contact-hero__channel-icon">
                <c.icon size={18} strokeWidth={2} />
              </span>
              <span className="contact-hero__channel-text">
                <strong>{c.label}</strong>
                <small>{c.value}</small>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <svg
        className="contact-hero__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,28 L1440,60 L0,60 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
