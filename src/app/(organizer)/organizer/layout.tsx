import MobileNav from "@/components/organizer/mobileNav";
import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

export default function OrganizerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="items-start justify-between lg:flex md:flex">
      <Sidebar />
      <MobileNav />
      <main className="w-full h-full relative">{children}</main>
    </div>
  )
}
