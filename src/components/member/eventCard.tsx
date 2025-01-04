import { displayDate, formatDate } from "@/helpers/formatDate";
import UseOpen from "@/hooks/useOpen";
import { getTicketsUser } from "@/libs/tickets";
import { IEvent } from "@/types/event";
import { ITicket } from "@/types/ticket";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import UserTickets from "./userTickets";

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
            <UserTickets key={idx} item={item} />
          )
        })}
      </div>
    </>
  )
}