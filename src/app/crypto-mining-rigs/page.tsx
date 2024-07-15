"use client";
import Image from "next/image";
import { images } from "@/constant";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Card from "@/components/card";

function CryptoMiningRigs() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/connectwallet");
  };

  return (
    <div className="bg-black px-2 py-2">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-2 px-4 ">
        <h1 className="text-white text-4xl">BlockDAG</h1>
        <h1 className="text-white text-4xl"> Crypto Mining Rigs</h1>
        <p className="text-white px-10 py-10 ">
          Each miner comes with comprehensive user documentation, a power supply
          unit,
          <br /> and dedicated customer support for a seamless mining
          experience.
          <br />
          We’ve got you covered on your crypto mining journey, whether you're{" "}
          <br />
          starting out or scaling your operations. Purchase directly from the
          BlockDAG website,
          <br /> ensuring secure transactions and reliable shipping to kickstart
          your mining journey.
        </p>
      </div>
      <div className="w-full mt-7 flex justify-center items-center">
        <Image src={images.banner} alt="Logo" className="h-auto w-fit" />
      </div>
      //
      <div className="flex flex-col justify-center items-center gap-2 px-4 ">
        <h1 className="text-white text-4xl"> Mining Made Simple</h1>
        <p className="text-white px-10 py-10 ">
          Crypto mining secures blockchains, opens an income stream for miners,
          and pushes crypto adoption forward. <br /> The BlockDAG project makes
          mining crypto easy and rewarding. With our cutting-edge hybrid
          protocol and
          <br />
          dedicated bitcoin mining rigs, mining BDAG coins is easy and
          efficient.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mx-8 gap-2 flex-wrap">
        <div className="flex justify-center items-center gap-4 px-8">
          <Card
            imageSrc={images.lg1}
            title="Eco-Friendly Mining"
            description="Mining BlockDAG coins is energy efficient with minimal power drain. With our DAG-based hybrid protocol, BDAG mining consumes less power than its peers. While eco-friendly,
         the consensus mechanism ensures no compromises are made on security or speed."
          />
          <Card
            imageSrc={images.lg2}
            title="Robust Security, High-speed"
            description="When you mine BlockDAG coins, you secure proof of work blockchain’s future. With an industry-leading confirmation speed of 10 blocks per second,
         BDAG delivers class-leading and consistent mining rewards."
          />
        </div>
        <div className="flex justify-center items-center gap-4 px-8">
          <Card
            imageSrc={images.lg4}
            title="Ease of Use, All-Around"
            description="We believe mining should be simple and accessible.
             From easy-to-use interfaces to robust software support, 
             mining on the BlockDAG network is as easy as it gets. Our crypto mining rigs also lead their class with minimal noise levels, cost efficiency, and intelligent cooling systems."
          />
          <Card
            imageSrc={images.lg3}
            title="Robust Security, High-speed"
            description="BlockDAG crypto miners champion upgradeability with constant updates and support to ensure the rigs can mine efficiently long into the future."
          />
        </div>
      </div>
      //
      <div className="flex flex-col justify-center items-center gap-2 px-4 ">
        <h1 className="text-white text-4xl"> Pick the Right Miner for You</h1>
        <p className="text-white px-10 py-10 ">
          Whether you’re starting your crypto mining journey or you’re a
          seasoned miner looking to scale up, we’ve got you covered.
          <br /> From our cloud-based BlockDAG X1 mobile mining app to our miner
          range, the X1, X10, X30 and X100, <br /> we offer the best in class
          mining solutions with our crypto mining rigs.
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image src={images.miningtool3} alt="miningtool3" />
          <h1 className="text-white text-xl">BLOCKDAG X1</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={images.miningtool2} alt="miningtool2" />
          <h1 className="text-white text-xl">BLOCKDAG X10</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={images.miningtool1} alt="miningtool1" />
          <h1 className="text-white text-xl">BLOCKDAG X30</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={images.miningtool4} alt="miningtool4" />
          <h1 className="text-white text-xl">BLOCKDAG X100</h1>
        </div>
      </div>
      //
      <div className="flex flex-col justify-center items-center mx-8 gap-2 flex-wrap">
        <div className="flex justify-center items-center gap-4 px-8">
          <Card
            imageSrc={images.lg5}
            title="Made for Cloud Mining"
            description="The BlockDAG X1 is the gateway to a rewarding crypto mining experience from your mobile phones.
             The X1 mobile app is the easiest way to get into mining without owning hardware. Through the App on your phone, the X1 can mine up to 20 BDAG coins daily. With transparent policies and no hidden fees,
             the BlockDAG X1 is your best companion for mobile mining."
          />
          <Card
            imageSrc={images.lg6}
            title="The Hash Rate That Fits You"
            description="Our crypto mining rigs cover the hash rate spectrum,
             ensuring there is a machine that fits your needs. The BlockDAG X10, 
             with a hash rate of 100 MH/s, allows you to mine 200 BDAG, making it the perfect fit for beginners. 
             The BlockDAG X30 and X100 present the next step in mining power. The X30 can mine 600 BDAG coins at a hash rate of 280 GH/s, and the X100 can mine 2,000 BDAG at 2TH/s.
                With the wide range of mining power,
                BlockDAG’s crypto miners fit your needs, 
             whether you’re looking for home mining solutions or are planning big. "
          />
        </div>
        <div className="flex justify-center items-center gap-4 px-8">
          <Card
            imageSrc={images.lg8}
            title="Longevity"
            description="With the future in mind, our miners come with undervolted ASIC chips and an excess power supply.
             With added processing power, our mining rigs can mine long into the future with minimal hardware deterioration. With hardware optimized to run smoother for extended periods of time, our miners require no costly hardware modifications in the long run.
             Our future proof mining machines ensure your mining operation is both pocket and eco friendly."
          />
          <Card
            imageSrc={images.lg7}
            title="Mining with Less"
            description="With minimal power drain and efficient use of processing power BlockDAG miners ensure your mining operations take up the least amount of room and emit the least amount of noise.
             These are bitcoin mining rigs where you can mine Bitcoin coins."
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
    </div>
  );
}

export default CryptoMiningRigs;
