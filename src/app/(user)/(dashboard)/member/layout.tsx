import MobileNav from "@/components/member/mobileNav";
import SidebarUser from "@/components/sidebar/sidebarUser";
import { ReactNode } from "react";

export default function MemberLayout({ children }: { children: ReactNode }) {
  return (
    <div className="md:flex">
      <SidebarUser />
      <div className="md:w-full">
        <MobileNav />
        <main className="w-full relative">{children}</main>
      </div>
    </div>
  );
}
