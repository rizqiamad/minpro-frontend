'use client'

import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
// import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import { toast } from 'react-toastify'
import * as Yup from 'yup'
import SelectDate from './selectDate';
import SelectTime from './selectTime';
import { categories } from './data';
import SetLocation from './setLocation';
import RichTextEditor from './textEditor';
import { FieldThumbnail } from './imageUploader';

const eventSchema = Yup.object().shape({
  name: Yup.string().required('Event name is required'),
  // image: Yup.mixed().test('filesize', 'the image is too large', (value: any) => {
  //   return value && value[0].size <= 2000000
  // }).required('Image is required').nullable(),
  start_date: Yup.date().required('Start Date is required'),
  end_date: Yup.date().required('End date is required'),
  start_time: Yup.string().required('Start Time is required'),
  end_time: Yup.string().required('End time is required'),
  name_place: Yup.string().required('Name of place is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('Name of city is required'),
  category: Yup.string()
    .oneOf(['Festival', 'Konser', 'Pertandingan', 'Workshop', 'Konfrensi', 'Seminar', 'Pertunjukkan', 'Lainnya'])
    .required('Category is required'),
  type: Yup.string().oneOf(['paid', 'free']).required('Choose type of your event'),
  description: Yup.string(),
  terms_condition: Yup.string(),
  coupon_seat: Yup.number().nullable()
})

export interface FormValue {
  name: string
  // image: File | undefined
  start_date: Date | null
  end_date: Date | null
  start_time: string
  end_time: string
  name_place: string
  address: string
  city: string
  category: string
  type: string
  description: string
  terms_condition: string
  coupon_seat: number | null
}

export default function CreateEvent() {
  const initialValue: FormValue = {
    name: '',
    // image: undefined,
    start_date: null,
    end_date: null,
    start_time: '',
    end_time: '',
    name_place: '',
    address: '',
    city: '',
    category: '',
    type: '',
    description: '',
    terms_condition: '',
    coupon_seat: null,
  }
  // const router = useRouter();
  const [isLoading, SetIsLoading] = useState<boolean>(false);

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
    <div className='py-6 rounded-2xl shadow-2xl px-5 mx-44 my-20'>
      <Formik
        initialValues={initialValue}
        validationSchema={eventSchema}
        onSubmit={(values, action) => {
          console.log(values)
          action.resetForm()
          // handleAdd(values)
        }}
      >
        {(props: FormikProps<FormValue>) => {
          const { handleChange, values, errors } = props
          return (
            <Form className='flex flex-col gap-4 mt-4'>
              <div>
                <FieldThumbnail name="thumbnail" formik={props} />
              </div>
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
                  className='outline-none border-b pb-2 font-[500] disabled:text-blue-500'
                >
                  <option value={''} className='text-black/20' disabled>
                    ~Select Category*~
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="category" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <div className='flex gap-2'>
                <div className='flex-1 flex flex-col gap-2'>
                  <SelectDate {...props} />
                  {errors.start_date || errors.end_date ? (
                    <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{errors.start_date || errors.end_date}</div>
                  ) : null}
                  <SelectTime {...props} />
                  {errors.start_time || errors.end_time ? (
                    <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{errors.start_time || errors.end_time}</div>
                  ) : null}
                </div>
                <div className='flex-1'>
                  <SetLocation {...props} />
                  {errors.name_place || errors.address || errors.city ? (
                    <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{errors.name_place || errors.address || errors.city}</div>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-center gap-2 items-center'>
                  <Field
                    type='radio'
                    name='type'
                    id='paid'
                    value='paid'
                    className='cursor-pointer'
                  />
                  <label htmlFor="paid" className='font-semibold cursor-pointer'>Paid</label>
                  <Field
                    type='radio'
                    name='type'
                    id='free'
                    value='free'
                    className='cursor-pointer'
                  />
                  <label htmlFor="free" className='font-semibold cursor-pointer'>Free</label>
                </div>
                <ErrorMessage name="type" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="coupon_seat" className='my-2 text-black/50 font-[500]'>Buat Promosi</label>
                <Field
                  type='number'
                  name='coupon_seat'
                  id='coupon_seat'
                  onChange={handleChange}
                  value={values.coupon_seat}
                  className='py-1 px-2 outline-none border rounded-md'
                  min={0}
                />
                <div className='text-xs ml-2 text-blue-400'>Set orang yang bisa menggunakan coupon mereka (default semua bisa menggunakan coupon mereka untuk mendapatkan potongan)</div>
              </div>
              <div>
                <h1 className='my-2 text-black/50 font-[500]'>Description</h1>
                <RichTextEditor setFieldValue={props.setFieldValue} name='description' />
              </div>
              <div>
                <h1 className='my-2 text-black/50 font-[500]'>Terms & Condition</h1>
                <RichTextEditor setFieldValue={props.setFieldValue} name='terms_condition' />
              </div>
              <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:opacity-[0.5] disabled:bg-lightBlue text-white' : 'hover:bg-lightBlue hover:text-white'} py-2 rounded-lg transition ease-linear font-semibold border-2 border-lightBlue`}>
                {isLoading ? 'Loading ...' : 'Buat Event'}
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}