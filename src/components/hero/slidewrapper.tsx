import Image from 'next/image'
import Planet1 from '@/../../public/planet1.jpg'
import Planet2 from '@/../../public/planet2.jpg'
import Planet3 from '@/../../public/planet3.jpg'
import Planet4 from '@/../../public/planet4.jpg'

export default function SlideWrapper() {
  const images = [Planet1, Planet2, Planet3, Planet4]
  return (
    <div className="bg-yellow-200 h-[20rem] my-4 relative">
      <div className='flex scroll-smooth overflow-x-hidden h-full'>
        {images.map((img, idx) => {
          return (
            <Image className='w-full h-full' id={`planet${idx}`} key={idx} src={img} alt='Planet' height={100} width={100} />
          )
        })}
      </div>
      <div className='absolute left-[50%] bottom-2'>
        {[1, 2, 3, 4].map((item, idx) => {
          return (
            <a href={`#planet${idx}`} key={idx} className='w-2 h-2 transition ease-linear duration-200 inline-block bg-white/75 rounded-[50%] mr-2'></a>
          )
        })}
      </div>
    </div>
  )
}