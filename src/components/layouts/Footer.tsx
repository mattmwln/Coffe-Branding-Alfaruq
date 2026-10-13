import Logo from "../../../public/hero-section-2.svg";
import Typography from "../elements/Typography";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";

const Footer = () => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const { language } = useLang(); 

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <footer className={`bg-[#4dab5b] md:py-10 py-5 md:px-20 px-5 text-white flex items-center justify-between md:flex-row flex-col ${!isHomePage ? 'mt-32' : ''}`}>
            <div className="md:w-[40%]">
                <Image src={Logo} className="w-[100px]" alt="Friendchise Logo" width={60} height={60} />
                <Typography className="text-lg my-5 font-semibold">Alfaruq Export Indonesia</Typography>
                <div className="flex space-x-4 mb-5">
                    <a href="https://www.instagram.com/haal_zaa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-green-600 transition duration-300">
                        <FaInstagram className="text-green-600 hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/hayyanudin-albarokah-cbes-b81286229/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-green-600 transition duration-300">
                        <FaLinkedin className="text-green-600 hover:text-white" />
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-green-600 transition duration-300">
                        <FaWhatsapp className="text-green-600 hover:text-white" />
                    </a>
                </div>
                <Typography className="font-normal text-sm">
                {languageMap[language].text30}
                </Typography>
                <Typography className="mt-5 text-sm">&copy; 2024 PT. Alfaruq Export Indonesia</Typography>
            </div>
            <div className="flex items-start justify-between md:flex-nowrap flex-wrap md:w-[50%] xl:mt-0 mt-10">
                <div className="xl:ml-10 md:w-[30%] sm:mb-0 mb-5 sm:w-fit w-full">
                    <Typography className="font-semibold text-lg mb-3">Alfaruq</Typography>
                    <ul>
    <li className="my-4 text-sm cursor-pointer relative group" onClick={() => handleNavigation('/')}>
        <span className="relative inline-block">
            {languageMap[language].text1} {/* Make sure this key exists in languageMap */}
            <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
    </li>
    <li className="my-4 text-sm cursor-pointer relative group" onClick={() => handleNavigation('/about')}>
        <span className="relative inline-block">
            {languageMap[language].text2} {/* Make sure this key exists in languageMap */}
            <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
    </li>
    <li className="my-4 text-sm cursor-pointer relative group" onClick={() => handleNavigation('/layanan')}>
        <span className="relative inline-block">
            {languageMap[language].text3} {/* Make sure this key exists in languageMap */}
            <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
    </li>
    <li className="my-4 text-sm cursor-pointer relative group" onClick={() => handleNavigation('/gallery')}>
        <span className="relative inline-block">
            {languageMap[language].text4} {/* Make sure this key exists in languageMap */}
            <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
    </li>
    <li className="my-4 text-sm cursor-pointer relative group" onClick={() => handleNavigation('/blog')}>
        <span className="relative inline-block">
            {languageMap[language].text5} {/* Make sure this key exists in languageMap */}
            <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
    </li>
</ul>

                </div>
                <div className="sm:mx-10 sm:w-fit w-full sm:mb-0 mb-5">
                    <Typography className="font-semibold text-lg mb-3">Work Hours</Typography>
                    <ul>
                        <li className="my-4 text-sm cursor-pointer relative group">
                            <span className="relative inline-block">
                            Mon - Fry : 08:00 - 21:00
                                <span className="absolute left-0 right-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </li>
                        <li className="my-4 text-sm cursor-pointer relative group">
                            <span className="relative inline-block">
                            Sat - Sun : 10:00 - 13:00
                                <span className="absolute left-0 right-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </li>
                        <li className="my-4 text-sm cursor-pointer relative group">
    <a href="https://wa.me/6282231221401" className="relative inline-block">
        +6282231221401
        <span className="absolute left-0 right-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </a>
</li>
<li className="my-4 text-sm cursor-pointer relative group">
    <a href="mailto:alfaruqexportindonesia@gmail.com" className="relative inline-block">
        @alfaruqexportindonesia.com
        <span className="absolute left-0 right-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </a>
</li>
                    </ul>
                </div>
                <div className="md:ml-5 sm:w-[30%]">
                <Typography className="font-semibold text-lg mb-4">Alamat</Typography>
    <div className="my-4 text-sm cursor-pointer relative group">
        <a 
            href="https://maps.app.goo.gl/odj6yvJ7BT93282K6" 
            target="_blank" 
        > Jl. Kepahiang - Pagar Alam No.69, Ulu Rurah, Kec. Pagar Alam Sel., Kota Pagar Alam, Sumatera Selatan 31528
            <span className="absolute left-0 right-0 h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </a>
    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
