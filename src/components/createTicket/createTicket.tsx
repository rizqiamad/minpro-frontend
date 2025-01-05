'use client'

import { FormValueTicketEvent } from '@/types/form'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TicketDescription from './textEditor'
import UseOpen from '@/hooks/useOpen'
import { ticketEventSchema } from '@/libs/formSchemas'
import { IoMdClose } from 'react-icons/io'
import axios from '@/helpers/axios'
import { formatRupiahTanpaDesimal } from '@/helpers/formatCurrency'
import { toastErrAxios } from '@/helpers/toast'

interface IProps {
  eventId: string,
  end_date: string,
  type: 'free' | 'paid'
}

export default function CreateTicket({ eventId, end_date, type }: IProps) {
  const initialValue: FormValueTicketEvent = {
    name: '',
    seats: '',
    price: 0,
    description: '',
    start_date: '',
    end_date: ''
  }
  const [isLoading, SetIsLoading] = useState<boolean>(false);
  const { open, hidden, menuHandler } = UseOpen()
  const date = new Date()
  const endDate = new Date(end_date)
  const minDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const maxDate = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open])

  const handleAdd = async (ticket: FormValueTicketEvent) => {
    try {
      SetIsLoading(true)
      const { data } = await axios.post(`/tickets/${eventId}`, ticket)

      location.reload()
      toast.success(data.message)
    } catch (err: unknown) {
      toastErrAxios(err)
    } finally {
      SetIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"];
    if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <>
      <button type="button" onClick={menuHandler} className='w-fit transition ease-linear hover:text-white hover:bg-lightBlue rounded-md font-[550] border-2 py-1 px-2 border-lightBlue'>CREATE TICKET EVENT</button>
      <div className={`fixed ${hidden ? '' : 'hidden'} overflow-y-scroll z-10 inset-0 bg-[rgba(0,0,0,0.5)]`}>
        <div className={`${open ? 'scale-100' : 'scale-0'} h-[80vh] overflow-y-scroll rounded-md w-full sm:w-[75%] xl:w-[50%] py-5 px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 bg-white z-20 ${hidden ? '' : 'hidden'}`}>
          <button type="button" onClick={menuHandler} className="w-fit text-[1.5rem] hover:text-red-500 mb-6"><IoMdClose /></button>
          <h1 className="text-4xl font-bold animate-bounce">CREATE YOUR EVENT TICKET</h1>
          <Formik
            initialValues={initialValue}
            validationSchema={ticketEventSchema(type)}
            onSubmit={(values, action) => {
              console.log(values)
              values.start_date = `${values.start_date}T00:00:00Z`
              values.end_date = `${values.end_date}T00:00:00Z`
              action.resetForm()
              handleAdd(values)
            }}
          >
            {(props: FormikProps<FormValueTicketEvent>) => {
              const { handleChange, values, setFieldValue } = props
              const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const rawValue = e.target.value.replace(/\D/g, "");
                setFieldValue("price", Number(rawValue));
              }
              return (
                <Form className='flex flex-col gap-4 mt-4'>
                  <div className='flex flex-col'>
                    <label htmlFor="name" className='pb-2 font-semibold'>Ticket Name :</label>
                    <Field
                      type='text'
                      name='name'
                      id='name'
                      onChange={handleChange}
                      value={values.name}
                      placeholder='Ticket Name'
                      className='outline-none text-xl py-2 border-b-2 focus:border-b-lightBlue focus:placeholder:text-transparent'
                    />
                    <ErrorMessage name='name'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="seats" className='pb-2 font-semibold'>Ticket Amount :</label>
                    <Field
                      type='text'
                      name='seats'
                      id='seats'
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      value={values.seats}
                      placeholder='seats'
                      className='outline-none text-xl py-2 border-b-2 focus:border-b-lightBlue focus:placeholder:text-transparent'
                    />
                    <ErrorMessage name='seats'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="price" className='pb-2 font-semibold'>Ticket Price :</label>
                    <Field
                      type='text'
                      name='price'
                      id='price'
                      onChange={handlePriceChange}
                      onKeyDown={handleKeyDown}
                      value={formatRupiahTanpaDesimal(Number(values.price) || 0)}
                      placeholder='price'
                      className='disabled:cursor-not-allowed outline-none text-xl py-2 border-b-2 focus:border-b-lightBlue focus:placeholder:text-transparent'
                      disabled={type === 'free'}
                    />
                    {type === 'free' && (<span className='text-xs text-blue-500'>Because of the free event, you do not have to fulfill this field</span>)}
                    <ErrorMessage name='price'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="description" className='pb-2 font-semibold'>Ticket Description :</label>
                    <TicketDescription setFieldValue={props.setFieldValue} values={values} />
                    <ErrorMessage name='description'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="start_date" className='pb-2 font-semibold'>Start Date :</label>
                    <Field
                      type='date'
                      name='start_date'
                      id='start_date'
                      min={minDate}
                      max={maxDate}
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
                      min={values.start_date || minDate}
                      max={maxDate}
                      onChange={handleChange}
                      value={values.end_date}
                      className='border-2 rounded-md px-2 py-1'
                    />
                    <ErrorMessage name="end_date" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                  </div>
                  <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:opacity-[0.5] disabled:bg-lightBlue text-white' : 'hover:bg-lightBlue hover:text-white'} py-2 rounded-lg transition ease-linear font-semibold border-2 border-lightBlue`}>
                    {isLoading ? 'Loading ...' : 'Create Ticket'}
                  </button>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </>
  )
}