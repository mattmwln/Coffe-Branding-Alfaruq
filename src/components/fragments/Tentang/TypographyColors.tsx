import React from 'react';
import languageMap from "../../../languageMap";
import { useLang } from "../../../contexts/Langcontexts";
import { motion } from 'framer-motion';

const TypographyColors = () => {
    const { language } = useLang();

    // Variabel untuk pengaturan animasi dengan durasi lebih lambat
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Mengatur durasi menjadi lebih lambat (1.5 detik)
    };

    return (
        <div className="flex flex-col mt-14 items-center px-4 md:px-0">
            <div className="relative mb-6">
                <h2 className="text-3xl font-semibold">Typography & Color Palette</h2>
                <div className="absolute left-0 w-24 h-[4px] bg-[#4dab5b] rounded-full transition-all duration-300"></div>
            </div>

            {/* Animasi untuk kontainer utama */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 w-full md:w-3/4 gap-6 px-2 md:px-0"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }} // Animasi hanya dipicu sekali ketika kontainer muncul di viewport
            >
                {/* Font Sans */}
                <div className="flex items-center border p-4 rounded-lg transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <div className="bg-gray-100 p-4 rounded mr-4">
                        <p className="font-sans text-base text-gray-700">Aa</p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                        {languageMap[language].text28}
                    </p>
                </div>

                {/* Font Serif */}
                <div className="flex items-center border p-4 rounded-lg transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <div className="bg-gray-100 p-4 rounded mr-4">
                        <p className="font-serif text-base text-gray-700">Aa</p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                        {languageMap[language].text28a}
                    </p>
                </div>

                {/* Font Display */}
                <div className="flex items-center border p-4 rounded-lg transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <div className="bg-gray-100 p-4 rounded mr-4">
                        <p className="font-display text-base text-gray-700">Aa</p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">
                        {languageMap[language].text28b}
                    </p>
                </div>
            </motion.div>

            {/* Container untuk Palet Warna */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 w-full md:w-3/4 gap-6 px-2 md:px-0 mt-8"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }} // Animasi hanya dipicu sekali ketika kontainer muncul di viewport
            >
                {/* Primary Color */}
                <div className="flex items-center border p-4 rounded-lg transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <div className="w-16 h-16 bg-[#00bf62] rounded mr-4"></div>
                    <p className="text-gray-700 text-sm md:text-base">
                        {languageMap[language].text29}
                    </p>
                </div>

                {/* Secondary Color */}
                <div className="flex items-center border p-4 rounded-lg transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <div className="w-16 h-16 bg-[#3f3e47] rounded mr-4"></div>
                    <p className="text-gray-700 text-sm md:text-base">
                        {languageMap[language].text29a}
                    </p>
                </div>

                {/* Accent Color */}
                <div className="flex items-center border p-4 rounded-lg transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <div className="w-16 h-16 bg-[#fffbfb] rounded mr-4 border-2 border-black"></div>
                    <p className="text-gray-700 text-sm md:text-base">
                        {languageMap[language].text29b}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default TypographyColors;
