import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Section1 from "./section1/page";
import Section2 from "./section2/page";
import Section3 from "./section3/page";
import Footer from "@/components/footer/page";

const App = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default App;
