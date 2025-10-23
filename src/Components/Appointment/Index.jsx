import React from "react";
import {
  FaBriefcase,
  FaCheck,
  FaPhone,
  FaPhoneFlip,
  FaRegCalendarCheck,
  FaUser,
} from "react-icons/fa6";
const Appointment = () => {
  return (
    <>
      <div className="">
        <div className=" text-white grid grid-cols-1 md:grid-cols-3 bg-[#253993]">
          <div className="p-10 md:p-5 lg:p-10 space-y-3 ">
            <h1 className="flex">
              <p className="bg-amber-300 px-[10px] py-[10px] rounded-full text-white">
                <FaPhoneFlip className="text-[18px]" />
              </p>
            </h1>
            <h1 className="text-[17px] lg:text-[20px] roboto-serif-semibold">
              Make An Appointment
            </h1>
            <h1 className="text-[14px] lg:text-[16px] ">
              Book your service easily! Get expert repairs and maintenance when
              you need them most.
            </h1>
            <h1 className="flex text-[14px] font-bold items-center gap-1 uppercase">
              <span>
                <FaRegCalendarCheck />
              </span>
              <span>Book an Appointment</span>
            </h1>
          </div>
          <div className="p-10 md:p-5 lg:p-10  space-y-3 border-t md:border-l">
            <h1 className="flex">
              <p className="bg-amber-300 px-[10px] py-[10px] rounded-full text-white">
                <FaBriefcase className="text-[18px]" />
              </p>
            </h1>
            <h1 className="text-[17px] lg:text-[20px] roboto-serif-semibold">
              Working Hours
            </h1>
            <h1 className="flex text-[14px] lg:text-[16px] items-center gap-2 ">
              <span>
                <FaCheck />
              </span>
              <span>Week Days: 05:00 - 22:00</span>
            </h1>
            <h1 className="flex text-[14px] lg:text-[16px] items-center gap-2 ">
              <span>
                <FaCheck />
              </span>
              <span>Saturday: 05:00 - 18:00</span>
            </h1>
            <h1 className="flex text-[14px] lg:text-[16px] items-center gap-2 ">
              <span>
                <FaCheck />
              </span>
              <span>Sunday: CLOSED</span>
            </h1>
          </div>
          <div className="p-10 md:p-5 lg:p-10  space-y-3 border-t md:border-l ">
            <h1 className="flex">
              <p className="bg-amber-300 px-[10px] py-[10px] rounded-full text-white">
                <FaUser className="text-[18px]" />
              </p>
            </h1>
            <h1 className="text-[17px] lg:text-[20px] roboto-serif-semibold">
              Emergency Calls 24/7
            </h1>
            <h1 className="text-[14px] md:text-[23px] lg:text-[32px] ">
              +91 98765 43210
            </h1>
            <h1 className="flex text-[14px] font-bold items-center gap-2 uppercase">
              <span>
                <FaPhone />
              </span>
              <span>Call Now</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
