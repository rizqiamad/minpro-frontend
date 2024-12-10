"use client";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

export default function Legal() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold border-b-2 p-5">Profil Kamu</h1>

      <div className="w-[90%] mx-auto">
        <h1 className="text-xl font-semibold border-b-2 p-5">
          Informasi Legal
        </h1>

        <div className="w-[70%] mx-auto mt-5">
          <div className="flex">
            <p>Jenis Dokumen</p>
            <p className="ml-4 text-red-400">Belum Diverifikasi</p>
          </div>

          {/* individu start */}
          <div className="border border-zinc-400 my-5">
            <div
              className="flex justify-between items-center border-b border-zinc-400 bg-zinc-100 p-4 mb-3 cursor-pointer"
              onClick={toggleDropdown}
            >
              <h1 className="">Individu</h1>
              <MdOutlineKeyboardArrowUp
                className={`text-[1.5rem] ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`grid grid-cols-2 gap-4 p-4 
                ${dropdownOpen ? "max-h-screen" : "max-h-0 p-0"}`}
            >
              <div className={`${dropdownOpen ? "block" : "hidden"}`}>
                <div className="border border-zinc-400 h-[200px] flex flex-col justify-center items-center cursor-pointer mb-5">
                  <IoDocumentAttachOutline className="text-[4rem] mb-4 text-red-500" />
                  <p>Unggah dokumen KTP disini</p>
                </div>
                <form className="flex flex-col">
                  <label htmlFor="ktp" className="font-bold">
                    Nomor KTP
                  </label>
                  <input
                    type="text"
                    id="ktp"
                    placeholder="Masukkan 18 digit nomor KTP disini"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                  <label htmlFor="nama" className="font-bold">
                    Nama (Sesuai KTP)
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                  <label htmlFor="alamat" className="font-bold">
                    Alamat (Sesuai KTP)
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                </form>
              </div>
              <div className={`${dropdownOpen ? "block" : "hidden"}`}>
                <div className="border border-zinc-400 h-[200px] flex flex-col justify-center items-center cursor-pointer mb-5">
                  <IoDocumentAttachOutline className="text-[4rem] mb-4 text-yellow-500" />
                  <p>Unggah dokumen NPWP disini</p>
                </div>
                <form className="flex flex-col">
                  <label htmlFor="ktp" className="font-bold">
                    Nomor NPWP
                  </label>
                  <input
                    type="text"
                    id="ktp"
                    placeholder="Masukkan 18 digit nomor KTP disini"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                  <label htmlFor="nama" className="font-bold">
                    Nama (Sesuai NPWP)
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                  <label htmlFor="alamat" className="font-bold">
                    Alamat (Sesuai NPWP)
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* individu end */}

          {/* badan hukum start */}
          <div className="border border-zinc-400 my-5">
            <div className="flex justify-between items-center border-b border-zinc-400 bg-zinc-100 p-4 mb-3 cursor-pointer"
            onClick={toggleDropdown}>
              <h1 className="">Badan Hukum</h1>
              <MdOutlineKeyboardArrowUp className={`text-[1.5rem] ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`} />
            </div>
            <div className={`grid grid-cols-2 gap-4 p-4 
                ${dropdownOpen ? "max-h-screen" : "max-h-0 p-0"}`}>
              <div className={`${dropdownOpen ? "block" : "hidden"}`}>
                <div className="border border-zinc-400 h-[200px] flex flex-col justify-center items-center cursor-pointer mb-5 hover:">
                  <IoDocumentAttachOutline className="text-[4rem] mb-4 text-yellow-500" />
                  <p>Unggah dokumen NPWP disini</p>
                </div>
                <form className="flex flex-col">
                  <label htmlFor="ktp" className="font-bold">
                    Nomor NPWP
                  </label>
                  <input
                    type="text"
                    id="ktp"
                    placeholder="Masukkan 18 digit nomor KTP disini"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                  <label htmlFor="nama" className="font-bold">
                    Nama (Sesuai NPWP)
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                  <label htmlFor="alamat" className="font-bold">
                    Alamat (Sesuai NPWP)
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    className="p-2 my-3 border-b-[1px] border-zinc-400"
                  />
                </form>
              </div>
              <div className={`${dropdownOpen ? "block" : "hidden"}`}>left blank</div>
            </div>
          </div>
          {/* badan hukum end */}
        </div>
      </div>
    </section>
  );
}
