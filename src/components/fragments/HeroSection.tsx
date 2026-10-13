import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Corrected import
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Button from "../elements/Button";
import Link from "next/link";
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";
import gsap from "gsap";

const HeroSection = () => {
  const cardRef = useRef(null);
  const { language } = useLang();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(cardRef.current, {
      y: -10,
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="section-wrapper relative padding-x pt-96 md:pt-80 pb-10 bg-[#fffbfb] overflow-hidden">
      
      {/* Image Slider */}
      <div className="absolute top-20 left-0  rounded-lg w-full h-full -z-1000">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                 src="/homebg/homebg2.png"
                 alt="Slide 2"
                 fill
                 style={{ objectFit: 'cover' }}
                 priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
            <Image
  src="/homebg/homebg3.png"
  alt="Slide 2"
  fill
  style={{ objectFit: 'cover' }}
  priority
/>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                 src="/homebg/homebg1.png"
                 alt="Slide 2"
                 fill
                 style={{ objectFit: 'cover' }}
                 priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Content Section */}
      <div
        className="width-responsif flex flex-col justify-center items-center md:top-[-100px] top-[-200px] relative z-10"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-[#fffbfb] text-center">
          {languageMap[language].text7}
        </h1>
        <p className="text-[#fffbfb] text-[14px] sm:text-1xl pt-3 text-center">
          {languageMap[language].text8}
        </p>
        <div className="py-5 text-center">
          <Button>
            <Link href="/layanan">{languageMap[language].text9}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
