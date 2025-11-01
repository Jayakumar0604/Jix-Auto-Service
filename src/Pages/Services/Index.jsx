import React from "react";
import Back from "../../assets/Services.webp";
import PageBack from "../../Components/PageBack/Index";
import TitleBox from "../../Components/Titlebox/Index";
import WhatWeDo from "../../Components/WeDo/Index";
import ServicesFirst from "./ServicesFirst";
import OurCustomer from "../../Components/Customer/Index";
import Emergency from "../../Components/Emergency/Index";

const Services = () => {
  return (
    <>
      <PageBack
        Back={Back}
        Page="OUR SERVICES"
        Title="Quality Auto Services in Fifth Avenue, NY"
        Content="Get premium automotive care on Fifth Avenue. We offer expert repairs, precision maintenance, and transparent service to keep your luxury vehicle running flawlessly."
        Open={true}
      />
      <div className="py-10  md:px-10 lg:px-20">
        <TitleBox
          open={false}
          title="What We Do"
          about="We offer premium automotive service in Fifth Avenue, NY. Our certified technicians provide expert repairs, advanced diagnostics, and meticulous maintenance for all luxury and daily vehicles."
          aboutStyle="lg:w-160"
        />
        <WhatWeDo Show={true} />
      </div>
      <ServicesFirst />
      <OurCustomer />
      <Emergency/>
    </>
  );
};

export default Services;
