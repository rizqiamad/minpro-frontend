"use client";

import axios from "@/helpers/axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function VerifyPage() {
  const params = useParams();
  const [isVerified, setIsVerified] = useState(false);
  console.log(params);

  const router = useRouter();
  const onVerify = async () => {
    if (isVerified) return;
    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/auth/user/verify/${params.token}`);
      console.log(params.token);
      setIsVerified(true);

      router.push("/auth/user/login");
      toast.success(data.message);
    } catch (err: any) {
      console.log(err);
      toast.error('Verification failed', err.message);
    }
  };

  useEffect(() => {
    if (!isVerified) onVerify();
  }, []);

  return (
    <div>
      {/* {
        <button className="p-2 bg-blue-700 text-zinc-100" onClick={onVerify}>
          Verifikasi
        </button>
      } */}
      Verified
    </div>
  );
}