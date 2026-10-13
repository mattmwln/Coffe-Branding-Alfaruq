import SEO from "@/components/seo"; // Pastikan untuk mengimpor komponen SEO
import Galleryfoto from "@/components/fragments/gallery/galerifoto";
import ImageCarousel from "@/components/fragments/gallery/ImageCarousel";



const BlogPage = () => {
  return (
    <>
      <SEO
        title="Gallery | PT ALFARUQ EXPORT INDONESIA"
        description="Lihat koleksi foto terbaru dari PT ALFARUQ EXPORT INDONESIA, eksportir komoditas pertanian."
        keywords="gallery, foto, kopi, komoditas pertanian"
        url="https://alfaruqexport.com/gallery" // Sesuaikan dengan URL halaman
        image="/hero-section-2.svg" // Ganti dengan URL gambar yang sesuai
      />
      <ImageCarousel/>
      <Galleryfoto />
    </>
  );
};

export default BlogPage;
