import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TitleBox = ({
  title,
  about,
  open,
  aboutStyle,
  titleStyle,
  containerStyle,
}) => {
  return (
    <div className={`${containerStyle}`}>
      <div>
        <h1
          className={`text-[26px] md:text-[43px] lg:text-5xl roboto-serif-semibold text-black px-6 py-3 rounded-lg ${titleStyle}`}
        >
          {title}
        </h1>
        <h1 className={`border-b-4 w-20 py-2 border-amber-300 `}></h1>
        <p
          className={`px-5 pr-10 md:pr-0 py-5 text-[14px] md:text-[16px] ${aboutStyle}`}
        >
          {about}
        </p>
      </div>
      {open && (
        <div className="flex px-5 md:px-0 md:justify-end items-end">
          <Link to="/"
            className={`flex items-center gap-3 border px-5 py-3 text-[12px] md:text-[14px] lg:text-[16px] border-[#253993] hover:bg-[#253993] hover:text-white bg-gray-100 shadow-[6px_6px_0px_0px_#FFDE00] `}
          >
            <span
              className={`uppercase font-bold `}
            >
              Our Services
            </span>
            <span className={` hidden md:block font-bold`}>
              24/7
            </span>
            <span className={` block md:hidden font-bold`}>
              <FaCaretRight />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TitleBox;
