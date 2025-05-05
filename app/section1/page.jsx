import React from "react";
import Image from "next/image";
const Section1 = () => {
  return (
    <div>
      <section className="about mt-[200px]">
        <div className="container max-w-[1440px] mx-auto">
          <div className="me_wrapper flex items-center justify-center gap-[90px]">
            <div className="left">
              <Image src="/me.png" width={200} height={200} alt="logo" />
            </div>

            <div className="right">
              <h4 className=" font-normal text-[17px] tracking-[0.02em] underline [text-decoration-skip-ink:none] text-[#fff]">
                My name is Umar
              </h4>
              <h1 className=" font-normal text-[50px] leading-[1.26664] tracking-[0.02em] text-[#fff]">
                I am a programmer:
                <br />
                <span className="text-[#7127ba]">Front-End.</span>
              </h1>
              <p className=" font-normal text-[13px] tracking-[0.02em] text-[#fff]">
                I am 17 years old.
              </p>
            </div>
          </div>

          <div className="text2 mt-[132px] flex flex-col items-center justify-center text-center">
            <h1 className="font-normal text-[50px] tracking-[0.02em] text-[#fff]">
              I'm a Developer.
            </h1>
            <h2 className="font-normal text-[15px] tracking-[0.02em] text-[#fff] mt-[10px]">
              Currently, I'm a Front-at Youtube,
            </h2>
            <p className="font-normal text-[15px] tracking-[0.02em] text-[#fff] mt-[70px] max-w-[600px]">
              I am currently studying Front-End. Let me tell you a little about
              <br />
              the Front-End field: It is a web developer who creates the
              interface of sites
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Section1;
