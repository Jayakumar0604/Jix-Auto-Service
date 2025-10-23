import React from "react";
import TitleBox from "../Titlebox/Index";
import { FaQuoteLeft } from "react-icons/fa6";
import Client1 from "../../assets/Model-1.jpg";
import Client2 from "../../assets/Model-2.jpg";
import {
  FaFacebookF,
  FaFoursquare,
  FaGoogle,
  FaStar,
  FaStarHalfAlt,
  FaYelp,
} from "react-icons/fa";

const OurCustomer = () => {
  const Data = [
    {
      review:
        "JIX Auto Service is fantastic! They quickly diagnosed my engine issue and fixed it perfectly. The staff are so knowledgeable and professional. I feel confident driving again, knowing I received honest, reliable service right here in Pudukkottai.",
      img: Client1,
      alt: "First Customer image",
      name: "Rahul",
      role: "Entrepreneur",
    },
    {
      review:
        "I highly recommend JIX Auto! I went for a routine oil change and they were quick, thorough, and incredibly friendly. They clearly explained everything without any pressure for extra repairs. This is my new go-to place for trusted, guaranteed car care.",
      img: Client2,
      alt: "Second Customer image",
      name: "Sharma",
      role: "Designer",
    },
  ];

  const Reviews = [
    {
      icon: <FaYelp />,
      text: "Based on 645 Reviews",
    },
    {
      icon: <FaGoogle />,
      text: "Based on 456 Reviews",
    },
    {
      icon: <FaFoursquare />,
      text: "Based on 983 Reviews",
    },
    {
      icon: <FaFacebookF />,
      text: "Based on 350 Reviews",
    },
  ];
  return (
    <>
      <div className=" py-10 lg:p-10">
        <TitleBox
          title="Our Customer Say"
          aboutStyle={"md:w-180 text-[#808285]"}
          about="Hear from our satisfied customers! They trust JIX Auto Service for reliable repairs, honest advice, and friendly service that always gets them back on the road safely."
        />
        <div className="px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Data?.map((items, i) => (
              <div
                key={i}
                className="bg-[#f9f9fb] border-b-4 space-y-5 p-5 border-amber-300"
              >
                <h1 className="text-gray-300 text-4xl">
                  <FaQuoteLeft />
                </h1>
                <p className="text-[#808285] text-[14px] md:text-[15px] lg:text-[17px]">
                  {items.review}
                </p>
                <div className="flex  items-center gap-2">
                  <p className="w-15">
                    <img
                      src={items.img}
                      alt={items.alt}
                      className="rounded-full"
                    />
                  </p>
                  <div>
                    <h1 className="text-[14px] lg:text-[16px]">{items.name}</h1>
                    <h2 className="text-[#808285] text-[12px] lg:text-[14px]">
                      {items.role}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 md:p-10">
          <div className="grid gap-3  grid-cols-2 lg:grid-cols-4">
            {Reviews?.map((i, id) => (
              <div key={id}>
                <h1 className=" flex gap-0.5 text-xl text-[#253993]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </h1>
                <div className="py-5 flex items-center gap-3 md:gap-1">
                  <h1 className="text-[#253993]">{i.icon}</h1>
                  <span className="text-[14px] md:text-[16px] text-[#808285]">
                    {i.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCustomer;
