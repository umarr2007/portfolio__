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
      <Header />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
   
    </div>
  );
};

export default App;
