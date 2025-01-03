import Image from "next/image";

export default function Loading() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-blueNavy">
      <div className="relative animate-bounce w-[300px] h-[80px]">
        <Image src='/logo-loket-white.png' alt="Loket" fill/>
      </div>
    </main>
  )
}