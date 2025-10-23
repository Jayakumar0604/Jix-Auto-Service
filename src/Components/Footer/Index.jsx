import React from "react";
import Logo from "../../assets/Footer-logo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const Icon = [
    { icon: <FaFacebookSquare /> },
    { icon: <FaTwitter /> },
    { icon: <FaYoutube /> },
    { icon: <FaLinkedin /> },
  ];

  const Nav = [
    {
      title: "Contact Info",
      c1: "No. 42, Grand Southern Trunk Road",
      c2: " Pudukkottai, Tamil Nadu 622001",
      c3: "+91 98765 43210",
      c4: "service@jixautoservice.com",
      c5: "Monday - Saturday: 9:00 AM - 7:00 PM",
    },
    {
      title: "Our Services",
      c1: "Auto Maintenance",
      c2: "Brake Repair Pads & Rotors",
      c3: "Shocks, Struts Replacement",
      c4: "System Diagnosis & Repair",
      c5: "Air Conditioning Services",
    },
  ];
  return (
    <>
      <div className="bg-[#253993] grid  md:gap-5 lg:gap-3 grid-cols-1  border-b border-[#e6e6e691] md:grid-cols-2 lg:grid-cols-4 px-10 py-10 lg:py-20 text-white">
        <div className=" w-full flex flex-col   lg:px-10">
          <div className="w-[180px] items-center lg:w-[200px] py-[16px]">
            <img src={Logo} alt="Website Logo" />
          </div>
          <div>
            <p className="text-[14px] w-full px-0.5 md:text-5">
              Expert care for your vehicle. Trust JIX Auto Service for quality
              repairs, maintenance, and tires. Reliable service, every time.
            </p>
          </div>
          <div>
            <h1 className="flex">
              {Icon?.map((items, icon) => (
                <a
                  key={icon}
                  href=""
                  className="px-[10px] py-[10px] rounded-[100px]"
                >
                  {items.icon}
                </a>
              ))}
            </h1>
          </div>
        </div>
        {Nav?.map((items, i) => (
          <div className="py-1 px-2 md:px-0 md:py-6 w-full" key={i}>
            <h1 className="text-[20px] roboto-serif-font font-semibold md:text-[22px] pb-[18px] md:pb-[22px]">
              {items.title}
            </h1>
            <div className="text-[14px] flex flex-col  md:text-[16px]">
              <h1>{items.c1}</h1>
              <h1>{items.c2}</h1>
              <h1>{items.c3}</h1>
              <h1>{items.c4}</h1>
              <h1>{items.c5}</h1>
            </div>
          </div>
        ))}

        <div className="py-1 px-2 md:px-0 md:py-6 w-full">
          <div className="text-[14px] text-[#DADEEF] flex flex-col  md:text-[16px]">
            <a href="/">Tires & Wheel Balancing</a>
            <a href="/">Body Repair & Painting</a>
            <a href="/">Towing Service</a>
            <a href="/">Jump Start</a>
          </div>
        </div>
      </div>
      <div className="bg-[#253993] text-[14px] md:flex justify-between lg:text-[16px] text-center text-[#DADEEF] py-5 md:py-10">
        <p className="px-15">
          Copyright &copy; 2025 Jix Agency
        </p>
        <p className="px-15">
          Powered by JIX Car Repair
        </p>
      </div>
    </>
  );
};

export default Footer;
