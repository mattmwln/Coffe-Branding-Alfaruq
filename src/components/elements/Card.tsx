import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";

type PropsCard = {
  name: string;
  image: string;
  description: string;  // Add description to show within the card
  
};

const Card = (props: PropsCard) => {
  const { name, image, description } = props;
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);  // State to toggle description visibility
  const cardRef = useRef<HTMLDivElement | null>(null);  // Reference to the card container
  const { language } = useLang();

  const toggleDescription = () => {
    setIsDescriptionVisible(prevState => !prevState);  // Toggle visibility
  };

  // Close description if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsDescriptionVisible(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Create a message for WhatsApp
  const createWhatsAppMessage = () => {
    return `Hi, I am interested in purchasing the product: ${name}. Here's some info about it: Website`;
  };

  return (
    <div className="flex justify-center items-center m-4">
      <div
        ref={cardRef}  // Attach the reference to the card container
        className="relative flex w-full sm:w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-300"
      >
        <div className="relative mx-4 -mt-6 h-40 sm:h-48 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
          {/* Image - set to full width, height, and follow the rounded corners */}
          <img
            src={`/img/produk/${image}.svg`}  // Updated path
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-4 sm:p-6">
          <h5 className="mb-2 block font-sans text-lg sm:text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-green-600 transition-colors duration-300">
            {name}
          </h5>

          {/* Lihat Selengkapnya text */}
          <button
  onClick={toggleDescription}  // Toggle description visibility
  className="text-green-600 hover:text-green-700 text-sm sm:text-base font-medium transition-colors duration-300"
>
  {isDescriptionVisible ? languageMap[language].text34k : languageMap[language].text34j}
</button>


          {/* Show description with animation */}
          <div
            className={`transition-all duration-500 overflow-hidden mt-4 mb-4 text-sm text-gray-600 ${
              isDescriptionVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {description}
          </div>
        </div>

        <div className="p-4 sm:p-6 pt-0 mt-[-10px] md:mt-[-50px]">
          <a
            href={`https://wa.me/6283119789523?text=${encodeURIComponent(createWhatsAppMessage())}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-bold text-white rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <span className="relative flex items-center gap-2">
                <FaShoppingCart className="text-xl sm:text-2xl hover:text-yellow-400 transition-colors" />
                {languageMap[language].text34l}
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
