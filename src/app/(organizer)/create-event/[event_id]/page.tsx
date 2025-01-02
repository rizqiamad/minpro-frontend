import CreateTicket from "@/components/createTicket/createTicket";
import LinkCheck from "@/components/createTicket/linkCheck";
import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import { formatDateLong } from "@/helpers/formatDate";
import { getEventDetail } from "@/libs/events";
import { getTickets } from "@/libs/tickets";
import { ITicket } from "@/types/ticket";
import { FaClock, FaPencilAlt, FaTrash } from "react-icons/fa";

export default async function TicketPage({ params }: { params: { event_id: string } }) {
  const result: ITicket[] = await getTickets(params.event_id);
  const getEndDate: { result: { end_date: string } } = await getEventDetail(params.event_id, 1)
  const getType: { result: { type: 'free' | 'paid' } } = await getEventDetail(params.event_id, 0, 1)

  return (
    <main>
      <div className='rounded-2xl sm:mx-10 p-10 tablet:mx-52 shadow-2xl md:my-20'>
        <CreateTicket eventId={params.event_id} end_date={getEndDate.result.end_date} type={getType.result.type} />
        <div className="mt-10 border-t border-black pt-4">
          <h1 className="text-2xl mb-6 font-[500]">TICKET ANDA AKAN MUNCUL DISINI</h1>
          <div className="flex flex-col gap-6">
            {result && result.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col desc-content bg-sky-400/10 border border-lightBlue px-10 pt-4 gap-4 rounded-xl relative">
                  <div className="w-[40px] h-[40px] rounded-full bg-white absolute -right-5 bottom-9 border-l border-lightBlue"></div>
                  <div className="w-[40px] h-[40px] rounded-full bg-white absolute -left-5 bottom-9 border-r border-lightBlue"></div>
                  <span className="font-semibold text-xl">{item.name}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.description }} />
                  {new Date() >= new Date(item.start_date) ? (
                    <span className="flex gap-2 items-center text-lightBlue"><FaClock /> Berakhir tanggal {formatDateLong(item.end_date)}</span>
                  ) : (
                    <span className="flex gap-2 items-center text-lightBlue"><FaClock /> Tiket akan mulai dijual pada {formatDateLong(item.start_date)}</span>
                  )}
                  <div className="py-4 border-t border-black border-dashed flex items-center justify-between">
                    <span className="font-semibold">{formatRupiahTanpaDesimal(item.price)}</span>
                    <div className="flex items-center gap-4">
                      <button><FaPencilAlt className="text-lightBlue" /></button>
                      <button><FaTrash className="text-red-500" /></button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-10 border-t border-black pt-4">
          <LinkCheck result={result} />
        </div>
      </div>
    </main>
  )
}