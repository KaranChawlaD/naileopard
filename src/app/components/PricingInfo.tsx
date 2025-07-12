import PricingLogo from "./PricingLogo";
import Image from "next/image"


export default function PricingInfo() {
  return (
    <>
    <PricingLogo />
    <h1 className="font-bold text-4xl md:text-6xl text-center">Pricing</h1>
    <div className="w-[70%] md:w-1/2">
      <h2 className="mt-[20px] md:mt-[50px] font-bold text-xl md:text-3xl text-left">General Nails:</h2>
      <div className="flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>Plain Colour (Base)</p>
        <p>$10</p>
      </div>
      <h2 className="mt-[20px] md:mt-[50px] font-bold text-xl md:text-3xl text-left">2d Nail Art (Base Colour Included):</h2>
      <div className="flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>1-2 Nails</p>
        <p>$10</p>
      </div>
      <div className="flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>Nail Art For 3-5 Nails</p>
        <p>$15</p>
      </div>
      <div className="flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>All Nails Art</p>
        <p>$20</p>
      </div>
      <h2 className="mt-[20px] md:mt-[50px] font-bold text-xl md:text-3xl text-left">3d Nail Art (Base Colour Included):</h2>
      <div className="flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>Up To 5 Nails</p>
        <p>$30</p>
      </div>
      <div className="mb-[20px] md:mb-[50px] flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>6+ Nails</p>
        <p>$40</p>
      </div>
      <hr className="w-1/3 h-1.5"></hr>
      <h2 className="font-bold text-xl md:text-3xl text-left">Additional Costs (Base Colour Not Included):</h2>
      <div className="flex justify-between items-center font-bold text-xl md:text-3xl text-left text-[#b63455]">
        <p>GelX Extensions</p>
        <p>$15</p>
      </div>
      <h3 className="mt-[20px] md:mt-[50px] font-bold text-lg md:text-2xl text-center text-[#b63455]">*You pay for the higher amount! (Ex. Five 3D nails + Five 2D nails is $30)</h3>
      <div className="flex flex-col md:flex-row md:justify-between items-center my-[25px] md:my-[50px]">
        <div className="flex flex-col justify-center items-center w-[70%] md:w-[40%]">
          <Image src="/demo1.jpeg" alt="Demo 1" width={700} height={700} className="border-2 border-black object-cover"/>
          <p className="font-bold text-lg md:text-xl text-center text-[#b63455]">3d Nail Art (Up To 5)</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[70%] md:w-[40%]">
          <Image src="/demo2.jpeg" alt="Demo 2" width={700} height={700} className="border-2 border-black object-cover"/>
          <p className="font-bold text-lg md:text-xl text-center text-[#b63455]">Full 2d Nail Art</p>
        </div>
      </div>
    </div>
    </>
  )
}