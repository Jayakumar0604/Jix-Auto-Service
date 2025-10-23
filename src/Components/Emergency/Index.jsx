import React from "react";
import Background from "../Background/Index";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Emergency = () => {
  return (
    <>
      <Background>
        <div className="py-20 space-y-5 place-items-center">
          <h1 className="roboto-serif-medium text-[14px] lg:text-[16px]">
            EMERGENCY CALL 24/7
          </h1>
          <h1 className="roboto-serif-semibold text-[26px] md:text-[36px] lg:text-[40px]">
            91-123-456-7890
          </h1>
          <h1 className="border-b-4 border-amber-300 w-20"></h1>
          <h1 className="roboto-serif-medium text-[14px] lg:text-[16px]">
            BOOK AN APPOINTMENT TODAY
          </h1>
          <div to className="shadow-[6px_6px_0px_0px_#FFDE00]">
            <Link className="flex items-center gap-3 border px-5 py-3 text-[12px] md:text-[14px] lg:text-[16px] bg-[#253993]  ">
              <span className="text-white lg:text-[16px]">
                <FaRegCalendarCheck />
              </span>
              <span className="uppercase text-white font-bold">BOOK NOW</span>
            </Link>
          </div>
        </div>
      </Background>
    </>
  );
};

export default Emergency;
