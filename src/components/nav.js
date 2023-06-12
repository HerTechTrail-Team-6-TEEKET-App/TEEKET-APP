import React from "react";
import logo from "../img/logo.png";
// import { Link } from "react-router-dom";

function nav() {
  return (
    <div>
      <div className=" font-manrope flex justify-between mt-6 border-b border-gray-300">
        <div className=" pt-[27px] p-4">
          <img src={logo} alt="logo" />
        </div>
        <div className=" pl-[40px] pt-[24px] mx-12 h-[31px] w-[94px]">
          <button className=" bg-[#001133] py-[12px] px-[20px] text-white font-bold text-[14px] text-center rounded-[12px] w-[79px]">
            Menu
          </button>
        </div>
      </div>

    </div>
  );
}

export default nav;
