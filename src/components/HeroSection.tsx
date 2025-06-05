
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-24 pb-12 md:py-32 relative bg-[#0F1729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4">
                Професійна <span className="text-highlight">Юридична та Експертна</span> допомога українцям у Польщі
              </h1>
              <p className="text-xl text-[#aaadb0] mb-6 leading-relaxed">
                Адвокатські послуги та юридична консультація з українського та європейського законодавств. Супровід та проведення судових експертиз в Україні та Європі.
              </p>
            </header>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="button-gradient text-white hover:opacity-90 font-medium py-2"
                aria-label="Записатись на консультацію - перейти до форми контактів"
              >
                Записатись на консультацію
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <figure className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-xl border-4 border-[#333333]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#16213E]/10 to-[#16213E]/30"></div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                <p className="font-serif text-lg">Геннадій Пампуха</p>
                <p className="text-sm text-[#aaadb0]">Міжнародний арбітр, Адвокат, Судовий Експерт</p>
              </figcaption>
              <OptimizedImage
                src={`${import.meta.env.BASE_URL}gennadiy.png`}
                alt="Геннадій Пампуха - Міжнародний арбітр, Адвокат, Судовий Експерт"
                className="w-full h-full object-cover"
                width={384}
                height={384}
                loading="eager"
                priority={true}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
