import MobileNav from "@/components/member/mobileNav";
import SidebarUser from "@/components/sidebar/sidebarUser";
import { ReactNode } from "react";

export default function MemberLayout({ children }: { children: ReactNode }) {
  return (
    <div className="items-start justify-between lg:flex md:flex">
      <SidebarUser />
      <MobileNav />
      <main className="w-full h-full relative">{children}</main>
    </div>
  );
}
