
import React from 'react';

const SupportedBySection = () => {
  const partnerLogos = [
    {
      id: 1,
      name: "Адвокатське бюро 'Принцип'",
      image: `${import.meta.env.BASE_URL}lovable-uploads/aecd588b-8a2b-49db-80b3-4a2dcf14ca9e.png`
    },
    {
      id: 2,
      name: "Незалежний інститут Судових Експертиз",
      image: `${import.meta.env.BASE_URL}lovable-uploads/297caf42-fc3a-46f0-9cd3-ad70cf8e35ff.png`
    },
    {
      id: 3,
      name: "Европейська Арбітражна Палата Брюсель Бельгія",
      image: `${import.meta.env.BASE_URL}lovable-uploads/027e0d20-f2d8-4e87-99cc-f93a09016479.png`
    }
  ];

  return (
    <section className="py-16 bg-[#0F1729] border-t border-[#333333]/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
            Послуги надаються при підтримці:
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
          {partnerLogos.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32 w-full md:w-64">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-[#aaadb0] mt-3 text-center text-sm max-w-64">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;
