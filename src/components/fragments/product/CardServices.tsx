import React, { useEffect } from "react";
import { useLang } from "../../../contexts/Langcontexts";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import { FaHome } from "react-icons/fa";
import languageMap from "../../../languageMap";

// Definisikan tipe untuk CardItem
type CardItem = {
  name: string;
  description: string;
  image: string;
  category: string;
};

const CardServices = () => {
  const { language } = useLang();
  
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  // Cek apakah kita berada di browser dan set kategori yang dipilih berdasarkan localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCategory = localStorage.getItem("selectedCategory");
      if (savedCategory) {
        setSelectedCategory(savedCategory);
      }
    }
  }, [language]);

  useEffect(() => {
    // Simpan kategori yang dipilih ke localStorage setiap kali berubah
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  const cardItems: CardItem[] = [
    { name: "Arabica Wild Luwak", description: languageMap[language].text33, image: "produk1", category: "coffee" },
    { name: "Robusta Wild Luwak", description: languageMap[language].text34, image: "produk2", category: "coffee" },
    { name: "Arabica Greenbean", description: languageMap[language].text34a, image: "produk3", category: "coffee" },
    { name: "Greenbean Robusta", description: languageMap[language].text34b, image: "produk4", category: "coffee" },
    { name: "Black Pepper", description: languageMap[language].text34c, image: "produk5", category: "fruit" },
    { name: "Roastbean Robusta", description: languageMap[language].text34d, image: "produk6", category: "coffee" },
    { name: "Dessicated Coconut", description: languageMap[language].text34e, image: "produk7", category: "coconut" },
    { name: "Coconut Shell Charcoal", description: languageMap[language].text34f, image: "produk8", category: "coconut" },
    { name: "Coconut Semi Husked", description: languageMap[language].text34g, image: "produk9", category: "coconut" },
    { name: "Cinnamon Commercial", description: languageMap[language].text34h, image: "produk10", category: "fruit" },
    { name: "Vanilla Beans", description: languageMap[language].text34i, image: "produk11", category: "Vanilla Beans" },
    { name: "Black Tea Broken Pekoe1", description: languageMap[language].text34i, image: "BlackTeaBrokenPekoe1", category: "Vanilla Beans" },
    { name: "Black Tea Dust1", description: languageMap[language].text34i, image: "BlackTeaDust1", category: "Vanilla Beans" },
    { name: "Black Tea Dust2", description: languageMap[language].text34i, image: "BlackTeaDust2", category: "Vanilla Beans" },
    { name: "Black Tea Fann", description: languageMap[language].text34i, image: "BlackTeaFann", category: "Vanilla Beans" },
    { name: "Black Tea Fngs", description: languageMap[language].text34i, image: "BlackTeaFngs", category: "Vanilla Beans" },
    { name: "Black Tea Pekoe Dust", description: languageMap[language].text34i, image: "BlackTeaPekoeDust", category: "Vanilla Beans" },
    { name: "Black Tea Pekoe Fanning1", description: languageMap[language].text34i, image: "BlackTeaPekoeFanning1", category: "Vanilla Beans" },
  ];

  const categories = [
    { id: "all", name: languageMap[language].text36c }, // Default category
    { id: "coffee", name: languageMap[language].text36e }, // Coffee
    { id: "fruit", name: languageMap[language].text36f }, // Fruit
    { id: "coconut", name: languageMap[language].text36d }, // Coconut
    { id: "Vanilla Beans", name: languageMap[language].text36h }, // tea
  ];

  const filteredItems = selectedCategory === "all"
    ? cardItems
    : cardItems.filter(item => item.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const categoryVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full py-10 flex justify-center flex-col items-center -mt-96 md:mt-0">
      <h1 className="text-4xl font-bold">{languageMap[language].text3}</h1>

      <div className="flex flex-wrap justify-center space-x-4 pt-5">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`text-xs sm:text-sm md:text-sm px-3 py-1 md:px-4 md:py-2 border-2 border-white rounded-lg 
              ${selectedCategory === category.id ? "bg-green-500 text-white" : "text-gray-600 hover:bg-green-500 hover:text-white"} 
              transition duration-300 ease-in-out`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <motion.div
        key={selectedCategory}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={categoryVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-20">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600">No products available for this category.</p>
          )}
        </div>
      </motion.div>

      <div className="pt-10 flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={buttonVariants}
        >
          <Button>
            <Link href="/" className="flex justify-center items-center">
              <FaHome className="mr-2" /> {languageMap[language].text36g}
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CardServices;
