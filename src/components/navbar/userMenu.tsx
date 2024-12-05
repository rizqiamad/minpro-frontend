'use client'

import Link from "next/link";
import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function UserMenu() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
      <div className="w-[35px] h-[35px] rounded-full cursor-pointer">
        <IoPersonCircleSharp className="w-full h-full" />
      </div>
      <div className={`rounded-md py-2 px-3 absolute w-64 font-semibold bg-white text-black right-10 top-[3.4rem] ${open ? 'flex flex-col gap-2' : 'hidden'}`}>
        <Link href={'#'} className="hover:opacity-[0.8]">Profile</Link>
        <Link href={'#'} className="hover:opacity-[0.8]">Settings</Link>
        <Link href={'#'} className="hover:opacity-[0.8] text-red-500">Logout</Link>
      </div>
    </div>
  )
}