import React from "react";
import Head from "next/head";
import Image from "next/image";
const Section2 = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      <section>
        <div className="container max-w-[1440px] mx-auto">
          <div className="text4">
            <h1 className="font-normal text-[28px] leading-[1.29167] tracking-[0.02em] text-center text-[#fff] mt-[250px]">
              What skills do I currently know?
            </h1>
          </div>

          <div className="card">
            <div className="box flex justify-center gap-[30px] mt-[40px]">
              <Image src="/figma.svg" alt="figma" width={50} height={50} />
              <Image src="/react.svg" alt="react" width={50} height={50} />
              <Image src="/c.svg" alt="c" width={50} height={50} />
              <Image src="/node.svg" alt="node" width={50} height={50} />
              <Image src="/vss.svg" alt="vss" width={50} height={50} />
              <Image src="/js.svg" alt="js" width={50} height={50} />
              <Image src="/css.svg" alt="css" width={50} height={50} />
            </div>
          </div>

          <div className="box2 flex justify-center gap-[40px] mt-[32px]">
            <Image src="/xd.svg" alt="xd" width={50} height={50} />
            <Image src="/next.svg" alt="next" width={50} height={50} />
            <Image src="/g.svg" alt="g" width={50} height={50} />
            <Image src="/ai.svg" alt="ai" width={50} height={50} />
            <Image src="/express.svg" alt="express" width={50} height={50} />
          </div>

          <div className="rasm flex justify-center">
            <Image
              src="/Skills (1).png"
              alt="skills"
              width={980}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Section2;