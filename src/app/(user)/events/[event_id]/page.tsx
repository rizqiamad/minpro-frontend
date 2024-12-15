import { getEventById } from "@/libs/events"
import { IEvent } from "@/types/event"
import Image from "next/image"

export default async function EventDetail({ params }: { params: { event_id: string } }) {
  const { result }: { result: IEvent } = await getEventById(params.event_id)
  return (
    <main className="flex gap-4 flex-col tablet:flex-row">
      <div className="tablet:flex-3">
        <div className="relative">
          <Image src={result.image} alt={result.name} fill/>
        </div>
      </div>
      <div className="tablet:flex-1"></div>
    </main>
  )
}