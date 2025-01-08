import axios from "@/helpers/axios";
import { toastErrAxios } from "@/helpers/toast";
import { avatarSchema } from "@/libs/formSchemas";
import { ErrorMessage, Form, Formik, FormikProps } from "formik";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";

export default function EditAvatar() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  interface FormValue {
    image: File | null
  }

  const initialValue: FormValue = {
    image: null
  }

  const handleSubmit = async (value: FormValue) => {
    try {
      setIsLoading(true)
      if (!value.image) throw { message: "There is no file selected" }
      const formData = new FormData()
      formData.append('image', value.image)
      const { data } = await axios.patch('/users/avatar', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      toast.success(data.message)
    } catch (err) {
      toastErrAxios(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="flex gap-4">
      <div className="relative rounded-full overflow-hidden h-20 w-20">
        <Image src={previewUrl || 'https://res.cloudinary.com/dozmme9hc/image/upload/v1734232945/Default_idtsln.png'} alt="Icon" fill />
      </div>
      <Formik
        initialValues={initialValue}
        validationSchema={avatarSchema}
        onSubmit={(values, action) => {
          action.resetForm()
          setPreviewUrl(null)
          handleSubmit(values)
        }}
      >
        {({ setFieldValue }: FormikProps<FormValue>) => {
          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.currentTarget.files?.[0];

            if (file) {
              setFieldValue('image', file)
              const imageUrl = URL.createObjectURL(file);
              setPreviewUrl(imageUrl);
            }
          };
          return (
            <Form className="flex items-center gap-4">
              <label htmlFor="image" className="py-1 px-2 flex gap-2 items-center cursor-pointer bg-lightBlue font-semibold text-white">
                <FaUpload /> <span>Choose a file...</span>
              </label>
              <ErrorMessage name="image" >{msg => <div className='text-red-500 text-xs mt-1 ml-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              <input
                type="file"
                id='image'
                name='image'
                onChange={handleChange}
                className="hidden"
                accept="image/png, image/jpeg, image/jpg, image/webp"
              />
              <button disabled={isLoading} type='submit' className={`${isLoading ? 'disabled:shadow-sm cursor-not-allowed disabled:opacity-50' : 'shadow-md hover:shadow-sm'} border shadow-lightBlue font-semibold border-lightBlue px-3`}>
                {isLoading ? 'Loading...' : 'SUBMIT'}
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}