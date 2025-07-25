import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Victor Silva - Frontend/Mobile Developer", 
  description = "Desenvolvedor FullStack especializado em React, React Native, Flutter e Vue.js. Criando interfaces modernas e experiências digitais incríveis.",
  keywords = "desenvolvedor, frontend, mobile, react, react native, flutter, vue.js, javascript, typescript, portfolio",
  image = "/meta-image.jpg",
  url = "https://your-portfolio-url.com",
  type = "website"
}) => {
  const fullTitle = title.includes("Victor Silva") ? title : `${title} | Victor Silva`;
  const fullUrl = url.startsWith('http') ? url : `https://your-portfolio-url.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://your-portfolio-url.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Victor Silva" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="PT-BR" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Victor Silva Portfolio" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@VictorSilva" />
      <meta name="twitter:site" content="@VictorSilva" />
      
      {/* LinkedIn */}
      <meta property="linkedin:title" content={fullTitle} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      
      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Victor Silva",
          "jobTitle": "Frontend/Mobile Developer",
          "description": description,
          "url": fullUrl,
          "image": fullImage,
          "sameAs": [
            "https://github.com/VictorSilva27",
            "https://linkedin.com/in/victor-silva027"
          ],
          "knowsAbout": [
            "React.js",
            "React Native", 
            "Flutter",
            "Vue.js",
            "JavaScript",
            "TypeScript",
            "Mobile Development",
            "Frontend Development"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Estudos em Desenvolvimento"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          }
        })}
      </script>
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Helmet>
  );
};

export default SEO;
