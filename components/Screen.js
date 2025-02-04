import React from "react";

function Screen() {
  const SC = "sm:w-[140px] sm:h-[140px]";
  const MC = "md:w-[160px] md:h-[160px]";
  const LG = "lg:w-[180px] lg:h-[180px]";
  const XL = "xl:w-[224px] xl:h-[224px]";
  return (
    <div className="w-full h-screen top-0 fixed -z-10 ">
      <div className="w-full fixed h-full flex flex-col lg:items-center  justify-between bg-black/40 ">
        <div className="relative flex justify-end mx-10 md:mx-32 lg:w-8/12  ">
          <div className={`${SC} ${MC} ${LG} ${XL} w-[120px] h-[120px] rounded-full bg-orange blur-[32px]`}></div>
        </div>
        <div className="relative mx-10 md:mx-32 lg:w-8/12">
          <div className={`${SC} ${MC} ${LG} ${XL} w-[120px] h-[120px] rounded-full bg-blue blur-[32px]`}></div>
        </div>
        <div className="relative flex justify-end mx-10 md:mx-32 lg:w-8/12">
          <div className={`${SC} ${MC} ${LG} ${XL} w-[120px] h-[120px] rounded-full bg-orange blur-[32px]`}></div>
        </div>
        <div className="relative flex justify-center">
          <div className={`${SC} ${MC} ${LG} ${XL} w-[120px] h-[120px] rounded-full bg-green-900 blur-[32px]`}></div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
