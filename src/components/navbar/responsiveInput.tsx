'use client'

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

export default function ResponsiveInput() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}><FaMagnifyingGlass className="text-xl" /></button>
      <div className={`absolute left-0 right-0 p-5 top-0 bg-lightBlue flex gap-4 ${open ? '' : 'hidden'}`}>
        <button onClick={() => setOpen(!open)}><FaArrowLeft /></button>
        <input type="text" className="w-full text-black outline-none py-2 px-4" />
        <button><FaMagnifyingGlass className="text-xl" /></button>
      </div>
    </>
  )
}