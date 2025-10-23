import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./Layouts/Mainlayout";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Services from "./Pages/Services/Index";
import OurStaff from "./Pages/OurStaff/Index";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ourstaff" element={<OurStaff />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
