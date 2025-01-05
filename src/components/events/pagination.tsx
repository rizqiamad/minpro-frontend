'use client'

import UseLocater from "@/hooks/useLocater";
import { useEffect, useState } from "react";

export default function EventPagination({ total_page }: { total_page: number }) {
  const { searchParams, pathname, router, createQueryString } = UseLocater()
  const [page, setPage] = useState<number>(Number(searchParams.get('page')) || 1)
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      router.replace(`${pathname}?page=1&sorts=asc`);
      return;
    }

    const newQueryString = createQueryString("page", `${page}`)
    router.replace(`${pathname}?${newQueryString}`);
  }, [page]);
  return (
    <>
      {Array.from({ length: total_page }, (_, idx) => {
        return (
          <button onClick={() => setPage(idx + 1)} key={idx} className="border text-black/60 rounded-md px-4 py-2 hover:border-orange-400 hover:text-orange-400">{idx + 1}</button>
        )
      })}
    </>
  )
}