import React from "react";
import Setting from "../../assets/setting-icon.png";
import Break from "../../assets/rotor.png";
import Shocks from "../../assets/shocks.png";
import Diagnosis from "../../assets/system-inside.png";
import Air from "../../assets/ac-repairs.png";
import Tires from "../../assets/tyre-service.png";
import Towing from "../../assets/towing.png";
import JStart from "../../assets/jump-start.png";
import Paint from "../../assets/painting.png";


const WhatWeDo = ({Show = false}) => {
  const Data = [
    {
      icon: Setting,
      title: "Auto Maintenance Services",
      text: "Expert preventative care: Keep your car running reliably and safely 3every day.",
    },
    {
      icon: Break,
      title: "Brake Repair Pads & Rotors",
      text: "Safe stopping power restored with expert pad and rotor replacement.",
    },
    {
      icon: Shocks,
      title: "Shocks, Struts Replacement",
      text: "Restore smoothness and control; eliminate bouncing for a comfortable ride.",
    },
    {
      icon: Diagnosis,
      title: "System Diagnosis & Repair",
      text: "Accurate fault finding using advanced tools for quick, reliable fixes.",
    },
    {
      icon: Air,
      title: "Air Conditioning Services",
      text: "Get your AC system repaired fast for reliable, cool air.",
    },
    {
      icon: Tires,
      title: "Tires & Wheel Balancing",
      text: "New tires and precision balancing ensure optimal safety and performance.",
    },
    {
      icon: Towing,
      title: "Towing Service",
      text: "24/7 emergency roadside assistance. We tow your vehicle safely anytime, anywhere.",
    },
    {
      icon: JStart,
      title: "Jump Start",
      text: "Quick, reliable battery jump-starts to get your vehicle running instantly.",
    },
    {
      icon: Paint,
      title: "Body Repair & Painting",
      text: "Restore your car's look with expert dent repair and flawless painting.",
    },
  ];

  const visibleItems = Show ? Data : Data.slice(0, 6);

  return (
    <>
      <div className="px-5 md:gap-1 lg:gap-3 lg:px-15 py-10 grid grid-cols-1 md:grid-cols-3">
        {visibleItems?.map((items, id) => (
          <div key={id} className="space-y-3 py-5">
            <h1 className="w-12">
              <img src={items.icon} />
            </h1>
            <h1 className="roboto-serif-semibold text-xl md:text-[21px]  lg:text-2xl">
              {items.title}
            </h1>
            <h1 className=" w-65 md:w-full lg:w-60 text-[14px] lg:texxt-[14px]">
              {items.text}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatWeDo;
