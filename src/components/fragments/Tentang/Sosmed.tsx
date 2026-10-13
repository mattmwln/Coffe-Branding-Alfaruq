import React from 'react';
import { motion } from 'framer-motion';
import languageMap from "../../../languageMap";
import { useLang } from "../../../contexts/Langcontexts";

// Define the prop types for the Card component
interface CardProps {
  name: string;
  role: string;
  articles: string;
  followers: string;
  imageSrc: string;
  link: string; // New prop for link
}

// Card component accepting props including imageSrc and link
const Card: React.FC<CardProps> = ({ name, role, articles, followers, imageSrc, link }) => {
  const { language } = useLang();
  
  const followersText = languageMap[language]?.text35 || "Followers"; // Default to "Followers" if not found
  
  return (
    <motion.div
      className="max-w-[300px] bg-white border border-gray-200 rounded-lg p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="flex gap-2 items-start">
        <div className="h-28 w-28 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg overflow-hidden">
          <img src={imageSrc} alt="Social Media Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-between h-28 flex-1">
          <div>
            <p className="text-sm font-medium text-black">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
          <div className="w-full bg-white p-2 rounded-lg flex justify-between text-sm text-black">
            <p className="flex flex-col items-center">
              {languageMap[language].text35a}
              <span className="font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">{articles}</span>
            </p>
            <p className="flex flex-col items-center">
              {followersText}
              <span className="font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                {followers}
              </span>
            </p>
          </div>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-600 transform hover:translate-y-[-0.125rem] transition duration-300 text-center block"
      >
        {languageMap[language].text35b}
      </a>
    </motion.div>
  );
};

// CardsContainer component rendering multiple cards with different images and links
const CardsContainer: React.FC = () => {
  const cardsData: CardProps[] = [
    { name: 'Hayyanudin Albarokah,CBS.', role: 'Linked In', articles: '34', followers: '500+', imageSrc: '/img/linked.png', link: 'https://www.linkedin.com/in/hayyanudin-albarokah-cbes-b81286229/' },
    { name: 'Hayyanudin Albarokah,CBS.', role: 'Instagram', articles: '79', followers: '8.402', imageSrc: '/img/ig.png', link: 'https://www.instagram.com/haal_zaa/' },
    { name: 'PT Alfaruq Export Indonesia', role: 'Facebook', articles: '12', followers: '520', imageSrc: '/img/fb.png', link: 'https://www.facebook.com/people/PT-Alfaruq-Export-Indonesia/61561131514161/' },
  ];

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl font-semibold mb-6 relative">
        Social Media
        <span className="absolute bottom-0 left-0 w-[80px] h-1 bg-[#4dab5b] rounded-full transition-all duration-300"></span>
      </h2>
      <div className="max-w-3/4 mx-auto flex flex-wrap gap-8 justify-center">
        {cardsData.map((data, index) => (
          <Card
            key={index}
            name={data.name}
            role={data.role}
            articles={data.articles}
            followers={data.followers}
            imageSrc={data.imageSrc}
            link={data.link} // Pass the link
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
