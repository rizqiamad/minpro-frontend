import { displayDate, formatDate } from "@/helpers/formatDate";
import { IEvent } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

export default function ReviewCard({ event }: { event: IEvent }) {
  const date = displayDate(formatDate(event.start_date), formatDate(event.end_date))
  return (
    <Link
      href={`/create-event/${event.id}`}
      className="shadow-[0px_0px_5px_-1px_rgba(0,0,0,0.75)] w-full h-auto rounded-md overflow-hidden flex flex-col"
    >
      <div className="relative w-full aspect-[4/3]">
        <Image src={event.image} alt={event.name} fill />
      </div>
      <div className="flex flex-col gap-1 flex-grow p-2">
        <h2 className="font-semibold line-clamp-2">{event.name}</h2>
        <div className="text-slate-500 font-[450]">{date}</div>
        <Link href={`/review/${event.id}`} className="border border-lightBlue font-semibold hover:bg-lightBlue hover:text-white rounded-md py-2 text-center transition duration-200 my-1">Review Event</Link>
      </div>
    </Link>
  )
}