import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaTicket, FaCompass } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// import ResponsiveInput from "./responsiveInput";

export default function Navbar() {
  return (
    <nav className="bg-[#152955] h-20 flex justify-between gap-10 px-10 items-center relative">
      <div className="flex gap-14 tablet:w-[70%]">
        <Link href={'/'}>
          <Image src='https://assets.loket.com/images/logo-loket-white.png' alt="Loket" className="w-[125px] tablet:w-[150px]" width={150} height={150} />
        </Link>
        <div className="hidden w-[100%] tablet:flex items-center h-8 overflow-hidden rounded-md">
          <input type="text" name="search" id="search" className="w-[90%] h-full bg-[#12244d] px-4 text-white outline-none focus:bg-white focus:text-black transition ease-linear" placeholder="Cari event seru disini" />
          <button type="submit" className="text-white bg-[#0049cc] w-[10%] h-full"><FaMagnifyingGlass className="mx-auto" /></button>
        </div>
      </div>
      <div>
        <div className="hidden tablet:flex text-white items-center gap-10">
          <Link href={'/'} className="flex items-center gap-2 w-[5rem] font-bold"><FaCompass className="text-xl" /><span className="text-sm">Jelajahi</span></Link>
          <Link href={'/'} className="flex items-center gap-2 w-[6.2rem] font-bold"><FaTicket className="text-xl" /> <span className="text-sm">Tiket Saya</span></Link>
          <Link href={'/'}>
            <div className="w-[30px] h-[30px] rounded-full">
              <IoPersonCircleSharp className="w-full h-full" />
            </div>
          </Link>
        </div>
        <div className="text-white flex tablet:hidden gap-8">
          <button><FaMagnifyingGlass className="text-xl"/></button>
          {/* <ResponsiveInput /> */}
          <button><GiHamburgerMenu className="text-xl"/></button>
        </div>
      </div>
    </nav>
  )
}