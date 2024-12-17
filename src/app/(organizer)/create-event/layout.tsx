import CreatEventNavbar from "@/components/createEvent/navbar";
import { ReactNode } from "react";

export default function CreateEventLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <CreatEventNavbar />
      {children}
    </div>
  )
}