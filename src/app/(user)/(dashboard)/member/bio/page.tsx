'use client'

import sideContent from "@/components/sidebar/content/content.module.css";
import { formatRupiahTanpaDesimal } from "@/helpers/formatCurrency";
import userGuard from "@/hoc/userProtect";
import useSession from "@/hooks/useSession";
import { getCoupon, getPoints } from "@/libs/transactions";
import { useEffect, useState } from "react";

function MemberBio() {
  const [coupon, setCoupon] = useState<boolean>(false)
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    const getData = async () => {
      const getDataCoupon = await getCoupon()
      const getDataPoints = await getPoints()
      setCoupon(getDataCoupon)
      setPoints(getDataPoints)
    }
    getData()
  }, [])
  return (
    <section className={sideContent.bioSection}>
      <div className={sideContent.memberBioContainer}>
        <div className={sideContent.memberBioContainerInner}>
          <div className={sideContent.memberBioFormContainer}>
            <form className={sideContent.memberBioForm}>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Gambar Profil</h2>
                <p>
                  Avatar dan foto sampul adalah gambar pertama yang akan dilihat
                  di akun profilmu.
                </p>
              </div>
              <div className={sideContent.memberFormContent}>
                <p className="text-xl font-semibold text-black">You Have <span>{formatRupiahTanpaDesimal(points)}</span> Points</p>
                <span className="text-xs font-light ml-2 text-blue-500">*You can use this points to get discount for your transaction</span>
                <p className="text-xl font-semibold text-black">{coupon ? 'You have one Coupon' : 'You do not have coupon'}</p>
                <span className="text-xs font-light ml-2 text-blue-500">*You can use this coupon to get 10% discount for your transaction</span>
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">E-mail</h2>
                <input
                  type="text"
                  placeholder="E-Mail"
                  className={sideContent.txtInput}
                />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Full Name</h2>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={sideContent.txtInput}
                />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Password</h2>
                <input
                  type="password"
                  placeholder="Password"
                  className={sideContent.txtInput}
                />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Tanggal Lahir</h2>
                <input type="date" className={sideContent.txtInput} />
              </div>
              <div className={sideContent.saveChanges}>
                <button className={sideContent.saveChangesBtn}>
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default userGuard(MemberBio)