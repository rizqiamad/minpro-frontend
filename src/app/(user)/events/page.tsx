import Card from "@/components/events/card";
import Filter from "@/components/events/filter";
import ResponsiveFilter from "@/components/events/responsiveFilter";

export default function EventsPage() {
  return (
    <main className="flex min-h-[45rem] flex-col md:flex-row">
      <div className="hidden md:block">
        <Filter />
      </div>
      <ResponsiveFilter />
      <div className="w-full p-5 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] auto-rows-max gap-5 md:w-[78%]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}