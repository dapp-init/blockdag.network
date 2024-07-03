"use client";
import Image from "next/image";
import images from "../constant/images";
import TidioChat from "@/components/tidio";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/connectwallet");
  };

  return (
    <div className="bg-black px-2 py-2">
      <Navbar />

      <div className="w-full mt-7 flex justify-center items-center">
        <Image src={images.header} alt="Logo" className="h-auto w-fit" />
      </div>

      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <h1 className="text-white text-4xl">PRE-SALE</h1>

        <h1 className="text-white text-2xl bg-gray-600 rounded-2xl px-2">
          $55.1M Raised So far.
        </h1>

        <p className="text-white text-xl px-3">
          Join the BlockDAG crypto presale, engage with the project, and see
          your contribution grow to new heights.
        </p>
        <div>
          <button onClick={handleClick} className="bg-blue-500 text-white text-xl px-16 py-2 rounded-3xl hover:bg-blue-600">
            Join Presale
          </button>
        </div>
      </div>

      <div className="w-full mt-10 flex justify-center items-center ">
        <Image
          src={images.phone}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>

      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <h1 className="text-white text-6xl">DEV RELEASES</h1>

        <p className="text-white text-xl px-3">
          Check out our daily dev releases to witness the electrifying progress
          of our development journey
        </p>

        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.devRelease}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>

      <div className="flex flex-col mt-7 justify-center items-center gap-3">
        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.logo}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
        <h1 className="text-white text-6xl">What Is BlockDAG?</h1>

        <h1 className="text-white text-4xl rounded-2xl px-2">
          Speed Meets Security
        </h1>

        <p className="text-white text-xl px-3">
          BlockDAG, inspired by Bitcoin and Kaspa, is the world’s most advanced
          layer 1 blockchain. A cutting-edge Proof-of-Work (PoW) algorithm that
          delivers industry-leading speeds, unbeatable security, and high
          decentralization. Built for the future, BlockDAG can power everyday
          applications to enterprise-grade DeFi protocols. With the power to
          mine from anywhere, BlockDAG makes crypto mining simple, for everyone.
        </p>
        <button onClick={handleClick} className="bg-blue-500 text-white text-xl px-16 py-2 rounded-3xl hover:bg-blue-600">
          Learn More
        </button>
      </div>

      <div className="flex flex-col mt-7 justify-center items-center">
        <h1 className="text-white text-6xl">POWERED BY</h1>

        <div className="w-full mt-7 flex justify-center items-center ">
          <Image
            src={images.brands}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>

      <div className="flex flex-col mt-7 justify-center items-center">
        <h1 className="text-white text-6xl">CORE ATTRIBUTES</h1>

        <div className="w-full mt-7 flex justify-center items-center ">
          <Image
            src={images.attributes}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>

      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <h1 className="text-white text-6xl">TOKENOMICS</h1>

        <h1 className="text-white text-2xl rounded-2xl px-2">
          BlockDAG coin (BDAG) has a supply of 150 billion coins, a testament to
          its exclusivity and value preservation.
        </h1>

        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.tokenomics}
            alt="Logo"
            className="max-w-full max-h-full "
          />
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

      <TidioChat />

      {/* key features */}
    </div>
  );
}
