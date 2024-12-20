'use client'

import Filter from "./filter";
import { IoMdClose } from "react-icons/io";
import UseOpen from "@/hooks/useOpen";
import { useEffect } from "react";

export default function ResponsiveFilter() {
  const { open, hidden, menuHandler } = UseOpen()

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open])
  return (
    <>
      <div className="flex gap-2 items-center justify-evenly pt-4 lg:hidden">
        <button onClick={menuHandler} className="w-[45%] shadow-md hover:shadow-sm hover:text-blue-500 border rounded-md py-2 font-medium text-black/80 cursor-pointer">Filter</button>
        <button className="w-[45%] shadow-md hover:shadow-sm hover:text-blue-500 border rounded-md py-2 font-medium text-black/80 cursor-pointer">Urutkan</button>
      </div>
      <div className={`${open ? 'fixed inset-0 bg-black/50 z-10' : 'hidden'}`}></div>
      <div className={`${open ? 'inline-flex w-fit opacity-1 translate-x-0' : 'opacity-0 -translate-x-72'} ${hidden ? '' : 'hidden'} transition duration-300 flex-col fixed top-0 bottom-0 z-20 bg-white overflow-auto`}>
        <button onClick={menuHandler} className="w-fit p-4 text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <Filter />
      </div>
    </>
  )
}