import SEO from "@/components/seo"; // Pastikan untuk mengimpor komponen SEO
import CardServices from "@/components/fragments/product/CardServices";
import CoverProduct from "@/components/fragments/product/CoverProduct";
import Warning from "@/components/fragments/product/Warning";

const LayananPage = () => {
  return (
    <>
      <SEO
        title="Produk Kami | PT ALFARUQ EXPORT INDONESIA"
        description="Jelajahi layanan kami di PT ALFARUQ EXPORT INDONESIA yang berfokus pada komoditas pertanian seperti kopi, kelapa, dan sarang burung."
        keywords="layanan, kopi, kelapa, sarang burung, komoditas pertanian"
        url="https://alfaruqexport.com/produk" // Sesuaikan dengan URL halaman
        image="/hero-section-2.svg" // Ganti dengan URL gambar yang sesuai
      />
      <CoverProduct/>
      <CardServices />
      <Warning />
    </>
  );
};

export default LayananPage;
