import { useState } from "react";
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useLang(); 

  const faqItems: FAQItem[] = [
    {
      question: languageMap[language].text22a,
      answer: languageMap[language].text22b,
    },
    {
      question: languageMap[language].text23,
      answer: languageMap[language].text23a,
    },
    {
      question: languageMap[language].text24,
      answer: languageMap[language].text24a,
    },
    {
      question: languageMap[language].text25,
      answer: languageMap[language].text25a,
    },
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-3xl padding-x pt-10 pb-20 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">{languageMap[language].text20}</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-[#fffbfb] p-4 rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="2500">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              {activeIndex === index && (
                <p className="mt-2 text-[#4dab5b]">{item.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
