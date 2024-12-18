import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency"
import { formatDateLong } from "@/helpers/formatDate"
import { ITicket } from "@/types/ticket"
import { useState } from "react"
import { FaClock } from "react-icons/fa"

export default function TicketOrder({ ticket }: { ticket: ITicket }) {
  const [order, setOrder] = useState<number>(0)
  return (
    <div className="flex flex-col bg-sky-400/10 border border-lightBlue px-10 pt-4 gap-4 rounded-xl relative">
      <div className="w-[40px] h-[40px] rounded-full bg-white absolute -right-5 bottom-9 border-l border-lightBlue"></div>
      <div className="w-[40px] h-[40px] rounded-full bg-white absolute -left-5 bottom-9 border-r border-lightBlue"></div>
      <span className="font-semibold text-xl">{ticket.name}</span>
      <span dangerouslySetInnerHTML={{ __html: ticket.description }} />
      {new Date() >= new Date(ticket.start_date) ? (
        <span className="flex gap-2 items-center text-lightBlue"><FaClock /> Berakhir tanggal {formatDateLong(ticket.end_date)}</span>
      ) : (
        <span className="flex gap-2 items-center text-lightBlue"><FaClock /> Tiket akan mulai dijual pada {formatDateLong(ticket.start_date)}</span>
      )}
      <div className="py-4 border-t border-black border-dashed flex items-center justify-between">
        <span className="font-semibold">{formatRupiahTanpaDesimal(ticket.price)}</span>
        <div className="flex items-center gap-2">
          <button className="w-[25px] h-[25px] rounded-full font-semibold border-2 border-lightBlue flex items-center justify-center" onClick={() => setOrder(order + 1)}>+</button>
          <div>{order}</div>
          <button className="w-[25px] h-[25px] rounded-full font-semibold border-2 border-lightBlue flex items-center justify-center" onClick={() => setOrder(order - 1)}>-</button>
        </div>
      </div>
    </div>
  )
}