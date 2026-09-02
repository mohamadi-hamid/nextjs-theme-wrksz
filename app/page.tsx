import { ThemeToggle } from "@/components/theme-toggle";
import { AppLogo } from "@/components/app-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 text-center">
        <AppLogo />
        <h1 className="text-5xl font-bold">Next.js Theme System</h1>

        <p className="text-muted-foreground">Dark mode with @wrksz/themes</p>

        <ThemeToggle />
      </div>
    </main>
  );
}
