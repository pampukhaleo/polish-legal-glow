
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-12 md:py-32 relative bg-[#0F1729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4">
              Професійна <span className="text-highlight">Юридична</span> допомога українцям у Польщі
            </h1>
            <p className="text-xl text-[#aaadb0] mb-6 leading-relaxed">
              Юридичні консультації з українського та міжнародного законодавства. Супровід та проведення судових експертиз в Україні та Європі.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-gradient text-white hover:opacity-90 font-medium py-2">
                Записатись на консультацію
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-[#60A5FA] border-[#333333] hover:bg-[#1E40AF] hover:text-white">
                Переглянути послуги
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-xl border-4 border-[#333333]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#16213E]/10 to-[#16213E]/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-serif text-lg">Геннадій Пампуха</p>
                <p className="text-sm text-[#aaadb0]">Міжнародний арбітр, Судовий Експерт</p>
              </div>
              {/* Replace with actual image path when available */}
              <img
                src={ `${ import.meta.env.BASE_URL }gennadiy.png` }
                alt="Геннадій Пампуха"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
