import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const Actions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-6 md:px-20">
      <Link
        href="/contact"
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold transition duration-300"
      >
        Get In Touch
      </Link>
      <a
        href="https://drive.google.com/file/d/1ytedWYNuWiIYjXR7Z5MKS2wqOXAPDgfC/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-transparent border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white flex items-center gap-2 font-bold transition duration-300"
      >
        <Download size={20} /> Download CV
      </a>
    </div>
  );
};
export default Actions;
