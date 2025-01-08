"use client";

import UseClickOutside from "@/hooks/useClickOutside";
import UseOpen from "@/hooks/useOpen";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import Image from "next/image";
import { logOut } from "@/libs/action";
import side from "@/components/sidebar/sidebar.module.css";
import { FaHome } from "react-icons/fa";

export default function UserMenu() {
  const { open, hidden, menuHandler } = UseOpen();
  UseClickOutside(open, menuHandler);
  const { user, isAuth } = useSession();

  const onLogout = () => {
    logOut("token");
    location.reload();
  };

  return (
    <div>
      {isAuth && (
        <button
          onClick={menuHandler}
          className="w-[35px] h-[35px] rounded-full cursor-pointer relative"
        >
          <Image
            className="rounded-full object-cover"
            src={user?.avatar || "/default-avatar.png"}
            alt={user?.full_name || "user"}
            fill
            priority
          />
        </button>
      )}
      <div
        className={`rounded-md absolute w-64 shadow-lg border font-semibold z-10 bg-white text-black right-10 top-[3.4rem] flex flex-col transition duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } ${hidden ? "" : "hidden"}`}
      >
        {user && (
          <div className="border-b p-3">
            <p className="font-semibold">{user.full_name}</p>
            <p className="text-xs text-gray-500 font-semibold">{user.email}</p>
          </div>
        )}
        <Link href={"/member/bio"} className="flex items-center hover:bg-black/10 p-3">
          <FaHome className={side.icons} />
          <p className="ml-2">Profile</p>
        </Link>
        <Link href={"#"} className="hover:bg-red-600/10 p-3 text-red-500" onClick={onLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}
