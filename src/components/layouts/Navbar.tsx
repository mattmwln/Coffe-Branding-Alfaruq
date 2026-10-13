import { useState } from "react";
import Link from "next/link";
import Button from "../elements/Button";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import languageMap from "../../languageMap";
import ButtonDrop from "../elements/ButtonDrop";
import { useLang } from "../../contexts/Langcontexts"; // Impor context

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLang(); // Ambil language dari context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (selectedLanguage: 'id' | 'uk' | 'ar') => {
    setLanguage(selectedLanguage);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-4 sm:px-6 md:px-10 text-slate-800 flex justify-between items-center z-[9999] backdrop-blur-xl bg-white/60 border-b border-slate-300">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img 
          src="/img/hero-section-1.svg" 
          alt="Logo Alfaruq Export" 
          className="w-16 h-16" 
        />
        {/* Text */}
        <div className="text-md font-bold text-[#3f3e47] hidden sm:block">
          <span className="block">Alfaruq Export</span>
          <span className="block">Indonesia</span>
        </div>
      </div>

      <div className="sm:hidden flex items-center z-[9999]">
        {/* Custom dropdown untuk memilih bahasa di sebelah kiri hamburger */}
        <ButtonDrop onSelect={handleLanguageChange} />
        
        {/* Garis pemisah antara dropdown bahasa dan tombol hamburger */}
        <div className="border-l-2 border-[#00bf62] h-6 mx-2"></div> {/* Garis pemisah */}

        <button onClick={toggleMenu} className="text-2xl focus:outline-none transition-transform duration-300">
          {isMenuOpen ? (
            <CgClose className="w-[35px] h-[35px]" />
          ) : (
            <CgMenuRightAlt className="w-[35px] h-[35px]" />
          )}
        </button>
      </div>

      <ul className="hidden sm:flex items-center justify-center flex-1 gap-7">
        <li className="relative group">
          <Link href="/" prefetch={false} className="inline-block">
            {languageMap[language].text1} {/* Beranda/Home */}
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="/about" prefetch={false} className="inline-block">
            {languageMap[language].text2} {/* Tentang/About */}
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="/layanan" prefetch={false} className="inline-block">
            {languageMap[language].text3} {/* Product */}
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="/gallery" prefetch={false} className="inline-block">
            {languageMap[language].text4} {/* Galeri/Gallery */}
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="/blog" prefetch={false} className="inline-block">
            {languageMap[language].text5} {/* Join Team */}
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-slate-800 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      <div className="hidden sm:flex items-center">
        {/* Menambahkan dropdown bahasa di sini */}
        <div className="relative mr-4">
          <ButtonDrop onSelect={handleLanguageChange} />
        </div>
        <Button>
          <Link href="https://wa.me/62895380084949">
            {languageMap[language].text6}
          </Link>
        </Button>
      </div>

      <ul
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } absolute top-20 left-0 right-0 bg-white text-left px-8 py-5 sm:hidden transition-transform duration-300 ease-in-out z-50`}
      >
        <li className="py-2 hover:text-[#00bf62]">
          <Link href="/" onClick={toggleMenu} prefetch={false}>
            {languageMap[language].text1} {/* Beranda/Home */}
          </Link>
        </li>
        <li className="py-2 hover:text-[#00bf62]">
          <Link href="/about" onClick={toggleMenu} prefetch={false}>
            {languageMap[language].text2} {/* Tentang/About */}
          </Link>
        </li>
        <li className="py-2 hover:text-[#00bf62]">
          <Link href="/layanan" onClick={toggleMenu} prefetch={false}>
            {languageMap[language].text3} {/* Product */}
          </Link>
        </li>
        <li className="py-2 hover:text-[#00bf62]">
          <Link href="/gallery" onClick={toggleMenu} prefetch={false}>
            {languageMap[language].text4} {/* Galeri/Gallery */}
          </Link>
        </li>
        <li className="py-2 hover:text-[#00bf62]">
          <Link href="/blog" onClick={toggleMenu} prefetch={false}>
            {languageMap[language].text5} {/* Join Team */}
          </Link>
        </li>
        <li className="py-2">
          <Button>
            <Link href="https://wa.me/62895380084949">
              {languageMap[language].text0} {/* Hubungi Kami/Contact Us */}
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
