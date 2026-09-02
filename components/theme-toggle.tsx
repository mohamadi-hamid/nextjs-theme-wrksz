"use client";

import { useTheme } from "@wrksz/themes/client";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        rounded-full
        border
        p-3
        transition
        hover:bg-muted
      "
      aria-label="Theme toggle"
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
