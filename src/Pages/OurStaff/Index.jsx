import React from "react";
import PageBack from "../../Components/PageBack/Index";
import Back from "../../assets/Our-Staff.jpg";
import TitleBox from "../../Components/Titlebox/Index";
import Staff from "./Staff";
import Emergency from "../../Components/Emergency/Index";

const OurStaff = () => {
  return (
    <>
      <PageBack
        Back={Back}
        Page="OUR STAFF"
        Title="We Have Hard Working Team to Take Care of Your Car"
        Content="Our hardworking team is committed to your car's care. We use our expertise and dedication to ensure your vehicle receives the highest quality service every single time."
      />
      <div className="lg:px-20 py-20">
        <TitleBox
          title="Meet The Team"
          about="Our hardworking, certified team is dedicated to your car's safety. We bring expertise, skill, and genuine commitment to provide the highest quality care for your vehicle."
          aboutStyle="md:w-160 lg:w-160"
        />
        <Staff />
      </div>
      <Emergency />
    </>
  );
};

export default OurStaff;
