'use client'

import { ITicket } from "@/types/ticket"
import { useRouter } from "next/navigation"

export default function LinkCheck({ result }: { result: ITicket[] }) {
  const router = useRouter()

  const checkTicket = (tickets: ITicket[]) => {
    if (!tickets || tickets.length <= 0) {
      alert(
        "Your event has no ticket. It will be saved as a draft and will not be visible to customers until it has a ticket."
      )
    }
    return true
  }

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (checkTicket(result)) {
      router.push('/organizer/events')
    }
  }
  return (
    <>
      <button
        onClick={handleNavigation}
        className="py-2 px-3 bg-lightBlue text-white rounded-md"
      >
        KEMBALI KE DASHBOARD
      </button>
    </>
  )
}