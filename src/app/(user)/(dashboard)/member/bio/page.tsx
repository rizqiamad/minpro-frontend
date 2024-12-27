import sideContent from "@/components/sidebar/content/content.module.css";

export default function MemberBio() {
  return (
    <section className={sideContent.bioSection}>
      <div className="px-[2.25rem] py-[1.25rem] border-b-2">
        <h1 className="text-[1.5rem] font-semibold">Profil Kamu</h1>
      </div>
      {/* container informasi dasar */}
      <div className={sideContent.memberBioContainer}>
        <div className={sideContent.memberBioContainerInner}>
          <h1 className="border-b-2 py-2 text-[1.25rem] font-semibold">
            Informasi Dasar
          </h1>
          {/* form informasi dasar */}
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
                <h2 className="font-semibold mb-3">E-mail</h2>
                <input
                  type="text"
                  placeholder="E-Mail"
                  className={sideContent.txtInput}
                />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Nama Depan</h2>
                <input
                  type="text"
                  placeholder="Nama Depan"
                  className={sideContent.txtInput}
                />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Nama Belakang</h2>
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  className={sideContent.txtInput}
                />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Tanggal Lahir</h2>
                <input type="date" className={sideContent.txtInput} />
              </div>
              <div className={sideContent.memberFormContent}>
                <h2 className="font-semibold mb-3">Jenis Kelamin</h2>
                <div className="flex">
                  <input
                    type="radio"
                    name="Laki"
                    value="Laki"
                    className="mr-1"
                  />
                  <label htmlFor="gender" className="mr-5">
                    Laki-Laki
                  </label>
                  <input
                    type="radio"
                    name="Perempuan"
                    value="Perempuan"
                    className="mr-1"
                  />
                  <label htmlFor="gender">Perempuan</label>
                </div>
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
