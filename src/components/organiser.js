import React from "react";
import placeholder from "../assets/images/hero section.png"; 
import users from "../assets/images/user.png";
import ticket from "../assets/images/ticket.png";

function Home() {
  return (
    <div className=" container mx-auto p-4 max-w-screen-sm font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md">
          <div className=" flex flex-col justify-center items-center">
            <img src={placeholder} alt="background" />
            <h1 className="  font-extrabold text-center text-[25px] mt-7">
              {" "}
              Empowering event creators everywhere{" "}
            </h1>
            <h2 className=" mt-3 pl-2 my-2 text-center w-[390px] font-extrabold">
              More than 1 million people across 5 continents choose Teeket
            </h2>
          </div>

          <div>
            <img src={users} className=" w-[100vw] " alt="users" />
          </div>
          <div className=" bg-[#D0DBF1] bg-opacity-[40%] h-[1055px] my-10 rounded-2xl">
            <div>
              <h1 className=" mb-6 text-[18px] font-manrope text-[#0052F6] font-extrabold">
                Teeket Features
              </h1>
              <div className=" flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  01
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  ANALYTICS AND FEEDBACK
                </h1>
              </div>
              <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className="">
                  Create events and sell tickets with our seamless and secure
                  checkout feature for attendees in your event.
                </h1>
                <img className=" my-6" src={ticket} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6" />
              <div className=" flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  02
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  ANALYTICS AND FEEDBACK
                </h1>
              </div>
              <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className="">
                  Create events and sell tickets with our seamless and secure
                  checkout feature for attendees in your event.
                </h1>
                <img className=" my-6" src={ticket} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6" />
              <div className=" flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  03
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  ANALYTICS AND FEEDBACK
                </h1>
              </div>
              <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className="">
                  Create events and sell tickets with our seamless and secure
                  checkout feature for attendees in your event.
                </h1>
                <img className=" my-6" src={ticket} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
