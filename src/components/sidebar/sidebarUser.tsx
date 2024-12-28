"use client";

import Link from "next/link";
import side from "@/components/sidebar/sidebar.module.css";
import { useState } from "react";
import { FaCompass, FaUser } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImTicket } from "react-icons/im";
// import { RiHome4Fill } from "react-icons/ri";
// import { GrDocumentVerified } from "react-icons/gr";
// import { IoWalletSharp } from "react-icons/io5";
// import { FaFileAlt, FaUserTie } from "react-icons/fa";

export default function SidebarUser() {
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
        {/* khusus member start */}
        {/* {!organiserMode && (
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
        )} */}
        {/* khusus member end */}

        {/* khusus organiser start */}
        
          <div className={side.organiserMode}>
            <div className={side.sideContainer}>
            <Link href={"/events"}>
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
             
            </div>
          </div>

        {/* khusus organiser end */}

        {/* tombol pindah */}
        {/* <div className={side.sideContainer}>
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
        </div> */}
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
