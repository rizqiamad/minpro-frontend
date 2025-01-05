'use client'

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import SelectDate from './selectDate';
import SelectTime from './selectTime';
import { categories } from './data';
import SetLocation from './setLocation';
import RichTextEditor from './textEditor';
import { FieldThumbnail } from './imageUploader';
import { FormValueEvent } from '@/types/form';
import { eventSchema } from '@/libs/formSchemas';
import axios from '@/helpers/axios'
import EventType from './eventType'
import { toastErrAxios } from '@/helpers/toast'

export default function CreateEvent() {
  const initialValue: FormValueEvent = {
    name: '',
    image: null,
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    name_place: '',
    address: '',
    city: '',
    category: '',
    type: '',
    description: '',
    terms_condition: '',
    coupon_seat: '',
  }
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const handleAdd = async (event: FormValueEvent) => {
    try {
      SetIsLoading(true)
      const formData = new FormData()
      for (const key in event) {
        let value = event[key as keyof FormValueEvent]
        if (key.includes('time')) value = `1970-01-01T${value}:00+07:00`
        if (key.includes('date')) value = `${value}T00:00:00Z`
        if (value) {
          formData.append(key, value)
        }
      }
      const { data } = await axios.post('/events', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })

      router.push(`/create-event/${data.event_id}`)
      toast.success(data.message)
    } catch (err: unknown) {
      toastErrAxios(err)
    } finally {
      SetIsLoading(false)
    }
  }

  return (
    <div className='rounded-2xl sm:mx-10 tablet:mx-52 shadow-2xl md:my-20'>
      <Formik
        initialValues={initialValue}
        validationSchema={eventSchema}
        onSubmit={(values, action) => {
          console.log(values)
          action.resetForm()
          handleAdd(values)
        }}
      >
        {(props: FormikProps<FormValueEvent>) => {
          const { handleChange, values, errors, touched } = props
          return (
            <Form className='flex flex-col gap-4 mt-4'>
              <div className='overflow-hidden aspect-[16/9]'>
                <FieldThumbnail name="image" formik={props} />
              </div>
              <ErrorMessage name='image'>{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              <div className='text-xs ml-2 text-blue-400'>Jangan lebih dari 2mb</div>
              <div className='px-5 flex flex-col gap-6 py-4'>
                <div className='flex flex-col'>
                  <Field
                    type='text'
                    name='name'
                    id='name'
                    onChange={handleChange}
                    value={values.name}
                    placeholder='Event Name*'
                    className='outline-none text-2xl px-1 focus:placeholder:text-transparent bg-white'
                  />
                  <ErrorMessage name="name" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                </div>
                <div className='flex flex-col'>
                  <Field
                    as="select"
                    name='category'
                    id='category'
                    onChange={handleChange}
                    value={values.category}
                    className='outline-none border-b pb-2 font-[500]'
                  >
                    <option value={''} disabled className='text-black/50'>
                      ~Select Category*~
                    </option>
                    {categories.map((category) => (
                      <option key={category} value={category} className={values.category === category ? 'text-blue-500' : 'text-black'}>
                        {category}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="category" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                </div>
                <div className='flex gap-2 px-2'>
                  <div className='flex-1 flex flex-col gap-2'>
                    <SelectDate {...props} />
                    {(errors.start_date || errors.end_date) && (touched.start_date || touched.end_date) ? (
                      <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{errors.start_date || errors.end_date}</div>
                    ) : null}
                    <SelectTime {...props} />
                    {(errors.start_time || errors.end_time) && (touched.start_time || touched.end_time) ? (
                      <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{errors.start_time || errors.end_time}</div>
                    ) : null}
                  </div>
                  <div className='flex-1'>
                    <SetLocation {...props} />
                    {(errors.name_place || errors.address || errors.city) && (touched.name_place || touched.address || touched.city) ? (
                      <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{errors.name_place || errors.address || errors.city}</div>
                    ) : null}
                  </div>
                </div>
                <div className='flex flex-col'>
                  <EventType setFieldValue={props.setFieldValue} />
                  <ErrorMessage name="type" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                </div>
                <div className='flex flex-col px-2'>
                  <label htmlFor="coupon_seat" className='my-2 text-black/50 font-[500]'>Tentukan jumlah Promosi</label>
                  <Field
                    type='number'
                    name='coupon_seat'
                    id='coupon_seat'
                    onChange={handleChange}
                    value={values.coupon_seat}
                    className='py-1 px-2 outline-none border rounded-md w-fit'
                    min={0}
                  />
                  {errors.coupon_seat ? (
                    <ErrorMessage name="coupon_seat" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
                  ) : (
                    <div className='text-xs ml-2 text-blue-400'>Tentukan berapa orang yang bisa mendapatkan potongan harga menggunakan coupon mereka untuk <span className='font-semibold'>event berbayar</span>, jika tidak ditentukan maka setiap orang berhak menggunakan coupon mereka untuk mendapatkan promo</div>
                  )}
                </div>
                <div className='px-2'>
                  <h1 className='my-2 text-black/50 font-[500]'>Description</h1>
                  <RichTextEditor setFieldValue={props.setFieldValue} values={values} name='description' />
                </div>
                <div className='px-2'>
                  <h1 className='my-2 text-black/50 font-[500]'>Terms & Condition</h1>
                  <RichTextEditor setFieldValue={props.setFieldValue} values={values} name='terms_condition' />
                </div>
                <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:opacity-[0.5] disabled:bg-lightBlue text-white' : 'hover:bg-lightBlue hover:text-white'} py-2 mx-2 rounded-lg transition ease-linear font-semibold border-2 border-lightBlue`}>
                  {isLoading ? 'Loading ...' : 'Buat Event'}
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}