import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center">
      <div className="w-full md:w-10/12 lg:translate-y-4 lg:w-8/12 lg:h-36 lg:rounded-md h-[120px] bg-orange">
        <div className="h-full w-full flex items-center justify-center ">
          <div className="flex items-center border-x-2 px-8  relative">
            <span className="text-6xl text-white">Our</span>
            <span>
              <Image
                alt="film-strip"
                width={60}
                height={60}
                className=" h-[60px]"
                src={"/film-strip.svg"}
              />
            </span>
            <span className="text-3xl right-0 mx-8 -bottom-9 absolute text-black">
              Time
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
