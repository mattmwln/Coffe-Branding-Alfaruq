import React from 'react';
import { useLang } from '../../../contexts/Langcontexts';  // Impor useLang untuk mengambil bahasa yang dipilih
import languageMap from '../../../languageMap'; // Impor languageMap untuk teks dalam berbagai bahasa

const WarningCard = () => {
  const { language } = useLang();  // Ambil bahasa yang dipilih dari context

  return (
    <div className="space-y-4 px-6 lg:px-20 py-4">
      <div role="alert" className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-4 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105">
        <div className="flex items-center">
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-3 text-yellow-600" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <p className="text-sm font-semibold">{languageMap[language].warningTitle}</p>  {/* Teks peringatan dalam bahasa yang dipilih */}
        </div>
        <p className="mt-2 text-sm text-yellow-800 dark:text-yellow-300">
          {languageMap[language].warningMessage}  {/* Pesan peringatan dalam bahasa yang dipilih */}
        </p>
      </div>
    </div>
  );
};

export default WarningCard;
