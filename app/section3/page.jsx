import React from "react";
import Image from "next/image";
import Head from "next/head";

const Section3 = () => {
  const teachers = [
    {
      name: "Mirzaeva Oydin",
      experience: "IELTS natija: 8.0",
      image: "/teacher.png",
    },
    {
      name: "Yusupova Gulchehra",
      experience: "IELTS natija: 7.5",
      image: "/teacher.png",
    },
    {
      name: "Shavkatov Jasur",
      experience: "IELTS natija: 7.0",
      image: "/teacher.png",
    },
    {
      name: "Akhmedov Azamat",
      experience: "IELTS natija: 8.5",
      image: "/teacher.png",
    },
    {
      name: "Djamalova Nodira",
      experience: "IELTS natija: 6.5",
      image: "/teacher.png",
    },
    {
      name: "Baxshi Omon",
      experience: "IELTS natija: 8.0",
      image: "/teacher.png",
    },
    {
      name: "Maksimova Svetlana",
      experience: "IELTS natija: 7.0",
      image: "/teacher.png",
    },
    {
      name: "Rakhimov Bahrom",
      experience: "IELTS natija: 8.0",
      image: "/teacher.png",
    },
    {
      name: "Guliyeva Shahnoza",
      experience: "IELTS natija: 7.5",
      image: "/teacher.png",
    },
  ];

  return (
    <div>
      <div className="container max-w-[1440px] mx-auto">
        <div className="platform_wrapper">
          <div className="platform_text mt-[180px]">
            <h1 className="font-bold text-[36px] leading-[1.8] text-[#000] text-center">
              Ustozlar haqida malumot!
            </h1>
            <p className="font-normal text-[18px] leading-[1.6] text-center text-[rgba(1,_5,_20,_0.8)] mt-[30px]">
              Ustozlarimiz haqida batafsil malumotni ko'rishingiz mumkin
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[30px] mt-[60px]">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="card w-[450px] h-[450px] flex flex-col items-center pt-[30px] bg-gradient-to-b from-[#FFD700] to-[#FFB300] text-white shadow-lg relative"
              >
                <div className="circle rounded-full w-[100px] h-[100px] bg-[#fff] shadow-2xl flex justify-center items-center absolute -top-[50px]">
                  <Image
                    src={teacher.image}
                    width={60}
                    height={60}
                    alt="logo"
                  />
                </div>
                <div className="mt-[60px] px-[20px] text-center">
                  <h1 className="text-[22px] font-semibold text-[#333] leading-[28px] mb-[15px]">
                    {teacher.name}
                  </h1>
                  <p className="text-[#444] text-[16px] leading-[24px] mb-[15px]">
                    {teacher.experience}
                  </p>
                  <p className="text-[#333] text-[16px] leading-[24px] max-w-[341px] mx-auto">
                    {teacher.name} — IELTS imtihonlariga tayyorlashda yuqori
                    natijalar ko'rsatgan ustoz. O'quvchilarga samarali metodlar
                    bilan yordam beradi.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
