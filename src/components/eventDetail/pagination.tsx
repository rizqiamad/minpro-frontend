'use client'

import { IEvent } from "@/types/event";
import { ITicket } from "@/types/ticket";
import { useState } from "react";
import TicketOrder from "./ticketOrder";

interface IProps {
  result: IEvent
  ticketResult: ITicket[]
}

export default function TabPagination({ result, ticketResult }: IProps) {
  const [activeTab, setActiveTab] = useState<boolean>(false);
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
                <TicketOrder key={idx} ticket={item} />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}