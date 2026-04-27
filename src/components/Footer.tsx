import { Link } from "react-router-dom";
import { Calendar, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

const footerLinks = {
  Product: [
    { label: "Browse Events", href: "/browse" },
    { label: "Categories", href: "/categories" },
    { label: "Pricing", href: "/pricing" },
    { label: "Get Started", href: "/get-started" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-gradient-subtle">
    <div className="container py-16 md:py-20">
      {/* Top row */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="space-y-5">
          <Link to="/" className="group inline-flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow transition-spring group-hover:scale-105">
              <Calendar className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[1.2rem] font-bold tracking-tight">
              {APP_NAME}<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            The premier platform for discovering and hosting world-class events across Africa — from Lagos to Cape Town.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground shadow-xs transition-base hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <s.icon className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground transition-base hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} {APP_NAME} — Crafted with care in Africa.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
