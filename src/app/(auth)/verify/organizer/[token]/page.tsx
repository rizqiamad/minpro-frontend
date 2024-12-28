"use client";

import axios from "@/helpers/axios";
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
        `${process.env.NEXT_PUBLIC_BASE_URL_BE}/auth/verify/organizer/${params.token}`);
      console.log(params.token);
      
      toast.success(data.message);
      router.push("/");
    } catch (err: any) {
      console.log(err);
      toast.error('Verification failed', err.message);
    }
  };

  useEffect(() => {
    onVerify();
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
