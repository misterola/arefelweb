"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import ArefelLogo from "../public/arefel-logo.svg";

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About", link: "/about" },
    { id: 2, text: "FAQ", link: "/faq" },
    {
      id: 3,
      text: "Join Waitlist",
      link: "https://forms.zohopublic.com/infoare1/form/ArefelWaitlist/formperma/2-xblnApSXKXISCMQcGc_0pzCMsHmJ94pEHF7BSUAhk",
    },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#050810]">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          alt="arefel logo"
          className="w-24 lg:w-62 mx-4"
          src={ArefelLogo}
          width={180}
          height={500}
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex lg:flex-row list-none justify-end items-center lg:text-base">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              target="_blank"
              className={
                item.text === "Join Waitlist"
                  ? "inline-flex items-center decoration-transparent bg-[#e8a600] hover:text-white border-0 px-2 lg:py-2 lg:mr-6 focus:outline-none hover:bg-[#4f6806] rounded-lg text-base mt-4 md:mt-0 list-none"
                  : "p-4 hover:text-secondary rounded-xl  cursor-pointer duration-300 text-primary decoration-transparent list-none hover:text-[#4f6806]"
              }
              href={item.link}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose color="#000000" size={35} />
        ) : (
          <AiOutlineMenu color="#000000" size={35} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "flex flex-col justify-start fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#050810] bg-green-100 bg-secondary ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <Link href={"/"}>
          <Image
            alt="arefel logo"
            className="w-32 lg:w-48 ml-12 mt-5"
            src={ArefelLogo}
            width={180}
            height={150}
          />
        </Link>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-black-400 text-[#050810] duration-300 cursor-pointer text-center text-sm"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
