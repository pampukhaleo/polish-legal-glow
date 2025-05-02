
import React from 'react';

const SupportedBySection = () => {
  const partnerLogos = [
    {
      id: 1,
      name: 'Адвокатське бюро "Принцип"',
      image: `${import.meta.env.BASE_URL}principaologo.png`
    },
    {
      id: 2,
      name: "Незалежний інститут Судових Експертиз",
      image: `${import.meta.env.BASE_URL}logonise.png`
    },
    {
      id: 3,
      name: "Европейська Арбітражна Палата. Брюсель, Бельгія",
      image: `${import.meta.env.BASE_URL}cheataiclogo.png`
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
        <div className="flex flex-row md:flex-row justify-center items-cetner md:items-start gap-8 md:gap-12 flex-wrap">
          { partnerLogos.map((partner) => (
            <div key={ partner.id } className="flex flex-col items-center w-64">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center w-full h-24">
                <img
                  src={ partner.image }
                  alt={ partner.name }
                  className="h-full object-contain"
                />
              </div>
              <p className="text-[#aaadb0] mt-3 text-center text-sm">{ partner.name }</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;
