'use client'
import { GoPlusCircle } from "react-icons/go";
import { HiUpload } from "react-icons/hi";
import sideContent from "@/components/sidebar/content/content.module.css";
import organizerGuard from "@/hoc/organizerProtect";

function Bio() {
  return (
    <section className={sideContent.bioSection}>
      <div className={sideContent.bioContainer}>
        <div className={sideContent.innerBioContainer}>
          <div className={sideContent.bioBanner}>
            <GoPlusCircle className="text-[3rem] text-red-600" />
            <h1 className="text-2xl my-2">Unggah gambar/poster/banner</h1>
            <p>
              Direkomendasikan tidak kurang dari 1280 x 960 dan tidak lebih dari
              5mb
            </p>
          </div>
          <div className={sideContent.bioInfoContainer}>
            <div className={sideContent.bioLogoImg}>
              <div className={sideContent.bioLogoImgPlaceholder}>
                <HiUpload className="text-2xl" />
                <p>Logo</p>
              </div>
              <p>
                Pastikan kamu menggunggah foto kamu atau logo organizer kamu
                karena akan ditampilkan di halaman event kamu. Kami
                merekomendasikan gambar 100x100, max. 500KB.
              </p>
            </div>
            <div className={sideContent.bioInfoFormContainer}>
              <div className={sideContent.bioEventSlugForm}>
                <form action="text">
                  <label htmlFor="slug" className={sideContent.formLabel}>
                    Tautan Singkat Profil
                  </label>
                  <div className="flex items-center border mt-3 border-zinc-400">
                    <input type="text" className={sideContent.txtInput} />
                    <button className="px-3 border border-zinc-500 p-2">Tambah</button>
                  </div>
                </form>
              </div>
              <form className={sideContent.formResponsive}>
                <label htmlFor="name" className={sideContent.formLabel}>Nama Organiser</label>
                <input type="text" className={sideContent.txtInput} />
                <label htmlFor="name" className={sideContent.formLabel}>Nomor Telepon</label>
                <div className="flex items-center">
                  <input type="text" className={sideContent.txtInput} />
                  <button className="px-3 border border-zinc-500 p-2">Tambah</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default organizerGuard(Bio)