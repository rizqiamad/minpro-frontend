import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency"
import { formatDateLong } from "@/helpers/formatDate"
import { ITicket } from "@/types/ticket"
import { useContext, useState } from "react"
import { FaClock } from "react-icons/fa"
import { TicketContext, TicketContextValue } from "../createTransaction/addTicket"

export default function TicketOrder({ ticket }: { ticket: ITicket }) {
  const [order, setOrder] = useState<number>(0)
  const isSoldOut = !ticket.seats ? true : false
  const lt = new Date(ticket.start_date) > new Date()
  const gt = new Date(ticket.end_date) < new Date()
  const isTheTime = lt ? true : gt ? true : false
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const context = useContext<TicketContextValue | null>(TicketContext)

  if (!context) {
    throw new Error('There is no context')
  }

  const { ticketCart, setTicketCart } = context

  const handleAddTicket = () => {
    setOrder(order + 1)
    if (order === ticket.seats - 1) {
      setIsDisabled(true)
      alert('The ticket is ran out')
    }
    const ticketCartId = ticketCart?.findIndex(item => item.ticket.id == ticket.id)
    if (ticketCartId! > -1 && ticketCart) {
      const newTicketCart = [...ticketCart]
      newTicketCart[ticketCartId!].qty = order + 1
      console.log(newTicketCart);

      setTicketCart(newTicketCart)
    } else if (ticketCart) {
      if (ticketCart.length > 0) {
        setTicketCart([...ticketCart!, { ticket, qty: 1 }])
      } else {
        setTicketCart([{ ticket, qty: 1 }])
      }
    }
  }

  const handleDecreaseTicket = () => {
    setOrder(order - 1)
    if (isDisabled) setIsDisabled(false)
    const ticketCartId = ticketCart?.findIndex(item => item.ticket.id == ticket.id)
    console.log(ticketCart);

    if (ticketCartId! > -1 && ticketCart) {
      const newTicketCart = [...ticketCart]
      newTicketCart[ticketCartId!].qty = order - 1
      setTicketCart(newTicketCart)
    }
    if (order === 1 && ticketCart && ticketCartId! > -1) {
      const newTicketCart = [...ticketCart]
      newTicketCart.splice(ticketCartId as number, 1)
      setTicketCart(newTicketCart)
    }
  }

  return (
    <div className={`${isSoldOut && 'border-slate-300 bg-slate-300/10'} ${isTheTime && 'border-slate-300 bg-slate-300/10'} flex flex-col bg-sky-400/10 border border-lightBlue px-10 pt-4 gap-4 rounded-xl relative`}>
      <div className={`${isSoldOut && 'border-slate-300'} ${isTheTime && 'border-slate-300'} w-[40px] h-[40px] rounded-full bg-white absolute -right-5 bottom-9 border-l border-lightBlue`}></div>
      <div className={`${isSoldOut && 'border-slate-300'} ${isTheTime && 'border-slate-300'} w-[40px] h-[40px] rounded-full bg-white absolute -left-5 bottom-9 border-r border-lightBlue`}></div>
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
          {isSoldOut ? (
            <div className="text-xl font-semibold text-red-500">TICKETS ARE SOLD OUT</div>
          ) : isTheTime ? (
            <div className="text-xl font-semibold text-red-500">{gt && 'SALE ENDED'}{lt && 'SALE NOT STARTED YET'}</div>
          ) : (
            <>
              <button onClick={handleDecreaseTicket} disabled={order === 0} className={`disabled:cursor-pointer w-[25px] h-[25px] rounded-full font-semibold border-2 border-lightBlue flex items-center justify-center`}>-</button>
              <div>{order}</div>
              <button disabled={isDisabled} onClick={handleAddTicket} className="disabled:opacity-30 w-[25px] h-[25px] rounded-full font-semibold border-2 border-lightBlue flex items-center justify-center">+</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}