'use client'

import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import { category, location } from "./filterList";
import { useContext, useState } from "react";
import { FilterContext, IValue } from "./filter";

interface IProps {
  filterName: string
  setCat?: (key: string) => void
  setCity?: (key: string) => void
}

export default function FilterAccordion({ filterName, setCat, setCity }: IProps) {
  const context = useContext<IValue | null>(FilterContext)
  const [choice, setChoice] = useState<string>('')

  if (!context) {
    throw new Error('There is no context')
  }

  const { openAccordion, setOpenAccordion } = context
  let data: string[] = []
  if (filterName === "Location") {
    data = location;
  } else if (filterName === "Category") {
    data = category;
  }

  const isOpen = openAccordion === filterName

  const handleToogle = (): void => {
    setOpenAccordion(isOpen ? null : filterName)
  }

  const handleFilter = (value: string) => {
    if (setCat) setCat(value)
    if (setCity) setCity(value)
    handleToogle()
    setChoice(value)
  }

  const delFilter = () => {
    if (setCat) setCat('')
    if (setCity) setCity('')
    setChoice('')
  }
  return (
    <>
      {choice ? (
        <div className="w-full py-6 px-6 shadow-lg flex justify-between text-xl">
          <span className="font-semibold text-black/50">{choice}</span>
          <button className="hover:text-red-500" onClick={delFilter}><IoMdClose /></button>
        </div>
      ) : (
        <button
          onClick={handleToogle}
          className="flex justify-between w-full text-xl items-center cursor-pointer my-6 px-6"
        >
          <div className={`${isOpen ? 'text-orange-300' : 'text-black'}`}>
            {filterName}
          </div>
          <div>
            {isOpen ? (<IoMdArrowDropup />) : (<IoMdArrowDropdown />)}
          </div>
        </button>
      )}
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col px-10`}>
        {data.map((item, idx) => {
          return (
            <button
              onClick={() => handleFilter(item)}
              key={idx}
              className="text-start py-2 px-4 rounded-md hover:shadow-md hover:border"
            >
              {item}
            </button>
          )
        })}
      </div>
    </>
  )
}