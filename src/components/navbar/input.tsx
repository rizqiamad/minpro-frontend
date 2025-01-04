'use client'

import axios from "@/helpers/axios";
import { formatDateLong } from "@/helpers/formatDate";
import { IEvent } from "@/types/event";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebounce } from "use-debounce";

export default function InputNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [dataEvents, setDateEvents] = useState<IEvent[]>([])
  const [text] = useDebounce(search, 800)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const searchEvents = async (search: string) => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(`/events?search=${search}`)
        setDateEvents(data.result)
        console.log(dataEvents);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    }
    if (text.length > 0) searchEvents(text)
    else setDateEvents([])
    if (text.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [text])

  const handleEventRouting = (itemId: string) => {
    setSearch('')
    router.push(`/events/${itemId}`)
  }

  return (
    <>
      <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 bg-black/50`}></div>
      <input onChange={handleChange} value={search} type="search" className="z-30 w-[100%] h-full bg-[#12244d] px-4 text-white outline-none focus:bg-white focus:text-black transition ease-linear" placeholder="Cari event seru disini" />
      <button className="z-30 text-white bg-lightBlue px-4 h-full">
        {isLoading ? (
          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <FaMagnifyingGlass className="mx-auto" />
        )}
      </button>
      <div className={`bg-white px-4 py-4 top-16 rounded-md right-0 left-0 z-20 ${isOpen ? 'absolute' : 'hidden'}`}>
        <h1 className="mb-2 font-semibold text-xl text-black">Search Results</h1>
        <div className="flex flex-col gap-4 z-10 w-full">
          {dataEvents.length > 0 ? dataEvents.map((item, idx) => {
            return (
              <button key={idx} onClick={() => handleEventRouting(item.id)} className="flex gap-2 text-start">
                <div className="relative min-h-[5rem] aspect-[16/9] rounded-md overflow-hidden">
                  <Image src={item.image} alt={item.name} fill />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-black line-clamp-2">{item.name}</span>
                  <span className="font-semibold text-slate-400 text-sm">{formatDateLong(item.start_date)}</span>
                </div>
              </button>
            )
          }) : (
            <h1>Nothings found</h1>
          )}
        </div>
      </div>
    </>
  )
}