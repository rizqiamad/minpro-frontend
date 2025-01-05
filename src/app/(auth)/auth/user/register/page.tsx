"use client";

import axios from "@/helpers/axios";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import * as Yup from "yup";
import authProtect from "@/hoc/userAuthProtect";
import { toastErrAxios } from "@/helpers/toast";

const RegisterSchema = Yup.object().shape({
  full_name: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password is not match")
    .required("Confirm Password is required"),
  ref_code: Yup.string(),
  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),
  no_handphone: Yup.string().required("Phone Number is required"),
  jenis_kelamin: Yup.string()
    .oneOf(["l", "p"], "Invalid gender selection")
    .required("Gender is required"),
});

interface FormValue {
  full_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  ref_code: string;
  dob: string;
  no_handphone: string;
  jenis_kelamin: string;
}

 function RegisterUser() {
  const initialValue: FormValue = {
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    ref_code: "",
    dob: "",
    no_handphone: "",
    jenis_kelamin: "",
  };
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const handleAdd = async (user: FormValue) => {
    try {
      SetIsLoading(true);
      user.dob = `${user.dob}T00:00:00+07:00`;
      const { data } = await axios.post("/auth/user/register", user);

      router.push("/auth/user/login");
      toast.success(data.message);
    
    } catch (err) {
      toastErrAxios(err)
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
        <h1 className="font-bold text-center">Tidak lagi ketinggalan event dan film favoritmu</h1>
        <p className="text-sm text-center">Gabung dan rasakan kemudahan bertransaksi dan mengelola event di Loket.</p>
      </div>
      {/* gambar end */}

      {/* form start */}
      <div className="min-h-[calc(100vh-4rem)] content-center">
        <div className="w-96 lg:w-fit md:w-fit py-6 rounded-2xl shadow-2xl px-4 mx-auto">
          <h1 className="text-2xl font-bold text-center">Lengkapi Profilmu</h1>
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

                  <div className="flex flex-col lg:flex-row md:flex-row ">
                    {/* bagian 1 start */}
                    <div className="mx-2">
                      <div className="flex flex-col pb-1">
                        <label htmlFor="full_name" className="font-semibold">
                          Full Name :
                        </label>
                        <Field
                          type="text"
                          name="full_name"
                          id="full_name"
                          onChange={handleChange}
                          value={values.full_name}
                          placeholder="Full Name"
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 focus:bg-blue-100"
                        />
                        {touched.full_name && errors.full_name ? (
                          <div className="text-red-500 text-xs">
                            {errors.full_name}
                          </div>
                        ) : null}
                      </div>
                      <div className="flex flex-col pb-1">
                        <label htmlFor="email" className=" font-semibold">
                          Email :
                        </label>
                        <Field
                          type="text"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          placeholder="Email"
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 focus:bg-blue-100"
                        />
                        {touched.email && errors.email ? (
                          <div className="text-red-500 text-xs">{errors.email}</div>
                        ) : null}
                      </div>
                      <div className="flex flex-col pb-1">
                        <label htmlFor="password" className=" font-semibold">
                          Password :
                        </label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                          placeholder="Password"
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 focus:bg-blue-100"
                        />
                        {touched.password && errors.password ? (
                          <div className="text-red-500 text-xs">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div className="flex flex-col pb-1">
                        <label
                          htmlFor="confirmPassword"
                          className=" font-semibold"
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
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 focus:bg-blue-100"
                        />
                        {touched.confirmPassword && errors.confirmPassword ? (
                          <div className="text-red-500 text-xs">
                            {errors.confirmPassword}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    {/* bagian 1 end  */}

                    {/* bagian 2 start */}
                    <div className=" mx-2">
                      <div className="flex flex-col pb-1">
                        <label htmlFor="ref_code" className="font-semibold">
                          Referral Code :
                        </label>
                        <Field
                          type="text"
                          name="ref_code"
                          id="ref_code"
                          onChange={handleChange}
                          value={values.ref_code}
                          placeholder="Referral Code"
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 focus:bg-blue-100"
                        />
                        {touched.ref_code && errors.ref_code ? (
                          <div className="text-red-500 text-xs">
                            {errors.ref_code}
                          </div>
                        ) : null}
                      </div>
                      <div className="flex flex-col pb-1">
                        <label
                          htmlFor="no_handphone"
                          className=" font-semibold"
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
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 focus:bg-blue-100"
                        />
                        {touched.no_handphone && errors.no_handphone ? (
                          <div className="text-red-500 text-xs">
                            {errors.no_handphone}
                          </div>
                        ) : null}
                      </div>
                      <div className="flex flex-col pb-1">
                        <label htmlFor="dob" className=" font-semibold">
                          Date of Birth :
                        </label>
                        <Field
                          type="date"
                          name="dob"
                          id="dob"
                          onChange={handleChange}
                          value={values.dob}
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400 "
                        />
                        {touched.dob && errors.dob ? (
                          <div className="text-red-500 text-xs">{errors.dob}</div>
                        ) : null}
                      </div>
                      <div className="flex flex-col pb-1">
                        <label
                          htmlFor="jenis_kelamin"
                          className=" font-semibold"
                        >
                          Gender :
                        </label>
                        <Field
                          as="select"
                          name="jenis_kelamin"
                          id="jenis_kelamin"
                          onChange={handleChange}
                          value={values.jenis_kelamin}
                          className="outline-none px-2 py-2 rounded-md  border border-slate-400"
                        >
                          <option value="" disabled>Select Gender</option>
                          <option value="l">Laki-Laki</option>
                          <option value="p">Perempuan</option>
                        </Field>
                        {touched.jenis_kelamin && errors.jenis_kelamin ? (
                          <div className="text-red-500 text-xs">
                            {errors.jenis_kelamin}
                          </div>
                        ) : null}
                      </div>

                    </div>
                    {/* bagian 2 end */}
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`${isLoading
                        ? "disabled:opacity-[0.5] disabled:bg-blue-700 text-white"
                        : "hover:bg-blue-700 hover:text-white"
                      } py-2 mt-3 w-full rounded-lg transition ease-linear font-semibold border-2 border-blue-700`}
                  >
                    {isLoading ? "Loading ..." : "Register"}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {/* form end */}

    </div>
  );
}

export default authProtect(RegisterUser)