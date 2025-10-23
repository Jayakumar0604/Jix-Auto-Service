import React, { useState } from "react";

const Form = ({ title }) => {
  const [formData, setFormData] = useState({
    YourName: "",
    email: "",
    ContactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    YourName: false,
    email: false,
    ContactNumber: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      YourName: !formData.YourName.trim(),
      email: !formData.email.trim(),
      ContactNumber: !formData.ContactNumber.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      console.log("Form submitted:", formData);
      // Optionally reset form here
    }
  };

  const inputClass = (field) =>
    `w-full p-[10px] bg-[#FAFAFA] border ${
      errors[field] ? "border-red-500" : "border-[#dddddd]"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 shadow-[6px_6px_0px_0px_#FFDE00]"
    >
      <div className="px-5 md:px-10 bg-white py-5 lg:py-10">
        <div className="space-y-5">
          <h1 className="roboto-serif-medium text-xl md:text-[21px] lg:text-2xl">
            {title}
          </h1>
          <div>
            <input
              type="text"
              name="YourName"
              placeholder="Name"
              value={formData.YourName}
              onChange={handleChange}
              className={`${inputClass("YourName")} outline-none rounded-md`}
            />
            {errors.YourName && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputClass("email")} outline-none rounded-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>

          <div>
            <input
              type="number"
              name="ContactNumber"
              placeholder="Contact Number"
              value={formData.ContactNumber}
              onChange={handleChange}
              className={`${inputClass(
                "ContactNumber"
              )} outline-none rounded-md`}
            />
            {errors.ContactNumber && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass(
                "message"
              )} p-[12px] outline-none rounded-md`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>

          <div>
            <div className="flex  md:px-0 ">
              <button
                className={`flex items-center gap-3 border px-5 py-3 text-[12px] md:text-[14px] lg:text-[16px] border-[#253993] bg-gray-100 shadow-[6px_6px_0px_0px_#FFDE00] active:bg-[#253993]`}
              >
                <span
                  className={`uppercase font-bold text-[#253993] active:text-white `}
                >
                  Send Request
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
