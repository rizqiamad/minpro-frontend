'use client'

import UseClickOutside from "@/hooks/useClickOutside";
import UseOpen from "@/hooks/useOpen";
import useSession from "@/hooks/useSession";
import { logOut } from "@/libs/action";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburgerMenu() {
  const { open, hidden, menuHandler } = UseOpen()
  const { user } = useSession()
  UseClickOutside(open, menuHandler)

  const onLogout = () => {
    logOut("token");
    location.reload();
  };

  return (
    <>
      <button onClick={menuHandler}><GiHamburgerMenu className="text-xl" /></button>
      <div className={`absolute top-14 px-4 right-10 w-64 py-4 bg-white text-black shadow-lg border font-semibold rounded-md flex-col gap-4 transition duration-300 ease-in-out flex ${hidden ? '' : 'hidden'} ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        {user && (
          <div className="mb-2">
            <p className="font-semibold">{user.full_name}</p>
            <p className="text-xs text-gray-500 font-semibold">{user.email}</p>
          </div>
        )}
        <Link href={'/member/bio'} className="hover:opacity-[0.8] flex items-center gap-1">Profile</Link>
        <Link href={'/events'} className="hover:opacity-[0.8] flex items-center gap-2">Jelajahi</Link>
        <Link href={'/member/ticket'} className="hover:opacity-[0.8] flex items-center gap-2">Tiket saya</Link>
        <Link href={'#'} onClick={onLogout} className="hover:opacity-[0.8] text-red-500 flex items-center gap-1">Logout</Link>
      </div>
    </>
  )
}