"use client";

import Link from "next/link";
import side from "@/components/sidebar/sidebar.module.css";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiHome4Fill } from "react-icons/ri";

export default function Sidebar() {
  //singkat sidebar
  const [SidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <nav className={`${side.sidebar} ${SidebarOpen ? side.open : side.closed}`}>
      {/* logo */}
      <div className="flex justify-center mb-4">
        <Link href={"/"} className="text-2xl font-bold">
          {SidebarOpen ? "Loket.com" : "L"}
        </Link>
      </div>

      {/* menu sidebar */}
      <div className={side.menus}>
        {/* khusus organiser start */}

        <div className={side.organiserMode}>
          <div className={side.sideContainer}>
            <Link href={"/organizer/dashboard"}>
              <RiHome4Fill className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Dashboard
              </p>
            </Link>

            <Link href={"/create-event"}>
              <FaPencil className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Buat Event
              </p>
            </Link>

            <Link href={"/organizer/events"}>
              <FaFileAlt className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Event Saya
              </p>
            </Link>
          </div>
        </div>

        {/* khusus organiser end */}
      </div>

      <div className={side.sidebarBtn} onClick={toggleSidebar}>
        {SidebarOpen ? (
          <IoIosArrowBack className={side.icons} />
        ) : (
          <IoIosArrowForward className={side.icons} />
        )}

        <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
          Singkat Sidebar
        </p>
      </div>
    </nav>
  );
}
