import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from "./TestimonialCard";
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimoni = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLang(); 

  // Deteksi ukuran layar untuk menentukan mode mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Menentukan ukuran mobile (<= 768px)
    };

    handleResize(); // Memeriksa ukuran saat komponen pertama kali dirender
    window.addEventListener('resize', handleResize); // Memantau perubahan ukuran

    return () => window.removeEventListener('resize', handleResize); // Membersihkan event listener
  }, []);

  const testimonials = [
    {
      logo: "/img/support-1.svg",
      author: "Bank Syari'ah Indonesia",
    },
    {
      logo: "/img/support-2.svg",
      author: "Badan Karantina Indonesia",
    },
    {
      logo: "/img/support-3.svg",
      author: "Bea Cukai",
    },
    {
      logo: "/img/support-4.svg",
      author: "Indonesian Export Channel",
    },
    {
      logo: "/img/support-5.png",
      author: "Dunia Kelapa",
    },
    {
      logo: "/img/support-6.png",
      author: "Alfa Spices",
    },
    {
      logo: "/img/support-7.png",
      author: "Sukses Sriwijaya",
    },
    {
      logo: "/img/support-8.png",
      author: "Akor Indonesia",
    },
    {
      logo: "/img/support-9.png",
      author: "Lentera Coco",
    },
    {
      logo: "/img/support-10.png",
      author: "Wiranusa",
    },
    {
      logo: "/img/support-11.png",
      author: "Asya Syila Nusantara",
    },
  ];

  return (
    <div className="section-wrapper padding-x pt-32 md:pt-20 pb-8">
      <div className="width-responsif items-center">
        <h6 className="text-[#4dab5b] font-bold">Alfaruq Export Indonesia</h6>
        <h1 className="text-3xl font-bold text-slate-800">{languageMap[language].text21}</h1>
        <p className="pt-3 text-slate-700 text-[14px] px-3">
          {languageMap[language].text21a}
        </p>
      </div>
      <div className="width-responsif">
        {/* Swiper untuk tampilan mobile dan desktop */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 2} // Satu slide untuk mobile, dua untuk desktop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard 
                logo={testimonial.logo} 
                author={testimonial.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Inline style untuk pagination */}
      <style>{`
        .mySwiper .swiper-pagination {
          bottom: 0px; /* Mengatur posisi pagination */
          text-align: center; /* Menengahkan pagination */
        }

        .mySwiper .swiper-pagination-bullet {
          background-color: #f3f3f3; /* Warna lingkaran pagination */
          opacity: 1;
          width: 10px; /* Ukuran lingkaran pagination */
          height: 10px;
          margin: 0 5px; /* Jarak antar lingkaran pagination */
          transition: background-color 0.3s;
        }

        .mySwiper .swiper-pagination-bullet-active {
          background-color: #000; /* Warna lingkaran pagination aktif */
        }
      `}</style>
    </div>
  );
};

export default Testimoni;
