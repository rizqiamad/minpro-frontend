import Image from "next/image";
import Link from "next/link";

export default function selectRole() {
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
        <h1 className="font-bold text-center text-xl mb-4">
          Tidak lagi ketinggalan event dan film favoritmu
        </h1>
        <p className="text-center">
          Gabung dan rasakan kemudahan bertransaksi dan mengelola event di
          Loket.
        </p>
      </div>
      {/* gambar end */}

      <Image className="absolute top-4" src={'https://assets.loket.com/web/assets/img/logo-loket-blue.svg'} alt="logo-loket-blue" width={125} height={75} />

      <div className="min-h-[calc(100vh-4rem)] content-center">
        <div className="w-96 py-6 rounded-xl shadow-2xl border px-5 mx-auto">
          <h1 className="text-2xl font-semibold text-center mb-3">Silahkan pilih Jenis Login</h1>
          <div className="flex flex-col">
            <Link href={"auth/user/login"} className="bg-lightBlue p-2 my-2 font-semibold rounded-lg text-white text-center">User Login</Link>
            <Link href={"auth/organizer/login"} className="border-2 border-lightBlue font-semibold p-2 my-2 rounded-lg text-center">Organizer Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
