'use client'

import { createContext, useState } from "react";
import FilterAccordion from "./filterAccordion";

export interface IValue {
  openAccordion: string | null
  setOpenAccordion: (param: string | null) => void
}

export const FilterContext = createContext<IValue | null>(null)

export default function   Filter() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  return (
    <div className="w-72 border-r py-6 border-slate-400 h-full">
      <h1 className="text-xl font-semibold mb-4 px-6">Filter</h1>
      <FilterContext.Provider value={{openAccordion, setOpenAccordion}}>
        <FilterAccordion filterName="Location" />
        <FilterAccordion filterName="Category" />
        <FilterAccordion filterName="Time" />
      </FilterContext.Provider>
    </div>
  )
}