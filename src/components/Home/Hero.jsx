import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import "./Hero.css";
import homeVideo from "../../assets/home.mp4";

const MARQUEE_ITEMS = [
  { icon: Award, label: "20+ Awards Received" },
  { icon: Users, label: "1,000+ Happy Families" },
  { icon: Sparkles, label: "10+ Years of Trust" },
  { icon: Star, label: "4.9★ Google Rating" },
  { icon: MapPin, label: "Saravanampatti, Coimbatore" },
  { icon: GraduationCap, label: "Montessori-Inspired Curriculum" },
];

export default function Hero() {
  const ref = useRef(null);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__wash" />
        <span className="hero__shape hero__shape--dot" />
        <span className="hero__shape hero__shape--ring" />
        <span className="hero__shape hero__shape--ring2" />
        <span className="hero__shape hero__shape--square" />
        <span className="hero__shape hero__shape--star">
          <Sparkles size={22} strokeWidth={1.6} />
        </span>
        <span className="hero__grain" />
      </div>

      <div className="hero__stage">
        <video className="hero__stage-video" src={homeVideo} autoPlay muted loop playsInline />
        <div className="hero__stage-overlay" />

        <div className="container hero__stage-content">
          <motion.span
            className="hero__tagline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Heart size={14} strokeWidth={2.4} /> Nurturing Bright Beginnings
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The <span className="hero__highlight">Best Preschool</span> in Saravanampatti —
            Nurturing Little Minds Since 2013
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Every child deserves the best start in life. At Kayo International Preschool and
            DayCare, we&rsquo;ve spent over a decade building a nurturing, engaging space where
            children aged 6 months to 12 years fall in love with learning. Conveniently situated in
            Saravanampatti, we&rsquo;re proud to be the preferred choice for over 1,000 families in
            Coimbatore who&rsquo;ve watched their little ones blossom into confident, curious
            learners.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#enquiry" className="btn btn-primary">
              Start Today <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919342699339"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a href="tel:+919342699339" className="hero__phone">
              <Phone size={16} /> +91 93426 99339
            </a>
          </motion.div>

          <motion.details
            className="hero__more"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <summary>Read our story</summary>
            <p className="hero__lead">
              Our founder, <strong>Veena Sundaramurthy</strong>, a TESOL Early Childhood Education
              graduate and Diploma holder in Child Psychology, envisioned a place where education
              goes beyond textbooks. Here, your child will explore, create, question, and flourish
              under the guidance of passionate, trained educators who treat every little one as
              their own.
            </p>
            <p className="hero__lead">
              Whether you&rsquo;re searching for the best preschool in Coimbatore, a top-rated
              preschool in Saravanampatti, or a Montessori preschool in Coimbatore with a genuine
              daycare option, Kayo International welcomes you with open arms.
            </p>
          </motion.details>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__stat">
              <span className="hero__stat-icon">
                <Star size={18} strokeWidth={2} />
              </span>
              <span>
                <strong>4.9★ Rating</strong>
                <span>on Google Reviews</span>
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-icon hero__stat-icon--secondary">
                <ShieldCheck size={18} strokeWidth={2} />
              </span>
              <span>
                <strong>Safe & Nurturing</strong>
                <span>CCTV monitored campus</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className="hero__marquee-item" key={i}>
              <item.icon size={16} strokeWidth={2} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <svg
        className="hero__wave"
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
