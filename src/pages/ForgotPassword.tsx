import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ArrowLeft, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { APP_NAME } from "@/lib/constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = `Reset Password — ${APP_NAME}`;
  }, []);

  const validateEmail = (value: string): string => {
    if (!value.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-2">
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
          <blockquote className="space-y-3">
            <p className="font-display text-3xl font-bold leading-snug text-background text-balance">
              "Discover events that move the continent."
            </p>
            <footer className="text-sm text-background/60">— {APP_NAME}</footer>
          </blockquote>

          <div className="flex flex-wrap gap-3">
            {[
              { value: "200+", label: "Curated events" },
              { value: "12", label: "Countries" },
              { value: "50k+", label: "Attendees" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-full border border-background/20 bg-background/10 px-4 py-2 backdrop-blur"
              >
                <span className="font-display text-sm font-bold text-background">{s.value} </span>
                <span className="text-xs text-background/60">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-xs text-background/40">
          © {new Date().getFullYear()} {APP_NAME}
        </p>
      </div>

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
              Remember your password?{" "}
              <Link to="/signin" className="font-medium text-primary hover:underline transition-base">
                Sign in
              </Link>
            </p>
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center px-6 py-14 lg:px-14">
          <div className="w-full max-w-sm">
            {submitted ? (
              <div className="space-y-6 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MailCheck className="h-8 w-8 text-primary" />
                </span>
                <div className="space-y-2">
                  <h1 className="font-display text-2xl font-bold text-foreground">Check your inbox</h1>
                  <p className="text-sm text-muted-foreground">
                    If an account exists, a password reset link has been sent to your email.
                  </p>
                </div>
                <Link
                  to="/signin"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-base"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to Sign In
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="font-display text-3xl font-bold text-foreground">Reset your password</h1>
                  <p className="mt-2 text-muted-foreground">
                    Enter the email address linked to your account and we'll send you a reset link.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                        if (emailError) setEmailError("");
                      }}
                      placeholder="you@example.com"
                      className={`h-11 rounded-xl border-border/80 bg-card transition-base focus:border-primary ${
                        emailError ? "border-destructive focus:border-destructive" : ""
                      }`}
                      aria-describedby={emailError ? "email-error" : undefined}
                    />
                    {emailError && (
                      <p id="email-error" className="text-xs text-destructive">
                        {emailError}
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
                      "Sending…"
                    ) : (
                      <>
                        Send Reset Link
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    to="/signin"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-base"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Sign In
                  </Link>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;
