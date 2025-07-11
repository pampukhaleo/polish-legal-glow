
import * as HelmetPkg from 'react-helmet-async'
const { Helmet } = HelmetPkg

interface OrganizationStructuredDataProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
}

export const OrganizationStructuredData = ({ 
  name, 
  description, 
  url, 
  logo, 
  telephone, 
  email, 
  address 
}: OrganizationStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": ["Legal Consultation", "Immigration Services", "Business Law", "International Arbitration"],
    "areaServed": ["Poland", "Ukraine", "European Union"],
    ...(logo && { "logo": logo }),
    ...(telephone && { "telephone": telephone }),
    ...(email && { "email": email }),
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressCountry": address.addressCountry
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  worksFor: string;
  url: string;
}

export const PersonStructuredData = ({ 
  name, 
  jobTitle, 
  description, 
  image, 
  worksFor, 
  url 
}: PersonStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "worksFor": {
      "@type": "LegalService",
      "name": worksFor
    },
    "url": url,
    ...(image && { "image": image })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface ServiceStructuredDataProps {
  name: string;
  description: string;
  provider: string;
  url: string;
  serviceType: string;
}

export const ServiceStructuredData = ({ 
  name, 
  description, 
  provider, 
  url, 
  serviceType 
}: ServiceStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "LegalService",
      "name": provider
    },
    "url": url
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
