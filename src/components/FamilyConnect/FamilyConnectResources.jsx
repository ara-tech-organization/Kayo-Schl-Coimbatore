import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing,
  BookOpen,
  DoorOpen,
  HeartPulse,
  MessageSquareWarning,
  Plus,
  Smile,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FamilyConnectResources.css";

const POLICIES = [
  {
    icon: DoorOpen,
    title: "Settling-in Policy",
    text: "New children are eased in gradually, with a parent present in the early days, so the first memory of school is comfort rather than tears.",
  },
  {
    icon: HeartPulse,
    title: "Health Policy",
    text: "The full hygiene protocol — sanitisation routines, illness handling, handwashing discipline, and first-aid readiness — written down and followed.",
  },
  {
    icon: UserCheck,
    title: "Children Collection Policy",
    text: "Exactly who may collect your child, how identity is verified, and why we never make exceptions.",
  },
  {
    icon: MessageSquareWarning,
    title: "Comments & Complaints",
    text: "How to raise a concern, and our commitment to a resolution within 5 working days.",
  },
  {
    icon: Smile,
    title: "Behaviour Management",
    text: "The positive-guidance approach our educators use, and the practices we prohibit outright.",
  },
];

export default function FamilyConnectResources() {
  const [open, setOpen] = useState(0);

  return (
    <section className="fc-resources" id="resources">
      <div className="container">
        <SectionHeading
          eyebrow="Information at Your Fingertips"
          title="Parent Resources"
          description={
            <>
              Nothing about how we run is hidden. Our{" "}
              <Link to="/policies" className="fc-resources__policy-link">
                Kayo Policies page
              </Link>{" "}
              spells out the rules we hold ourselves to, and we ask every family to read them
              before enrolment.
            </>
          }
        />

        <div className="fc-resources__grid">
          <div className="fc-resources__accordion">
            {POLICIES.map((p, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={p.title} delay={0.05 * i} y={20}>
                  <div className={`fc-resources__item ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="fc-resources__question"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="fc-resources__q-icon">
                        <p.icon strokeWidth={1.7} />
                      </span>
                      <span className="fc-resources__q-label">{p.title}</span>
                      <span className="fc-resources__toggle">
                        <Plus size={18} strokeWidth={2.2} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="fc-resources__answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="fc-resources__answer">{p.text}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="fc-resources__side">
            <Reveal y={24} className="fc-resources__note fc-resources__note--handbook">
              <span className="fc-resources__note-icon">
                <BookOpen strokeWidth={1.6} />
              </span>
              <h3>Parent Handbook</h3>
              <p>
                On enrolment, every family receives the complete handbook: daily schedules,
                uniform and meal guidelines, celebration norms, emergency procedures — the entire
                operating manual of your child&rsquo;s school life in one place.
              </p>
            </Reveal>

            <Reveal y={24} delay={0.1} className="fc-resources__note fc-resources__note--updates">
              <span className="fc-resources__note-icon">
                <BellRing strokeWidth={1.6} />
              </span>
              <h3>Regular Updates on Policy Changes</h3>
              <p>
                When anything material changes — curriculum, policy, procedure — you hear it from
                us first, through official channels, with room to ask questions. No surprises
                discovered at the gate.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
