"use client";
import React from "react";
import { images } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

function GiveAway() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/connectwallet");
  };

  return (
    <div className="bg-black px-2 py-2">
      <Navbar />
      <div className="w-full mt-7 flex justify-center items-center">
        <Image src={images.giveaway1} alt="Logo" className="h-auto w-fit" />
      </div>
      //
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image src={images.giveaway3} alt="miningtool3" />
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white text-xl px-8 py-2 rounded-3xl mt-3 hover:bg-blue-600"
          >
            Join Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={images.giveaway2} alt="miningtool2" />
        </div>
      </div>
      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.footer}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>
    </div>
  );
}

export default GiveAway;
