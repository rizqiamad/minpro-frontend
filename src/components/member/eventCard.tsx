import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import { displayDate, formatDate, formatDateLong } from "@/helpers/formatDate";
import UseOpen from "@/hooks/useOpen";
import { getTicketsUser } from "@/libs/tickets";
import { IEvent } from "@/types/event";
import { ITicket } from "@/types/ticket";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaClock, FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function EventCard({ event }: { event: IEvent }) {
  const { open, hidden, menuHandler } = UseOpen()
  const [dataTickets, setDataTickets] = useState<ITicket[]>([])
  const date = displayDate(formatDate(event.start_date), formatDate(event.end_date))
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open])
  useEffect(() => {
    const getData = async () => {
      const result: ITicket[] = await getTicketsUser(event.id);
      setDataTickets(result)
    }
    getData()
  }, [])
  return (
    <>
      <div
        onClick={menuHandler}
        className="cursor-pointer shadow-[0px_0px_5px_-1px_rgba(0,0,0,0.75)] w-full h-auto rounded-md overflow-hidden flex flex-col"
      >
        <div className="relative w-full aspect-[4/3]">
          <Image src={event.image} alt={event.name} fill />
        </div>
        <div className="flex flex-col gap-1 flex-grow p-2">
          <h2 className="font-semibold line-clamp-2">{event.name}</h2>
          <div className="text-slate-500 font-[450]">{date}</div>
          <div className={`${event.type === 'free' ? 'text-blue-500' : 'text-green-400'} font-semibold`}>{event.type === 'free' ? 'Free' : 'Paid'}</div>
        </div>
      </div>
      <div className={`fixed ${hidden ? '' : 'hidden'} overflow-y-scroll z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} h-[80vh] overflow-y-scroll rounded-md w-full sm:w-[75%] xl:w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <div className="flex justify-center mb-4">
          <h1 className="font-semibold text-2xl line-clamp-2">Tiket yang sudah anda beli untuk event "{event.name}"</h1>
          <button onClick={menuHandler} className="w-fit p-4 text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        </div>
        {dataTickets.length > 0 && dataTickets.map((item, idx) => {
          return (
            <div key={idx} className="flex flex-col desc-content bg-sky-400/10 border border-lightBlue px-10 pt-4 gap-4 rounded-xl relative">
              <div className="w-[40px] h-[40px] rounded-full bg-white absolute -right-5 bottom-9 border-l border-lightBlue"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-white absolute -left-5 bottom-9 border-r border-lightBlue"></div>
              <span className="font-semibold text-xl">{item.name}</span>
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
              <div className="py-4 border-t border-black border-dashed">
                <span className="font-semibold">{formatRupiahTanpaDesimal(item.price)}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}