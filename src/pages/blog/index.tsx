import Button from "@/components/elements/Button";
import HeroBlog from "@/components/fragments/blog-fragments/HeroBlog";
import SEO from "@/components/seo"; // Pastikan untuk mengimpor komponen SEO
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const BlogPage = () => {
  return(
    <>
    <SEO
        title="Team | PT ALFARUQ EXPORT INDONESIA"
        description="Di balik setiap perjalanan yang sukses terdapat tim profesional yang berdedikasi. Kenali individu-individu berbakat yang menghadirkan inovasi, semangat, dan keahlian bagi misi kami setiap hari.."
        keywords="gallery, foto, kopi, komoditas pertanian"
        url="https://alfaruqexport.com/gallery" // Sesuaikan dengan URL halaman
        image="/hero-section-2.svg" // Ganti dengan URL gambar yang sesuai
      />
      <HeroBlog/>
    </>
  )
}

export default BlogPage;