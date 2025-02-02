"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
];

function CreateMenus({ activeLink, setActiveLink }) {
  const handleScroll = (id) => {
    setActiveLink(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return menuItems.map((item) => (
    <span
      key={item.id}
      onClick={() => handleScroll(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
      ${
        activeLink === item.id
          ? "text-green-main animation-active shadow-green-main"
          : "text-[#000] font-bold hover:text-green-main"
      }`}
    >
      {item.label}
    </span>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                <span className="text-[#fff] text-[25px] font-bold">S</span>
              </div>
              Ahmed
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
            />
          </ul>

          {/* Social Media Icons */}
          <div className="col-start-9 col-end-10 hidden lg:flex md:flex items-center justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/ahmedshakil29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
            </a>
            <a
              href="https://github.com/ahmedshakil29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-800 hover:text-gray-900" />
            </a>
            <a
              href="https://wa.me/+8801784285243"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl  hover:text-green-600" />
            </a>
          </div>

          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="py-3 px-6 border-[2px] bg-[#fff] border-green-main text-[#000] font-semibold rounded-full text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navbar */}
      {/* <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
            />
          </ul>
        </div>
      </nav> */}
      {/* Mobile Navbar */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
