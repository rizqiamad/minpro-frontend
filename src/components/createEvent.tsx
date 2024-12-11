'use client'

import { Field, Form, Formik, FormikProps } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const eventSchema = Yup.object().shape({
  name: Yup.string().required('Event name is required'),
  category: Yup.string()
    .oneOf(['Festival', 'Konser', 'Pertandingan', 'Workshop', 'Konfrensi', 'Seminar', 'Pertunjukkan', 'Lainnya'])
    .required('Category is required'),
  img: Yup.mixed().test('filesize', 'the image is too large', (value: any) => {
    return value[0].size <= 2000000
  }).required('Image is required')
})

interface FormValue {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function CreateEvent() {
  const initialValue: FormValue = { username: '', email: '', password: '', confirmPassword: '' }
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const handleAdd = async (user: FormValue) => {
    try {
      SetIsLoading(true)
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'content-type': 'application/json' },
      })
      const result = await res.json()

      if (!res.ok) throw result

      router.push('/login')
      toast.success(result.message)
    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
    } finally {
      SetIsLoading(false)
    }
  }

  return (
    <div className='min-h-[calc(100vh-4rem)] content-center'>
      <div className='w-96 py-6 rounded-2xl shadow-2xl px-5 mx-auto'>
        <h1 className="text-4xl font-bold animate-bounce">Register Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={eventSchema}
          onSubmit={(values, action) => {
            console.log(values)
            action.resetForm()
            handleAdd(values)
          }}
        >
          {(props: FormikProps<FormValue>) => {
            const { handleChange, values, touched, errors } = props
            return (
              <Form className='flex flex-col gap-4 mt-4'>
                <div className='flex flex-col'>
                  <label htmlFor="username" className='pb-2 font-semibold'>Username :</label>
                  <Field
                    type='text'
                    name='username'
                    id='username'
                    onChange={handleChange}
                    value={values.username}
                    placeholder='Username'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.username && errors.username ? (
                    <div className='text-red-500 text-xs'>{errors.username}</div>
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="email" className='pb-2 font-semibold'>Email :</label>
                  <Field
                    type='text'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='Email'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.email && errors.email ? (
                    <div className='text-red-500 text-xs'>{errors.email}</div>
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="password" className='pb-2 font-semibold'>Password :</label>
                  <Field
                    type='password'
                    name='password'
                    id='password'
                    onChange={handleChange}
                    value={values.password}
                    placeholder='Password'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.password && errors.password ? (
                    <div className='text-red-500 text-xs'>{errors.password}</div>
                  ) : null}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="confirmPassword" className='pb-2 font-semibold'>Confirm Password :</label>
                  <Field
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    onChange={handleChange}
                    value={values.confirmPassword}
                    placeholder='Password'
                    className='outline-none px-2 py-1 rounded-md bg-slate-200 border border-slate-400'
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className='text-red-500 text-xs'>{errors.confirmPassword}</div>
                  ) : null}
                </div>
                <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:opacity-[0.5] disabled:bg-lime-500 text-white' : 'hover:bg-lime-500 hover:text-white'} py-2 rounded-lg transition ease-linear font-semibold border-2 border-lime-500`}>
                  {isLoading ? 'Loading ...' : 'Register'}
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}