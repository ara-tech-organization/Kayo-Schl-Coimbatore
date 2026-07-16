import { Quote, Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Kayo International is truly the best preschool in Saravanampatti. My daughter has grown from a shy toddler into a confident, chatty little girl. The teachers are so caring, and the daily updates give me such peace of mind.",
    source: "Parent, Google Review",
  },
  {
    quote:
      "We joined the daycare programme when our son was just 10 months old. The staff treated him like family. The CCTV access and constant updates made it so much easier to focus on work. I highly recommend this daycare in Coimbatore!",
    source: "Parent, Justdial Review",
  },
  {
    quote:
      "The NURTURE Lab curriculum is genuinely one of a kind. My child comes home excited about something new every day, whether it's a science experiment, a theatre act, or a new song. Kayo has built the foundation for a lifetime of learning.",
    source: "Parent, Facebook Review",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <SectionHeading eyebrow="Parent Voices" title="What Parents Say About Kayo International" />

        <Reveal delay={0.05} y={30}>
          <div className="testimonials__rail">
            {TESTIMONIALS.map((t) => (
              <div className="testimonials__card" key={t.source}>
                <Quote className="testimonials__quote-icon" strokeWidth={1.5} />
                <div className="testimonials__stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <span className="testimonials__source">&mdash; {t.source}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
