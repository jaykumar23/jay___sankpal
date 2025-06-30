import Image from "next/image";
import test from "../../public/test5.jpg";
import Actions from "@/components/Actions";

export default function Home() {
  return (
    <div className="main__page">
      <div className="flex  md:flex-row flex-col-reverse items-center md:items-center justify-between gap-10 px-6 pt-24 md:px-20 md:pt-30">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            {"Hey, I'm Jaykumar 👋🏻"}
          </p>
          <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
            <span className="text-purple-600">Front</span>end
            <br />
            Developer
          </h1>
          <span className="block text-base md:text-lg lg:text-2xl text-gray-600 max-w-[100%] mx-auto md:mx-0">
            Frontend developer with expertise in React.js, Tailwind CSS, and
            state management, aspiring to transition into a full stack
            developer.
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div
            className="relative w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] rounded-full overflow-hidden"
            style={{ border: "6px solid rgba(147, 51, 234, 0.4)" }}
          >
            <Image
              src={test}
              alt="Profile Image"
              fill
              className="object-cover rounded-full"
              quality={100}
              placeholder="blur"
              blurDataURL=""
            />
          </div>
        </div>
      </div>

      <Actions />
    </div>
  );
}
