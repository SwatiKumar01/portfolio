
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";

    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={dark}
      onClick={() => setDark((previous) => !previous)}
    >
      {dark ? "Switch to light mode" : "Switch to dark mode"}
    </button>
  );
}
