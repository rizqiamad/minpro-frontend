import PayButton from "@/components/midtrans/payBtn";
import CountDown from "@/components/order/countDown";
import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import { formatDate } from "@/helpers/formatDate";
import { formatTime } from "@/helpers/formatTime";
import { getTransactionDetail } from "@/libs/transactions";
import { ITransaction } from "@/types/transaction";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export default async function OrderPage({ params }: { params: { transaction_id: string } }) {
  const transaction: ITransaction = await getTransactionDetail(params.transaction_id)
  return (
    <main className="flex gap-16 tablet:flex-row flex-col sm:px-10 tablet:px-20 py-4">
      <div className="tablet:w-[60%]">
        <h1 className="text-2xl font-semibold my-2">Detail Pemesanan</h1>
        <div className="rounded-md border p-3 tablet:mb-4">
          <div className="flex gap-4 py-4">
            <div className="w-44 min-h-full rounded-md overflow-hidden relative">
              <Image src={transaction.Ticket_Transaction[0].ticket.events.image} alt={transaction.Ticket_Transaction[0].ticket.events.name} fill />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold line-clamp-1">{transaction.Ticket_Transaction[0].ticket.events.name}</span>
              <span className="flex items-center gap-2"><SlCalender className="text-lightBlue" />{formatDate(transaction.Ticket_Transaction[0].ticket.events.start_date)} - {formatDate(transaction.Ticket_Transaction[0].ticket.events.end_date)}</span>
              <span className="flex items-center gap-2"><FaClock className="text-lightBlue" />{formatTime(transaction.Ticket_Transaction[0].ticket.events.start_time)} - {formatTime(transaction.Ticket_Transaction[0].ticket.events.end_time)}</span>
              <span className="line-clamp-1 flex items-center gap-2"><FaLocationDot className="text-lightBlue" />{transaction.Ticket_Transaction[0].ticket.events.location.name_place} {transaction.Ticket_Transaction[0].ticket.events.location.address} {transaction.Ticket_Transaction[0].ticket.events.location.city.city}</span>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-t border-b border-black/50">
                <th className="py-2 text-start">Jenis Tiket</th>
                <th className="text-end">Harga</th>
                <th className="text-end">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {transaction.Ticket_Transaction.map((ticketTransaction, idx) => {
                return (
                  <tr key={idx}>
                    <td className="text-start flex items-center gap-2">
                      <span>
                        <Image src={`https://assets.loket.com/web/assets/img/ic-ticket-widget.svg`} alt="Icon" width={40} height={40} />
                      </span>
                      <span>
                        {ticketTransaction.ticket.name}
                      </span>
                    </td>
                    <td className="text-end">{formatRupiahTanpaDesimal(ticketTransaction.ticket.price)}</td>
                    <td className="text-end">x{ticketTransaction.quantity}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col rounded-md shadow-xl py-6 px-4 tablet:w-[40%] gap-2">
        <CountDown date={transaction.expiresAt} />
        <h1 className="text-2xl font-semibold mb-2">Detail Harga</h1>
        <div className="flex justify-between items-center">
          <span>Total Harga Tiket</span>
          <span>{formatRupiahTanpaDesimal(transaction.base_price)}</span>
        </div>
        {transaction.coupon && (
          <div className="flex justify-between items-center">
            <span>Coupon</span>
            <span className="font-semibold text-red-500">- {formatRupiahTanpaDesimal(transaction.base_price / 10)}</span>
          </div>
        )}
        {/* <div><span>Biaya Platform</span></div> */}
        <div className="flex justify-between items-center font-semibold text-xl border-t border-b py-2">
          <span>Total Bayar</span>
          <span>{formatRupiahTanpaDesimal(transaction.final_price)}</span>
        </div>
        <PayButton base_price={transaction.base_price} final_price={transaction.final_price} transaction_id={params.transaction_id} />
      </div>
    </main>
  )
}