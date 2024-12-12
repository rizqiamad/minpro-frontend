import { ErrorMessage, Field, FormikProps } from "formik";
import { FormValue } from "./createEvent";
import { SlCalender } from "react-icons/sl";
import UseOpen from "@/hooks/useOpen";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

export default function SelectDate(Props: FormikProps<FormValue>) {
  const { handleChange, values } = Props
  const { open, hidden, menuHandler } = UseOpen()

  useEffect(() => {
      if (open) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }, [open])
  return (
    <>
      <button type="button" onClick={menuHandler} className='w-fit hover:text-blue-400 rounded-md font-[550] flex justify-center items-center gap-2'><SlCalender /> SET DATE</button>
      <div className={`fixed ${hidden ? '' : 'hidden'} z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} rounded-md w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <button type="button" onClick={menuHandler} className="w-fit text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <div className='flex flex-col'>
          <label htmlFor="start_date" className='pb-2 font-semibold'>Start Date :</label>
          <Field
            type='date'
            name='start_date'
            id='start_date'
            onChange={handleChange}
            value={values.start_date}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="start_date" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="end_date" className='pb-2 font-semibold'>End Date :</label>
          <Field
            type='date'
            name='end_date'
            id='end_date'
            onChange={handleChange}
            value={values.end_date}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="end_date" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
      </div>
    </>
  )
}