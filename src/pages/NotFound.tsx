import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Page Not Found — ${APP_NAME}`;
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/50">
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

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="text-center animate-fade-in-up">
          <p className="font-display text-8xl font-bold text-primary/20 md:text-9xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-full bg-foreground font-semibold text-background hover:bg-foreground/90">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full font-medium">
              <Link to="/browse">Browse events</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
