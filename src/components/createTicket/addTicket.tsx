'use client'

import { ITicket } from "@/types/ticket"
import { createContext, useState } from "react"
import TabPagination from "../eventDetail/pagination"
import Link from "next/link"
import Share from "../eventDetail/share"
import { IEvent } from "@/types/event"
import TicketOrder from "../eventDetail/ticketOrder"

interface IProps {
  result: IEvent
  ticketResult: ITicket[]
  params: { event_id: string }
}

export interface ITicketContext {
  ticket: ITicket
  qty: number
}

export interface TicketContextValue {
  ticketCart: ITicketContext[] | null
  setTicketCart: (param: ITicketContext[] | null) => void
}

export const TicketContext = createContext<TicketContextValue | null>(null)

export default function AddTicket({ result, ticketResult, params }: IProps) {
  const [activeTab, setActiveTab] = useState<boolean>(false);
  const handleClickTab = (tab: boolean) => {
    setActiveTab(tab);
  };
  const [ticketCart, setTicketCart] = useState<ITicketContext[] | null>(null)
  console.log(ticketCart);
  return (
    <>
      <TicketContext.Provider value={{ ticketCart, setTicketCart }}>
        <div className={`flex flex-col xl:w-[70%] xl:px-6`}>
          <div className={`w-full flex border-b justify-between`}>
            <button
              className={`w-[300px] ${!activeTab ? "font-bold border-b-4 border-lightBlue" : ""
                }`}
              onClick={() => handleClickTab(false)}
            >
              <h1 className="p-3">DESCRIPTION</h1>
            </button>
            <button
              className={`w-[300px] ${activeTab ? "font-bold border-b-4 border-lightBlue" : ""
                }`}
              onClick={() => handleClickTab(true)}
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
        <div className="sticky top-0 flex flex-col xl:w-[30%] xl:self-start">
          <div className="rounded-xl shadow-2xl flex flex-col gap-4 px-4 py-6">
            <div className="border-b pb-4 flex flex-col gap-6">
              {ticketCart ? (
                ticketCart.map((item, idx) => {
                  return (
                    <div className="flex flex-col">
                      <span>{item.ticket.name}</span>
                      <div className="flex items-center">
                        <span>{item.qty}Tiket</span>
                        <span>{item.qty * item.ticket.price}</span>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h1>DISINI ADA TIKET</h1>
              )}
            </div>
            <Link href={`/events/${params.event_id}/order`} className="bg-lightBlue rounded-md text-center text-white py-2 font-semibold">Pesan Sekarang</Link>
          </div>
          <Share slug={params.event_id} />
        </div>
      </TicketContext.Provider>
    </>
  )
}