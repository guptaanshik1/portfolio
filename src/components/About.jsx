import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid gap-8">
          <div className="sm:text-center pb-8 px-4 grid-flow-col-dense">
            <p className="border-b-4 font-bold sm:text-6xl">About</p>
          </div>

          <div></div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl text-[#fff]">
              <p>Hi I am Anshik Gupta, nice to meet you</p>
            </div>
            <div>
              <p>
                I have just started my journey as backend engineer. I am
                passionate towards becoming a full stack engineer in the future.
                My fields of intrests are full stack web development and devops
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
