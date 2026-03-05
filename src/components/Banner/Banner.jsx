import React from "react";
import vectorImg from "../../assets/vector1.png";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-center gap-10 items-center text-2xl text-white mx-auto max-w-[1200px] my-10">
      <div className="flex justify-center  text-center  items-center rounded-2xl  bg-linear-to-br from-[#422AD5] [#8249EB] to-[#9F62F2]">
        <img className="" src={vectorImg} alt="" />
        <div>
          <h1>Inprogress</h1>
          <span className="text-5xl  font-bold">0</span>
        </div>
        <img className=" rotate-180" src={vectorImg} alt="" />
      </div>

      <div className="flex items-center justify-center text-center  rounded-2xl bg-linear-to-br from-[#54CF68] [#35B36E] to-[#00827A]">
        <img className="" src={vectorImg} alt="" />

        <div>
          <h1>Resolve</h1>
          <span className="text-5xl  font-bold">0</span>
        </div>

        <img className=" rotate-180" src={vectorImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
