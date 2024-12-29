import Card from "@/components/events/card";
import OrganizerCard from "@/components/events/organizerCard";
import Hero from "@/components/hero/hero";

export default function HomePage() {
  return (
    <main className="max-w-[70rem] mx-auto">
      <Hero />
      <div className="my-4">
        <h1 className="sm:text-2xl text-xl font-medium mx-4">Event Kami</h1>
        <div className="flex gap-4 overflow-x-scroll py-4 px-4 scrollbar-hide">
          <Card />
          <Card />
          <Card />
          <Card />
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