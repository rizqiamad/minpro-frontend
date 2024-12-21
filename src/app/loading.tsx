import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="animate-bounce w-[200px]">
        <Image src='https://assets.loket.com/images/logo-loket-white.png' alt="Loket" fill/>
      </div>
    </main>
  )
}