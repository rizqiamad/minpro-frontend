"use client";

import { useState } from "react";
import Link from "next/link";
import dashNavbar from "@/components/sidebar/content/dashNavbar.module.css";
import side from "@/components/sidebar/sidebar.module.css";
import { FaFileAlt, FaUserCircle } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { logOut } from "@/libs/action";
import useSessionOrganizer from "@/hooks/useSessionOrganiser";

export default function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);
  const { organizer, isAuth } = useSessionOrganizer(); // Fetching organizer session data

  const toggleMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  const onLogout = () => {
    logOut("token");
    location.reload();
  };

  return (
    <div className={dashNavbar.dashboardNavbar}>
      <h1 className={dashNavbar.titleNavbar}>Organizer Dashboard</h1>
      <div className="">
        <FaUserCircle className={dashNavbar.navBtn} onClick={toggleMenu} />
        {navOpen && (
          <div className={dashNavbar.navMenu}>
            {isAuth && organizer && (
              <div className="mb-4">
                <p className="font-bold">{organizer.name}</p> {/* Updated here */}
                <p className="text-sm text-gray-500">{organizer.email}</p>
              </div>
            )}
            <Link href={"/organizer/dashboard"}>
              <RiHome4Fill className={side.icons} />
              <p className="ml-2">Dashboard</p>
            </Link>
            <Link href={"/organizer/events"}>
              <FaFileAlt className={side.icons} />
              <p className="ml-2">Event Saya WAW</p>
            </Link>
            <Link href={"/organizer/bio"}>
              <FaUserTie className={side.icons} />
              <p className="ml-2">Informasi Dasar</p>
            </Link>
            <Link
              href={"#"}
              className="hover:opacity-[0.8] text-red-500 font-semibold"
              onClick={onLogout}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
