import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageBack = ({ Back, Page, Title, Content, Open, BgStyle }) => {
  return (
    <>
      <section
        className={`relative bg-white bg-no-repeat  bg-cover py-10 md:py-25 lg:py-30 px-6 md:px-16 ${BgStyle}`}
        style={{
          backgroundImage: `
          linear-gradient(110deg, rgba(255,255,255,0.95) 56%, rgba(255,255,255,0.65) 56%),
          url(${Back})
        `,
        }}
      >
        <div className="  grid lg:grid-cols-2 items-center">
          {/* Left Text Section */}
          <div className="z-10 relative">
            <h5 className="text-sm md:text-[16px] font-semibold tracking-widest text-blue-900 mb-4">
              {Page}
            </h5>

            <h2 className=" text-3xl md:text-[43px] lg:text-5xl roboto-serif-semibold text-gray-900 mb-6 ">
              {Title}
            </h2>

            <div className="w-12 h-[3px] bg-yellow-400 mb-6"></div>

            <p className="md:text-gray-600 text-sm md:text-[16px] leading-relaxed">
              {Content}
            </p>
          </div>

          {/* Right Empty Div to balance layout */}
          <div className="hidden md:block"></div>
          {Open && (
            <div className="flex py-5">
              <Link to="/"
                className={`flex items-center gap-3 border px-5 py-3 text-[12px] md:text-[14px] lg:text-[16px] border-[#253993] bg-gray-100 shadow-[6px_6px_0px_0px_#FFDE00] text-[#253993] hover:text-white hover:bg-[#253993]`}
              >
                <span className={` block md:hidden font-bold`}>
                  <FaRegCalendarCheck />
                </span>
                <span className={`uppercase font-bold `}>
                  Book An Appointment
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PageBack;
