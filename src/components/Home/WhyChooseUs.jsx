import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, Trees } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./WhyChooseUs.css";

const REASONS = [
  {
    icon: Award,
    title: "Ten-Plus Years of Proven Excellence",
    text: "Over ten years of shaping confident learners, backed by 20+ awards in early childhood education.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Backed by Research and Experts",
    text: "Our NURTURE lab programme blends Montessori and STEM thinking, designed by qualified early-years educators.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Safety and Transparency",
    text: "24/7 CCTV monitoring, trained staff, and regular SMS updates keep you connected to your child's day in a hygienic preschool environment.",
  },
  {
    icon: Trees,
    title: "Bright, Spacious Learning Spaces",
    text: "Bright classrooms, sandpits, splash pools, and dedicated play zones built for curious little explorers.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate, Experienced Educators",
    text: "Passionate teachers who treat every child as their own, nurturing confidence alongside curriculum.",
  },
  {
    icon: Sparkles,
    title: "Every Child's Growth, Holistically Nurtured",
    text: "From Multiple Intelligence Theory to theatre and STEM, we celebrate every child's unique strengths.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why" id="why-kayo">
      <div className="container">
        <SectionHeading
          eyebrow="Why Families Choose Us"
          title="Why is Kayo International the Preferred Preschool in Saravanampatti?"
          description="Only the best will do for your child's first school. Families across Saravanampatti, Sathy Road, Punnathur, Vilankurichi, Keeranatham, Kalapatti, Cheran Ma Nagar and Chinnavedampatti, within roughly 3 km, consistently choose Kayo International — here's why."
        />

        <StaggerGroup className="why__grid">
          {REASONS.map((reason, i) => (
            <StaggerItem key={reason.title} className={i % 2 === 1 ? "why__card--offset" : ""}>
              <div className="why__card">
                <span className={`why__icon why__icon--c${i % 3}`}>
                  <reason.icon strokeWidth={1.7} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
