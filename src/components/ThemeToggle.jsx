import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark" || !storedTheme) {
    // default ke dark kalau belum ada theme
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  }
}, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 flex items-center justify-center",
        "hover:bg-accent focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Moon className="h-6 w-6 text-blue-500" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );

};
