import React from "react";
import images from "../constant/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const handleClick = () => {
    // Navigate to another page
    router.push("/connectwallet");
  };
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* First Div: Logo and Text */}
        <div className="flex items-center space-x-2">
          <Image src={images.logo} alt="Logo" className="h-8 w-8" />
          <span className="text-2xl text-white font-bold">BlockDAG</span>
        </div>

        {/* Second Div: Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-white">
            KeyNote
          </a>
          <a href="/crypto-mining-rigs" className="text-white hover:text-white">
            Mining
          </a>
          <a href="/giveaway" className="text-white hover:text-white">
            GiveAway
          </a>
          
          <a href="/connectwallet" className="text-white hover:text-white">
            Mechanism
          </a>
        </div>

        {/* Third Div: Button */}
        <div>
          <button onClick={handleClick} className="bg-blue-500 text-white text-xl px-8 py-2 rounded-3xl hover:bg-blue-600">
            Buy
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {/* <div className="md:hidden">
      <div className="flex flex-col space-y-2 mt-2 items-center gap-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 1</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 2</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 3</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 4</a>
      </div>
    </div> */}
    </nav>
  );
}

export default Navbar;
