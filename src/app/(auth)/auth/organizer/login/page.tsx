"use client";

import axios from "@/helpers/axios";
import { Field, Form, Formik, FormikProps } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Image from "next/image";

const RegisterSchema = Yup.object().shape({
  data: Yup.string().required("organizer name or email is required"),
  password: Yup.string().required("password is required"),
});

interface FormValue {
  data: string;
  password: string;
}

export default function LoginOrganizer() {
  const initialValue: FormValue = { data: "", password: "" };
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (organizer: FormValue) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/auth/organizer/login", organizer);
      const token = data.token;

      localStorage.setItem('token', token)

      router.push("/organizer/dashboard");
      console.log(data);
      toast.success(data.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
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
          <h1 className="text-2xl font-bold">Login Organizer</h1>
          <Formik
            initialValues={initialValue}
            validationSchema={RegisterSchema}
            onSubmit={(values, action) => {
              console.log(values);
              action.resetForm();
              handleLogin(values);
            }}
          >
            {(props: FormikProps<FormValue>) => {
              const { handleChange, values, touched, errors } = props;
              return (
                <Form className="flex flex-col gap-4 mt-4 text-[13px]">
                  <div className="flex flex-col">
                    <label htmlFor="data" className="pb-2 font-semibold">
                      Organizer Name or Email :
                    </label>
                    <Field
                      type="text"
                      name="data"
                      id="data"
                      onChange={handleChange}
                      value={values.data}
                      placeholder="Organizer Name or Email"
                      className="outline-none px-2 py-1 rounded-md border border-slate-400 focus:bg-blue-100"
                    />
                    {touched.data && errors.data ? (
                      <div className="text-red-500 text-xs">{errors.data}</div>
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
                  <Link href={"/register"} className="text-sm text-blue-500">
                    Register
                  </Link>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`${isLoading
                        ? "disabled:opacity-[0.5] disabled:bg-blue-700 text-white"
                        : "hover:bg-blue-700 hover:text-white"
                      } py-2 rounded-lg transition ease-linear font-semibold border-2 border-blue-700`}
                  >
                    {isLoading ? "Loading ..." : "Login"}
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