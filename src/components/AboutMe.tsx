import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const AboutMe = () => {
  return (
    <div>
      <section className="pb-20">
        <div className="mt-8  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              My Stack
              <span className="ext-2xl font-bold text-purple-600 mb-4">.</span>
            </h3>
            <div className="flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg [250px] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700">
              <Marquee speed={30}>
                <div className="flex gap-5 items-center">
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    HTML5/CSS3
                  </div>
                  <Star className="text-purple-600" />
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    JavaScript
                  </div>
                  <Star className="text-purple-600" />
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    ReactJs
                  </div>
                  <Star className="text-purple-600" />
                  <span></span>
                </div>
              </Marquee>
              <Marquee direction="right" speed={30}>
                <div className="flex gap-5 items-center">
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    TailwindCSS
                  </div>
                  <Star className="text-purple-600" />
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    SCSS
                  </div>
                  <Star className="text-purple-600" />
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    NodeJS
                  </div>
                  <Star className="text-purple-600" />
                  <span></span>
                </div>
              </Marquee>
              <Marquee speed={30}>
                <div className="flex gap-5 items-center">
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    MongoDB
                  </div>
                  <Star className="text-purple-600" />
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    NodeJS
                  </div>
                  <Star className="text-purple-600" />
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                    TypeScript
                  </div>
                  <Star className="text-purple-600" />
                  <span></span>
                </div>
              </Marquee>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {" "}
              My Special Place
              <span className="ext-2xl font-bold text-purple-600 mb-4">.</span>
            </h3>

            <div className="relative w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537.31630330871!2d72.96180409122518!3d19.166435428227214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8ea39022871%3A0x943ac49accbda37b!2sMHADA%20Colony%2C%20Mulund%20East%2C%20Mumbai%2C%20Maharashtra%20400081!5e0!3m2!1sen!2sin!4v1751196876877!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMe;
