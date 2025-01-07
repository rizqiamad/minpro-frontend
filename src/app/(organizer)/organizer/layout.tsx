import MobileNav from "@/components/organizer/mobileNav";
import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

export default function OrganizerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="md:flex">
      <Sidebar />
      <div className="flex flex-col md:w-full">
        <MobileNav />
        <main className="w-full relative">{children}</main>
      </div>
    </div>
  )
}
