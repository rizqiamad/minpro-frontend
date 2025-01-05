"use client";

import UseClickOutside from "@/hooks/useClickOutside";
import UseOpen from "@/hooks/useOpen";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import Image from "next/image";
import { logOut } from "@/libs/action";

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
          className="w-[40px] h-[40px] rounded-full cursor-pointer"
        >
          <div className="flex justify-center items-center my-5">
            <div className="w-10 h-10 relative">
              <Image
                className="rounded-full object-cover"
                src={user?.avatar || "/default-avatar.png"}
                alt={user?.full_name || "user"}
                fill
                priority
              />
            </div>
          </div>
        </button>
      )}
      <div
        className={`rounded-md py-2 px-3 absolute w-64 font-semibold z-10 bg-white text-black right-10 top-[3.4rem] flex flex-col gap-2 transition duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } ${hidden ? "" : "hidden"}`}
      >
        {user && (
          <div className="mb-2">
            <p className="font-bold">{user.full_name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        )}
        <Link href={"/member/bio"} className="hover:opacity-[0.8]">
          Profile
        </Link>
        <Link href={"#"} className="hover:opacity-[0.8] text-red-500" onClick={onLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}
