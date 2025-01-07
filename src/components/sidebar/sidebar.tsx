"use client";

import Link from "next/link";
import side from "@/components/sidebar/sidebar.module.css";
import { useState } from "react";
import { FaFileAlt, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiHome4Fill } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [SidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const isActive = (path: string) => pathname === path

  return (
    <nav className={`${side.sidebar} ${SidebarOpen ? side.open : side.closed}`}>
      {/* logo */}
      <div className="flex justify-center mb-4">
        <Link href={"/organizer/dashboard"}>
          {SidebarOpen ? (
            <Image src='https://assets.loket.com/images/logo-loket-white.png' alt="Loket" className="w-28" width={150} height={150} />
          ) : (
            <Image src='https://assets.loket.com/images/favicon/favicon.ico' alt="Loket" className="bg-white" width={30} height={30} />
          )}
        </Link>
      </div>

      {/* menu sidebar */}
      <div className={side.menus}>
        {/* khusus organiser start */}

        <div className={side.organiserMode}>
          <div className={side.sideContainer}>
            <h1
              className={`ml-4 mt-2 text-xs ${!SidebarOpen ? side.hidden : ""
                } font-semibold`}
            >
              Dashboard
            </h1>
            <Link href={"/organizer/dashboard"}>
              <div className={`${isActive('/organizer/dashboard') ? 'bg-lightBlue' : ''}`}>

                <RiHome4Fill className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Dashboard
                </p>
              </div>
            </Link>

            <Link href={"/create-event"}>
              <div className={`${isActive('/create-event') ? 'bg-lightBlue' : ''}`}>

                <FaPencil className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Buat Event
                </p>
              </div>
            </Link>

            <Link href={"/organizer/events"}>
              <div className={`${isActive('/organizer/events') ? 'bg-lightBlue' : ''}`}>

                <FaFileAlt className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Event Saya
                </p>
              </div>
            </Link>
          </div>
          <div className={side.sideContainer}>
            <h1
              className={`ml-4 text-xs ${!SidebarOpen ? side.hidden : ""
                } font-semibold`}
            >
              Akun
            </h1>
            <Link href={"/organizer/bio"}>
              <div className={`${isActive('/organizer/bio') ? 'bg-lightBlue pl-2' : ''}`}>
                <FaUser className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Informasi Saya
                </p>
              </div>
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
