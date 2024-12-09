'use client'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { category, location, time } from "./filterList";
import { useContext } from "react";
import { FilterContext, IValue } from "./filter";

export default function FilterAccordion({ filterName }: { filterName: string }) {
  const context = useContext<IValue | null>(FilterContext)

  if (!context) {
    throw new Error('There is no context')
  }

  const { openAccordion, setOpenAccordion } = context
  let data: string[] = []
  if (filterName === "Location") {
    data = location;
  } else if (filterName === "Category") {
    data = category;
  } else {
    data = time;
  }

  const isOpen = openAccordion === filterName

  const handleToogle = (): void => {
    setOpenAccordion(isOpen ? null : filterName)
  }
  return (
    <>
      <button onClick={handleToogle} className="flex justify-between w-full text-xl items-center cursor-pointer my-2 px-6">
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