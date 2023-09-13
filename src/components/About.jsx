import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid gap-8">
          <div className="text-center pb-4 px-4">
            <p className="border-b-4 border-gray-500 font-bold sm:text-6xl text-3xl text-[#2d2e31ca]">
              About
            </p>
          </div>

          <div></div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right sm:text-4xl text-3xl text-[#707070]">
              <p className="tracking-wide text-justify">
                Hi I am Anshik Gupta, nice to meet you!
              </p>
            </div>
            <div>
              <p className="tracking-wide sm:text-2xl text-justify text-[#4b5980]">
                In my current role as a frontend engineer, I have amassed over
                one year of experience in using React and TypeScript for web
                development. My fields of intrests are full stack web
                development and open source development. I also like to
                contribute to open source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
