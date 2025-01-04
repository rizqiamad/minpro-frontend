'use client'

import Card from "@/components/events/card";
import OrganizerCard from "@/components/events/organizerCard";
import Hero from "@/components/hero/hero";
import userGuard from "@/hoc/userProtect";

function HomePage() {
  return (
    <main>
      <Hero />
      <div className="my-4">
        <h1 className="text-2xl font-medium mx-4">Event Kami</h1>
        <div className="flex gap-4 overflow-x-scroll py-4 px-4 scrollbar-hide">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium mx-4">Organizer Yang Sudah Bergabung</h1>
        <div className="flex gap-4 overflow-x-scroll py-4 px-4 scrollbar-hide">
          <OrganizerCard />
        </div>
      </div>
    </main>
  )
}

export default userGuard(HomePage)