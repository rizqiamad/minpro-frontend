'use client'

import UseClickOutside from "@/hooks/useClickOutside";
import UseOpen from "@/hooks/useOpen";
import Link from "next/link";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function UserMenu() {
  const { open, hidden, menuHandler } = UseOpen()
  UseClickOutside(open, menuHandler);
  return (
    <div>
      <button onClick={menuHandler} className="w-[35px] h-[35px] rounded-full cursor-pointer">
        <IoPersonCircleSharp className="w-full h-full" />
      </button>
      <div className={`rounded-md py-2 px-3 absolute w-64 font-semibold z-10 bg-white text-black right-10 top-[3.4rem] flex flex-col gap-2 transition duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} ${hidden ? '' : 'hidden'}`}>
        <Link href={'/member/bio'} className="hover:opacity-[0.8]">Profile</Link>
        <Link href={'#'} className="hover:opacity-[0.8] text-red-500">Logout</Link>
      </div>
    </div>
  )
}