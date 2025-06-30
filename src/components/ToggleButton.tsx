"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleTheme = () => {
    setDark(!dark);
    localStorage.setItem("theme", "dark");
  };
  return (
    <button
      onClick={() => handleTheme()}
      className="p-2 rounded-full"
      aria-label="Toggle Theme"
    >
      {dark === true ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600" />
      )}
    </button>
  );
};
export default ThemeToggle;
