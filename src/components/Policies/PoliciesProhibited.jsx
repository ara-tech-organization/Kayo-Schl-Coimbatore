import { ShieldAlert, Ban, VolumeX, Utensils, Lock, CameraOff } from "lucide-react";
import Reveal from "../common/Reveal";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./PoliciesProhibited.css";

const PROHIBITED = [
  { icon: Ban, text: "Physical punishment of any kind" },
  { icon: VolumeX, text: "Shouting or humiliation" },
  { icon: Utensils, text: "Force-feeding" },
  { icon: Lock, text: "Isolating a child as discipline" },
  { icon: CameraOff, text: "Photography or recording of children by anyone outside authorised staff" },
];

export default function PoliciesProhibited() {
  return (
    <section className="pol-prohibited">
      <div className="container pol-prohibited__inner">
        <Reveal className="pol-prohibited__panel" y={30}>
          <span className="pol-prohibited__badge">
            <ShieldAlert strokeWidth={1.8} />
          </span>

          <div className="pol-prohibited__copy">
            <span className="eyebrow pol-prohibited__eyebrow">What We Never Allow</span>
            <h2>Practices Prohibited</h2>
            <p>
              Certain lines at Kayo are absolute: no physical punishment, no shouting or
              humiliation, no force-feeding, no isolating a child as discipline, and no
              photography or recording of children by anyone outside our authorised staff.
              Violation by any team member triggers immediate disciplinary action — no warnings,
              no second interpretations.
            </p>
          </div>

          <StaggerGroup className="pol-prohibited__list">
            {PROHIBITED.map((item) => (
              <StaggerItem key={item.text} className="pol-prohibited__item">
                <span className="pol-prohibited__icon">
                  <item.icon size={18} strokeWidth={2} />
                </span>
                <span>{item.text}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
