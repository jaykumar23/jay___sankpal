"use client";

import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 group"
      aria-label="Scroll to top"
    >
      <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 rotate-320" />
    </button>
  ) : null;
};
export default ScrollToTopButton;
