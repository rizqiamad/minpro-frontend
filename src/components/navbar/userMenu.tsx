'use client'

import Link from "next/link";
import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function UserMenu() {
  const [open, setOpen] = useState<boolean>(false)
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
  return (
    <div>
      <button onClick={menuHandler} className="w-[35px] h-[35px] rounded-full cursor-pointer">
        <IoPersonCircleSharp className="w-full h-full" />
      </button>
      <div className={`rounded-md py-2 px-3 absolute w-64 font-semibold bg-white text-black right-10 top-[3.4rem] flex flex-col gap-2 transition duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} ${hidden ? '' : 'hidden'}`}>
        <Link href={'#'} className="hover:opacity-[0.8]">Profile</Link>
        <Link href={'#'} className="hover:opacity-[0.8]">Settings</Link>
        <Link href={'#'} className="hover:opacity-[0.8] text-red-500">Logout</Link>
      </div>
    </div>
  )
}