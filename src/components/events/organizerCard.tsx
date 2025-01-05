import { getOrganizers } from "@/libs/organizers";
import { IOrganizer } from "@/types/organizer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrganizerCard() {
  const [organizers, setOrganizers] = useState<IOrganizer[]>([])

  useEffect(() => {
    const getData = async () => {
      const dataOrganizers: IOrganizer[] = await getOrganizers()
      setOrganizers(dataOrganizers)
    }
    getData()
  }, [])
  return (
    <>
      {
        organizers.map((item, idx) => {
          return (
            <Link href={'/'} key={idx} className="flex flex-col items-center gap-2" >
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image src={item.avatar} alt="planet" fill />
              </div>
              <h1>{item.name}</h1>
            </Link>
          )
        })
      }
    </>
  )
}