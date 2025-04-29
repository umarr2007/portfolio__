import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header
        className="bg-[#FFD700]"
        style={{
          clipPath: "ellipse(100% 90% at 50% 0)",
          borderBottomLeftRadius: "240px",
          borderBottomRightRadius: "240px",
          minHeight: "90vh",
         
        }}
      >
        <div className="container max-w-[1440px] mx-auto">
          <div>
            <div className="nav flex items-center justify-between py-4">
              <div className="logo flex items-center gap-2">
                <Image src="/niners.png" width={100} height={100} alt="logo" />
              </div>
              <div className="flex links items-center justify-center gap-4 w-full">
                <ul className="flex items-center justify-center gap-20 w-full">
                  <li>
                    <Link
                      className="font-bold text-[17px] tracking-[0.02em] text-black hover:text-white transition-colors"
                      href={"#"}
                    >
                      Bosh sahifa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold text-[17px] tracking-[0.02em] text-black hover:text-white transition-colors"
                      href={"#"}
                    >
                      Biz haqimizda
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold text-[17px] tracking-[0.02em] text-black hover:text-white transition-colors"
                      href={"#"}
                    >
                      Kurslar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-bold text-[17px] tracking-[0.02em] text-black hover:text-white transition-colors"
                      href={"#"}
                    >
                      Aloqa
                    </Link>
                  </li>
                </ul>
                <div className="flex gap-10">
                  <button className="btn rounded-[80px] bg-black w-[160px] h-[50px] shadow-lg font-bold text-[16px] tracking-[0.02em] text-white hover:bg-white hover:text-black transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            <div className="hero_wrapper gap-[270px] flex items-center py-10">
              <div className="hero_left">
                <h1 className="hero_text font-bold text-[50px] text-black">
                  <span className="text-white bg-black px-2 rounded-lg">
                    Ingliz tilini
                  </span>{" "}
                  Niners bilan <br /> o'rganing.
                </h1>
                <p className="hero_p font-normal text-[17px] leading-[1.6] text-black mt-[34px]">
                  Tajribali ustozlar bilan ingliz tilida erkin gapiring <br />
                  va yangi imkoniyatlarga eshik oching.
                </p>
                <div className="btn wrapper mt-[52px] flex gap-4">
                  <button className="btn1 rounded-[80px] w-[200px] h-[70px] bg-black font-semibold text-[19px] text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                    Bepul qo'shiling
                  </button>
                  <button className="btn2 rounded-[80px] w-[200px] h-[70px] bg-white font-semibold text-[19px] text-black hover:bg-black hover:text-white border-2 border-black transition-colors">
                    Jarayonni ko'rish
                  </button>
                </div>
              </div>

              <div className="hero_right">
                <Image src="/girl1.png" width={545} height={892} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
