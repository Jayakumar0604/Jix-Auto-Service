import React from "react";
import Back from "../../assets/Home.webp";
import TitleBox from "../../Components/Titlebox/Index";
import { FaBriefcase, FaPhoneFlip, FaUser } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import Form from "../../Components/Form/Index";

const HomeFirst = () => {
  const Data = [
    {
      icon: <FaBriefcase className="text-[18px]" />,
      title: "Expert Engineers",
      about:
        "Certified professionals handle your car's complex repairs with skill and precision.",
    },
    {
      icon: <FaUser className="text-[18px]" />,
      title: "Experience Skills",
      about:
        "Our trained, certified mechanics ensure expert service and dependable results always.",
    },
    {
      icon: <FaPhoneFlip className="text-[18px]" />,
      title: "Guarantee Service",
      about: "We stand behind our work with a clear warranty on all repairs.",
    },
    {
      icon: <FaShieldAlt className="text-[18px]" />,
      title: "Trusted Work",
      about:
        "Dependable, honest service you can rely on to keep your car running.",
    },
  ];
  return (
    <>
      <div className="relative w-full h-265 md:h-screen lg:h-200 xl:h-screen bg-[#f0eded] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${Back})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative items-center grid grid-cols-1 lg:grid-cols-2 z-10  text-white  h-full ">
            <div className=" md:p-10 md:space-y-5">
              <TitleBox
                open={false}
                titleStyle="text-white"
                aboutStyle="text-white"
                title="Why Choose Us"
                about="Choose JIX Auto Service for certified expertise, fast service, and honest pricing. We guarantee reliable, top-quality care for your vehicle every time."
              />
              <div className="grid px-5 lg:px-0 grid-cols-1 md:grid-cols-2 gap-5">
                {Data?.map((items, id) => (
                  <div key={id} className="flex gap-5">
                    <div>
                      <h1 className="flex">
                        <span className="bg-white px-[10px] py-[10px] rounded-full text-[#253993]">
                          {items.icon}
                        </span>
                      </h1>
                    </div>
                    <div>
                      <h1 className="roboto-serif-medium">{items.title}</h1>
                      <p>{items.about}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:py-20 px-5 md:px-10 xl:px-40 text-black">
              <Form title="Request Call Back" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFirst;
