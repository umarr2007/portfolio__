import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-auto h-[113px] [box-shadow:0_6px_22px_-3px_rgba(0,_0,_0,_0.1)] bg-[#1a0b2e]">
      <div className="container max-w-[1440px] m-auto px-[15px] py-[0]">
        <div className="nav flex items-center justify-between pt-[30px]">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <ul className="nav-li flex justify-start gap-[80px]">
            <li>
              <Link
                href="/"
                className="font-normal text-[20px] tracking-[0.02em] text-center text-[#fff]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-normal text-[20px] tracking-[0.02em] text-center text-[#fff]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/lab"
                className="font-normal text-[20px] tracking-[0.02em] text-center text-[#fff]"
              >
                Lab
              </Link>
            </li>
          </ul>
          <i className="fa-solid fa-bars hidden text-white text-[25px]"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
