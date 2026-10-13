import Button from '@/components/elements/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogPosts = [
    { 
      id: '1', 
      title: 'Kenapa Memperbaiki Smartphone Lebih Hemat daripada Membeli Baru?', 
      content: `Ketika smartphone rusak, banyak orang langsung berpikir untuk membeli yang baru...`, 
      image: 'blog1' 
    },
    { 
      id: '2', 
      title: 'Masalah Smartphone yang Sering Terjadi dan Solusinya', 
      content: `Smartphone sering kali mengalami berbagai masalah...`, 
      image: 'blog2' 
    },
    {
      id: '3',
      title: 'Cara Menjaga Smartphone Anda Agar Tetap Awet',
      content: `Smartphone adalah bagian penting dari kehidupan kita sehari-hari...`,
      image: 'blog3'
    }
  ];

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="padding-x py-28">
      <div className="relative w-full h-[250px]">
        <Image
          src={`/img/${post.image}.jpg`}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6 mt-3">{post.title}</h1>
      <p>{post.content}</p>
      <div className='pt-5'>
        <Link href="/blog">
          <Button>
            Kembali
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
