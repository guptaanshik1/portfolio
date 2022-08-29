import React from 'react'

import tailwind from '../assets/tailwind.png'
import express from '../assets/express.png'
import github from '../assets/github.png'
import nodejs from '../assets/node.png'
import mysql from '../assets/mysql.png'
import javascript from '../assets/javascript.png'
import typescript from '../assets/typescript.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import springBoot from '../assets/spring-boot.png'
import mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-[250vh]'>
        <div className="max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center">
            <div className="text-center pb-8 px-4">
                <p className="border-b-4 border-gray-500 font-bold sm:text-6xl text-3xl text-[#2d2e31ca]">Skills</p>
            </div>

            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 py-8 px-4'>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={react} alt="react" />
                    <p className="my-4 text-center">ReactJS</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={redux} alt="redux" />
                    <p className="my-4 text-center">Redux</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={javascript} alt="javascript" />
                    <p className="my-4 text-center">JavaScript</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={typescript} alt="typescript" />
                    <p className="my-4 text-center">TypeScript</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={python} alt="python" />
                    <p className="my-4 text-center">Python</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={nodejs} alt="nodejs" />
                    <p className="my-4 text-center">NodeJS</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={express} alt="express" />
                    <p className="my-4 text-center">ExpressJS</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={mysql} alt="mysql" />
                    <p className="my-4 text-center">MySQL</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={github} alt="github" />
                    <p className="my-4 text-center">GitHub</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={springBoot} alt="springBoot" />
                    <p className="my-4 text-center">Spring Boot</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={mongo} alt="mongo" />
                    <p className="my-4 text-center">MongoDB</p>
                </div>
                <div className="rounded-[80%] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={tailwind} alt="tailwind" />
                    <p className="my-4 text-center">TailwindCSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills