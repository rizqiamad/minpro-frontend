import FormReview from "@/components/review/formReview";
import { displayDate, formatDate } from "@/helpers/formatDate";
import { formatTime } from "@/helpers/formatTime";
import { getEventDetail } from "@/libs/events";
import { IEvent } from "@/types/event";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export default async function ReviewPage({ params }: { params: { event_id: string } }) {
  const { result }: { result: IEvent } = await getEventDetail(params.event_id)
  const date = displayDate(formatDate(result.start_date), formatDate(result.end_date))
  const time = `${formatTime(result.start_time)} - ${formatTime(result.end_time)}`
  const location = `${result.location.name_place}, ${result.location.address}, ${result.location.city.city}`
  return (
    <main>
      <div className="sm:mx-20 md:mx-40 tablet:mx-60">
        <div className="flex flex-col gap-6 rounded-b-xl">
          <div className="relative overflow-hidden aspect-[16/9] min-h-[15rem] flex-1">
            <Image src={result.image} alt={result.name} fill />
          </div>
          <div className="shadow-2xl flex flex-col gap-2 rounded-b-xl">
            <div className="flex flex-col gap-2 px-6 py-4">
              <h1 className="text-xl font-semibold line-clamp-4">{result.name}</h1>
              <div className="flex items-center gap-2"><span className="text-lightBlue"><SlCalender /></span><span>{date}</span></div>
              <div className="flex items-center gap-2"><span className="text-lightBlue"><FaClock /></span><span>{time}</span></div>
              <div className="flex items-center gap-2"><span className="text-lightBlue"><FaLocationDot /></span><span>{location}</span></div>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-md my-4 p-4">
          <h1 className="font-semibold text-2xl mb-4">Rate and drop your comment here</h1>
          <FormReview event_id={params.event_id} />
        </div>
      </div>
    </main>
  )
}