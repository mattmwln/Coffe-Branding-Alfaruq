// src/components/fragments/blog-fragments/HeroAbout.tsx
import Image from "next/image";
import languageMap from "../../../languageMap";
import { useLang } from "../../../contexts/Langcontexts";
import { motion } from "framer-motion";

type Props = {
  className?: string; // Menjaga className sebagai properti opsional
};

const HeroAbout = ({ className }: Props) => {
  const { language } = useLang();

  // Variants untuk animasi
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // Mulai dari kiri
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 }, // Mulai dari kanan
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className={`section-wrapper padding-x bg-white relative ${className} mt-24`}>
      {/* Main content section (image and text) */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Animasi untuk gambar */}
        <motion.div
          className="width-responsif w-full md:w-1/2 p-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animasi dipicu hanya sekali saat muncul di viewport
          variants={imageVariants}
        >
          <Image
            src="/Albarfoto.svg" // Pastikan path gambar ini benar
            alt="Foto Orang"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Animasi untuk teks */}
        <motion.div
          className="width-responsif w-full md:w-1/2 p-5 flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animasi dipicu hanya sekali saat muncul di viewport
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold mb-4">{languageMap[language].text26}</h1>
          <p className="text-lg text-gray-700 mb-6 md:text-lg text-sm">
            {languageMap[language].text26a}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;
