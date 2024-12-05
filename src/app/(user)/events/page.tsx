import Card from "@/components/events/card";
import Filter from "@/components/events/filter";

export default function EventsPage(){
  return(
    <main className="flex">
      <Filter />
      <div className="p-5 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] auto-rows-max gap-5 w-[78%]">
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