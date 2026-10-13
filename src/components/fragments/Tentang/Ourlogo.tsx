import Image from "next/image";
import React from 'react';
import languageMap from "../../../languageMap";
import { useLang } from "../../../contexts/Langcontexts";
import { motion } from 'framer-motion';

const FilosofiLogo = () => {
    const { language } = useLang();

    // Variabel untuk pengaturan animasi dengan durasi lebih lambat
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Mengatur durasi menjadi lebih lambat (1.5 detik)
    };

    return (
        <div className="flex flex-col mt-14 items-center">
            <div className="relative mb-6">
                <h2 className="text-3xl font-semibold">{languageMap[language].text27}</h2>
                <div className="absolute left-0 w-24 h-[4px] bg-[#4dab5b] rounded-full transition-all duration-300"></div>
            </div>

            {/* Animasi untuk komponen utama */}
            <motion.div 
                className="flex flex-col md:flex-row w-full md:w-3/4 px-10 "
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}  // Animasi sekali saja ketika komponen masuk ke viewport
            >
                {/* Deskripsi 1 */}
                <div className="flex items-center mb-4 md:mb-0 md:mr-6 border p-4 rounded-lg h-[110px] w-[290px] md:h-[180px] transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <Image 
                        src="/img/filosofi 1.svg" 
                        alt="Deskripsi 1" 
                        width={90} 
                        height={90} 
                        className="object-cover mr-4" 
                    />
                    <div className="border-r-2 h-[50px] mr-4 bg-gradient-to-r from-green-600 to-green-500 border-green-600"></div>
                    <p className="text-gray-700 text-xs md:text-sm">
                        {languageMap[language].text27a}
                    </p>
                </div>

                {/* Deskripsi 2 */}
                <div className="flex items-center mb-4 md:mb-0 md:mr-6 border p-4 rounded-lg h-[110px] w-[290px] md:h-[180px] transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <Image 
                        src="/img/filosofi 2.svg" 
                        alt="Deskripsi 2" 
                        width={90} 
                        height={90} 
                        className="object-cover mr-4" 
                    />
                    <div className="border-r-2 h-[50px] mr-4 bg-gradient-to-r from-green-600 to-green-500 border-green-600"></div>
                    <p className="text-gray-700 text-xs md:text-sm">
                        {languageMap[language].text27b}
                    </p>
                </div>

                {/* Deskripsi 3 */}
                <div className="flex items-center mb-4 md:mb-0 border p-4 rounded-lg h-[110px] w-[290px] md:h-[180px] transition-transform transform hover:scale-95 hover:shadow-lg duration-500 ease-in-out">
                    <Image 
                        src="/img/filosofi 3.svg" 
                        alt="Deskripsi 3" 
                        width={90} 
                        height={90} 
                        className="object-cover mr-4" 
                    />
                    <div className="border-r-2 h-[50px] mr-4 bg-gradient-to-r from-green-600 to-green-500 border-green-600"></div>
                    <p className="text-gray-700 text-xs md:text-sm">
                        {languageMap[language].text27c}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default FilosofiLogo;
