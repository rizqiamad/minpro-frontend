'use client'

import { FormValueTicketEvent } from '@/types/form'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import TicketDescription from './textEditor'

const ticketEventSchema = Yup.object().shape({
  name: Yup.string().required('Ticket name is required'),
  seats: Yup.number()
    .min(1, 'Ticket must be greater or equal to 1')
    .required('There is must be a seats'),
  price: Yup.number()
    .min(20000, 'Minimum price is Rp20.000')
    .required('password is required'),
  description: Yup.string(),
  start_date: Yup.date().required('Set the ticket sales period'),
  end_date: Yup.date().required('Set the ticket sales period')
})

export default function CreateTicket() {
  const initialValue: FormValueTicketEvent = {
    name: '',
    seats: '0',
    price: '0',
    description: '',
    start_date: '',
    end_date: ''
  }
  // const router = useRouter();
  const [isLoading, SetIsLoading] = useState<boolean>(false);
  const date = new Date()
  const minDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  // const handleAdd = async (user: FormValue) => {
  //   try {
  //     SetIsLoading(true)
  //     const res = await fetch('http://localhost:8000/api/auth/register', {
  //       method: 'POST',
  //       body: JSON.stringify(user),
  //       headers: { 'content-type': 'application/json' },
  //     })
  //     const result = await res.json()

  //     if (!res.ok) throw result

  //     router.push('/login')
  //     toast.success(result.message)
  //   } catch (err: any) {
  //     console.log(err)
  //     toast.error(err.message)
  //   } finally {
  //     SetIsLoading(false)
  //   }
  // }

  return (
    <>
      <h1 className="text-4xl font-bold animate-bounce">CREATE YOUR EVENT TICKET</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={ticketEventSchema}
        onSubmit={(values, action) => {
          console.log(values)
          action.resetForm()
          // handleAdd(values)
        }}
      >
        {(props: FormikProps<FormValueTicketEvent>) => {
          const { handleChange, values } = props
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
                  placeholder='name'
                  className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                />
                <ErrorMessage name='name'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="seats" className='pb-2 font-semibold'>Ticket Amount :</label>
                <Field
                  type='number'
                  name='seats'
                  id='seats'
                  onChange={handleChange}
                  value={values.seats}
                  placeholder='seats'
                  className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                />
                <ErrorMessage name='seats'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="price" className='pb-2 font-semibold'>Ticket Price :</label>
                <Field
                  type='number'
                  name='price'
                  id='price'
                  onChange={handleChange}
                  value={values.price}
                  placeholder='price'
                  className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                />
                <ErrorMessage name='price'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="description" className='pb-2 font-semibold'>Ticket Description :</label>
                <TicketDescription setFieldValue={props.setFieldValue} values={values}/>
                <ErrorMessage name='description'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="start_date" className='pb-2 font-semibold'>Start Date :</label>
                <Field
                  type='date'
                  name='start_date'
                  id='start_date'
                  min={minDate}
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
                  onChange={handleChange}
                  value={values.end_date}
                  className='border-2 rounded-md px-2 py-1'
                />
                <ErrorMessage name="end_date" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:opacity-[0.5] disabled:bg-lime-500 text-white' : 'hover:bg-lime-500 hover:text-white'} py-2 rounded-lg transition ease-linear font-semibold border-2 border-lime-500`}>
                {isLoading ? 'Loading ...' : 'Register'}
              </button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}