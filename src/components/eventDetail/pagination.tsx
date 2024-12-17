'use client'

import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import { formatDateLong } from "@/helpers/formatDate";
import { getTickets } from "@/libs/tickets";
import { IEvent } from "@/types/event";
import { ITicket } from "@/types/ticket";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

interface IProps {
  result: IEvent
  ticketResult: ITicket[]
}

export default function TabPagination({ result, ticketResult }: IProps) {
  const [activeTab, setActiveTab] = useState<boolean>(false);
  const [order, setOrder] = useState<number>(0)
  const handleClick = (tab: boolean) => {
    setActiveTab(tab);
  };
  return (
    <div className={`flex flex-col xl:w-[70%] xl:px-6`}>
      <div className={`w-full flex border-b justify-between`}>
        <button
          className={`w-[300px] ${!activeTab ? "font-bold border-b-4 border-lightBlue" : ""
            }`}
          onClick={() => handleClick(false)}
        >
          <h1 className="p-3">DESCRIPTION</h1>
        </button>
        <button
          className={`w-[300px] ${activeTab ? "font-bold border-b-4 border-lightBlue" : ""
            }`}
          onClick={() => handleClick(true)}
        >
          <h1 className="p-3">TICKET</h1>
        </button>
      </div>
      <div className="mt-10 desc-content">
        {/* isi kontent */}
        {!activeTab && (
          <>
            {result.description ? (<>
              <h1 className="text-3xl font-semibold mb-3 border-b-2 py-2">Description</h1>
              <div dangerouslySetInnerHTML={{ __html: result.description }} className="text-justify" />
            </>) : null}
            {result.terms_condition ? (<>
              <h1 className="text-3xl font-semibold mt-10 mb-3 border-b-2 py-2">Terms & Condition</h1>
              <div dangerouslySetInnerHTML={{ __html: result.terms_condition }} className="text-justify" />
            </>) : null}
          </>
        )}
        {activeTab && (
          <div className="flex flex-col gap-6">
            {ticketResult.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col bg-sky-400/10 border border-lightBlue px-10 pt-4 gap-4 rounded-xl relative">
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
                    <div className="flex items-center gap-2">
                      <button className="w-[20px] h-[20px] rounded-full font-semibold border border-black" onClick={() => setOrder(order + 1)}>+</button>
                      <div>{order}</div>
                      <button className="w-[20px] h-[20px] rounded-full font-semibold border border-black" onClick={() => setOrder(order - 1)}>-</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}