"use client";

import axios from "@/helpers/axios";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import * as Yup from "yup";
import authProtect from "@/hoc/userAuthProtect";
import { toastErr } from "@/helpers/toast";

const RegisterSchema = Yup.object().shape({
  organizer_name: Yup.string().required("Organizer Name is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password is not match")
    .required("Confirm Password is required"),
  no_handphone: Yup.string().required("Phone Number is required"),
});

interface FormValue {
  organizer_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  no_handphone: string;
}
 function RegisterOrganizer() {
  const initialValue: FormValue = {
    organizer_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    no_handphone: "",
  };
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const handleAdd = async (organizer: FormValue) => {
    try {
      SetIsLoading(true);
      const { data } = await axios.post("/auth/organizer/register", organizer);

      router.push("/auth/organizer/login");
      toast.success(data.message);
    } catch (err) {
      console.log(err);
<<<<<<< HEAD
      toast.error(err.response.data.message);
=======
      toastErr(err)
>>>>>>> dashboard
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {/* gambar start */}
      <div className="hidden mr-10 lg:block md:block">
        <Image
          src="/img/auth.jpg"
          alt="Example Image"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h1 className="font-bold text-center">
          Tidak lagi ketinggalan event dan film favoritmu
        </h1>
        <p className="text-sm text-center">
          Gabung dan rasakan kemudahan bertransaksi dan mengelola event di
          Loket.
        </p>
      </div>
      {/* gambar end */}
      <div className="min-h-[calc(100vh-4rem)] content-center">
        <div className="w-96 py-6 rounded-2xl shadow-2xl px-5 mx-auto">
          <h1 className="text-2xl font-bold text-center">Register Form</h1>
          <Formik
            initialValues={initialValue}
            validationSchema={RegisterSchema}
            onSubmit={(values, action) => {
              console.log(values);
              action.resetForm();
              handleAdd(values);
            }}
          >
            {(props: FormikProps<FormValue>) => {
              const { handleChange, values, touched, errors } = props;
              return (
                <Form className="flex flex-col gap-4 mt-4 text-[13px]">
                  <div className="flex flex-col">
                    <label htmlFor="full_name" className="pb-2 font-semibold">
                      Organizer Name :
                    </label>
                    <Field
                      type="text"
                      name="organizer_name"
                      id="organizer_name"
                      onChange={handleChange}
                      value={values.organizer_name}
                      placeholder="Full Name"
                      className="outline-none px-2 py-1 rounded-md border border-slate-400 focus:bg-blue-100"
                    />
                    {touched.organizer_name && errors.organizer_name ? (
                      <div className="text-red-500 text-xs">
                        {errors.organizer_name}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="pb-2 font-semibold">
                      Email :
                    </label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email"
                      className="outline-none px-2 py-1 rounded-md border border-slate-400 focus:bg-blue-100"
                    />
                    {touched.email && errors.email ? (
                      <div className="text-red-500 text-xs">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password" className="pb-2 font-semibold">
                      Password :
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Password"
                      className="outline-none px-2 py-1 rounded-md border border-slate-400 focus:bg-blue-100"
                    />
                    {touched.password && errors.password ? (
                      <div className="text-red-500 text-xs">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="confirmPassword"
                      className="pb-2 font-semibold"
                    >
                      Confirm Password :
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      placeholder="Password"
                      className="outline-none px-2 py-1 rounded-md border border-slate-400 focus:bg-blue-100"
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <div className="text-red-500 text-xs">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="no_handphone"
                      className="pb-2 font-semibold"
                    >
                      No. Handphone :
                    </label>
                    <Field
                      type="text"
                      name="no_handphone"
                      id="no_handphone"
                      onChange={handleChange}
                      value={values.no_handphone}
                      placeholder="No. Handphone"
                      className="outline-none px-2 py-1 rounded-md border border-slate-400 focus:bg-blue-100"
                    />
                    {touched.no_handphone && errors.no_handphone ? (
                      <div className="text-red-500 text-xs">
                        {errors.no_handphone}
                      </div>
                    ) : null}
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`${
                      isLoading
                        ? "disabled:opacity-[0.5] disabled:bg-blue-700 text-white"
                        : "hover:bg-blue-700 hover:text-white"
                    } py-2 rounded-lg transition ease-linear font-semibold border-2 border-blue-700`}
                  >
                    {isLoading ? "Loading ..." : "Register"}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default authProtect(RegisterOrganizer)