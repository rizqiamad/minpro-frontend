"use client";

import { useState } from "react";
import { IoTicket } from "react-icons/io5";
import sideContent from "@/components/sidebar/content/content.module.css";

export default function event() {
  const [activeTab, setActiveTab] = useState<boolean>(false);

  //fungsi klik pada tab
  const handleClick = (tab: boolean) => {
    setActiveTab(tab);
  };

  return (
    <section className={sideContent.eventSection}>
      <h1 className={sideContent.mainTitle}>Event Saya</h1>
      <div className={sideContent.eventContainer}>
        <div className={sideContent.tabContainer}>
          <button
            className={`${sideContent.eventTab} ${!activeTab
              ? "font-bold border-b-4 border-zinc-600"
              : ""
              }`}
            onClick={() => handleClick(!activeTab)}
          >
            <h1 className="p-3">Event Aktif</h1>
          </button>
          <button
            className={`${sideContent.eventTab} ${activeTab
              ? "font-bold border-b-4 border-zinc-600"
              : ""
              }`}
            onClick={() => handleClick(!activeTab)}
          >
            <h1 className="p-3">Event Sebelumnya</h1>
          </button>
        </div>
        <div className={sideContent.eventContent}>
          {/* isi kontent */}
          {!activeTab ? (
            <div className="flex flex-col justify-center items-center">
              <IoTicket className="text-[6rem] text-zinc-500" />
              <h1>
                Kamu belum memiliki tiket, silakan membeli tiket terlebih
                dahulu, ini Event Active.
              </h1>
            </div>
          ) : (
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
    </section>
  );
}
