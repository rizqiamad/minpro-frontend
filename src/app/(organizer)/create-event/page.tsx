import Image from "next/image";
import Link from "next/link";

export default function CreateEvent() {
  return (
    <main>
      <div className="flex justify-between items-center px-12 py-5 shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.2)]">
        <Link href={'/'}>
          <Image src='https://assets.loket.com/images/logo-loket-blue.png' alt="" width={150} height={150} />
        </Link>
        <Link href={'/'} className="font-[600]">BANTUAN</Link>
      </div>
      <h1>THIS IS CREATE EVENT PAGE</h1>
    </main>
  )
}