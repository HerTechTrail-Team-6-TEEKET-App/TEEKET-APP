import React from "react";
import logo from "../img/logo.png";
// import { Link } from "react-router-dom";

function nav() {
  return (
    <div className=" my-9 flex flex-row">
      <div className=" w-[90%] min-[400px]:w-[60%] lg:w-[30%] border-gray-300">
        <div className=" flex-1 mx-4 ">
          <img src={logo} alt="logo" className=" w-30 h-12" />
        </div>
        
        
      </div>
      <div className=" float-none">
          <button className=" ml-16 bg-[#001133] py-[13px] text-white font-bold text-[14px] text-center rounded-[12px] w-[79px]">
            Menu
          </button>
        </div>

    </div>
  );
}

export default nav;
