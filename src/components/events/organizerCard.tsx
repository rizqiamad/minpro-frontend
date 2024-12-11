import Planet1 from "@/../../public/planet1.jpg";
import Planet2 from "@/../../public/planet2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function OrganizerCard() {
  const images = [Planet1, Planet2]
  return (
    <>
      {
        images.map((img, idx) => {
          return (
            <Link href={'/'} key={idx} className="flex flex-col items-center gap-2" >
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image src={img} alt="planet" fill />
              </div>
              <h1>Nama Organizer</h1>
            </Link>
          )
        })
      }
    </>
  )
}