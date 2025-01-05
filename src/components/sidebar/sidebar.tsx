"use client";

import Link from "next/link";
import side from "@/components/sidebar/sidebar.module.css";
import { useState } from "react";
import { FaFileAlt, FaUserTie } from "react-icons/fa";
<<<<<<< HEAD
import { FaGear, FaPencil } from "react-icons/fa6";
=======
>>>>>>> dashboard
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

<<<<<<< HEAD
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
=======
              <Link href={"/organizer/events"}>
                <FaFileAlt className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Event Saya
                </p>
              </Link>
            </div>
            <div className={side.sideContainer}>
              <h1
                className={`ml-2 ${
                  !SidebarOpen ? side.hidden : ""
                } font-semibold`}
              >
                Akun
              </h1>
              <Link href={"/organizer/bio"}>
                <FaUserTie className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Informasi Dasar
                </p>
              </Link>
              
            </div>
>>>>>>> dashboard
          </div>
          <div className={side.sideContainer}>
            <h1
              className={`ml-2 ${!SidebarOpen ? side.hidden : ""
                } font-semibold`}
            >
              Akun
            </h1>
            <Link href={"/organizer/bio"}>
              <FaUserTie className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Informasi Dasar
              </p>
            </Link>
            <Link href={"/"}>
              <FaGear className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Pengaturan
              </p>
            </Link>
            <Link href={"/organizer/legal"}>
              <GrDocumentVerified className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Informasi Legal
              </p>
            </Link>
            <Link href={"/"}>
              <IoWalletSharp className={side.icons} />
              <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                Rekening
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
