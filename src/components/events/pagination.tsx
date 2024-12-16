'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function EventPagination({ total_page }: { total_page: number }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [page, setPage] = useState<number>(Number(searchParams.get('page')) || 1)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("page", `${page}`));
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