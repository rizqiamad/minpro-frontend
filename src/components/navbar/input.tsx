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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const searchEvents = async (search: string) => {
      try {
        const { data } = await axios.get(`/events?search=${search}`)
        setDateEvents(data.result)
        console.log(dataEvents);
      } catch (err) {
        console.log(err);
      }
    }
    if (text.length > 0) searchEvents(text)
    else setDateEvents([])
  }, [text])

  useEffect(() => {
    setIsOpen(dataEvents.length > 0)
  }, [dataEvents])

  const handleEventRouting = (itemId: string) => {
    setSearch('')
    router.push(`/events/${itemId}`)
  }

  const handleSearchRoute = () => {
    router.push(`/search?keyword=${search}`)
  }
  return (
    <>
      <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 bg-black/50`}></div>
      <input onChange={handleChange} value={search} type="search" className="z-30 w-[100%] h-full bg-[#12244d] px-4 text-white outline-none focus:bg-white focus:text-black transition ease-linear" placeholder="Cari event seru disini" />
      <button onClick={handleSearchRoute} className="z-30 text-white bg-lightBlue px-4 h-full"><FaMagnifyingGlass className="mx-auto" /></button>
      <div className={`bg-white px-4 py-4 top-16 right-0 left-0 z-20 ${isOpen ? 'absolute' : 'hidden'}`}>
        <h1 className="mb-2 font-semibold text-xl">Search Results</h1>
        <div className="flex flex-col gap-4 z-10">
          {dataEvents.length > 0 ? dataEvents.map((item, idx) => {
            console.log(item);
            return (
              <button key={idx} onClick={() => handleEventRouting(item.id)} className="flex gap-2 text-start">
                <div className="relative min-h-[5rem] aspect-[16/9] rounded-md overflow-hidden">
                  <Image src={item.image} alt={item.name} fill />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{item.name}</span>
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