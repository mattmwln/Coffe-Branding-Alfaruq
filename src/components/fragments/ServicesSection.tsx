import Link from "next/link";
import Button from "../elements/Button";
import Card from "../elements/Card";
import languageMap from "../../languageMap";
import { useLang } from "../../contexts/Langcontexts";

type CardItem = {
  name: string;
  description: string;
  image: string;
};

const ServicesSection = () => {
  const { language } = useLang();

  // Define cardItems inside the component
  const cardItems: CardItem[] = [
    {
      name: "Arabica Wild Luwak",
      description: languageMap[language].text33, // Directly use the value
      image: "produk1",  // Just the filename without extension
    },
    {
      name: "Robusta Wild Luwak",
      description: languageMap[language].text34, // Directly use the value
      image: "produk2",
    },
    {
      name: "Arabica Greenbean",
      description: languageMap[language].text34a, // Directly use the value
      image: "produk3",
    },
  ];

  return (
    <div className="w-full pt-6 md:pt-0">
      <h1 className="text-3xl font-bold text-slate-800 text-center">
        {languageMap[language].text3}
      </h1>
      <div className="section-wrapper padding gap-5 pt-20">
        {cardItems.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
      <div className="pt-10 flex justify-center">
        <Button>
          <Link href="/layanan">{languageMap[language].text20a}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServicesSection;
