'use client'

import { useState } from "react";
import { FaStar } from "react-icons/fa6";

interface IProps {
  setFieldValue: (a: string, b: number) => void
  values: number
}

export default function StartRating({ setFieldValue, values }: IProps) {
  const [rate, setRate] = useState<number>(0)
  const handleClick = (e: number) => {
    // console.log(e);
    setRate(e)
    setFieldValue('rating', e)
  }
  return (
    <>
      {Array.from({ length: 5 }).map((_, idx) => {
        const pointRate = idx + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={values}
              onClick={() => handleClick(pointRate)}
              className="hidden"
            />
            <FaStar className={`text-3xl cursor-pointer ${pointRate <= values ? 'text-yellow-300' : 'text-slate-400'}`} />
          </label>
        )
      })}
    </>
  )
}