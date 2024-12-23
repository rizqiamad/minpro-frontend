import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="relative animate-bounce w-[200px] h-[150px]">
        <Image src='https://assets.loket.com/images/logo-loket-white.png' alt="Loket" fill/>
      </div>
    </main>
  )
}