import { IEvent } from "@/types/event";
import Card from "../events/card";
import { getEvents } from "@/libs/events";

export default async function Cards() {
  const { result }: { result: IEvent[] } = await getEvents();
  return (
    <div className="w-full p-5 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] auto-rows-max gap-5">
      {result.map((item, idx) => {
        return (
          <Card key={idx} eventId={item.id} srcImgEvent={item.image} eventTitle={item.name} start_date={item.start_date} end_date={item.end_date} srcImgOrganizer={item.organizer.avatar} organizerName={item.organizer.name} type={item.type}/>
        )
      })}
    </div>
  )
}