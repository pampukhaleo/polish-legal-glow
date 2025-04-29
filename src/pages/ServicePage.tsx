
import { useParams } from 'react-router-dom';
import { services } from '@/data/services';
import NotFound from './NotFound';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const ServiceIcon = service.icon;
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-[#0F1729]">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-16 w-16 rounded-lg button-gradient flex items-center justify-center">
              <ServiceIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white font-serif">{service.title}</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#aaadb0] mb-8">{service.description}</p>
            
            <div className="bg-[#1F1F3A] border border-[#333333] rounded-lg p-8 mt-8 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-4">Наші послуги включають:</h2>
              <p className="text-[#aaadb0]">
                Детальна інформація про цей вид послуг буде додана найближчим часом. 
                Для отримання додаткової інформації, будь ласка, зв'яжіться з нами.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Інші послуги:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherServices.map((otherService) => (
                  <Link
                    key={otherService.slug}
                    to={`/services/${otherService.slug}`}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1F1F3A] hover:bg-[#242456] border border-[#333333] transition-colors no-underline shadow-md"
                  >
                    <otherService.icon className="h-6 w-6 text-[#60A5FA]" />
                    <span className="text-white font-medium">{otherService.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
