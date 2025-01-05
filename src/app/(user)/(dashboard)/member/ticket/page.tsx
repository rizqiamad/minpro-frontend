"use client";

import { useEffect, useState } from "react";
import { IoTicket } from "react-icons/io5";
import sideContent from "@/components/sidebar/content/content.module.css";
import { IEvent } from "@/types/event";
import { getEventsUser } from "@/libs/events";
import ReviewCard from "@/components/member/reviewCard";
import EventCard from "@/components/member/eventCard";

export default function TicketUserPage() {
  type Tab = 'active' | 'unactive'
  const [activeTab, setActiveTab] = useState<Tab>('active');
  const [eventsActive, setEventsActive] = useState<IEvent[]>([]);
  const [eventsUnactive, setEventsUnactive] = useState<IEvent[]>([]);


  //fungsi klik pada tab
  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const getEventsActive = async () => {
    const dataActive = await getEventsUser('active')
    setEventsActive(dataActive)
  }

  const getEventsUnactive = async () => {
    const dataUnactive = await getEventsUser('unactive')
    setEventsUnactive(dataUnactive)
  }

  useEffect(() => {
    getEventsActive()
    getEventsUnactive()
  }, [])

  return (
    <section className={sideContent.eventSection}>
      <h1 className={sideContent.mainTitle}>Event Saya</h1>
      <div className={sideContent.eventContainer}>
        <div className={sideContent.tabContainer}>
          <button
            className={`${sideContent.eventTab} ${activeTab === 'active'
              ? "font-bold border-b-4 border-lightBlue"
              : ""
              }`}
            onClick={() => handleClick('active')}
          >
            <h1 className="p-3">Event Aktif</h1>
          </button>
          <button
            className={`${sideContent.eventTab} ${activeTab === 'unactive'
              ? "font-bold border-b-4 border-lightBlue"
              : ""
              }`}
            onClick={() => handleClick('unactive')}
          >
            <h1 className="p-3">Event Sebelumnya</h1>
          </button>
        </div>
        {/* isi kontent */}
        {activeTab === 'active' && (
          !eventsActive.length ? (
            <div className={sideContent.eventContent}>
              <div className="flex flex-col justify-center items-center">
                <IoTicket className="text-[6rem] mb-2 text-zinc-500" />
                <h1>
                  Kamu belum memiliki tiket, silakan membeli tiket terlebih
                  dahulu, ini Event Active.
                </h1>
              </div>
            </div>
          ) : (
            <div className="w-full py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {eventsActive.map((item, idx) => {
                return (
                  <EventCard key={idx} event={item} />
                )
              })}
            </div>
          )
        )}
        {activeTab === 'unactive' && (
          !eventsUnactive.length ? (
            <div className={sideContent.eventContent}>
              <div className="flex flex-col justify-center items-center">
                <IoTicket className="text-[6rem] mb-2 text-zinc-500" />
                <h1>
                  Kamu belum memiliki tiket, silakan membeli tiket terlebih
                  dahulu, ini Event yang sudah tidak Active.
                </h1>
              </div>
            </div>
          ) : (
            <div className="w-full py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {eventsUnactive.map((item, idx) => {
                return (
                  <ReviewCard key={idx} event={item} />
                )
              })}
            </div>
          )
        )}
      </div>
    </section>
  );
}
