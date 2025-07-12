import Image from "next/image"
import InstagramIcon from "./InstagramIcon"

export default function ContactInfo() {
  return (
    <>
    <Image src="/transparent_logo.png" alt="Logo" width={350} height={350} className="object-cover" />
    <div className="flex justify-center items-center">
      <InstagramIcon />
      <h1 className="font-bold text-4xl md:text-6xl">ig: naileopard</h1>
    </div>
    </>
  )
}