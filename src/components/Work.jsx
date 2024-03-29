import React from "react";

import to from "../assets/to.png";
import sr from "../assets/sr.png";
import blog1 from "../assets/cronBlog.png";
import blog2 from "../assets/rrtkBlog.png";
import youtube_clone from "../assets/youtube_clone.png";
import excel_clone from "../assets/excel_clone.png";
import draw from "../assets/draw.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto">
      <div className="max-w-[1000px] mx-auto w-full flex flex-col justify-center h-full">
        <div className="text-center pb-8 px-4">
          <p className="border-b-4 border-gray-500 font-bold sm:text-6xl text-3xl text-[#2d2e31ca]">
            Work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8">
          <div
            style={{ backgroundImage: `url(${to})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Open Source Project
              </span>
              <div className="pt-4 text-center">
                <a href="https://www.npmjs.com/package/time-operations">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${sr})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                MERN Project
              </span>
              <div className="pt-4 text-center">
                <a href="https://github.com/guptaanshik1/scheduleReminder">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${youtube_clone})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Youtube Clone
              </span>
              <div className="pt-4 text-center">
                <a href="https://drive.google.com/file/d/1WtsdPauklpb6t2rzH-UkJxMcoTDVCc5H/view?usp=drive_link">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${excel_clone})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Excel / Sheets Clone
              </span>
              <div className="pt-4 text-center">
                <a href="https://drive.google.com/file/d/1OlFmgUJV3OLD_8palkf7Ld4f8bVK0edK/view?usp=sharing">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${draw})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Live Draw
              </span>
              <div className="pt-4 text-center">
                <a href="https://drive.google.com/file/d/1cvVeTdHzbTkAoNBdLZs55xcGaF2sywdS/view?usp=drive_link">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            style={{ backgroundImage: `url(${spb})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Spring Boot Project
              </span>
              <div className="pt-4 text-center">
                <a href="https://github.com/guptaanshik1/blog-apis">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          <div
            style={{ backgroundImage: `url(${blog1})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Blog on Cron Jobs
              </span>
              <div className="pt-4 text-center">
                <a href="https://anshikgupta.hashnode.dev/cron-jobs">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                    Open
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${blog2})` }}
            className="shadow-md rounded-md group container flex justify-center items-center mx-auto hover-content object-contain"
          >
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl text-gray-900 font-bold">
                Blog on RTK Query
              </span>
              <div className="pt-4 text-center">
                <a href="https://anshikgupta.hashnode.dev/react-rtk-query">
                  <button className="text-center font-bold rounded-md p-4 bg-gray-500 text-white hover:bg-white hover:text-gray-500">
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
