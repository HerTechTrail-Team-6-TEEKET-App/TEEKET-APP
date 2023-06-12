import google from "../img/google.png";

function MobileLogin() {
   return (
     <div className=" h-[70vh] m-0 p-0 box-border  font-manrope ">
       <p className=" text-black text-center font-semibold mt-14 p-8 pt-16  text-[24px]">
         Log in or sign up to continue
       </p>
       <div className=" bg-[#FFFFFF] border-[#EDEDED] flex justify-center my-8">
         <img className=" p-2" src={google} alt=" google" />
         <p className=" my-2 px-4 font-bold">Continue with Google</p>
       </div>
       <div className=" text-[#C9C9C9] mx-2 justify-between flex flex-row w-[95%] ">
         <hr className=" w-[40%] my-3" />
         <span>or</span>
         <hr className=" w-[40%] my-3" />
       </div>

       <div className="">
         <form className=" mx-7 mt-5 mb- block w-[95%] ">
           <input
             type="text"
             id="email"
             name="email"
             placeholder="Enter your email address"
             className=" outline-none my-6 font-semibold rounded-[12px] bg-[#EDEDED] p-4 w-[90%] "
           />
           <input
             type="password"
             name="password"
             id="password"
             className=" outline-none mb-8 font-semibold rounded-[12px] bg-[#EDEDED] p-4 w-[90%]"
             autoComplete="on"
             placeholder="Enter your password"
           />
         </form>
         <div>
           <button className=" bg-[#0052F6] w-[343px] h-[60px] m-5 rounded-[12px]">
             Continue with email
           </button>
         </div>
       </div>
     </div>
   );
}

export default MobileLogin;