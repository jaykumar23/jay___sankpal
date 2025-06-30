import React from "react";
import AboutMe from "@/components/AboutMe";
const AboutPage = () => {
  return (
    <div className="px-6 pt-24 md:px-20 md:pt-30">
      <section className="">
        <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
          About me<span className="text-purple-600">.</span>
        </h1>
        <p className="mt-8 text-gray-800 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600">
          Hey 👋, I am a Frontend Developer with a passion for building
          beautiful and functional user interfaces. I am a self-taught developer
          and I love to learn new things. I am a quick learner and I am always
          ready to take up new challenges. I have experience in working with
          HTML-5, CSS-3, VanillaJS, ReactJS, NextJS, TypeScript, Tailwind CSS
          and exploring new efficient technologies.
        </p>
      </section>
      <AboutMe />
    </div>
  );
};

export default AboutPage;
