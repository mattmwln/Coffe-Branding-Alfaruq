import SEO from "@/components/seo"; // Pastikan untuk mengimpor komponen SEO
import HeroAbout from "@/components/fragments/Tentang/HeroAbout";
import Description from "@/components/fragments/Tentang/Description";
import FilosofiLogo from "@/components/fragments/Tentang/Ourlogo";
import TypographyColors from "@/components/fragments/Tentang/TypographyColors";
import Testimoni from "@/components/fragments/Testimoni";
import Sosmed from "@/components/fragments/Tentang/Sosmed";

const LayananPage = () => {
  return (
    <>
      <SEO
        title="Tentang Kami | PT ALFARUQ EXPORT INDONESIA"
        description="Pelajari lebih lanjut tentang PT ALFARUQ EXPORT INDONESIA, layanan kami, dan filosofi perusahaan kami."
        keywords="tentang kami, PT ALFARUQ EXPORT INDONESIA, filosofi, layanan"
        url="https://alfaruqexport.com/tentang" // Sesuaikan dengan URL halaman
        image="/hero-section-2.svg" // Ganti dengan URL gambar yang sesuai
      />
      <HeroAbout />
      <Description />
      <FilosofiLogo />
      <TypographyColors />
      <Testimoni />
      <Sosmed />
    </>
  );
};

export default LayananPage;
