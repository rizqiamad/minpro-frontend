'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCompass, FaTicket } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function HamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOutside = () => {
    if (open) {
      setOpen(!open)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])
  return (
    <>
      <button onClick={() => setOpen(!open)}><GiHamburgerMenu className="text-xl" /></button>
      <div className={`absolute top-14 right-10 w-44 py-4 bg-lightBlue text-white font-semibold rounded-md flex-col gap-4 transition duration-300 ease-in-out flex ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <Link href={'/'} className="px-4 hover:opacity-[0.8] flex items-center gap-1"><IoPersonCircleSharp /> Profile</Link>
        <Link href={'/'} className="px-4 hover:opacity-[0.8] flex items-center gap-1"><FaCompass /> Jelajahi</Link>
        <Link href={'/'} className="px-4 hover:opacity-[0.8] flex items-center gap-1"><FaTicket /> Tiket saya</Link>
      </div>
    </>
  )
}