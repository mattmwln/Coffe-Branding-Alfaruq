import React, { useMemo } from 'react';
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";

const CardSection = () => {
  const { language } = useLang(); 

  const textContent = useMemo(() => languageMap[language], [language]);

  return (
    <div className="px-4 sm:px-6 md:px-10 w-full">
      <div 
        className="w-full rounded-2xl bg-[#fffbfb] relative px-6 sm:px-10 md:px-20 py-4 sm:py-5 md:py-6 border border-[#3f3e47] -top-10 z-20" 
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-6">
          <div className="text-center text-[#3f3e47] w-full sm:w-auto">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">10K</h1>
            <p className="text-xs sm:text-sm">{textContent.text10}</p>
          </div>
          <div className="text-center text-[#3f3e47] w-full sm:w-auto">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">99%</h1>
            <p className="text-xs sm:text-sm">{textContent.text10a}</p>
          </div>
          <div className="text-center text-[#3f3e47] w-full sm:w-auto">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">5K+</h1>
            <p className="text-xs sm:text-sm">{textContent.text10b}</p>
          </div>
          <div className="text-center text-[#3f3e47] w-full sm:w-auto">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">50+</h1>
            <p className="text-xs sm:text-sm">{textContent.text10c}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardSection);
