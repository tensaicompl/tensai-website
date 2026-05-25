"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolved: "light" | "dark";
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  resolved: "light",
  setTheme: () => {},
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") return getSystemTheme();
  return theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored && ["light", "dark", "system"].includes(stored)
      ? stored
      : "system";
    setThemeState(initial);
    setResolved(resolveTheme(initial));
  }, []);

  useEffect(() => {
    const r = resolveTheme(theme);
    setResolved(r);
    document.documentElement.setAttribute("data-theme", r);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const r = getSystemTheme();
        setResolved(r);
        document.documentElement.setAttribute("data-theme", r);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.setAttribute("data-theme-transition", "");
    setThemeState(t);
    setTimeout(() => {
      document.documentElement.removeAttribute("data-theme-transition");
    }, 350);
  }, []);

  const toggle = useCallback(() => {
    setTheme(resolved === "light" ? "dark" : "light");
  }, [resolved, setTheme]);

  return (
    <ThemeContext value={{ theme, resolved, setTheme, toggle }}>
      {children}
    </ThemeContext>
  );
}
