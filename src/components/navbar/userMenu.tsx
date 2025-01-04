"use client";

import UseClickOutside from "@/hooks/useClickOutside";
import UseOpen from "@/hooks/useOpen";
import Link from "next/link";
import useSession from "@/hooks/useSession";
// import { useRouter } from "next/navigation";
// import { IoPersonCircleSharp } from "react-icons/io5";
import Image from "next/image";
import { logOut} from "@/libs/action";

export default function UserMenu() {
  const { open, hidden, menuHandler } = UseOpen();
  UseClickOutside(open, menuHandler);
  // const router = useRouter();
  const { user, isAuth } = useSession();
  const onLogout = () => {
    logOut('token')
    location.reload()
  }
  console.log(user);
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
                src={user?.avatar || ""}
                alt={user?.username || "user"}
                fill
                priority
              />
            </div>
          </div>
        
        {/* <IoPersonCircleSharp className="w-full h-full" /> */}
      </button>)}
      <div
        className={`rounded-md py-2 px-3 absolute w-64 font-semibold z-10 bg-white text-black right-10 top-[3.4rem] flex flex-col gap-2 transition duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } ${hidden ? "" : "hidden"}`}
      >
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
