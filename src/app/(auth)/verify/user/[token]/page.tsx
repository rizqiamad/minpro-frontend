"use client";

import axios from "@/helpers/axios";
import { toastErrAxios } from "@/helpers/toast";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const router = useRouter();
  const params = useParams();
  const [isVerified, setIsVerified] = useState(false);

  const onVerify = async () => {
    if (isVerified) return;
    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/auth/user/verify/${params.token}`);
      setIsVerified(true);
      router.push("/auth/user/login");
      toast.success(data.message);
    } catch (err: unknown) {
      toastErrAxios(err)
    }
  };

  useEffect(() => {
    if (!isVerified) onVerify();
  }, []);

  return (
    <div>
      Verified
    </div>
  );
}