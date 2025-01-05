'use client'

import Card from "@/components/events/card";
import OrganizerCard from "@/components/events/organizerCard";
import Hero from "@/components/hero/hero";
<<<<<<< HEAD
import { getEventsDisplay } from "@/libs/events";
import { IEvent } from "@/types/event";

export default async function HomePage() {
  const dataEventsDisplay: IEvent[] = await getEventsDisplay()
=======
import userGuard from "@/hoc/userProtect";

function HomePage() {
>>>>>>> dashboard
  return (
    <main className="max-w-[70rem] mx-auto">
      <Hero />
      <div className="my-4">
        <h1 className="sm:text-2xl text-xl font-medium mx-4">Event Kami</h1>
        <div className="flex gap-4 overflow-x-scroll py-4 px-4 scrollbar-hide">
          {dataEventsDisplay.map((item, idx) => {
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