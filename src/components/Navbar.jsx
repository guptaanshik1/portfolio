import React, { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";
import { Link } from "react-scroll";

import nameLogo from "../assets/nameLogoFinal.png";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggle = () => setToggleNav(!toggleNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 font-bold text-black-400 set-background z-20">
      <div>
        <img src={nameLogo} alt="logo" style={{ width: "100px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="md:hidden z-10" onClick={handleToggle}>
        {toggleNav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          !toggleNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center set-background"
        }
      >
        <li className="py-4">
          <Link
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            to="home"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => handleToggle(false)}
          >
            Home
          </Link>
        </li>
        <li className="py-4">
          <Link
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => handleToggle(false)}
          >
            About
          </Link>
        </li>
        <li className="py-4">
          <Link
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            to="skills"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => handleToggle(false)}
          >
            Skills
          </Link>
        </li>
        <li className="py-4">
          <Link
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            to="work"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => handleToggle(false)}
          >
            Work
          </Link>
        </li>
        <li className="py-4">
          <Link
            className="hover:text-[#938f8e] hover:scale-110 duration-500"
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            onClick={() => handleToggle(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-400 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/anshik-gupta-5a99ab192/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-400 bg-[#181818]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/guptaanshik1"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-4px] duration-400 bg-[#7c7c7b]">
            <a
              className="flex justify-between items-center w-full text-[#f78c11]"
              href="https://stackoverflow.com/users/10961399/anshik-gupta"
            >
              StackOverflow <FaStackOverflow size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-400 bg-[#c8c8c7]">
            <a
              className="flex justify-between items-center w-full text-[#f85d5d]"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-400 bg-[#5d65f7]">
            <a
              className="flex justify-between items-center w-full text-[#130e12]"
              href="https://drive.google.com/file/d/1Ecxmh0dXftm9VOP-Z4OClViFxsT_EpaF/view?usp=sharing"
            >
              Resume <RiNewspaperLine size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
