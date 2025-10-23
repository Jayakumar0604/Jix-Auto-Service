import React from "react";

const Background = ({ children }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center transition-all duration-500 bg-transparent"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 30%, #4f5a8a14 30%, #4f5a8a14 65%, #25399333 65%, #25399333 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default Background;