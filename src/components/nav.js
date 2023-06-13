import React from "react";
import logo from "../img/logo.png";
// import { Link } from "react-router-dom";

function nav() {
  return (
    <div>
      <div className=" space-x-1 font-manrope flex px-8 py-3 m-4 w-[390px] border-b border-gray-300">
        <div className=" pt-[27px]">
          <img src={logo} alt="logo" />
        </div>
        <div className=" pl-[80px]  pt-[24px] mx-12 h-[31px] w-[94px]">
          <button className=" bg-[#001133] py-[12px] text-white font-bold text-[14px] text-center rounded-[12px] w-[79px]">
            Menu
          </button>
        </div>
      </div>

    </div>
  );
}

export default nav;
