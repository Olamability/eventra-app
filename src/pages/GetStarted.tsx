import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Eye, EyeOff, ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APP_NAME } from "@/lib/constants";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const GetStarted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = `Get Started — ${APP_NAME}`;
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background lg:grid lg:grid-cols-2">
        <BrandPanel />
        <div className="flex flex-col">
          <MobileHeader />
          <main className="flex flex-1 items-center justify-center px-6 py-14 lg:px-14">
            <div className="w-full max-w-sm text-center animate-fade-in-up">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground">You're in! 🎉</h1>
              <p className="mt-3 text-muted-foreground">
                Welcome to {APP_NAME},{" "}
                <span className="font-medium text-foreground">{name}</span>. Your account has been
                created successfully.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link to="/browse">
                  <Button
                    size="lg"
                    className="h-11 w-full rounded-full bg-foreground font-semibold text-background hover:bg-foreground/90"
                  >
                    Browse events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="h-11 w-full rounded-full font-medium">
                    Go to homepage
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-2">
      <BrandPanel />

      <div className="flex flex-col">
        <header className="border-b border-border/50 lg:border-none">
          <div className="container flex h-16 items-center justify-between lg:justify-end lg:px-14">
            <Link to="/" className="group flex items-center gap-2.5 lg:hidden">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow transition-spring group-hover:scale-105">
                <Calendar className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <span className="font-display text-[1.2rem] font-bold tracking-tight">
                {APP_NAME}<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-primary hover:underline transition-base">
                Sign in
              </Link>
            </p>
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center px-6 py-14 lg:px-14">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h1 className="font-display text-3xl font-bold text-foreground">Create your account</h1>
              <p className="mt-2 text-muted-foreground">
                Join 50,000+ attendees discovering Africa's best events.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full name
                </Label>
                <Input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Amara Osei"
                  className={`h-11 rounded-xl border-border/80 bg-card transition-base focus:border-primary ${
                    errors.name ? "border-destructive focus:border-destructive" : ""
                  }`}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  className={`h-11 rounded-xl border-border/80 bg-card transition-base focus:border-primary ${
                    errors.email ? "border-destructive focus:border-destructive" : ""
                  }`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    placeholder="At least 8 characters"
                    className={`h-11 rounded-xl border-border/80 bg-card pr-10 transition-base focus:border-primary ${
                      errors.password ? "border-destructive focus:border-destructive" : ""
                    }`}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-base hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-xs text-destructive">
                    {errors.password}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-11 w-full rounded-full bg-foreground font-semibold text-background transition-base hover:bg-foreground/90 active:scale-95 disabled:opacity-60"
              >
                {loading ? (
                  "Creating account…"
                ) : (
                  <>
                    Create account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="mt-8 text-center text-xs text-muted-foreground">
              By creating an account, you agree to our{" "}
              <a href="#" className="underline hover:text-foreground transition-base">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-foreground transition-base">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

const benefits = [
  "Browse & save unlimited events",
  "Early-access to exclusive tickets",
  "Host up to 3 events per month",
  "Attendee analytics dashboard",
];

/** Brand panel shown on large screens */
const BrandPanel = () => (
  <div className="relative hidden overflow-hidden bg-foreground lg:flex lg:flex-col lg:justify-between lg:p-14">
    <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    <Link to="/" className="relative z-10 inline-flex items-center gap-2.5 group">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-background/15 transition-spring group-hover:scale-105">
        <Calendar className="h-5 w-5 text-background" strokeWidth={2.5} />
      </span>
      <span className="font-display text-[1.3rem] font-bold tracking-tight text-background">
        {APP_NAME}<span className="text-primary">.</span>
      </span>
    </Link>

    <div className="relative z-10 my-auto space-y-8">
      <div>
        <p className="font-display text-3xl font-bold leading-snug text-background text-balance">
          Everything you need to discover and host world-class events.
        </p>
        <p className="mt-4 text-base text-background/60">
          Join thousands of organizers and attendees already on {APP_NAME}.
        </p>
      </div>
      <ul className="space-y-3">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Check className="h-3 w-3 text-primary" strokeWidth={3} />
            </span>
            <span className="text-sm text-background/80">{b}</span>
          </li>
        ))}
      </ul>
    </div>

    <p className="relative z-10 text-xs text-background/40">
      © {new Date().getFullYear()} {APP_NAME}
    </p>
  </div>
);

/** Mobile header showing logo only — rendered in the success state */
const MobileHeader = () => (
  <header className="border-b border-border/50 lg:hidden">
    <div className="container flex h-16 items-center">
      <Link to="/" className="group flex items-center gap-2.5">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow transition-spring group-hover:scale-105">
          <Calendar className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
        </span>
        <span className="font-display text-[1.2rem] font-bold tracking-tight">
          {APP_NAME}<span className="text-primary">.</span>
        </span>
      </Link>
    </div>
  </header>
);

export default GetStarted;
