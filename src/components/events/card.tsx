import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <Link href={''} className="shadow-[0px_0px_5px_-1px_rgba(0,0,0,0.75)] px-2 py-6 rounded-md">
      <div>
        <Image src={``} alt="" width={100} height={100} />
      </div>
      <div>
        <h2>title</h2>
        <span>date</span>
        <span>price</span>
      </div>
      <div>
        <Image src={''} alt="" width={10} height={10} />
        <span>name organizer</span>
      </div>
    </Link>
  )
}