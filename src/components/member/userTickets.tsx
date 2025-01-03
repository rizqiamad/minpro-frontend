import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import { getAmountTicketsUser } from "@/libs/tickets";
import { ITicket } from "@/types/ticket";
import { useEffect, useState } from "react";

export default function UserTickets({ item }: { item: ITicket }) {
  const [amountTicket, setAmountTicket] = useState<number>(0)
  useEffect(() => {
    const getAmountData = async () => {
      const data = await getAmountTicketsUser(`${item.id}`)
      setAmountTicket(data)
    }
    getAmountData()
  }, [])
  return (
    <div className="flex flex-col desc-content bg-sky-400/10 border border-lightBlue px-10 pt-4 gap-4 rounded-xl relative">
      <div className="w-[40px] h-[40px] rounded-full bg-white absolute -right-5 bottom-9 border-l border-lightBlue"></div>
      <div className="w-[40px] h-[40px] rounded-full bg-white absolute -left-5 bottom-9 border-r border-lightBlue"></div>
      <span className="font-semibold text-xl">{item.name}</span>
      <span dangerouslySetInnerHTML={{ __html: item.description }} />
      <div className="py-4 border-t border-black border-dashed flex justify-between">
        <span className="font-semibold">{formatRupiahTanpaDesimal(item.price)}</span>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-black/50">Jumlah Tiket : </span>
          <span className="font-semibold text-lightBlue">{amountTicket}</span>
        </div>
      </div>
    </div>
  )
}