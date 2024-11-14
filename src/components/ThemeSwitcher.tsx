"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <div className="fixed top-5 right-5">
      {currentTheme === "light" ? (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-slate-700 hover:text-slate-900"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-yellow-300 hover:text-yellow-400"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;