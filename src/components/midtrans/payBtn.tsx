'use client'

import axios from "@/helpers/axios";
import UseOpen from "@/hooks/useOpen";
import { getSnapToken } from "@/libs/transactions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

interface IProps {
  base_price: number
  final_price: number
  transaction_id: string
}

export default function PayButton({ base_price, final_price, transaction_id }: IProps) {
  const { open, hidden, menuHandler } = UseOpen()
  const [isLoading, SetIsLoading] = useState<boolean>(false);
  const router = useRouter()

  const handleClick = async () => {
    if (base_price) {
      try {
        SetIsLoading(true)
        const token = await getSnapToken(final_price, Number(transaction_id))
        window.snap.pay(token)
      } catch (err) {
        console.log(err);
      } finally {
        SetIsLoading(false)
      }
    }
    else menuHandler()
  }

  const freeTransaction = async () => {
    const resBody = {
      transaction_status: 'settlement',
      order_id: transaction_id
    }

    try {
      const { data } = await axios.post('/transactions/midtrans-webhook', resBody)
      router.push('/')
      toast.success(data.message)
    } catch (err: any) {
      console.log(err);
      toast.error(err)
    }
  }
  return (
    <>
      <button disabled={isLoading} onClick={handleClick} className={`${isLoading && 'disabled:opacity-[0.5] disabled:bg-lightBlue/50 text-white'} py-2 bg-lightBlue text-white font-semibold rounded-md`}>
        {isLoading ? 'Loading ...' : 'Bayar Tiket'}
      </button>
      <div className={`fixed ${hidden ? '' : 'hidden'} overflow-y-scroll z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} flex flex-col items-center rounded-md sm:w-[75%] xl:w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <TiTick className="text-green-400 w-36 h-36" />
        <button onClick={freeTransaction} className="py-2 bg-lightBlue px-4 text-white font-semibold rounded-md">KONFIRMASI TRANSAKSI</button>
      </div>
    </>
  )
}