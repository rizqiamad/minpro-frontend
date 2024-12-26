"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFileCircleCheck, FaCircleUser } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import sideContent from "@/components/sidebar/content/content.module.css";

export default function event() {
  //tipe tab
  type Tab = "active" | "draft" | "previous";

  //useState tab aktif
  const [activeTab, setActiveTab] = useState<Tab>("active");

  //fungsi klik pada tab
  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={sideContent.eventSection}>
      <h1 className={sideContent.mainTitle}>Event Saya</h1>

      {/* kolom event */}

      <div className={sideContent.eventContainer}>
        <div className="">
          <div className={sideContent.tabContainer}>
            <button
              className={`${sideContent.eventTab} ${
                activeTab === "active"
                  ? "font-bold border-b-4 border-zinc-600"
                  : ""
              }`}
              onClick={() => handleClick("active")}
            >
              <h1 className="p-3">Event Aktif</h1>
            </button>
            <button
              className={`${sideContent.eventTab} ${
                activeTab === "previous"
                  ? "font-bold border-b-4 border-zinc-600"
                  : ""
              }`}
              onClick={() => handleClick("previous")}
            >
              <h1 className="p-3">Event Sebelumnya</h1>
            </button>
          </div>
          <div className={sideContent.eventContent}>
            {/* isi kontent */}
            {activeTab === "active" && (
              <div className="flex flex-col justify-center items-center">
                <IoTicket className="text-[6rem] text-zinc-500" />
                <h1>
                  Kamu belum memiliki tiket, silakan membeli tiket terlebih
                  dahulu.
                </h1>
              </div>
            )}
            {activeTab === "previous" && (
              <div className="flex flex-col justify-center items-center">
                <IoTicket className="text-[6rem] text-zinc-500" />
                <h1>
                  Kamu belum memiliki tiket, silakan membeli tiket terlebih
                  dahulu.
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
