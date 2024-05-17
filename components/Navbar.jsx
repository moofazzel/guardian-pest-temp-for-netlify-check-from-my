"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const navbarLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "About",
    url: "/about",
  },
];
const BigScreenNavbar = () => {
  return (
    <>
      <nav className="hidden space-x-[30px] lg:space-x-[52px] xl:space-x-[62px] text-lg font-normal text-white lg:block mr-5">
        {navbarLinks.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className="py-1 hover:underline hover:decoration-4 hover:underline-offset-[36px] hover:border-red01"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Link href={"/contact"}>
        <span className="sr-only">Learn More About How to Contact</span>
        <button className="hidden px-5 xl:px-8 py-4 bg-guGreen font-semibold text-sogPrimary lg:block  hover:bg-[#D7E100] hover:border-[#D7E100] hover:text-black transition-colors ">
          <span>My Account</span>
        </button>
      </Link>
    </>
  );
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const navbarRef = useRef(null);

  // Handle clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className="z-50 block pr-5 lg:hidden" ref={navbarRef}>
      {/* <button onClick={() => setOpen(!open)}>
        <svg className="text-white w-7 " viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
          />
          <path
            fill="currentColor"
            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
          />
          <path
            fill="currentColor"
            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
          />
        </svg>
      </button> */}

      <div
        id="nav-icon2"
        className={`nav-icon ${open ? "open" : ""} z-50`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`${
          open
            ? "h-60 visible overflow-hidden opacity-100"
            : "h-0 opacity-0 invisible overflow-hidden"
        }   absolute w-full h-fit left-0 top-[3.6rem] md:top-[5.2rem] shadow-2xl py-5 transform transition-all duration-300 ease-out overflow-hidden rounded-sm bg-sogPrimary`}
      >
        <nav className="*:block container text-lg text-white space-y-3 ">
          {navbarLinks.map((link, i) => (
            <Link
              onClick={() => setOpen(false)}
              key={i}
              href={link.url}
              className="px-4 py-1 transition-all duration-150 border border-sogPrimary hover:border-b-2 hover:border-b-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center w-full">
          <Link href={"/contact"}>
            <span className="sr-only">Learn More About How to Contact</span>
            <button className="px-5 xl:px-8 py-4 bg-white text-sogPrimary lg:block  hover:bg-[#D7E100] hover:border-[#D7E100] hover:text-black transition-colors mt-5">
              <span>My Account</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="absolute top-10 lg:top-12 z-[999] left-1/2 translate-x-[-50%] w-full md:w-[85vw] 2xl:max-w-[1600px] bg-sogPrimary ">
      <div className="relative">
        <div className="flex items-center justify-between h-[64px] md:h-[84px] lg:h-[93px]  ">
          <div className=" pr-[50px] xl:pr-[70px] w-[58%] lg:w-[25%] h-full  flex items-center  pl-[20px] lg:pl-[30px] xl:pl-[50px] py-3.5">
            <Logo />
          </div>

          {/* <div className="flex items-center justify-between h-full pl-8 xl:pl-20 bg-sogPrimary right pr-[40px] xl:pr-[70px] w-[42%] lg:w-[75%]  py-3.5 mx-auto">
          </div> */}
          <BigScreenNavbar />
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
