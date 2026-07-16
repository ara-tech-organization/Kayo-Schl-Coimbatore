import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, ChevronRight, Home as HomeIcon, PenTool, PuzzleIcon, Rocket } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import "./Programmes.css";
import playgroupImg from "../../assets/Play group.png";
import nurseryImg from "../../assets/Nursery.png";
import lkgImg from "../../assets/LKG.png";
import ukgImg from "../../assets/UKG.png";
import primaryImg from "../../assets/Primary.png";
import dayCareImg from "../../assets/Day Care.png";

const PROGRAMMES = [
  {
    icon: PuzzleIcon,
    tone: "primary",
    age: "1.5 to 3 Years",
    title: "Playgroup",
    image: playgroupImg,
    text: "Our nurturing playgroup in Coimbatore introduces toddlers to a structured, joyful setting. Through sensory play, music, movement, and social interaction, your little one builds confidence, language, and early thinking skills, all while feeling safe and loved.",
  },
  {
    icon: PenTool,
    tone: "secondary",
    age: "3 to 4 Years",
    title: "Nursery",
    image: nurseryImg,
    text: "Children at our nursery school in Coimbatore progress into structured Montessori-based learning, building practical life skills, early numeracy, pre-writing, and language development as the foundation of this transformative year.",
  },
  {
    icon: BookOpenCheck,
    tone: "gold",
    age: "4 to 5 Years",
    title: "LKG",
    image: lkgImg,
    text: "Our LKG programme builds literacy and numeracy through hands-on, play-based learning, helping children explore science concepts, build fine motor skills, and gain social confidence for formal schooling.",
  },
  {
    icon: Rocket,
    tone: "orange",
    age: "5 to 6 Years",
    title: "UKG",
    image: ukgImg,
    text: "This final preschool year prepares children fully for primary school, focusing on reading fluency, mathematical reasoning, scientific curiosity, and independent learning.",
  },
  {
    icon: PuzzleIcon,
    tone: "primary",
    age: "6 to 12 Years",
    title: "Primary Enrichment Programme",
    image: primaryImg,
    text: "Learning stays alive beyond the classroom through activity-based sessions, critical thinking, and creative projects that build communication, digital literacy, and problem-solving skills.",
  },
  {
    icon: HomeIcon,
    tone: "secondary",
    age: "6 Months Onwards",
    title: "Day Care",
    image: dayCareImg,
    text: "Our Montessori daycare in Saravanampatti offers a safe, home-away-from-home for babies as young as 6 months, with caring attendants, age-appropriate activities, nutritious meals, and restful nap times while parents are at work.",
  },
];

export default function Programmes() {
  const [active, setActive] = useState(0);
  const current = PROGRAMMES[active];

  return (
    <section className="programmes" id="programmes">
      <div className="container">
        <SectionHeading
          eyebrow="Early Learning Pathways"
          title="Our Programmes — Early Learning Pathways for Every Age"
          description="At Kayo International, we believe every child learns differently, which is why we've built a complete range of experiential learning programmes to nurture your child at every stage."
        />

        <div className="programmes__panel">
          <ul className="programmes__tabs">
            {PROGRAMMES.map((p, i) => (
              <li key={p.title}>
                <button
                  type="button"
                  className={`programmes__tab ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={`programmes__tab-icon programmes__tab-icon--${p.tone}`}>
                    <p.icon strokeWidth={1.7} />
                  </span>
                  <span className="programmes__tab-text">
                    <strong>{p.title}</strong>
                    <span>{p.age}</span>
                  </span>
                  <ChevronRight className="programmes__tab-chevron" size={18} />
                </button>
              </li>
            ))}
          </ul>

          <div className="programmes__stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className="programmes__showcase"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="programmes__showcase-visual">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="programmes__showcase-img"
                  />
                </div>
                <div className="programmes__showcase-body">
                  <span className="programmes__age">{current.age}</span>
                  <h3>{current.title}</h3>
                  <p>{current.text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
