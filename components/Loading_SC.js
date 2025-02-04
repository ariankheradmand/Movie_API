import Image from "next/image";
import React, { useState, useEffect } from "react";

function Loading_SC() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(false);
      console.log(timer)
    }, 2000);
    return () => clearTimeout(timerId);
  }, []);
  const SC = "sm:-bottom-48 sm:-right-32"
  const MC = "md:-bottom-48 md:-right-48"
  const LG = "lg:-bottom-48 lg:-right-64"
  const XL = "xl:-bottom-64 xl:-right-[600px]"
  return (
    <div className={`bg-orange  absolute ${!timer && "hidden"} text-white flex w-full h-screen overflow-hidden`}>
      <div className="w-full h-full text-center absolute">
        <div
          className={`w-8/12 h-4/5 bg-white rounded-full blur-[110px] absolute -bottom-48 -right-24
                      ${SC} ${MC}  ${LG} ${XL}   `}
        ></div>
      </div>
      <div className="h-full w-full flex items-center justify-center animate__animated animate__fadeInLeftBig">
        <div className="flex items-center border-x-2 px-8  relative">
          <span className="text-8xl">Our</span>
          <span>
            <Image
              alt="film-strip"
              width={60}
              height={60}
              className="w-[48px]"
              src={"/film-strip.svg"}
            />
          </span>
          <span className="text-4xl right-0 mx-8 -bottom-6 absolute text-black">Time</span>
        </div>
      </div>
    </div>
  );
}

export default Loading_SC;
