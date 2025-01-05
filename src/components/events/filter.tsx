'use client'

import { createContext, useEffect, useState } from "react";
import FilterAccordion from "./filterAccordion";
import { RiLoopLeftFill } from "react-icons/ri";
import UseLocater from "@/hooks/useLocater";

export interface IValue {
  openAccordion: string | null
  setOpenAccordion: (param: string | null) => void
}

export const FilterContext = createContext<IValue | null>(null)

export default function Filter() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { searchParams, pathname, router, createQueryString } = UseLocater()
  const [cat, setCat] = useState<string>(searchParams.get('cat') || '')
  const [city, setCity] = useState<string>(searchParams.get('c') || '')

  useEffect(() => {
    const newQueryString = createQueryString("cat", `${cat}`)
    router.replace(`${pathname}?${newQueryString}`);
  }, [cat]);
  
  useEffect(() => {
    const newQueryString = createQueryString("c", `${city}`)
    router.replace(`${pathname}?${newQueryString}`);
  }, [city]);

  const handleResetFilter = () => {
    router.replace(`${pathname}?page=1&sorts=asc`)
    router.refresh()
  }
  return (
    <div className="w-72 py-6 h-full">
      <div className="flex justify-between items-center pb-4 px-6 border-b">
        <h1 className="text-xl font-semibold">Filter</h1>
        <button onClick={handleResetFilter}>
          <RiLoopLeftFill />
        </button>
      </div>
      <FilterContext.Provider value={{ openAccordion, setOpenAccordion }}>
        <FilterAccordion filterName="Location" setCity={setCity} />
        <FilterAccordion filterName="Category" setCat={setCat} />
      </FilterContext.Provider>
    </div>
  )
}