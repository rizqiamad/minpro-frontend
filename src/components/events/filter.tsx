'use client'

import { createContext, useState } from "react";
import FilterAccordion from "./filterAccordion";
import { RiLoopLeftFill } from "react-icons/ri";

export interface IValue {
  openAccordion: string | null
  setOpenAccordion: (param: string | null) => void
}

export const FilterContext = createContext<IValue | null>(null)

export default function Filter() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  return (
    <div className="w-72 py-6 h-full">
      <div className="flex justify-between items-center pb-4 px-6 border-b">
        <h1 className="text-xl font-semibold">Filter</h1>
        <button onClick={() => location.reload()}>
          <RiLoopLeftFill />
        </button>
      </div>
      <FilterContext.Provider value={{ openAccordion, setOpenAccordion }}>
        <FilterAccordion filterName="Location" />
        <FilterAccordion filterName="Category" />
        <FilterAccordion filterName="Time" />
      </FilterContext.Provider>
    </div>
  )
}