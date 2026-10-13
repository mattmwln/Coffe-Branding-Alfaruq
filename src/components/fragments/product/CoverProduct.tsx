import Image from "next/image";
import languageMap from "../../../languageMap";
import { useLang } from "../../../contexts/Langcontexts";

const HeroSection = () => {
  const { language } = useLang();

  return (
    <section className="relative flex flex-col top-32 mb-[550px] md:mb-56 md:flex-row items-center justify-between px-4 md:px-16 py-28">
      {/* Background Wrapper */}
      <div className="absolute inset-0 mx-4 md:mx-16 rounded-lg z-0">
        <Image
          src="/imgcover.png" // Path gambar
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Overlay hitam untuk efek gelap */}
      <div className="absolute inset-0 mx-4 md:mx-16 rounded-lg bg-black bg-opacity-60 z-0"></div>

      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left z-10 text-white md:pl-16">
        {/* Padding kiri ditambahkan */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {languageMap[language].text36}
          <span className="text-white">{languageMap[language].text36a}</span>
        </h1>
        <p className="text-white text-lg mt-4">
          {languageMap[language].text36b}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
