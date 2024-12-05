import Link from "next/link";
import Social from "./social";
import NavTable from "./navTable";

export default function Footer() {
  return (
    <footer className="flex flex-col tablet:h-[100vh] bg-blueNavy">
      <div className="py-8 h-[60%] px-7 flex-inline max-tablet:mx-auto tablet:flex flex-col tablet:flex-row justify-center items-center">
        <NavTable />
      </div>
      <div className="h-[15%] flex justify-center gap-10 flex-wrap max-tablet:py-6">
        <Social />
      </div>
      <div className="h-[25%] bg-lightBlue text-white text-center content-center max-tablet:py-8">
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
        <div className="text-xs mt-10">
          &copy; {new Date().getFullYear()} Loket (PT Global Loket Sejahtera)
        </div>
      </div>
    </footer>
  )
}