import React from "react";
import Background from "../../Components/Background/Index";
import { MdCall } from "react-icons/md";
import Bmw from "../../assets/Bmw.png";
import Appointment from "../../Components/Appointment/Index";
import WhatWeDo from "../../Components/WeDo/Index";
import HomeFirst from "./HomeFirst";
import OurCustomer from "../../Components/Customer/Index";
import Emergency from "../../Components/Emergency/Index";
import TitleBox from "../../Components/Titlebox/Index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Background>
        <div className="md:py-20 w-full md:w-150 lg:w-200 text-center place-items-center ">
          <h1 className="text-[29px] md:text-[43px] lg:text-5xl roboto-serif-semibold  text-black px-6 py-3 rounded-lg">
            We Care About Your Car
          </h1>
          <h1 className="border-b-5 w-20 py-2 border-amber-300 "></h1>
          <p className="px-10 py-5 text-[14px] md:text-[16px]">
            Welcome to JIX Auto Service! Your trusted destination for expert
            auto repair, maintenance, and diagnostics in Pudukkottai. Quality
            service and care for your car.
          </p>
          <Link
            to="/"
            className="flex items-center gap-3 border px-5 py-3 text-[12px] md:text-[14px] lg:text-[16px] text-[#253993] hover:bg-[#253993] hover:text-white border-[#253993] bg-gray-100 shadow-[6px_6px_0px_0px_#FFDE00]"
          >
            <span className=" lg:text-[16px]">
              <MdCall />
            </span>
            <span className="uppercase  font-bold">Emergency Call</span>
            <span className="font-bold">24/7</span>
          </Link>
          <div className="pt-10">
            <img
              src={Bmw}
              alt=""
              className=" w-[319px] md:w-[516px] lg:w-full"
            />
          </div>
        </div>
        <div className="lg:pb-10 ">
          <Appointment />
        </div>
      </Background>
      <div className="py-10 px-10 lg:px-20">
        <TitleBox
          containerStyle={"grid grid-cols-1 md:grid-cols-2"}
          open={true}
          title={"What We Do"}
          about={
            "At JIX Auto Service, we provide comprehensive repairs, diagnostics, and routine maintenance for all vehicles. We ensure your car is safe, reliable, and performs its best."
          }
        />
        <WhatWeDo />
      </div>
      <HomeFirst />
      <OurCustomer />
      <Emergency />
    </>
  );
};

export default Home;
