import { ElementType, useMemo } from "react";
import { FaStar, FaTags, FaShieldAlt, FaRocket } from "react-icons/fa";
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";
import Image from "next/image";

type PointOfInterest = {
  title: string;
  description: string;
  icon: ElementType;
};

const WhyChoose = () => {
  const { language } = useLang();

  // Gunakan useMemo untuk meminimalkan re-render
  const pointOfInterest: PointOfInterest[] = useMemo(() => [
    {
      title: languageMap[language].text12,
      description: languageMap[language].text13,
      icon: FaShieldAlt,
    },
    {
      title: languageMap[language].text14,
      description: languageMap[language].text15,
      icon: FaStar,
    },
    {
      title: languageMap[language].text16,
      description: languageMap[language].text17,
      icon: FaTags,
    },
    {
      title: languageMap[language].text18,
      description: languageMap[language].text19,
      icon: FaRocket,
    }
  ], [language]);

  return (
    <div className="relative h-screen mb-96 md:mb-0">
      <div className="section-wrapper padding-x gap-6 py-10 relative z-10 mb-4">
        <div className="width-responsif flex justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-slate-800 text-3xl">{languageMap[language].text11}</h1>
            {pointOfInterest.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 fade-up"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="p-4 text-xl font-bold rounded-lg bg-[#4dab5b]">
                    <Icon className="text-white" />
                  </p>
                  <div>
                    <p className="text-slate-800 font-bold text-[#4dab5b] md:text-[18px] text-[16px]">{point.title}</p>
                    <p className="text-slate-700 md:text-[16px] text-[14px]">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="width-responsif flex justify-center relative z-10">
          <div className="w-full sm:w-[500px] relative rounded-full mx-auto">
            <Image
              src="/img/hero-section-1.svg"
              alt="hero image"
              width={500}
              height={500}
              priority
              className="object-cover rounded-full"
            />
            <div
              className="w-40 sm:w-52 bg-white/60 rounded-2xl top-[80px] sm:top-[100px] right-[20px] absolute h-24 sm:h-32 shadow-lg backdrop-blur-sm flex flex-col justify-center items-center"
            >
              <h2 className="text-md sm:text-lg font-bold text-slate-900">{languageMap[language].text7a}</h2>
              <p className="text-xs sm:text-sm text-slate-700">{languageMap[language].text7b}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
