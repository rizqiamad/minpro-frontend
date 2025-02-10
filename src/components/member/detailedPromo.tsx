import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency"
import UseOpen from "@/hooks/useOpen"
import useSession from "@/hooks/useSession"
import { getCoupon, getPoints } from "@/libs/transactions"
import side from "@/components/sidebar/sidebar.module.css";
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { BiDetail } from "react-icons/bi";

export default function DetailedPromo() {
  const { open, hidden, menuHandler } = UseOpen()
  const { user } = useSession()
  const [coupon, setCoupon] = useState<boolean>(false)
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    const getData = async () => {
      const getDataCoupon = await getCoupon()
      const getDataPoints = await getPoints()
      setCoupon(getDataCoupon)
      setPoints(getDataPoints)
    }
    getData()
  }, [])
  return (
    <>
      <button onClick={menuHandler} className="font-semibold items-center flex hover:bg-black/10 p-3 border-b">
        <BiDetail className={side.icons} />
        <p className="ml-2">Promo Detail</p>
      </button>
      <div className={`fixed ${hidden ? '' : 'hidden'} overflow-y-scroll z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} rounded-md w-full sm:w-[75%] xl:w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <button type="button" onClick={menuHandler} className="w-fit text-[1.5rem] hover:text-red-500 mb-6"><IoMdClose /></button>
        <p className="text-sm text-gray-500">Share your refcode : {user?.ref_code}</p>
        <p className="text-sm text-gray-500">to get 10000 points for discount</p>
        <p className="text-xl font-semibold text-black">You Have <span>{formatRupiahTanpaDesimal(points)}</span> Points</p>
        <span className="text-xs font-light ml-2 text-blue-500">*You can use this points to get discount for your transaction</span>
        <p className="text-xl font-semibold text-black">{coupon ? 'You have one Coupon' : 'You do not have any coupon'}</p>
        <span className="text-xs font-light ml-2 text-blue-500">*You can use this coupon to get 10% discount for your transaction</span>
      </div>
    </>
  )
}