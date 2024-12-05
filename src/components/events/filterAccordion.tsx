'use client'

import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { category, location, time } from "./filterList";

export default function FilterAccordion({ filterName }: { filterName: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let data: string[] = []
  filterName == 'Location' ? data = location : filterName == 'Category' ? data = category : data = time
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between w-full text-xl items-center cursor-pointer my-2 px-6">
        <div className={`${isOpen ? 'text-orange-300' : 'text-black'}`}>
          {filterName}
        </div>
        <div>
          {isOpen ? (<IoMdArrowDropup />) : (<IoMdArrowDropdown />)}
        </div>
      </button>
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col px-10`}>
        {data.map((item, idx) => {
          return (
            <button key={idx} className="text-start py-2 px-4 rounded-md hover:shadow-md">
              {item}
            </button>
          )
        })}
      </div>
    </>
  )
}