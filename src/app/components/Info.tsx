'use client'
import Image from 'next/image'
import Carousel from './Carousel'

export default function Info() {

  return (
    <>
    <Image src="/transparent_logo.png" alt="Logo" width={700} height={700} className="object-cover" />
    <h1 className="font-bold text-4xl md:text-6xl text-center">Welcome to Naileopard!</h1>
    <h2 className="mt-[146px] md:mt-[200px] font-bold text-2xl md:text-4xl text-center text-[#b63455]">Hi! My name is Vickie and I like doing nails in my laundry room!</h2>
    <h2 className="mt-[146px] md:mt-[200px] font-bold text-2xl md:text-4xl text-center ">Some of my past work looks like this!!</h2>
    <Carousel/>
    <h2 className="mt-[40px] md:mt-[100px] font-bold text-2xl md:text-4xl text-center ">Want to book an appointment? Do so below!</h2>
    <a href='' className="my-[20px] md:my-[25px] font-bold text-2xl md:text-4xl text-center py-2 px-4 bg-[var(--accent)] rounded-4xl hover:shadow-2xl">Book Appointment</a>

    </>
  )
}