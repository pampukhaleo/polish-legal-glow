
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

const SEOHead = ({ 
  title = "Геннадій Пампуха | Професійна Юридична та Експертна допомога українцям у Польщі",
  description = "Експертні юридичні консультації для українців з питань польського законодавства, бізнес-регулювання та імміграційних процесів.",
  keywords = "юридичні послуги, консультації, польське право, українці в Польщі, міжнародне право, експерт, адвокат",
  ogTitle,
  ogDescription,
  ogImage = "/gennadiy.png",
  ogUrl,
  canonical
}: SEOHeadProps) => {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Геннадій Пампуха" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Геннадій Пампуха - Міжнародний арбітр, Адвокат, Судовий Експерт" />
      <meta property="og:url" content={ogUrl || currentUrl} />
      <meta property="og:site_name" content="Міжнародний Юридичний та Експертний Консалт" />
      <meta property="og:locale" content="uk_UA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content="Геннадій Пампуха - Міжнародний арбітр, Адвокат, Судовий Експерт" />
      
      {/* Additional social media tags */}
      <meta property="article:author" content="Геннадій Пампуха" />
      <meta property="article:publisher" content="Міжнародний Юридичний та Експертний Консалт" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Language */}
      <meta httpEquiv="content-language" content="uk" />
      <link rel="alternate" hrefLang="uk" href={currentUrl} />
      
      {/* Performance optimizations */}
      <link rel="preload" href={`${siteUrl}/gennadiy.png`} as="image" type="image/png" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Міжнародний Юридичний та Експертний Консалт",
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/gennadiy.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["Ukrainian", "Polish", "English"]
          },
          "founder": {
            "@type": "Person",
            "name": "Геннадій Пампуха",
            "jobTitle": "Юрист, Експерт з міжнародного права"
          },
          "areaServed": ["Poland", "Ukraine"],
          "serviceType": ["Legal Consultation", "International Law", "Business Law"]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
