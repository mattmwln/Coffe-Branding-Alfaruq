// src/components/seo.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string; // Optional jika tidak selalu diperlukan
  url: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url, image }) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/img/hero-section-1.svg" type="image/svg+xml" sizes="any" />
      <link rel="icon" href="/img/hero-section-1.svg" type="image/svg+xml" sizes="32x32" />
      <link rel="icon" href="/img/hero-section-1.svg" type="image/svg+xml" sizes="16x16" />

      {/* Structured Data JSON-LD (Optional) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PT ALFARUQ EXPORT INDONESIA",
          "url": url,
          "logo": image,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Kepahiang - Pagar Alam No.69, Ulu Rurah, Kec. Pagar Alam Sel., Kota Pagar Alam, Sumatera Selatan 31528",
            "addressLocality": "Kota Pagar Alam",
            "addressRegion": "Provinsi Sumatera Selatan",
            "postalCode": "Kode Pos",
            "addressCountry": "ID"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62 812-xxxx-xxxx",
            "contactType": "Customer Service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian", "English"]
          }
        })}
      </script>
    </Head>
  );
};

export default SEO;
