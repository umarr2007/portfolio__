import React from "react";
import Image from "next/image";
import Head from "next/head";

<Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
</Head>;

const Section2 = () => {
  return (
    <div>
      <div className="container max-w-[1440px] mx-auto">
        <div className="platform_wrapper">
          <div className="platform_text mt-[180px]">
            <h1 className="font-bold text-[36px] leading-[1.8] text-[#000] text-center">
              Yangi Avlod{" "}
              <span className="text-[#FFD700]"> Ta'lim Platformasi</span>
            </h1>
            <p className="font-normal text-[18px] leading-[1.6] text-center text-[rgba(1,_5,_20,_0.8)] mt-[30px]">
              Niners — zamonaviy texnologiyalar yordamida o‘quvchilar va <br />
              ustozlarni birlashtiruvchi, samarali va ishonchli ta’lim
              platformasi.
            </p>
          </div>

          <div className="platform_cards flex justify-center gap-[90px]">
            <div className="card mt-[160px]">
              <div className="box rounded-[20px] w-[350px] h-[380px] flex flex-col items-center pt-[30px] [box-shadow:0_10px_60px_0_rgba(38,_45,_118,_0.08)] bg-[#fff] relative">
                <div className="circle rounded-full w-[80px] h-[80px] bg-[#5b72ee] [box-shadow:0_10px_40px_0_rgba(54,_61,_136,_0.06)] flex justify-center items-center absolute -top-[40px]">
                  <Image src="/pay.png" width={50} height={50} alt="logo" />
                </div>

                <div className="mt-[60px] px-[20px] text-center">
                  <h1 className="text-[20px] font-semibold text-[#333] leading-[28px]">
                    Talabalarni Boshqarish
                  </h1>
                  <p className="text-[#666] text-[18px] leading-[24px] max-w-[341px] mt-[30px]">
                    Talabalar bilan aloqani oson va samarali boshqarish. Ularni
                    ro‘yxatdan o‘tkazish, darslarni jadvalga qo‘yish va o‘quv
                    jarayonini kuzatish imkoniyatlari.
                  </p>
                </div>
              </div>
            </div>

            <div className="card mt-[160px]">
              <div className="box rounded-[20px] w-[350px] h-[380px] flex flex-col items-center pt-[30px] [box-shadow:0_10px_60px_0_rgba(38,_45,_118,_0.08)] bg-[#fff] relative">
                <div className="circle rounded-full w-[80px] h-[80px] bg-[#00CBB8] [box-shadow:0_10px_40px_0_rgba(54,_61,_136,_0.06)] flex justify-center items-center absolute -top-[40px]">
                  <Image
                    src="/classroom.png"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </div>

                <div className="mt-[60px] px-[20px] text-center">
                  <h1 className="text-[20px] font-semibold text-[#333] leading-[28px]">
                    Xonalar Boshqaruvi
                  </h1>
                  <p className="text-[#666] text-[18px] leading-[24px] max-w-[341px] mt-[30px]">
                    Xonalarni onlayn tarzda rejalashtirish, guruhlarni ajratish
                    va o'quv jarayonini qulay tarzda tashkil etish
                    imkoniyatlari. Xonalar band qilinishi va darslar
                    o‘tkazilishi mumkin.
                  </p>
                </div>
              </div>
            </div>

            <div className="card mt-[160px]">
              <div className="box rounded-[20px] w-[350px] h-[380px] flex flex-col items-center pt-[30px] [box-shadow:0_10px_60px_0_rgba(38,_45,_118,_0.08)] bg-[#fff] relative">
                <div className="circle rounded-full w-[80px] h-[80px] bg-[#29B9E7] [box-shadow:0_10px_40px_0_rgba(54,_61,_136,_0.06)] flex justify-center items-center absolute -top-[40px]">
                  <Image src="/report.png" width={40} height={40} alt="logo" />
                </div>

                <div className="mt-[60px] px-[20px] text-center">
                  <h1 className="text-[20px] font-semibold text-[#333] leading-[28px]">
                    Hisobotlar va Tahlil
                  </h1>
                  <p className="text-[#666] text-[18px] leading-[24px] max-w-[341px] mt-[30px]">
                    Darslar va talabalar bilan bog‘liq barcha ma'lumotlarni
                    to‘plang, tahlil qiling va maqsadli hisobotlar yaratib o'quv
                    markazi boshqaruviga ko'rsatmalar bering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
