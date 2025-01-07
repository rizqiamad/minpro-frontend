"use client";

import Link from "next/link";
import dashNavbar from "@/components/sidebar/content/dashNavbar.module.css";
import side from "@/components/sidebar/sidebar.module.css";
import { FaFileAlt } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import useSession from "@/hooks/useSession";
import { logOut } from "@/libs/action";
import Image from "next/image";
import UseOpen from "@/hooks/useOpen";
import UseClickOutside from "@/hooks/useClickOutside";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const { open, hidden, menuHandler } = UseOpen();
  UseClickOutside(open, menuHandler);
  const { user } = useSession()
  const pathname = usePathname()
  const namePage = pathname.split('/').pop()

  const onLogout = () => {
    logOut("token");
    location.reload();
  };

  return (
    <div className={dashNavbar.dashboardNavbar}>
      <h1 className={dashNavbar.titleNavbar}>
        <span className="hidden sm:inline-block mr-2">Member</span>
        <span>{namePage && `${namePage[0].toUpperCase()}${namePage.slice(1)}`}</span>
      </h1>
      <div className="flex items-center gap-2">
        <div className="sm:flex flex-col text-end hidden">
          <p className="font-bold">{user?.full_name}</p>
          <p>{user?.email}</p>
        </div>
        <button
          onClick={menuHandler}
          className="w-[35px] h-[35px] rounded-full cursor-pointer relative"
        >
          <Image
            className="rounded-full object-cover"
            src={user?.avatar || ''}
            alt={user?.full_name || "user"}
            fill
            priority
          />
        </button>
      </div>
      <div
        className={`rounded-md absolute w-64 shadow-lg border font-semibold z-10 bg-white text-black right-10 top-[4.3rem] flex flex-col transition duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } ${hidden ? "" : "hidden"}`}
      >
        <div className="border-b p-3">
          <p className="font-bold sm:hidden">{user?.full_name}</p>
          <p className="sm:hidden">{user?.email}</p>
          <p className="text-sm text-gray-500">Share your refcode : {user?.ref_code}</p>
          <p className="text-sm text-gray-500">to get 10000 points for discount</p>
        </div>
        <Link href={"/events"} className="flex items-center hover:bg-black/10 p-3" >
          <RiHome4Fill className={side.icons} />
          <p className="ml-2">Jelajah Event</p>
        </Link>
        <Link href={"/member/ticket"} className="flex items-center hover:bg-black/10 p-3" >
          <FaFileAlt className={side.icons} />
          <p className="ml-2">Tiket Saya</p>
        </Link>
        <Link href={"/member/bio"} className="flex items-center hover:bg-black/10 p-3" >
          <FaUserTie className={side.icons} />
          <p className="ml-2">Informasi Dasar</p>
        </Link>
        <Link
          href={"#"}
          className="text-red-500 font-semibold hover:bg-red-600/10 p-3"
          onClick={onLogout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
