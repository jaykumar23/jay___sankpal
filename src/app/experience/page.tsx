import Link from "next/link";
import React from "react";

const ExperiencePage = () => {
  return (
    <section className="px-6 pt-24 md:px-20 md:pt-30 pb-20">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
        Experience<span className="text-purple-600">.</span>
      </h1>
      <div className="mt-8 px-2 flex flex-col md:flex-row items-start">
        {/* Company Name */}
        <div className="w-full md:w-[30%]">
          <Link
            href="https://www.linkedin.com/company/jioplatforms/?originalSubdomain=in"
            target="_blank"
            className="text-3xl border-l-4 border-purple-600 px-3 leading-[55px] text-purple-600"
          >
            Jio Platforms Limited
          </Link>
        </div>
        <div className="w-full md:w-[70%] p-2 rounded-lg">
          <h3 className="text-2xl font-bold">
            Front-end Developer{" "}
            <span className="text-purple-600">@ Jio Platforms Limited </span>
          </h3>
          <p className="text-gray-600">Augest 2023 - Present</p>
          <ul className="mt-4 space-y-3 text-gray-700 lg:text-[20px]">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Contributed as a Frontend Developer for JioMeet+, a robust chat
              and collaboration platform.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✔</span>
              <div className="text-gray-800">
                <p className="font-medium">
                  Developed and implemented key features including:
                </p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>
                    Contacts support and call history sections (missed,
                    incoming, outgoing)
                  </li>
                  <li>
                    Chat pinning, meeting recaps, and AI transcription view
                  </li>
                  <li>
                    AI-generated meeting summaries and recording view with
                    actionable options
                  </li>
                  <li>Meeting scheduling with accept/decline invite support</li>
                  <li>Favorite contacts functionality and more</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Utilized{" "}
                  <span className="font-semibold text-purple-600">ReactJS</span>
                  ,{" "}
                  <span className="font-semibold text-purple-600">
                    TypeScript
                  </span>
                  ,{" "}
                  <span className="font-semibold text-purple-600">
                    Tailwind CSS
                  </span>
                  , and{" "}
                  <span className="font-semibold text-purple-600">Zustand</span>{" "}
                  for state management.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Collaborated closely with cross-functional teams to maintain
              scalable and optimized code architecture.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Actively participated in code reviews and peer reviews to ensure
              code quality and consistency.
            </li>
          </ul>
        </div>
      </div>

      <div className="my-10 h-[2px] w-full" />

      <div className="mt-8 px-2 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-[30%]">
          <Link
            href="https://dmce.ac.in/"
            target="_blank"
            className="text-3xl border-l-4 border-purple-600 px-3 leading-[55px] text-purple-600"
          >
            DMCE, Airoli
          </Link>
        </div>
        <div className="w-full md:w-[70%] p-2 rounded-lg">
          <h3 className="text-2xl font-bold">
            Web Developer{" "}
            <span className="text-purple-600">
              @ Datta Meghe College Of Engineerng
            </span>
          </h3>
          <p className="text-gray-600">November 2020 - June 2021</p>
          <ul className="mt-4 space-y-3 text-gray-700 lg:text-[20px]">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Developed an Alumni Portal for the college using HTML, CSS, and
              PHP, enabling seamless interaction between the college and its
              alumni.
            </li>

            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Successfully deployed the portal and made it live on the college
              website, enhancing alumni engagement.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              <span>
                Key Responsibilities: worked on backend using{" "}
                <span className="font-semibold text-purple-600">PHP</span>,{" "}
                <span className="font-semibold text-purple-600">MySQL</span>,
                and frontend using{" "}
                <span className="font-semibold text-purple-600">
                  HTML/CSS/JS
                </span>
                .
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ExperiencePage;
