import React, { useState } from "react";
import PageBack from "../../Components/PageBack/Index";
import Back from "../../assets/Contact.jpg";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Form from "../../Components/Form/Index";
import Bmw from "../../assets/Bmw.png";
import Map from "./Map";

const Contact = () => {
  const [Message, setMessage] = useState(false);

  const MenuChange = () => {
    setMessage((prev) => !prev);
  };
  return (
    <>
      <PageBack
        Back={Back}
        BgStyle="lg:h-130"
        Title="Contact Us"
        Content="Need reliable car care in Pudukkottai? Call JIX Auto Service today to book your appointment, get a quick quote, or inquire about our services. Our team is ready to provide expert, trusted service for your vehicle."
      />
      <div className="py-10 lg:px-20 lg:py-20">
        <div className="grid lg:gap-5 grid-cols-1  md:grid-cols-3">
          <div className="bg-[#f9f9fb] py-5 px-5 space-y-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-[#253993]">
                <FaLocationDot />
              </h1>
              <div>
                <h1 className="roboto-serif-semibold text-xl md:text-[21px] lg:text-2xl">
                  Contact Details
                </h1>
              </div>
            </div>
            <div className="lg:px-10">
              <p className="text-sm md:text-base text-[#808285]">
                Address: No. 42, Nizam Colony,
              </p>
              <p className="text-sm md:text-base text-[#808285]">
                Pudukkottai, Tamil Nadu 622001
              </p>
              <p className="text-sm md:text-base text-[#808285]">
                Number: +91 98765 43210
              </p>
              <p className="text-sm md:text-base text-[#808285]">
                Email: service@jixautoservice.com
              </p>
            </div>
          </div>
          <div className="bg-[#f9f9fb] py-5 px-5 space-y-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-[#253993]">
                <FaClock />
              </h1>
              <div>
                <h1 className="roboto-serif-semibold text-xl md:text-[21px] lg:text-2xl">
                  Opening Hours
                </h1>
              </div>
            </div>
            <div className="lg:px-10">
              <p className="text-sm md:text-base text-[#808285]">
                Week Days: 05:00 - 22:00
              </p>
              <p className="text-sm md:text-base text-[#808285]">
                Saturday: 05:00 - 18:00
              </p>
              <p className="text-sm md:text-base text-[#808285]">
                Sunday: CLOSED
              </p>
            </div>
          </div>
          <div className="bg-[#f9f9fb] py-5 px-5 space-y-5">
            <h1 className="roboto-serif-semibold text-xl md:text-[21px] lg:text-2xl">
              Send Your Queries
            </h1>
            <p className="text-sm md:text-base text-[#808285]">
              Have a question? Send us your car queries now.
            </p>
            <h1 className="text-[#253993] text-2xl place-items-end px-10">
              {Message ? (
                <FaAngleDoubleUp onClick={MenuChange} />
              ) : (
                <FaAngleDoubleDown onClick={MenuChange} />
              )}
            </h1>
          </div>
        </div>
        {Message && (
          <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 items-center">
            <div className="pt-10">
              <img
                src={Bmw}
                alt=""
                className=" w-[319px] md:w-[516px] lg:w-full"
              />
            </div>
            <div className="lg:px-20">
              <Form />
            </div>
          </div>
        )}
      </div>
      <Map />
    </>
  );
};

export default Contact;
