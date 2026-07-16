import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Quote, Rocket } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import "./Founders.css";
import veenaImg from "../../assets/Veena.png";
import sankaraImg from "../../assets/Sankara.png";

const EASE = [0.16, 1, 0.3, 1];

const FOUNDERS = [
  {
    name: "Veena Sundaramurthy",
    role: "Founder & Director, M.A.",
    icon: GraduationCap,
    tone: "secondary",
    image: veenaImg,
    alt: "Veena Sundaramurthy, founder of Kayo International Preschool, with children in classroom at Saravanampatti Coimbatore centre",
    tags: ["Early Childhood Education", "Child Psychology", "NURTURE Lab Curriculum"],
    quote:
      "Every child deserves a nurturing space to feel secure, inspired, and supported in reaching their full potential.",
    bio: [
      "Veena Sundaramurthy, M.A., serves as Founder and Director of Kayo International, with more than ten years dedicated to early childhood education. Her background in Early Childhood Education and Child Psychology, combined with her authorship of the NURTURE Lab Curriculum, showcases her deep commitment to raising well-rounded children.",
      "Blending sharp analytical instincts honed in the corporate world with a genuine love for teaching, Veena has personally shaped every part of Kayo International, from how the curriculum is built and teachers are trained, to how each classroom feels safe, engaging, and centred on the child.",
      "As an educator, curriculum creator, and mother, Veena holds firmly to the belief that every child deserves a nurturing space to feel secure, inspired, and supported in reaching their full potential. This belief remains the guiding force behind Kayo International's approach to early learning.",
    ],
  },
  {
    name: "Sankara K",
    role: "Co-Founder",
    icon: Rocket,
    tone: "secondary",
    image: sankaraImg,
    alt: "Sankara K, co-founder of Kayo International Preschool",
    tags: ["Bits Pilani", "EdTech Strategy", "Growth & Operations"],
    quote:
      "My time at Bits Pilani ignited a mission that's stayed with me ever since: bringing technology and education together to rethink how schools can grow and succeed.",
    bio: [
      "My time at Bits Pilani ignited a mission that's stayed with me ever since: bringing technology and education together to rethink how schools can grow and succeed. That spark of curiosity is still what drives me forward each day.",
      "Most of my time goes into designing and refining ambitious, future-focused education solutions that help schools succeed, not only in the classroom, but as sustainable businesses. A key part of that work involves exploring new opportunities, studying markets, tracking emerging trends, and staying ahead of shifts across the industry.",
      "At its core, my job comes down to one thing: partnering with school leaders and helping them dream bigger. Whether it's solving a difficult strategic challenge or charting the next stage of growth, I'm there to help turn big ambitions into reality.",
    ],
  },
];

export default function Founders() {
  const [active, setActive] = useState(0);

  return (
    <section className="founders" id="founders">
      <div className="founders__bg" aria-hidden="true">
        <span className="founders__shape founders__shape--a" />
        <span className="founders__shape founders__shape--c" />
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="The People Behind Kayo"
          title="Meet Our Founders"
          description="Two complementary journeys — one rooted in early childhood education, the other in technology and strategy — brought together to build a preschool families trust."
        />

        <div className="founders__tabs" role="tablist" aria-label="Our founders">
          {FOUNDERS.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`founders__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <f.icon size={16} strokeWidth={2} />
              {f.name}
            </button>
          ))}
        </div>

        <div className="founders__stage">
          <div className="founders__deck">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                className="founders__panel"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 12 }}
                transition={{ duration: 0.4, ease: EASE }}
                aria-hidden={active !== i}
                style={{ pointerEvents: active === i ? "auto" : "none", zIndex: active === i ? 1 : 0 }}
              >
                <div className="founders__art">
                  <img src={f.image} alt={f.alt || f.name} className="founders__art-img" />
                  <span className="founders__role-chip">
                    <f.icon size={15} strokeWidth={2} />
                    {f.role}
                  </span>
                </div>

                <div className="founders__copy">
                  <h2 className="founders__name">
                    <span className="sr-only">Meet Our Founders — </span>
                    {f.name}
                  </h2>
                  <p className="founders__role">{f.role}</p>

                  <div className="founders__tags">
                    {f.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="founders__quote">
                    <Quote size={22} strokeWidth={2} aria-hidden="true" />
                    <p>&ldquo;{f.quote}&rdquo;</p>
                  </div>

                  {f.bio.map((para) => (
                    <p className="founders__bio" key={para.slice(0, 24)}>
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="founders__dots" aria-hidden="true">
            {FOUNDERS.map((f, i) => (
              <span key={f.name} className={active === i ? "is-active" : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
