import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="lg:hidden w-[50%] mb-4 flex justify-between items-center px-4">
          <div className="rounded-full p-2 border-2 bg-blue-600 cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href=""
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <div className="rounded-full p-2 border-2 bg-[#181818] cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href=""
            >
              <FaGithub size={30} />
            </a>
          </div>

          <div className="rounded-full p-2 border-2 bg-[#7c7c7b] cursor-pointer hover:scale-110 duration-500">
            <a
              className="flex justify-between items-center w-full text-[#f78c11]"
              href=""
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
              href=""
            >
              <RiNewspaperLine size={30} />
            </a>
          </div>
        </div>
        <p className="text-[#fff]">Hi, I am</p>
        <h1 className="font-bold text-4xl sm:text-5xl text-center">
          Anshik Gupta
        </h1>
        <h2 className="font-bold sm:text-3xl text-center">Backend Engineer</h2>
      </div>
    </div>
  );
};

export default Home;
