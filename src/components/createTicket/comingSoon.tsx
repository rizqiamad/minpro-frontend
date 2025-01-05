'use client'

import { FaPencilAlt, FaTrash } from "react-icons/fa"

export default function ComingSoon() {

  const handleComingSoon = () => {
    alert('COMING SOON, SABAR MASEEEE')
  }

  return (
    <div className="flex items-center gap-4">
      <button onClick={handleComingSoon}><FaPencilAlt className="text-lightBlue" /></button>
      <button onClick={handleComingSoon}><FaTrash className="text-red-500" /></button>
    </div>
  )
}