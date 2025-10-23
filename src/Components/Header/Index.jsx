import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const Nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/About" },
    { id: 3, name: "Services", link: "/Services" },
    { id: 4, name: "Our Staff", link: "/OurStaff" },
    { id: 5, name: "Contact", link: "/Contact" },
  ];

  const MenuChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className=" flex items-center px-5 md:px-20 lg:px-10   justify-between ">
        <div className="w-[190px] lg:w-[250px] py-[16px]">
          <img src={logo} alt="Website Logo" />
        </div>
        <h1
          className="text-[26px] p-[10px] block lg:hidden  bg-[#394cb8] text-white"
          onClick={MenuChange}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </h1>
        {/* Large Screen */}
        <div className="hidden text-white  lg:block">
          <div className="flex items-center">
            <h1 className="flex raleway-font">
              {Nav.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className={`px-[16px] ${
                    currentPath === item.link
                      ? "text-[#0b69d4] font-semibold"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </h1>
            <Link
              to={"/"}
              className="px-4 rounded-md uppercase font-bold bg-[#6878D6] py-2 hover:bg-blue-700"
            >
              Get estimate
            </Link>
          </div>
        </div>
      </header>
      {/* Small Screen */}
      {isOpen && (
        <h1 className="block text-[15px]  duration-300 font-normal lg:hidden">
          {Nav.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`flex flex-col py-[10px] justify-center px-[20px] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] ${
                currentPath === item.link
                  ? "text-[#6878d6] font-semibold"
                  : "text-black"
              }`}
            >
              {item.name}
            </a>
          ))}
        </h1>
      )}
    </>
  );
};

export default Header;
