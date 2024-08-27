"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fized w-full h-24 shadow-xl bg-white text-black !font-bold">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={75} height={40} />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/Home">
              <li className="ml-10 uppercase hover:border-b text-xl">Home</li>
            </Link>
            <Link href="/Home">
              <li className="ml-10 uppercase hover:border-b text-xl">
                About Us
              </li>
            </Link>
            <Link href="/Home">
              <li className="ml-10 uppercase hover:border-b text-xl">Events</li>
            </Link>
            <Link href="/Home">
              <li className="ml-10 uppercase hover:border-b text-xl">Team</li>
            </Link>
          </ul>
        </div>
        <div></div>
        <div onClick={handleNav} className="sm:hidden cursor-pointerpl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
