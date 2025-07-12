'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--pinky)] border-b">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/transparent_logo.png" alt="Logo" width={100} height={100} className="object-cover"/>
            </Link>
          </div>

          <div className="hidden md:flex space-x-24 text-3xl font-bold text-[var(--browny)]">
            <Link href="/pricing" className="hover:text-[var(--accent)] p-3">Pricing</Link>
            <Link href="/contact" className="hover:text-[var(--accent)] p-3">Contact</Link>
            <Link href="/book" className="hover:text-[var(--accent)] hover:bg-[var(--browny)] bg-[var(--accent)] rounded-4xl p-3">Book Now!</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-bold text-xl text-[var(--browny)] bg-[var(--pinky)]">
          <Link href="/pricing" className="block border-b hover:text-[var(--accent)]">Pricing</Link>
          <Link href="/contact" className="block border-b hover:text-[var(--accent)]">Contact</Link>
          <Link href="/book" className="block border-b hover:text-[var(--accent)]">Book Now!</Link>
        </div>
      )}
    </nav>
  )
}