import { ErrorMessage, Field, FormikProps } from "formik";
import UseOpen from "@/hooks/useOpen";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FormValueEvent } from "@/types/form";

export default function SetLocation(Props: FormikProps<FormValueEvent>) {
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
      <button type="button" onClick={menuHandler} className='w-fit hover:text-blue-400 rounded-md font-[550] flex justify-center items-center gap-2'><FaLocationDot /> SET LOCATION</button>
      <div className={`fixed ${hidden ? '' : 'hidden'} z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}></div>
      <div className={`${open ? 'scale-100' : 'scale-0'} rounded-md w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
        <button type="button" onClick={menuHandler} className="w-fit text-[1.5rem] hover:text-red-500"><IoMdClose /></button>
        <div className='flex flex-col'>
          <label htmlFor="name_place" className='pb-2 font-semibold'>Name Place</label>
          <Field
            type='text'
            name='name_place'
            id='name_place'
            onChange={handleChange}
            value={values.name_place}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="name_place" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="address" className='pb-2 font-semibold'>Address</label>
          <Field
            type='text'
            name='address'
            id='address'
            onChange={handleChange}
            value={values.address}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="address" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="city" className='pb-2 font-semibold'>City</label>
          <Field
            type='text'
            name='city'
            id='city'
            onChange={handleChange}
            value={values.city}
            className='border-2 rounded-md px-2 py-1'
          />
          <ErrorMessage name="city" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
        <button type="button" disabled={values.address == '' || values.name_place == '' || values.city == ''} onClick={menuHandler} className={`${values.address == '' || values.name_place == '' || values.city == '' ? 'disabled:cursor-not-allowed' : 'hover:bg-slate-400'} rounded-md font-[550] mt-4 py-2 bg-slate-200 transition duration-300 w-full`}>SIMPAN</button>
    </div >
    </>
  )
}