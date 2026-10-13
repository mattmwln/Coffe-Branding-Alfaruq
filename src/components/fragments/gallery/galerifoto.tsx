import Link from "next/link";
import { useLang } from '../../../contexts/Langcontexts';  
import languageMap from '../../../languageMap';
export default function Home() {
    const { language } = useLang();
    return (
        <section className="wrap-md w-full wrap-px pt-48 mx-auto px-10 md:px-20">
            {/* Judul Galeri */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{languageMap[language].text4}</h1>
            </div>

            {/* Konten Galeri */}
            <div className="grid grid-cols-6 gap-4">
                <div className=" col-span-6 md:col-span-4 row-span-2 hidden md:block">
                    <div 
                        className="flex h-full bg-cover bg-center border border-neutral-400/30 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-95" 
                        style={{ backgroundImage: "url('/img/produk/produk1.svg')" }}
                    ></div>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2 row-span-1">
                    <div 
                        className="flex flex-wrap h-full md:h-60 content-start relative aspect-square md:aspect-auto px-4 pt-8 border border-neutral-400/30 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-95" 
                        style={{ backgroundImage: "url('/img/images/galerifoto2.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="relative h-full w-full">
                            <img 
                                src="/img/images/galerifoto2.svg" 
                                alt="Gallery image 2" 
                                className="w-full h-full object-cover opacity-0" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2 row-span-1">
                    <div 
                        className="flex flex-wrap gap-4 g-neutral-300/20 relative aspect-square md:aspect-auto p-8 sm:p-12 border border-neutral-400/30 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-95"
                        style={{ backgroundImage: "url('/img/images/galerifoto3.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <img 
                            src="/img/images/galerifoto3.svg" 
                            alt="Gallery image 3" 
                            className="w-full h-full object-cover opacity-0" 
                            loading="lazy"
                        />
                    </div>
                </div>

                {["galerifoto4", "galerifoto5", "galerifoto6", "galerifoto7", "galerifoto8", "galerifoto9", "galerifoto10", "galerifoto11", "galerifoto12"].map((image, index) => (
                    <div className="col-span-6 sm:col-span-2" key={index}>
                        <Link
                            href="#"
                            className="group flex flex-wrap gap-4 content-start relative py-16 px-12 border border-neutral-400/30 rounded-lg shadow-sm overflow-hidden hover:bg-primary-800 hover:text-white transition-transform duration-300 hover:scale-95"
                            style={{ 
                                backgroundImage: `url('/img/images/${image}.svg')`, 
                                backgroundSize: "cover", 
                                backgroundPosition: "center" 
                            }}
                        >
                            <img 
                                src={`/img/images/${image}.svg`} 
                                alt={`Gallery image ${index + 4}`} 
                                className="w-full max-w-20 md:max-w-16 object-cover opacity-0" 
                                loading="lazy"
                            />
                        </Link>
                    </div>
                ))}

                <div className="col-span-6">
                    <div className="flex flex-wrap gap-4 content-start bg-neutral-300/20 relative p-8 sm:p-12 border aspect-video md:aspect-[3/1] border-neutral-400/30 rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-95">
                        <div className="image-container absolute flex w-full h-full inset-y-0 bottom-0 items-center right-0 flex-1 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-primary-400 via-primary-800 to-primary-200">
                            <img 
                                src="/img/images/galerifoto12.svg" 
                                alt="Image description" 
                                className="w-full h-full object-cover" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
