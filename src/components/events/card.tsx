import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import { displayDate, formatDate } from "@/helpers/formatDate";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  eventId: string
  srcImgEvent: string
  eventTitle: string
  start_date: string
  end_date: string
  srcImgOrganizer: string
  organizerName: string
  type: string
  price: number
}

export default function Card({
  eventId,
  srcImgEvent,
  eventTitle,
  start_date,
  end_date,
  srcImgOrganizer,
  organizerName,
  type,
  price
}: IProps) {
  const date = displayDate(formatDate(start_date), formatDate(end_date))

  return (
    <Link target="blank" href={`events/${eventId}`} className="shadow-[0px_0px_5px_-1px_rgba(0,0,0,0.75)] min-w-[13rem] h-[20rem] rounded-md overflow-hidden">
      <div className="relative w-full h-[40%]">
        <Image src={srcImgEvent} alt={eventTitle} fill />
      </div>
      <div className="px-2 py-2 flex flex-col h-[60%]">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold line-clamp-2">{eventTitle}</h2>
          <div className="text-slate-500 font-[450]">{date}</div>
          <div className="font-semibold">{type === 'free' ? (<span className="text-blue-500">Free</span>) : (<span className="text-green-400">{formatRupiahTanpaDesimal(price)}</span>)}</div>
        </div>
        <div className="flex items-center gap-2 justify-self-end mt-auto border-t py-2">
          <Image src={srcImgOrganizer || ''} alt={organizerName} width={35} height={35} />
          <div className="text-xs flex flex-col line-clamp-1">
            <span>Diselenggarakan oleh : </span>
            <span className="font-semibold text-slate-500">{organizerName}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}