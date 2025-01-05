'use client'

import UseLocater from "@/hooks/useLocater"
import { useEffect, useState } from "react";

export default function Sorting() {
  const { searchParams, pathname, router, createQueryString } = UseLocater()
  const [sorts, setSorts] = useState<string>(searchParams.get('sorts') || 'asc')
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const newQueryString = createQueryString("sorts", `${sorts}`)
    router.replace(`${pathname}?${newQueryString}`);
  }, [sorts]);
  return (
    <>
      <label htmlFor="sorting" className="font-medium mr-3">Urutkan :</label>
      <select onChange={(e) => setSorts(e.target.value)} id="sorting" name="sorting" className="border text-black/60 border-slate-400 py-2 px-3 rounded-md outline-none cursor-pointer">
        <option value="asc" className="hover:bg-slate-400">Waktu Mulai (Terdekat)</option>
        <option value="desc">Waktu Mulai (Terjauh)</option>
      </select>
    </>
  )
}