import Image from "next/image"

const AboutSection = () => {
  return (
    <>
      <div className="section-wrapper padding-x py-10">
        <div className="width-responsif flex justify-center items-center pt-10 md:pt-2" data-aos="fade-down-right"
      data-aos-duration="1500">
        <div className="w-[500px] relative bg-blue-300/50 rounded-tr-full rounded-b-full">
          <Image src="/img/hero-section-1.png" alt="hero image" width={500} height={500} />
        </div>
      </div> 
      <div className="width-responsif items-center pt-4" data-aos="fade-down-right"
      data-aos-duration="1500">
          <h6 className="font-bold text-lg text-slate-700">Tentang kami</h6>
          <h1 className="text-blue-400 font-bold text-3xl">Klinik Smartphone</h1>
          <p className="leading-1 text-[17px]">
            Klinik Smartphone adalah pusat layanan khusus yang menawarkan solusi lengkap untuk semua jenis masalah perangkat mobile. Kami fokus pada memberikan layanan perbaikan berkualitas tinggi dengan pendekatan yang cepat dan efisien. Dengan teknisi berpengalaman dan peralatan modern, kami memastikan setiap perangkat diperbaiki dengan standar tertinggi.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutSection