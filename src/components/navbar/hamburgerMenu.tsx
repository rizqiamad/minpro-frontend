'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const menuHandler = () => {
    if (!open) {
      setHidden(!hidden)
      setTimeout(() => {
        setOpen(!open)
      }, 300)
    } else {
      setOpen(!open)
      setTimeout(() => {
        setHidden(!hidden)
      }, 300)
    }
  }
  const handleClickOutside = () => {
    if (open) {
      menuHandler()
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
      <button onClick={menuHandler}><GiHamburgerMenu className="text-xl" /></button>
      <div className={`absolute top-14 right-10 w-64 py-4 bg-white text-black font-semibold rounded-md flex-col gap-4 transition duration-300 ease-in-out flex ${hidden ? '' : 'hidden'} ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <Link href={'/'} className="px-4 hover:opacity-[0.8] flex items-center gap-1">Profile</Link>
        <Link href={'/events'} className="px-4 hover:opacity-[0.8] flex items-center gap-2">Jelajahi</Link>
        <Link href={'/'} className="px-4 hover:opacity-[0.8] flex items-center gap-2">Tiket saya</Link>
        <Link href={'/'} className="px-4 hover:opacity-[0.8] text-red-500 flex items-center gap-1">Logout</Link>
      </div>
    </>
  )
}