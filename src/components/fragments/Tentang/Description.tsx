// src/components/fragments/Tentang/Description.tsx
import React from 'react';
import languageMap from "../../../languageMap";
import { useLang } from "../../../contexts/Langcontexts";
import { motion } from "framer-motion";

const Description = () => {
    const { language } = useLang();

    // Variants untuk animasi gerakan
    const textVariants = {
        hidden: { opacity: 0, y: 50 },  // Mulai dengan opacity 0 dan sedikit bergeser ke bawah
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Kembali ke posisi semula dan opacity penuh
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mt-6 px-4">
                {/* Deskripsi Teks Kiri */}
                <motion.div
                    className="w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // Animasi saat elemen masuk dalam tampilan
                    variants={textVariants}
                >
                    <div className="flex flex-col w-full">
                        <div className="inline-block relative mb-2">
                            <h2 className="text-2xl font-semibold md:text-3xl">{languageMap[language].text26b}</h2>
                            <div className="absolute left-0 w-24 h-[4px] bg-[#4dab5b] rounded-full transition-all duration-300"></div>
                        </div>

                        <p className="text-gray-700 mb-2 text-sm md:text-base">
                            {languageMap[language].text26c}
                        </p>
                        <p className="text-gray-700 mb-2 text-sm md:text-base">
                            {languageMap[language].text26d}
                        </p>
                        <p className="text-gray-700 mb-2 text-sm md:text-base">
                            {languageMap[language].text26e}
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            {languageMap[language].text26f}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Description;
