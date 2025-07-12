import Image from "next/image"

export default function PricingLogo() {
  return (
    <div className="w-1/3 md:w-1/5 relative h-[100px] md:h-[250px]">
        <div className="absolute top-0 left-0.5">
          <Image src="/transparent_logo.png" alt="Logo" width={700} height={700} className="object-cover"/>
        </div>
        <div className="absolute top-0 right-0 w-[55%]">
          <Image src="/transparent_speech_bubble.png" alt="Speech Bubble" width={700} height={700} className="object-cover"/>
        </div>
        <div className="absolute top-0 right-0 w-[45%]">
          <Image src="/money.gif" alt="Money Gif" width={700} height={700} className="object-cover"/>
        </div>
    </div>
  )
}