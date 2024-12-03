import Link from "next/link";
import Social from "./social";
import NavTable from "./navTable";

export default function Footer() {
  return (
    <footer className="flex flex-col h-[100vh] bg-blueNavy">
      <div className="h-[85%] flex justify-center items-center">
        <NavTable />
      </div>
      <div className="h-[15%] flex justify-center gap-10">
        <Social />
      </div>
      <div className="h-[25%] bg-lightBlue text-white text-center content-center">
        <div className="text-xs">
          <Link href={'/'} className="mx-2">Tentang Kami</Link>
          •
          <Link href={'/'} className="mx-2">Blog</Link>
          •
          <Link href={'/'} className="mx-2">Kebijakan Privasi</Link>
          •
          <Link href={'/'} className="mx-2">Kebijakan Cookie</Link>
          •
          <Link href={'/'} className="mx-2">Panduan</Link>
          •
          <Link href={'/'} className="mx-2">Hubungan Kami</Link>
        </div>
        <div className="text-xs mt-6">
          &copy; {new Date().getFullYear()} Loket (PT Global Loket Sejahtera)
        </div>
      </div>
    </footer>
  )
}