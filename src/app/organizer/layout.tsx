import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

export default function OrganizerLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {<Sidebar />}
      {children}
    </div>
  )
}