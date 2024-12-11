import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaTicket, FaCompass } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import HamburgerMenu from "./hamburgerMenu";
import ResponsiveInput from "./responsiveInput";
import UserMenu from "./userMenu";

export default function Navbar() {
  return (
    <nav className="bg-blueNavy h-20 flex justify-between gap-10 px-10 items-center relative shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.4)]">
      <div className="flex gap-14 tablet:w-[70%]">
        <Link href={'/'}>
          <Image src='https://assets.loket.com/images/logo-loket-white.png' alt="Loket" className="w-[125px] tablet:w-[150px]" width={150} height={150} />
        </Link>
        <div className="hidden w-[100%] tablet:flex items-center h-8 overflow-hidden rounded-md">
          <input type="search" name="search" id="search" className="w-[90%] h-full bg-[#12244d] px-4 text-white outline-none focus:bg-white focus:text-black transition ease-linear" placeholder="Cari event seru disini" />
          <button type="submit" className="text-white bg-lightBlue w-[10%] h-full"><FaMagnifyingGlass className="mx-auto" /></button>
        </div>
      </div>
      <div>
        <div className="hidden tablet:flex text-white items-center gap-6">
          <Link href={'/events'} className="flex items-center gap-2 w-[5rem] font-bold"><FaCompass className="text-xl" /><span className="text-sm">Jelajahi</span></Link>
          <Link href={'/'} className="flex items-center gap-2 w-[6.2rem] font-bold"><FaTicket className="text-xl" /> <span className="text-sm">Tiket Saya</span></Link>
          {/* <Link href={'/'}>
            <div className="w-[30px] h-[30px] rounded-full">
              <IoPersonCircleSharp className="w-full h-full" />
            </div>
          </Link> */}
          <UserMenu />
          {/* <div className="flex gap-3">
            <Link href={'Register'} className="border border-white rounded-md py-2 px-4 text-sm font-semibold">Register</Link>
            <Link href={'login'} className="bg-lightBlue rounded-md py-2 px-6 text-sm font-semibold">Login</Link>
          </div> */}
        </div>
        <div className="text-white flex tablet:hidden gap-8">
          <ResponsiveInput />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  )
}