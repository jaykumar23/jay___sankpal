"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `transition hover:text-purple-600 font-semibold ${
      pathname === path ? "text-purple-600" : "text-gray-800"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 bg-white/30 backdrop-blur-md shadow-md flex items-center justify-between">
      <Link href="/">
        <span className="text-2xl font-bold text-purple-600">
          Jaykumar<span className="text-gray-800 text-2xl font-bold">.</span>
        </span>
      </Link>
      <nav className="hidden md:flex gap-6 font-medium">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link href="/experience" className={linkClasses("/experience")}>
          Experience
        </Link>
        <Link href="/challenges" className={linkClasses("/challenges")}>
          Challenges
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="./contact" target="" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5 text-purple-600" />
        </Link>

        <button
          className="md:hidden text-gray-700 hover:text-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden px-6 py-4 flex flex-col space-y-3 font-medium rounded-b-2xl border-t-1 border-purple-400">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/about")}
          >
            About
          </Link>
          <Link
            href="/experience"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/experience")}
          >
            Experience
          </Link>
          <Link
            href="/challenges"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/challenges")}
          >
            Challenges
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
