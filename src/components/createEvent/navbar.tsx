import Image from "next/image";
import Link from "next/link";
import ComingSoonNavbar from "./comingSoonNavbar";

export default function CreatEventNavbar() {
  return (
    <div className="flex justify-between items-center px-12 py-5 shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.2)]">
      <Link href={'/organizer/dashboard'}>
        <Image src='https://assets.loket.com/images/logo-loket-blue.png' alt="" width={125} height={125} />
      </Link>
      <ComingSoonNavbar />
    </div>
  )
}