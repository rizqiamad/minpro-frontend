'use client'

import Filter from "./filter";
import { IoMdClose } from "react-icons/io";
import UseOpen from "@/hooks/useOpen";
import { useEffect, useState } from "react";
import UseLocater from "@/hooks/useLocater";

export default function ResponsiveFilter() {
  const { open, hidden, menuHandler } = UseOpen()
  const { pathname, router, createQueryString } = UseLocater()
  const [openSorts, setOpenSorts] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open])

  const handleSorts = (sorts: string) => {
    const newQueryString = createQueryString("sorts", `${sorts}`)
    router.replace(`${pathname}?${newQueryString}`);
    setOpenSorts(false)
  }
  return (
    <>
      <div className="flex gap-2 items-center justify-evenly pt-4 lg:hidden">
        <button onClick={menuHandler} className="w-[45%] shadow-md hover:shadow-sm hover:text-blue-500 border rounded-md py-2 font-medium text-black/80 cursor-pointer">Filter</button>
        <div className="w-[45%] relative flex flex-col">
          <button onClick={() => setOpenSorts(!openSorts)} className="shadow-md hover:shadow-sm hover:text-blue-500 border rounded-md py-2 font-medium text-black/80 cursor-pointer">Urutkan</button>
          <div className={`top-12 bg-white z-20 rounded-lg shadow-lg border ${openSorts ? 'absolute' : 'hidden'}`}>
            <button className="font-semibold hover:text-lightBlue w-full py-4" onClick={() => handleSorts('asc')}>Waktu Mulai (Terdekat)</button>
            <button className="font-semibold hover:text-lightBlue w-full py-4" onClick={() => handleSorts('desc')}>Waktu Mulai (Terjauh)</button>
          </div>
        </div>
      </div>
      <div className={`${open ? 'fixed inset-0 bg-black/50 z-40' : 'hidden'}`}></div>
      <div className={`${open ? 'inline-flex w-fit opacity-1 translate-x-0' : 'opacity-0 -translate-x-72'} ${hidden ? '' : 'hidden'} transition duration-300 flex-col fixed top-0 bottom-0 z-50 bg-white overflow-auto`}>
        <button onClick={menuHandler} className="w-fit p-4 text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <Filter />
      </div>
    </>
  )
}