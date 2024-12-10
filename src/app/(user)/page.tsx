import Card from "@/components/events/card";
import SlideWrapper from "@/components/hero/slidewrapper";

export default function HomePage() {
  return (
    <main>
      <SlideWrapper />
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
    </main>
  )
}