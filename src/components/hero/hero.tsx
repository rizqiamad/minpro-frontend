'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Coupon from "@/../../public/coupon.webp";
import Points from "@/../../public/points.webp"
import Image from 'next/image';

export default function Hero() {
  const images = [Coupon, Points]
  return (
    <div className='mx-20'>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        className='bg-yellow-200'
      >
        {images.map((img, idx) => {
          return (
            <SwiperSlide key={idx} >
              <div className='relative w-full h-64'>
                <Image src={img} alt='hero' fill />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}