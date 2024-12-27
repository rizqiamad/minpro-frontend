import SidebarUser from "@/components/sidebar/sidebarUser";
import { ReactNode } from "react";
import MobileNav from "./mobileNav/page";

export default function MemberLayout({ children }: { children: ReactNode }) {
  return (
    <div className="items-start justify-between lg:flex md:flex">
      <SidebarUser />
      <MobileNav />
      <main className="w-full h-full relative">{children}</main>
    </div>
  );
}
