import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        
        <div className="max-w-[1000px] w-full grid gap-8">
          <div className="text-center pb-4 px-4">
            <p className="border-b-4 border-gray-500 font-bold sm:text-6xl text-3xl text-[#2d2e31ca]">About</p>
          </div>

          <div></div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right sm:text-4xl text-3xl text-[#707070]">
              <p className="tracking-wide text-justify">Hi I am Anshik Gupta, nice to meet you!</p>
            </div>
            <div>
              <p className="tracking-wide sm:text-2xl text-justify text-[#4b5980]">
                I have just started my journey as backend engineer. I am
                passionate towards becoming a full stack engineer in the future.
                My fields of intrests are full stack web development and open source development
                which I am still learning. I also like to make open source
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
