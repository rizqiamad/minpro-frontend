'use client'

export default function ComingSoonNavbar() {
  const handleComingSoon = () => {
    alert('COMING SOON, SABAR MASEEE')
  }
  return (
    <button onClick={handleComingSoon} className="font-[600]">BANTUAN</button>
  )
}