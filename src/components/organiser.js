import React from "react";
import placeholder from "../assets/images/hero section.png"; 

function Home() {
  return (
    <div className=" container mx-auto p-4 max-w-screen-sm font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md pr-6">
         
          <div> 
          <img  src= {placeholder} alt="background"/> 
          <h2 className=" font-extrabold text-[20px]"> Empowering event creators everywhere </h2>
            </div>                                                                    
        </div>
      </div>
    </div>
  );
}

export default Home;
