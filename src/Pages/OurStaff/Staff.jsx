import React from "react";
import Owner from "../../assets/Owner.jpg";
import Staff1 from "../../assets/staff-1.png";
import Staff2 from "../../assets/staff-2.jpg";
import Staff3 from "../../assets/staff-3.jpg";
import Staff4 from "../../assets/staff-4.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Staff = () => {
  const Staffs = [
    {
      name: "Ethan Cole",
      role: "Lead Technician",
      about:
        "20 years fixing cars; guarantees accurate, lasting repairs every time.",
      image: Staff1,
      list: [
        <FaFacebook className="cursor-pointer" />,
        <FaTwitter className="cursor-pointer" />,
        <FaYoutube className="cursor-pointer" />,
        <FaLinkedin className="cursor-pointer" />,
      ],
    },
    {
      name: "Ryan Blake",
      role: "Diagnostic Specialist",
      about:
        "Certified expert finding complex issues quickly with advanced technology.",
      image: Staff2,
      list: [
        <FaFacebook className="cursor-pointer" />,
        <FaInstagram className="cursor-pointer" />,
        <FaLinkedin className="cursor-pointer" />,
      ],
    },
    {
      name: "Liam Hayes",
      role: "Suspension Expert",
      about: "Master of alignment, shocks, and struts for a smooth, safe ride.",
      image: Staff3,
      reverse: true,
      list: [
        <FaFacebook className="cursor-pointer" />,
        <FaInstagram className="cursor-pointer" />,
        <FaLinkedin className="cursor-pointer" />,
      ],
    },
    {
      name: "Owen Ford",
      role: "Maintenance Specialist",
      about:
        "Focuses on preventative care to keep your engine running perfectly.",
      image: Staff4,
      reverse: true,
      list: [
        <FaFacebook className="cursor-pointer" />,
        <FaTwitter className="cursor-pointer" />,
        <FaYoutube className="cursor-pointer" />,
        <FaLinkedin className="cursor-pointer" />,
      ],
    },
  ];

  return (
    <section className="px-5 md:px-10 py-10 space-y-10 lg:space-y-0">
      {/* Owner Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="bg-cover opacity-75 h-80 md:h-100 lg:h-auto bg-right md:bg-center hover:opacity-90"
          style={{ backgroundImage: `url(${Owner})` }}
        ></div>
        <div className="bg-black space-y-3 md:space-y-8 lg:space-y-5 text-white px-10 py-10 lg:py-30">
          <div>
            <h1 className="text-[20px] md:text-[21px] lg:text-2xl roboto-serif-semibold ">
              Jhone Doe
            </h1>
            <h2 className="text-[14px] lg:text-[16px]">Shop Owner</h2>
          </div>
          <p className="text-[14px] lg:text-[16px]">
            John Doe, our dedicated Shop Owner, ensures every client receives
            exceptional care. With 15 years of industry experience, he leads our
            certified team, guaranteeing honest advice and the highest standard
            of reliable auto service for your peace of mind.
          </p>
          <div className="flex gap-3">
            <a className="cursor-pointer">
              <FaFacebook />
            </a>
            <a className="cursor-pointer">
              <FaTwitter />
            </a>
            <a className="cursor-pointer">
              <FaYoutube />
            </a>
            <a className="cursor-pointer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* Staff Members */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
        {Staffs.map((staff, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2">
            {/* If reverse is true, show text first */}
            {staff.reverse ? (
              <>
                <div className="px-6 py-6 space-y-3">
                  <h1 className="text-[16px] md:text-[18px] lg:text-xl roboto-serif-semibold">
                    {staff.name}
                  </h1>
                  <h2 className="text-sm md:text-base text-gray-700">
                    {staff.role}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    {staff.about}
                  </p>
                  <div className="flex gap-3 text-[#253993]">{staff.list}</div>
                </div>
                <div
                  className="bg-cover bg-center h-80 md:h-auto "
                  style={{ backgroundImage: `url(${staff.image})` }}
                ></div>
              </>
            ) : (
              <>
                <div
                  className="bg-cover bg-center h-80 md:h-auto"
                  style={{ backgroundImage: `url(${staff.image})` }}
                ></div>
                <div className="px-6  py-6  space-y-3">
                  <h1 className="text-[16px] md:text-[18px] lg:text-xl roboto-serif-semibold">
                    {staff.name}
                  </h1>
                  <h2 className="text-sm md:text-base text-gray-700">
                    {staff.role}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    {staff.about}
                  </p>
                  <div className="flex gap-3 text-[#253993]">{staff.list}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
