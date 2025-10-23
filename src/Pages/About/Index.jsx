import React from "react";
import Back from "../../assets/About.jpg";
import TitleBox from "../../Components/Titlebox/Index";
import WhatWeDo from "../../Components/WeDo/Index";
import Emergency from "../../Components/Emergency/Index";
import Appointment from "../../Components/Appointment/Index";
import PageBack from "../../Components/PageBack/Index";

const About = () => {
  return (
    <>
      <PageBack
        Back={Back}
        Page="ABOUT US"
        Title="Fixing Cars & Trucks For Over 25 Years"
        Content="Choosing JIX means guaranteed reliability. We combine certified mechanics and advanced diagnostics with honest, transparent service. Your best choice for safety and peace of mind."
      />
      <Appointment />
      <div className="py-10  md:px-10 lg:px-20">
        <TitleBox
          open={false}
          title="Why Choose Us"
          about="We are Pudukkottai's trusted auto care experts. Our promise is certified quality, honest diagnostics, and transparent service pricing. Choose JIX for mechanics who truly care about your car's long-term safety and performance."
          aboutStyle="lg:w-160"
        />
        <WhatWeDo />
      </div>
      <Emergency />
    </>
  );
};

export default About;
