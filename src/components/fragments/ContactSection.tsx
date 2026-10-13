import Link from "next/link";
import { useLang } from "../../contexts/Langcontexts";
import languageMap from "../../languageMap";

const ContactSection = () => {
  const { language } = useLang(); 
  
  return (
    <div className="padding-x pb-8">
      <div className="w-full max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-green-600 to-green-500 relative px-6 sm:px-10 md:px-20 py-5 ">
        <div className="section-wrapper justify-between gap-6 ">
          <div className="width-responsif text-white text-xl font-semibold">{languageMap[language].text31}</div>
          <button className="bg-[#fffbfb] py-2 px-3 rounded-xl shadow-sm"><Link href={"https://wa.me/62895380084949"}>{languageMap[language].text32}</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
