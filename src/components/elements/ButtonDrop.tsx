import React, { useState, useRef, useEffect } from "react";

interface ButtonDropProps {
  onSelect: (language: 'id' | 'uk' | 'ar') => void;
}

const ButtonDrop: React.FC<ButtonDropProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'uk' | 'id' | 'ar'>('uk');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language: 'uk' | 'id' | 'ar') => {
    setSelectedLanguage(language);
    onSelect(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getFlag = (language: 'uk' | 'id' | 'ar') => {
    switch (language) {
      case 'uk':
        return '/flags/uk-flag.png'; // English flag path
      case 'id':
        return '/flags/id-flag.png'; // Indonesian flag path
      case 'ar':
        return '/flags/sa-flag.png'; // Arabic flag path
      default:
        return '';
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-transparent border-none text-inherit focus:outline-none flex items-center"
      >
        <img src={getFlag(selectedLanguage)} alt={selectedLanguage} className="w-5 h-5 mr-2" />
        {selectedLanguage === 'uk'
          ? "Eng"
          : selectedLanguage === 'id'
          ? "Idn"
          : "عرب"}
      </button>
      {isOpen && (
        <div
        className="absolute mt-2 w-20 bg-white backdrop-blur-xl border border-gray-200 rounded-md shadow-lg right-0 transition-all duration-200"
      >
        <ul className="py-1 text-gray-700 flex flex-col items-center">
          <li
            onClick={() => handleSelect('uk')}
            className="px-4 py-2 cursor-pointer hover:bg-[#4dab5b] w-16 text-center rounded-md transition-all duration-200 text-gray-700 hover:text-white flex items-center justify-center"
          >
            <img src="/flags/uk-flag.png" alt="English" className="w-5 h-5" />
          </li>
          <li
            onClick={() => handleSelect('id')}
            className="px-4 py-2 cursor-pointer hover:bg-[#4dab5b] w-16 text-center rounded-md transition-all duration-200 text-gray-700 hover:text-white flex items-center justify-center"
          >
            <img src="/flags/id-flag.png" alt="Indonesian" className="w-5 h-5" />
          </li>
          <li
            onClick={() => handleSelect('ar')}
            className="px-4 py-2 cursor-pointer hover:bg-[#4dab5b] w-16 text-center rounded-md transition-all duration-200 text-gray-700 hover:text-white flex items-center justify-center"
          >
            <img src="/flags/sa-flag.png" alt="Arabic" className="w-5 h-5" />
          </li>
        </ul>
      </div>
      
      )}
    </div>
  );
};

export default ButtonDrop;
 