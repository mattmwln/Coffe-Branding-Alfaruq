import React from 'react';

type TestimonialCardProps = {
  logo: string;
  author: string;
};

const TestimonialCard = ({ logo, author }: TestimonialCardProps) => {
  return (
    <div className='p-3'>
      <div className="p-6  transition-all duration-300 " data-aos="zoom-in-left"
        data-aos-duration="1500">
        <div className="flex flex-col items-center pb-4"> {/* Tetap menggunakan items-center untuk menyimpan logo di tengah */}
          <div className="flex flex-col items-start border-l-4 border-[#4dab5b] pl-4 pr-4"> {/* Teks berada di kiri */}
            <h3 className="text-sm font-semibold">{author}</h3> {/* Ukuran teks author dikecilkan */}
          </div>
          <div className="flex justify-center items-center mt-2"> {/* Logo tetap di tengah */}
            <img 
              src={logo} 
              alt={`${author} Logo`} 
              className="w-30 h-30" // Ukuran logo disesuaikan (16x16)
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
