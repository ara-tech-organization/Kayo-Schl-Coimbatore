import { Phone, MapPin, Users2 } from "lucide-react";
import Reveal from "../common/Reveal";
import "./PoliciesCTA.css";

export default function PoliciesCTA() {
  return (
    <section className="pol-cta" id="policies-cta">
      <div className="container pol-cta__grid">
        <Reveal x={-30} y={0} className="pol-cta__intro">
          <span className="eyebrow">We Are Here to Help</span>
          <h2>Have Questions About Our Policies?</h2>
          <p>
            Policies on a page answer the general question; your child is a specific one. If
            anything here needs clarifying — or your family&rsquo;s situation needs a conversation
            rather than a paragraph — call us, or better, come to Marutham Nagar and see these
            standards operating in real time. Watching a Kayo pickup verification or a mid-morning
            handwash routine tells you more than any website can.
          </p>

          <a href="tel:+919342699339" className="btn btn-primary pol-cta__call">
            <Phone size={17} strokeWidth={2.2} /> Call Now
          </a>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="pol-cta__card-wrap">
          <div className="pol-cta__card">
            <span className="pol-cta__card-icon">
              <Users2 strokeWidth={1.7} />
            </span>
            <h3>Visit Our Campus</h3>
            <p className="pol-cta__card-text">
              Meet our founder and educators, tour our classrooms and play areas, and experience
              our safety policies in action.
            </p>

            <div className="pol-cta__point">
              <span>
                <MapPin strokeWidth={1.8} />
              </span>
              <div>
                <strong>No.14, 1C Marutham Nagar, Saravanampatti, Coimbatore - 641035</strong>
                <p>Open for guided visits every day</p>
              </div>
            </div>

            <a href="tel:+919342699339" className="pol-cta__phone">
              <Phone size={16} strokeWidth={2} />
              <span>
                Prefer to speak with us directly? Call <strong>+91 93426 99339</strong>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
