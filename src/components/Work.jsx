import React from "react";

import to from "../assets/to.png";
import sr from "../assets/sr.png";
import blog1 from "../assets/cronBlog.png"
import blog2 from "../assets/rrtkBlog.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen">
      <div className="sm:pt-8 md:pt-16 pt-64 max-w-[1000px] mx-auto w-full flex flex-col justify-center h-full">
        <div className="text-center pb-8 px-4">
          <p className="border-b-4 font-bold sm:text-6xl text-4xl">Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8">
          <div
            style={{ backgroundImage: `url(${to})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-white font-bold">
                Open Source Project
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                   <button className="text-center font-bold rounded-md p-4 bg-white text-white-700">
                      Open
                   </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${sr})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-white font-bold">
                MERN Project
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                   <button className="text-center font-bold rounded-md p-4 bg-white text-white-700">
                      Open
                   </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${blog1})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content"
          >
            <div className="opacity-0 group-hover:opacity-10">
              <span className="text-2xl text-white font-bold">
                Spring Boot Project
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                   <button className="text-center font-bold rounded-md p-4 bg-white text-white-700">
                      Open
                   </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${blog2})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content"
          >
            <div className="opacity-0 group-hover:opacity-10">
              <span className="text-2xl text-white font-bold">
                Spring Boot Project
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                   <button className="text-center font-bold rounded-md p-4 bg-white text-white-700">
                      Open
                   </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${blog2})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content"
          >
            <div className="opacity-0 group-hover:opacity-10">
              <span className="text-2xl text-white font-bold">
                Spring Boot Project
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                   <button className="text-center font-bold rounded-md p-4 bg-white text-white-700">
                      Open
                   </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
