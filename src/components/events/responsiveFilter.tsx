'use client'

import Filter from "./filter";
import { IoMdClose } from "react-icons/io";
import UseOpen from "@/hooks/useOpen";

export default function ResponsiveFilter() {
  const { open, hidden, menuHandler } = UseOpen()
  return (
    <>
      <div className="flex gap-2 items-center justify-evenly pt-4 md:hidden">
        <button onClick={menuHandler} className="w-[45%] shadow-md hover:shadow-sm hover:text-blue-500 border rounded-md py-2 font-medium text-black/80 cursor-pointer">Filter</button>
        <button className="w-[45%] shadow-md hover:shadow-sm hover:text-blue-500 border rounded-md py-2 font-medium text-black/80 cursor-pointer">Urutkan</button>
      </div>
      <div className={`${open ? 'absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-10' : 'hidden'}`}></div>
      <div className={`${open ? 'inline-flex w-fit opacity-1 translate-x-0' : 'opacity-0 -translate-x-72'} ${hidden ? '' : 'hidden'} transition duration-300 flex-col absolute top-0 bottom-0 z-20 bg-white`}>
        <button onClick={menuHandler} className="w-fit p-4 text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <Filter />
      </div>
    </>
  )
}