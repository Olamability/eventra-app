import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const navLinks = [
  { label: "Browse", href: "/browse" },
  { label: "Categories", href: "/categories" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-[68px] items-center justify-between md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow transition-spring group-hover:scale-105 group-hover:rotate-3 md:h-10 md:w-10">
            <Calendar className="h-4 w-4 text-primary-foreground md:h-5 md:w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[1.2rem] font-bold tracking-tight md:text-[1.35rem]">
            {APP_NAME}<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-base ${
                isActive(link.href)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden rounded-full font-medium sm:inline-flex" asChild>
            <Link to="/signin">Sign in</Link>
          </Button>
          <Button size="sm" className="hidden rounded-full bg-foreground font-medium text-background shadow-soft hover:bg-foreground/90 sm:inline-flex" asChild>
            <Link to="/get-started">
              Get started
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-xs transition-base hover:bg-secondary md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="animate-slide-down border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-base ${
                  isActive(link.href)
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2 border-t border-border/50 pt-4">
              <Button variant="outline" size="sm" className="flex-1 rounded-full font-medium" asChild>
                <Link to="/signin">Sign in</Link>
              </Button>
              <Button size="sm" className="flex-1 rounded-full bg-foreground font-medium text-background hover:bg-foreground/90" asChild>
                <Link to="/get-started">Get started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
