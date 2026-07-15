import { BookOpenCheck, GraduationCap, RefreshCcw, ShieldCheck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import Reveal from "../common/Reveal";
import ArtPanel from "../common/ArtPanel";
import "./OurTeam.css";

const QUALITIES = [
  {
    icon: GraduationCap,
    title: "Bachelor's Qualified",
    text: "Every teacher holds a Bachelor's degree in Early Years Education or an equivalent professional qualification.",
  },
  {
    icon: BookOpenCheck,
    title: "Child Development Focused",
    text: "A deep understanding of child development, learning psychology, and age-appropriate teaching methodologies.",
  },
  {
    icon: RefreshCcw,
    title: "Continuously Trained",
    text: "Regular participation in training sessions and workshops to stay updated with the latest research.",
  },
  {
    icon: ShieldCheck,
    title: "Truly Invested",
    text: "Educators who are genuinely invested in your child's success, sharing Veena's passion for early learning.",
  },
];

export default function OurTeam() {
  return (
    <section className="our-team" id="our-team">
      <div className="container our-team__grid">
        <div className="our-team__copy">
          <SectionHeading
            align="left"
            eyebrow="Qualified, Caring, Committed"
            title="Our Team"
            description="A preschool is only as good as its educators. At Kayo International, we take immense pride in our team of dedicated teachers and caregivers who share Veena's passion for early childhood development."
          />

          <Reveal y={16} delay={0.1}>
            <p className="our-team__note">
              When you choose Kayo, you are choosing a preschool with qualified teachers in
              Chennai who are truly invested in your child&rsquo;s success.
            </p>
          </Reveal>

          <StaggerGroup className="our-team__grid-cards">
            {QUALITIES.map((q) => (
              <StaggerItem key={q.title}>
                <div className="our-team__card">
                  <span className="our-team__icon">
                    <q.icon strokeWidth={1.7} />
                  </span>
                  <h3>{q.title}</h3>
                  <p>{q.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal x={30} y={0} delay={0.15} className="our-team__art">
          <ArtPanel tone="gold" icon={GraduationCap} label="Our Qualified Educators" pop />
        </Reveal>
      </div>
    </section>
  );
}
