import { ErrorMessage, Field, FormikProps } from "formik";
import UseOpen from "@/hooks/useOpen";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { FormValue } from "@/types/form";

export default function SelectTime(Props: FormikProps<FormValue>) {
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
      <button type="button" onClick={menuHandler} className='w-fit hover:text-blue-400 rounded-md font-[550] flex justify-center items-center gap-2'><FaClock /> SET TIME</button>
      <div className={`fixed ${hidden ? '' : 'hidden'} z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} rounded-md w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <button type="button" onClick={menuHandler} className="w-fit text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <div className='flex flex-col'>
          <label htmlFor="start_time" className='pb-2 font-semibold'>Start Time :</label>
          <Field
            type='time'
            name='start_time'
            id='start_time'
            onChange={handleChange}
            value={values.start_time}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="start_time" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="end_time" className='pb-2 font-semibold'>End Time :</label>
          <Field
            type='time'
            name='end_time'
            id='end_time'
            onChange={handleChange}
            value={values.end_time}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="end_time" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <button type="button" disabled={values.start_time == '' || values.end_time == ''} onClick={menuHandler} className={`${values.start_time == '' || values.end_time == '' ? 'disabled:cursor-not-allowed' : 'hover:bg-slate-400'} rounded-md font-[550] mt-4 py-2 bg-slate-200 transition duration-300 w-full`}>SIMPAN</button>
      </div>
    </>
  )
}