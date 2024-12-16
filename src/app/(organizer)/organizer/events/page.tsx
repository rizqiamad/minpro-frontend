"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFileCircleCheck, FaCircleUser } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
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

      {/* container misi */}
      <div className={sideContent.missionContainer}>
        <h1>Ayo selesaikan misi</h1>
        {/* isi content */}
        <div className={sideContent.missionContent}>
          {/* misi */}
          <div className={sideContent.missions}>
            <div className={sideContent.missionInner}>
              <FaFileCircleCheck className={sideContent.missionIcon} />
              Verifikasi no. Ponselmu
            </div>
            <button className={sideContent.missionBtn}>Verifikasi</button>
          </div>
          {/* misi */}
          <div className={sideContent.missions}>
            <div className={sideContent.missionInner}>
              <FaCircleUser className={sideContent.missionIcon} />
              Lengkapi detail informasi dasar
            </div>
            <button className={sideContent.missionBtn}>Verifikasi</button>
          </div>
          {/* misi */}
          <div className={sideContent.missions}>
            <div className={sideContent.missionInner}>
              <MdEditDocument className={sideContent.missionIcon} />
              Lengkapi detail informasi legal
            </div>
            <button className={sideContent.missionBtn}>Verifikasi</button>
          </div>
        </div>
      </div>

      {/* kolom event */}

      <div className={sideContent.eventContainer}>
        {/* bagian atas start */}
        <div className={sideContent.eventContainerTop}>
          <form className={sideContent.eventSearch}>
            <label htmlFor="search">
              <input
                type="text"
                placeholder="Cari Event Saya"
                className={sideContent.eventSearchBar}
              />
              <button className={sideContent.eventSearchBtn}>
                <FaSearch />
              </button>
            </label>
          </form>
          <form>
            <label htmlFor="dropdown">Urutkan</label>
            <select
              name="event"
              id="event"
              className={sideContent.eventSortDropdown}
            >
              <option value="terdekat">Event Terdekat</option>
              <option value="terjauh">Event Terjauh</option>
              <option value="ascend">Urut A - Z</option>
              <option value="descend">Urut Z - A</option>
            </select>
          </form>
        </div>
        {/* bagian atas start */}

        <div className="">
          <div className={sideContent.tabContainer}>
            <button
              className={`${sideContent.eventTab} ${activeTab === "active" ? "font-bold border-b-4 border-zinc-600" : ""
                }`}
              onClick={() => handleClick("active")}
            >
              <h1 className="p-3">Event Aktif</h1>
            </button>
            <button
              className={`${sideContent.eventTab} ${activeTab === "draft" ? "font-bold border-b-4 border-zinc-600" : ""
                }`}
              onClick={() => handleClick("draft")}
            >
              <h1 className="p-3">Draft Event</h1>
            </button>
            <button
              className={`${sideContent.eventTab} ${activeTab === "previous" ? "font-bold border-b-4 border-zinc-600" : ""
                }`}
              onClick={() => handleClick("previous")}
            >
              <h1 className="p-3">Event Sebelumnya</h1>
            </button>
          </div>
          <div className={sideContent.eventContent}>
            {/* isi kontent */}
            {activeTab === "active" && <h1>Ini event aktif</h1>}
            {activeTab === "draft" && <h1>Ini draft event</h1>}
            {activeTab === "previous" && <h1>Ini event sebelumnya</h1>}
          </div>
        </div>
      </div>
    </section>
  );
}
