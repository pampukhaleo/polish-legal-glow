import { useParams, useLocation } from 'react-router-dom';
import { partners } from '@/data/partners';
import NotFound from './NotFound';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { PersonStructuredData } from '@/components/StructuredData';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from 'react';

const PartnerPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const partner = partners.find((p) => p.id === id);

  // Scroll to top when the page or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!partner) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#0F1729]">
      <SEOHead 
        title={`${partner.name} | ${partner.role} - Міжнародний Юридичний та Експертний Консалт`}
        description={`Дізнайтеся більше про ${partner.name}, ${partner.role}. ${partner.fullDescription.substring(0, 150)}...`}
        keywords={`${partner.name}, ${partner.role}, юридичні послуги, експерт, консультації`}
        ogImage={partner.image}
        canonical={`/partners/${partner.id}`}
      />
      <PersonStructuredData
        name={partner.name}
        jobTitle={partner.role}
        description={partner.shortDescription}
        image={partner.image}
        worksFor="Геннадій Пампуха - Міжнародний Юридичний та Експертний Консалт"
        url={`https://pampukha.pl/partners/${partner.id}`}
      />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <header className="flex flex-col items-center gap-4 mb-12 text-center">
            <Avatar className="w-[300px] h-[350px] rounded-none border-2 border-[#333333] overflow-hidden mx-auto">
              <AvatarImage
                src={partner.image}
                alt={partner.name}
                className="object-cover w-full h-full"
              />
              <AvatarFallback className="text-2xl bg-[#1F1F3A] text-[#aaadb0]">
                {partner.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-4xl font-bold text-white font-serif">{partner.name}</h1>
              <p className="text-[#60A5FA] mt-2">{partner.role}</p>
            </div>
          </header>
          
          <article className="prose prose-invert max-w-none">
            <section className="bg-[#1F1F3A] border border-[#333333] rounded-lg p-8 shadow-md">
              <p className="text-[#aaadb0] leading-relaxed whitespace-pre-line">{partner.fullDescription}</p>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-6 font-serif">Наші послуги:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1F1F3A] hover:bg-[#242456] border border-[#333333] transition-colors no-underline shadow-md"
                  >
                    <service.icon className="h-6 w-6 text-[#60A5FA]" />
                    <span className="text-white font-medium">{service.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerPage;
