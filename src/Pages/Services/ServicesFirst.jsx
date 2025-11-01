import React from "react";
import Car from "../../assets/Car-Wheel.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesFirst = () => {
  return (
    <section
      className="relative bg-white bg-no-repeat bg-cover  md:px-16 py-10 md:py-20 lg:py-30"
      style={{
        backgroundImage: `
          linear-gradient(110deg, #253993 48%, #1E2339A1 48%),
          url(${Car})
        `,
      }}
    >
      <div className="grid  lg:grid-cols-2">
        <div className="text-white">
          <h1 className="text-[26px] md:text-[43px] lg:text-5xl roboto-serif-semibold px-6 py-3 rounded-lg">
            Need a Roadside Assistance?
          </h1>
          <h1 className="border-b-4 w-20 py-2 border-amber-300 "></h1>
          <p className="px-5 pr-10 md:pr-0 lg:pr-10 py-5 text-[14px] md:text-[16px]">
            Stranded? Call us now for 24/7 emergency support! We provide rapid
            towing, jump starts, and prompt help to get you back on the road
            safely.
          </p>
          <div className="w-fit px-5">
            <Link to="/" className="flex items-center gap-3 px-6 py-3 uppercase roboto-serif-medium  text-white bg-[#253993] border border-white text-[12px] md:text-[14px] lg:text-[16px] shadow-[6px_6px_0px_0px_#FFDE00] hover:bg-white hover:text-black">
              <FaPhoneAlt />
              Request An Assistance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFirst;
