import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
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

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggle = () => setToggleNav(!toggleNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 font-bold text-black-400 set-background z-20">
      <div>
        <img src="" alt="logo" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
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
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-4">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-400 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-4px] duration-400 bg-[#181818]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[200px] h-[60px] flex justify-between items-center ml-[-140px] hover:ml-[-4px] duration-400 bg-[#7c7c7b]">
            <a
              className="flex justify-between items-center w-full text-[#f78c11]"
              href="/"
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
              href="/"
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
