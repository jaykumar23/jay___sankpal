"use client";

import { useProtfolioUtils } from "@/utils/portfolio.utils";
import React from "react";

const ChallengesPage = () => {
  const { challenges } = useProtfolioUtils();

  return (
    <div className="px-6 pt-24 md:px-20 md:pt-30 pb-30">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        My <span className="text-purple-600">Challenges</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white shadow-lg border border-purple-200 hover:shadow-xl transition rounded-2xl p-6 flex flex-col justify-between h-[150px]"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {challenge.name}
            </h2>

            <div className="flex gap-4">
              <a
                href={challenge.codeLink}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                target="_blank"
              >
                {"</>"} Code
              </a>
              <a
                href={challenge.liveLink}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                target="_blank"
              >
                🔗 Live
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <span className="text-gray-500 italic text-lg">
          ...and many more coming soon 🚀
        </span>
      </div>
    </div>
  );
};
export default ChallengesPage;
