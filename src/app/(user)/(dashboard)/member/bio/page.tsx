'use client'

import EditAvatar from "@/components/member/editAvatar";
import sideContent from "@/components/sidebar/content/content.module.css";
import userGuard from "@/hoc/userProtect";

function MemberBio() {
  return (
    <section className={sideContent.bioSection}>
      <div className={sideContent.memberBioContainer}>
        <div className={sideContent.memberBioContainerInner}>
          <div className={sideContent.memberBioFormContainer}>
            <div className={sideContent.memberBioForm}>
              <EditAvatar />
              <form>
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
      </div>
    </section>
  );
}

export default userGuard(MemberBio)