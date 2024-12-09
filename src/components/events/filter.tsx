'use client'

import { createContext, useState } from "react";
import FilterAccordion from "./filterAccordion";
import { RiLoopLeftFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export interface IValue {
  openAccordion: string | null
  setOpenAccordion: (param: string | null) => void
}

export const FilterContext = createContext<IValue | null>(null)

export default function Filter() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div className="w-72 border-r py-6 border-slate-400 h-full">
      <div className="flex justify-between items-center pb-4 px-6 border-b">
        <h1 className="text-xl font-semibold">Filter</h1>
        <button onClick={() => router.refresh()}>
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