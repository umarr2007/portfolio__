import React from "react";

const Section1 = () => {
  return (
    <div>
      <section>
        <div className="container max-w-[1440px] mx-auto">
          <div className="about_wrapper mt-[100px]">
            <div className="about_text">
              <h1 className="font-[600] text-[48px] leading-[1.3] text-center text-[#010514]">
                Bizning Muvaffaqiyatimiz
              </h1>
              <p className="font-normal text-[18px] leading-[1.6] text-center text-[rgba(1,_5,_20,_0.8)] mt-[50px]">
                O'quv markazimizning muvaffaqiyatlari talabalarimizning
                o'qishdagi yutuqlari bilan belgilanadi. Har <br /> bir
                talabaning o'z maqsadlariga erishishiga yordam beramiz.
              </p>

              <div className="about1_wrapper mt-[70px] flex items-center justify-between">
                <div>
                  <h1 className="font-light text-[85px] leading-none bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent text-center">
                    5K+
                  </h1>

                  <p className="font-[600] text-[32px] leading-[1.3] text-[rgba(1,_5,_20,_0.8)] mt-[15px]">
                    O'quvchilar
                  </p>
                </div>

                <div>
                  <h1 className="font-light text-[85px] text-center leading-none bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                    65%
                  </h1>
                  <p className="font-[600] text-[32px] leading-[1.3] text-[rgba(1,_5,_20,_0.8)] mt-[15px]">
                    To'liq muvaffaqiyat
                  </p>
                </div>

                <div>
                  <h1 className="font-light text-center text-[85px] leading-none bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                    35
                  </h1>
                  <p className="font-[600] text-[32px] leading-[1.3] text-[rgba(1,_5,_20,_0.8)] mt-[15px]">
                    Asosiy o'qituvchilar
                  </p>
                </div>

                <div className="">
                  <h1 className="font-light text-[85px] text-center leading-none bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                    15
                  </h1>
                  <p className="font-[600] text-[32px] leading-[1.3] text-[rgba(1,_5,_20,_0.8)] mt-[15px]">
                    Bosh mutaxassislar
                  </p>
                </div>

                <div>
                  <h1 className="font-light text-center text-[85px] leading-none bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                    10
                  </h1>
                  <p className="font-[600] text-[32px] leading-[1.3] text-[rgba(1,_5,_20,_0.8)] mt-[15px]">
                    Yillik tajriba
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
