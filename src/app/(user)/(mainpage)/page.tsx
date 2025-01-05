'use client'

import Card from "@/components/events/card";
import OrganizerCard from "@/components/events/organizerCard";
import Hero from "@/components/hero/hero";
import userGuard from "@/hoc/userProtect";
import { getEventsDisplay } from "@/libs/events";
import { IEvent } from "@/types/event";
import { useEffect, useState } from "react";

function HomePage() {
  const [eventDisplay, setEventDisplay] = useState<IEvent[]>([])
  useEffect(() => {
    const getData = async () => {
      const dataEventsDisplay: IEvent[] = await getEventsDisplay()
      setEventDisplay(dataEventsDisplay)
    }
    getData()
  }, [])
  return (
    <main className="max-w-[70rem] mx-auto">
      <Hero />
      <div className="my-4">
        <h1 className="sm:text-2xl text-xl font-medium mx-4">Event Kami</h1>
        <div className="flex gap-4 overflow-x-scroll py-4 px-4 scrollbar-hide">
          {eventDisplay.map((item, idx) => {
            return (
              <Card
                key={idx}
                eventId={item.id}
                srcImgEvent={item.image}
                eventTitle={item.name}
                start_date={item.start_date}
                end_date={item.end_date}
                srcImgOrganizer={item.organizer.avatar}
                organizerName={item.organizer.name}
                type={item.type}
                price={item.Ticket[0].price}
              />
            )
          })}
        </div>
      </div>
      <div>
        <h1 className="sm:text-2xl text-xl font-medium mx-4">Organizer Yang Sudah Bergabung</h1>
        <div className="flex gap-4 overflow-x-scroll py-4 px-4 scrollbar-hide">
          <OrganizerCard />
        </div>
      </div>
    </main>
  )
}

export default userGuard(HomePage)