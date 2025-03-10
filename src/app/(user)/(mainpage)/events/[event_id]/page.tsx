import { getEventDetail } from "@/libs/events"
import { IEvent } from "@/types/event"
import Image from "next/image"
import { SlCalender } from "react-icons/sl";
import { FaClock, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { displayDate, formatDate } from "@/helpers/formatDate";
import { formatTime } from "@/helpers/formatTime";
import { ITicket } from "@/types/ticket";
import { getTickets } from "@/libs/tickets";
import AddTicket from "@/components/createTransaction/addTicket";
import { getAvgRating } from "@/libs/reviews";
import { getEventMetadata } from "@/libs/metadata";

export async function generateMetadata({ params }: { params: { event_id: string } }) {
  const data: IEvent = await getEventMetadata(params.event_id)
  return {
    title: data.name,
    description: 'Lihat jadwal, lokasi, dan harga tiket Cara Simpel Menyusun dan Menyelenggarakan Pelatihan yang tersedia. Beli tiket atau pesan secara online hanya di Loket.com',
    openGraph: {
      image: [data.image]
    }
  }
}

export default async function EventDetail({ params }: { params: { event_id: string } }) {
  const { result }: { result: IEvent } = await getEventDetail(params.event_id)
  const ticketResult: ITicket[] = await getTickets(params.event_id)
  const avgRating: number = await getAvgRating(result.organizer.id)
  const date = displayDate(formatDate(result.start_date), formatDate(result.end_date))
  const time = `${formatTime(result.start_time)} - ${formatTime(result.end_time)}`
  const location = `${result.location.name_place}, ${result.location.address}, ${result.location.city.city}`
  return (
    <main className="xl:px-28 xl:pt-10 flex flex-col pb-20">
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="relative xl:rounded-xl overflow-hidden aspect-[16/9] min-h-[15rem] xl:w-[70%] flex-1">
          <Image src={result.image} alt={result.name} fill />
        </div>
        <div className="rounded-xl shadow-2xl flex flex-col gap-2 xl:w-[30%]">
          <div className="flex flex-col gap-2 px-6 py-4 xl:p-6">
            <h1 className="text-xl font-semibold line-clamp-4">{result.name}</h1>
            <div className="flex items-center gap-2"><span className="text-lightBlue"><SlCalender /></span><span>{date}</span></div>
            <div className="flex items-center gap-2"><span className="text-lightBlue"><FaClock /></span><span>{time}</span></div>
            <div className="flex items-center gap-2"><span className="text-lightBlue"><FaLocationDot /></span><span>{location}</span></div>
          </div>
          <div className="flex items-center gap-4 mt-auto border-t py-4 px-6">
            <div>
              <Image src={result.organizer.avatar || ''} alt={result.organizer.name} width={35} height={35} />
            </div>
            <div className="flex flex-col">
              <span className="font-[490] text-slate-500">Diselenggarakan</span>
              <span className="font-semibold text-slate-500">{result.organizer.name}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <FaStar className={`text-3xl text-yellow-300`} />
              <span className="font-semibold">{avgRating ? avgRating.toFixed(1) : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 mt-10 px-10 xl:px-0">
        <AddTicket result={result} ticketResult={ticketResult} params={params} />
      </div>
    </main>
  )
}