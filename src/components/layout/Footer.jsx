import { NavLink } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/Logo.png";
import "./Footer.css";

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment"];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13.5 21V13.5H16l.6-3.3h-3.1V8.2c0-.9.5-1.8 2-1.8h1.4V3.7c-.3 0-1.5-.2-2.7-.2-2.7 0-4.6 1.6-4.6 4.6v2.1H6.8v3.3h2.8V21h3.9Z"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="currentColor" d="M10.2 9v6l5.2-3-5.2-3Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="6.2" cy="7" r="1.6" fill="currentColor" />
      <path
        fill="currentColor"
        d="M4.5 10.2h3.4V20H4.5v-9.8Zm5.6 0h3.3v1.4h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.2 4.2 5.1V20h-3.4v-4.5c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V20h-3.3v-9.8Z"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/kayoschools/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/kayoschools/", icon: InstagramIcon },
  { label: "YouTube", href: "http://youtube.com/@KayoInternational", icon: YouTubeIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kayo-international-school/",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Kayo International Preschool" className="footer__logo" />
          <p>
            A warm, nurturing home for children aged 6 months to 12 years in Saravanampatti,
            Coimbatore &mdash; trusted by 1,000+ families for over a decade.
          </p>
          <div className="footer__social">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <link.icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col footer__col--explore">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/curriculum">Curriculum</NavLink>
          <NavLink to="/services">Programmes</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>

        <div className="footer__col footer__col--programmes">
          <h4>Programmes</h4>
          {PROGRAMMES.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>

        <div className="footer__col footer__contact">
          <h4>Visit Us</h4>
          <span>
            <MapPin size={17} strokeWidth={1.8} />
            No.14, 1C Marutham Nagar, Saravanampatti, Coimbatore - 641035
          </span>
          <a href="tel:+919342699339">
            <Phone size={17} strokeWidth={1.8} />
            +91 93426 99339
          </a>
          <a href="mailto:cbesaravanampatti@kayointernational.in">
            <Mail size={17} strokeWidth={1.8} />
            cbesaravanampatti@kayointernational.in
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {new Date().getFullYear()} Kayo International Preschool &amp; DayCare. All rights reserved.</span>
          <span>Heart crafted by Ara Sisover Technology</span>
        </div>
      </div>
    </footer>
  );
}
