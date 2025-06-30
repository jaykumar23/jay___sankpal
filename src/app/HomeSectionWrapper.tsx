"use client";

import { usePathname } from "next/navigation";
import AboutPage from "@/app/about/page";
import ExperiencePage from "@/app/experience/page";
import ChallengesPage from "@/app/challenges/page";

const HomeSectionsWrapper = () => {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <>
      <AboutPage />
      <ExperiencePage />
      <ChallengesPage />
    </>
  );
};

export default HomeSectionsWrapper;
