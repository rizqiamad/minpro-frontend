"use client";

import axios from "@/helpers/axios";
import { toastErrAxios } from "@/helpers/toast";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const params = useParams();
  console.log(params);

  const router = useRouter();
  const onVerify = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/auth/organizer/verify/${params.token}`);
      router.push("/auth/organizer/login");
      toast.success(data.message);
    } catch (err: unknown) {
      toastErrAxios(err)
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return (
    <div>
      Verified
    </div>
  );
}
