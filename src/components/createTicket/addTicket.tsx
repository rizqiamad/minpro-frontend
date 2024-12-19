'use client'

import { ITicket } from "@/types/ticket"
import { createContext, useState } from "react"
import Link from "next/link"
import Share from "../eventDetail/share"
import { IEvent } from "@/types/event"
import TicketOrder from "../eventDetail/ticketOrder"
import Image from "next/image"
import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency"

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
            <div className="flex flex-col gap-6">
              {ticketCart && ticketCart.length > 0 ? (
                ticketCart.map((item, idx) => {
                  return (
                    <div className="flex border-b pb-4 rounded-md gap-4" key={idx}>
                      <div>
                        <Image src={`https://assets.loket.com/web/assets/img/ic-ticket-widget.svg`} alt="Icon" width={50} height={50} />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <span className="font-semibold">{item.ticket.name}</span>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-semibold">{item.qty} Tiket</span>
                          <span className="font-semibold text-blue-500">{formatRupiahTanpaDesimal(item.qty * item.ticket.price)}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h1>DISINI ADA TIKET</h1>
              )}
            </div>
            <div className="flex justify-between items-center py-2">
              {ticketCart && ticketCart?.length > 0 ? (
                <>
                  <span>Total {ticketCart.reduce((a,b) => a + b.qty, 0)} tiket</span>
                  <span className="font-semibold text-blue-500 text-xl">{formatRupiahTanpaDesimal(ticketCart.reduce((a,b) => a + (b.ticket.price * b.qty), 0))}</span>
                </>
              ) : null}
            </div>
            <Link href={`/events/${params.event_id}/order`} className="bg-lightBlue rounded-md text-center text-white py-2 font-semibold">Pesan Sekarang</Link>
          </div>
          <Share slug={params.event_id} />
        </div>
      </TicketContext.Provider>
    </>
  )
}