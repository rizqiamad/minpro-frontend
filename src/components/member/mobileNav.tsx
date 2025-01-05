"use client";

import { useState } from "react";
import Link from "next/link";
import dashNavbar from "@/components/sidebar/content/dashNavbar.module.css";
import side from "@/components/sidebar/sidebar.module.css";
import { FaFileAlt, FaUserCircle } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";

export default function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <div className={dashNavbar.dashboardNavbar}>
      <div className="">
        <FaUserCircle className={dashNavbar.navBtn} onClick={toggleMenu} />
        {navOpen && (
          <div className={dashNavbar.navMenu}>
            <Link href={"/organizer/dashboard"}>
              <RiHome4Fill className={side.icons} />
              <p className="ml-2">Dashboard</p>
            </Link>
            <Link href={"/organizer/events"}>
              <FaFileAlt className={side.icons} />
              <p className="ml-2">Event Saya</p>
            </Link>
            <Link href={"/organizer/bio"}>
              <FaUserTie className={side.icons} />
              <p className="ml-2">Informasi Dasar</p>
            </Link>
            
          </div>
        )}
      </div>
    </div>
  );
}
