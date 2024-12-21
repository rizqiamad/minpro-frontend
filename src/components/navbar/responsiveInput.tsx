'use client'

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import InputNavbar from "./input";

export default function ResponsiveInput() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}><FaMagnifyingGlass className="text-xl" /></button>
      <div className={`absolute left-0 right-0 p-5 top-0 bg-blueNavy flex gap-4 ${open ? '' : 'hidden'}`}>
        <button onClick={() => setOpen(!open)}><FaArrowLeft /></button>
        <div className="w-[100%] flex items-center h-8 overflow-hidden rounded-md">
          <InputNavbar />
        </div>
      </div>
    </>
  )
}