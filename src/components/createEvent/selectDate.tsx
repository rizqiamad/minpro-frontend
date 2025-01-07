import { ErrorMessage, Field, FormikProps } from "formik";
import { SlCalender } from "react-icons/sl";
import UseOpen from "@/hooks/useOpen";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { FormValueEvent } from "@/types/form";

export default function SelectDate(Props: FormikProps<FormValueEvent>) {
  const { handleChange, values } = Props
  const { open, hidden, menuHandler } = UseOpen()
  const date = new Date()
  const minDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open])
  return (
    <>
      <button type="button" onClick={menuHandler} className='border shadow-md py-2 hover:text-lightBlue hover:shadow-sm font-[550] flex justify-center items-center gap-2'><SlCalender /> SET DATE</button>
      <div className={`fixed ${hidden ? '' : 'hidden'} z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} rounded-md w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <button type="button" onClick={menuHandler} className="w-fit text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <div className='flex flex-col'>
          <label htmlFor="start_date" className='pb-2 font-semibold mt-4'>Start Date :</label>
          <Field
            type='date'
            name='start_date'
            id='start_date'
            min={minDate}
            onChange={handleChange}
            value={values.start_date}
            className='shadow-md border focus:border-lightBlue focus:border-2 outline-none px-2 py-1'
          />
          <ErrorMessage name="start_date" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="end_date" className='pb-2 font-semibold mt-4'>End Date :</label>
          <Field
            type='date'
            name='end_date'
            id='end_date'
            min={values.start_date || minDate}
            onChange={handleChange}
            value={values.end_date}
            className='shadow-md border focus:border-lightBlue focus:border-2 outline-none px-2 py-1'
          />
          <ErrorMessage name="end_date" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <button type="button" disabled={values.start_date == '' || values.end_date == ''} onClick={menuHandler} className={`${values.start_date == '' || values.end_date == '' ? 'disabled:cursor-not-allowed' : 'hover:shadow-sm'} shadow-md border border-lightBlue shadow-lightBlue font-[550] mt-8 py-2 transition duration-300 w-full`}>SIMPAN</button>
      </div>
    </>
  )
}