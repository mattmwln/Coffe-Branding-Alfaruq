import { Inter } from "next/font/google";
import HeroSection from "@/components/fragments/HeroSection";
import WhyChoose from "@/components/fragments/WhyChoose";
import ServicesSection from "@/components/fragments/ServicesSection";
import Testimoni from "@/components/fragments/Testimoni";
import FAQSection from "@/components/fragments/FAQSection";
import ContactSection from "@/components/fragments/ContactSection";
import CardSection from "@/components/fragments/CardSection";
import SEO from "@/components/seo"; // Import your SEO component
import MapView from "@/components/fragments/MapView"; // Import your SEO component


import dynamic from 'next/dynamic';

// Import dinamis untuk MapView  dinonaktifkan
// const MapView = dynamic(() => import('@/components/fragments/MapView'), {
//   ssr: false,
// });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SEO
        title="Beranda | PT ALFARUQ EXPORT INDONESIA"
        description="Selamat datang di PT ALFARUQ EXPORT INDONESIA, eksportir komoditas pertanian."
        keywords="kopi, komoditas pertanian, ekspor"
        url="https://alfaruqexport.com" // Sesuaikan dengan URL halaman
        image="/img/hero-section-2.svg" // Ganti dengan URL gambar yang sesuai
      />
      <HeroSection />
      <CardSection />
      <WhyChoose />
      <ServicesSection />
      <Testimoni />
      <FAQSection />
      <ContactSection />
      <MapView />
    </>
  );
}
