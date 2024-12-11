import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

export default function OrganizerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start justify-between">
      {<Sidebar />}
      <main className="w-full h-full">{children}</main>
    </div>
  )
}