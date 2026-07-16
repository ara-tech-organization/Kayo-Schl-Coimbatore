import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, BookHeart, Briefcase, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./OurStory.css";
import ourStoryBg from "../../assets/About.png";

const MILESTONES = [
  {
    icon: Briefcase,
    text: "A journey from the IT industry into early childhood education, driven by purpose.",
  },
  {
    icon: BookHeart,
    text: "Qualified in Early Childhood Education (TESOL) and a Diploma in Child Psychology.",
  },
  {
    icon: Sparkles,
    text: "Creator of the proprietary NURTURE Lab Curriculum — Montessori meets STEM.",
  },
  {
    icon: BadgeCheck,
    text: "Built on values of quality, transparency and innovation with a co-founder in tech and business.",
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section className="our-story" id="our-story" ref={ref}>
      <div className="our-story__bg">
        <motion.img
          className="our-story__bg-image"
          src={ourStoryBg}
          alt="Happy children engaged in Montessori STEM learning activities at Kayo International Preschool Coimbatore"
          style={{ y: bgY }}
        />
        <span className="our-story__bg-overlay" aria-hidden="true" />
      </div>

      <div className="container our-story__grid">
        <div className="our-story__copy">
          <Reveal y={16}>
            <span className="eyebrow">How We Began</span>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <h2>Our Story — From Corporate World to Children&rsquo;s World</h2>
          </Reveal>

          <div className="our-story__prose">
            <Reveal y={18} delay={0.14}>
              <p>
                Veena Sundaramurthy founded Kayo International in 2013 after stepping away from a
                career in the IT industry to pursue her true calling in early childhood education.
                Holding an Early Childhood Education qualification from TESOL along with a Diploma
                in Child Psychology, she brought together academic training and personal passion to
                build a preschool where children grow with confidence, curiosity, and happiness.
              </p>
            </Reveal>
            <Reveal y={18} delay={0.2}>
              <p>
                Determined to offer the finest early learning experience possible, Veena designed
                the signature NURTURE Lab Curriculum, a blend of Montessori foundations with
                STEM-driven, play-centred learning. Her ongoing involvement in early education
                research and workshops keeps Kayo International aligned with the newest thinking in
                preschool pedagogy.
              </p>
            </Reveal>
            <Reveal y={18} delay={0.26}>
              <p>
                Alongside a co-founder whose background spans engineering and business, Kayo
                International stands on a foundation of quality, transparency, and forward-thinking
                innovation. Together, they&rsquo;ve built a learning space families trust to prepare
                their children for school and for life.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerGroup className="our-story__timeline">
          {MILESTONES.map((m) => (
            <StaggerItem key={m.text}>
              <div className="our-story__milestone">
                <span>
                  <m.icon size={18} strokeWidth={1.8} />
                </span>
                <p>{m.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
