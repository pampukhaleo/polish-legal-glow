
import { useParams } from 'react-router-dom';
import { services } from '@/components/ServicesSection';
import { NotFound } from './NotFound';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-16 w-16 rounded-lg bg-zinc-800 flex items-center justify-center">
              <ServiceIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white font-serif">{service.title}</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-400 mb-8">{service.description}</p>
            
            {/* Тут можна додати більше контенту для кожного сервісу */}
            <div className="bg-zinc-800 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Наші послуги включають:</h2>
              <p className="text-gray-400">
                Детальна інформація про цей вид послуг буде додана найближчим часом. 
                Для отримання додаткової інформації, будь ласка, зв'яжіться з нами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
