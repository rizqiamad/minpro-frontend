'use client'

import { useEffect, useState } from "react";
import sideContent from "@/components/sidebar/content/content.module.css";
import Link from "next/link";
import { IEvent } from "@/types/event";
import { getEventsOrganizer } from "@/libs/events";
import EventCard from "./eventCard";

export default function OrganizerEvents() {
  type Tab = "active" | "draft" | "previous";
  const [activeTab, setActiveTab] = useState<Tab>("active");
  const [events, setEvents] = useState<IEvent[]>([])

  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const getDataEventsOrganizer = async () => {
    const data = await getEventsOrganizer()
    setEvents(data)
  }

  useEffect(() => {
    getDataEventsOrganizer()
  }, [])

  return (
    <div>
      <div className={sideContent.tabContainer}>
        <button
          className={`${sideContent.eventTab} ${activeTab === "active" ? "font-bold border-b-4 border-lightBlue" : ""
            }`}
          onClick={() => handleClick("active")}
        >
          <h1 className="p-3">Event Aktif</h1>
        </button>
        <button
          className={`${sideContent.eventTab} ${activeTab === "draft" ? "font-bold border-b-4 border-lightBlue" : ""
            }`}
          onClick={() => handleClick("draft")}
        >
          <h1 className="p-3">Draft Event</h1>
        </button>
        <button
          className={`${sideContent.eventTab} ${activeTab === "previous" ? "font-bold border-b-4 border-lightBlue" : ""
            }`}
          onClick={() => handleClick("previous")}
        >
          <h1 className="p-3">Event Sebelumnya</h1>
        </button>
      </div>
      {activeTab === "active" && (
        !events.length ? (
          <div className={sideContent.eventContent}>
            <div className="text-center">
              <h1 className="font-semibold text-xl mb-4">Anda Belum memiliki Event apapun</h1>
              <Link href={'/create-event'} className="border px-3 py-2 rounded-md font-semibold hover:text-white border-lightBlue hover:bg-lightBlue transition duration-200">Buat Event Sekarang</Link>
            </div>
          </div>
        ) : (
          <div className="w-full py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((item, idx) => {
              return (
                <EventCard key={idx} event={item} />
              )
            })}
          </div>
        )
      )}
      {activeTab === "draft" && (
        <div className={sideContent.eventContent}>
          <div className="text-center">
            <h1>Ini draft event</h1>
          </div>
        </div>
      )}
      {activeTab === "previous" && (
        <div className={sideContent.eventContent}>
          <div className="text-center">
            <h1>Ini event sebelumnya</h1>
          </div>
        </div>
      )}
    </div>
  )
}