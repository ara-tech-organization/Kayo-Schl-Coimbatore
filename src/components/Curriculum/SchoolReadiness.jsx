import {
  Dumbbell,
  FlaskConical,
  Globe2,
  Palette,
  Puzzle,
  BookOpen,
  Brain,
  Flower2,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./SchoolReadiness.css";

const READINESS = [
  {
    icon: Globe2,
    title: "Cross-Cultural Programs",
    text: "Children discover traditions, languages, and festivals from around the world, developing empathy, respect for diversity, and the adaptability to thrive in a global society. Through cultural stories, songs, and celebrations, they build open-mindedness alongside pride in their own heritage.",
    tone: "primary",
    size: "lg",
  },
  {
    icon: Brain,
    title: "Cognitive Activities",
    text: "Structured games and challenges support cognitive development by strengthening memory, attention, and reasoning, the essential mental building blocks for all future learning. Children develop focus, pattern recognition, and flexible thinking through engaging, hands-on tasks.",
    tone: "secondary",
  },
  {
    icon: Puzzle,
    title: "Logical Thinking",
    text: "Pattern games, sequencing, and problem-solving tasks build structured reasoning and analytical thinking. Children learn to break challenges into steps, weigh options, and think with clarity and confidence.",
    tone: "gold",
  },
  {
    icon: Palette,
    title: "Arty Crafty",
    text: "Open-ended art and craft projects strengthen fine motor skills, creative confidence, and self-expression. Children explore colours, textures, and techniques while building patience and pride in what they create.",
    tone: "orange",
  },
  {
    icon: Flower2,
    title: "Yoga",
    text: "Breathwork, poses, and mindful movement build physical strength, emotional balance, and focus. Children learn to regulate their energy, manage emotions, and develop body awareness and self-confidence.",
    tone: "secondary",
  },
  {
    icon: Dumbbell,
    title: "Kayo Sports",
    text: "Active play and team games build gross motor skills, coordination, and healthy lifestyle habits. Children develop teamwork, discipline, and sportsmanship while gaining confidence through physical challenge.",
    tone: "gold",
  },
  {
    icon: FlaskConical,
    title: "STEM Activity",
    text: "Hands-on experiments and building challenges spark curiosity and build scientific inquiry, engineering thinking, and problem-solving. Children learn to question, test, and innovate through real-world exploration.",
    tone: "orange",
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    text: "Rich narratives expand vocabulary, imagination, and listening skills while building emotional intelligence. Children connect with characters and cultures, developing empathy and the narrative thinking that supports literacy.",
    tone: "primary",
    size: "full",
  },
];

export default function SchoolReadiness() {
  return (
    <section className="readiness" id="readiness">
      <div className="container">
        <Reveal y={16} className="readiness__intro">
          <p>
            One of the questions parents ask us most often is whether their child will be ready
            for &ldquo;big school.&rdquo; The NURTURE Lab curriculum is built to answer that
            question fully.
          </p>
        </Reveal>

        <SectionHeading
          eyebrow="Ready for Big School"
          title="How Our Curriculum Prepares Children for School"
          description="School readiness isn't just about recognising letters and numbers, it's about the confidence, social skills, emotional regulation, curiosity, and love of learning that make academic success possible."
        />

        <p className="readiness__lead-in">Our curriculum builds school readiness through:</p>

        <div className="readiness__bento">
          {READINESS.map((r, i) => (
            <Reveal
              as="div"
              y={24}
              delay={0.06 * (i % 4)}
              key={r.title}
              className={`readiness__card readiness__card--${r.tone} ${
                r.size ? `readiness__card--${r.size}` : ""
              }`}
            >
              <span className="readiness__icon">
                <r.icon strokeWidth={1.6} />
              </span>
              <div className="readiness__card-body">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal y={20} delay={0.15} className="readiness__closing">
          <p>
            Graduates of KAYO International step into primary school not only academically ready,
            but as confident, curious, well-rounded children who truly enjoy learning. That&rsquo;s
            the difference a thoughtfully built curriculum makes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
