import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="lg:hidden sm:w-[50%] mb-4 flex justify-between items-center sm:gap-4 gap-2">
          <div className="rounded-full p-2 border-2 bg-blue-600 cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/anshik-gupta-5a99ab192/"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <div className="rounded-full p-2 border-2 bg-[#181818] cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/guptaanshik1"
            >
              <FaGithub size={30} />
            </a>
          </div>

          <div className="rounded-full p-2 border-2 bg-[#7c7c7b] cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-[#f78c11]"
              href="https://stackoverflow.com/users/10961399/anshik-gupta"
            >
              <FaStackOverflow size={30} />
            </a>
          </div>

          <div className="rounded-full p-2 border-2 bg-[#c8c8c7] cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-[#f85d5d]"
              href=""
            >
              <HiOutlineMail size={30} />
            </a>
          </div>

          <div className="rounded-full p-2 border-2 bg-[#5d65f7] cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-[#130e12]"
              href="https://drive.google.com/file/d/1Ecxmh0dXftm9VOP-Z4OClViFxsT_EpaF/view?usp=sharing"
            >
              <RiNewspaperLine size={30} />
            </a>
          </div>
        </div>
        <p className="text-[#a1a1a1] font-bold sm:text-3xl">Hi, I am</p>
        <h1 className="font-bold text-4xl sm:text-6xl text-center text-justify">
          Anshik Gupta
        </h1>
        <h4 className="font-bold sm:text-4xl text-[#777676] text-2xl text-center text-justify">
          Frontend Engineer
        </h4>
        <p className="text-[#4b5980] py-4 max-w-[700px] text-center text-justify">
          I am a frontend engineer with a passion for crafting shareable and
          configurable code. Committed to delivering high-quality solutions. My
          expertise lies in leveraging modern technologies and adhering to
          industry standards to achieve exceptional frontend results.
        </p>
      </div>
    </div>
  );
};

export default Home;
