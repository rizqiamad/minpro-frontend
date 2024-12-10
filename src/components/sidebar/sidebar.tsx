"use client";

import Link from "next/link";
import side from "@/components/sidebar/sidebar.module.css";
import { useState } from "react";
import { FaCompass, FaFileAlt, FaUser, FaUserTie } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { FaGear } from "react-icons/fa6";
import { AiOutlineSwap } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiHome4Fill } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr";
import { IoWalletSharp } from "react-icons/io5";

export default function Sidebar() {
  //singkat sidebar
  const [SidebarOpen, setSidebarOpen] = useState(true);
  //ubah mode
  const [organiserMode, setOrganiserMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const toggleMode = () => {
    setOrganiserMode((prevState) => !prevState);
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
        {/* khusus member start */}
        {!organiserMode && (
          <div className={side.userMode}>
            <div className={side.sideContainer}>
              <Link href={"/"}>
                <FaCompass className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Jelajah Event
                </p>
              </Link>

              <Link href={"/member/ticket"}>
                <ImTicket className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Tiket Saya
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
              <Link href={"/member/bio"}>
                <FaUser className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Informasi Saya
                </p>
              </Link>
              <Link href={"/member/closeaccount"}>
                <FaGear className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Pengaturan
                </p>
              </Link>
            </div>
          </div>
        )}
        {/* khusus member end */}

        {/* khusus organiser start */}
        {organiserMode && (
          <div className={side.organiserMode}>
            <div className={side.sideContainer}>
              <Link href={"/organiser/dashboard"}>
                <RiHome4Fill className={side.icons} />
                <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
                  Dashboard
                </p>
              </Link>

              <Link href={"/organiser/event"}>
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
              <Link href={"/organiser/bio"}>
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
              <Link href={"/organiser/legal"}>
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
        )}
        {/* khusus organiser end */}

        {/* tombol pindah */}
        <div className={side.sideContainer}>
          <h1 className={`${!SidebarOpen ? side.hidden : ""} font-semibold`}>
            Mode User
          </h1>
          <button onClick={toggleMode} className="flex items-center mt-2">
            <AiOutlineSwap className={side.icons} />
            <p className={`ml-2 ${!SidebarOpen ? side.hidden : ""}`}>
              {organiserMode
                ? "Beralih ke Mode User"
                : "Beralih ke Mode Organiser"}
            </p>
          </button>
        </div>
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
