'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { heroData } from "./data";
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Hero() {
  return (
    <div className='mx-4 my-8 rounded-xl overflow-hidden'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className='bg-yellow-200'
      >
        {heroData.map((item, idx) => {
          return (
            <SwiperSlide key={idx} >
              <div className='relative w-full aspect-[6/1.5] min-h-[10rem]'>
                <Image src={item.url} alt={item.alt} fill />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}