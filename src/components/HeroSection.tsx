
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-12 md:py-32 relative bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4">
              Ukrainian Legal <span className="text-gray-400">Expert</span> in Poland
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Expert legal counsel for Ukrainian nationals navigating Polish law, business regulations, and immigration processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 font-medium py-2">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                View Services
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-xl border-4 border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-zinc-900/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-serif text-lg">Henadii Pampukha</p>
                <p className="text-sm text-gray-300">LL.M. in International Business Law</p>
              </div>
              {/* Replace with actual image path when available */}
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Professional photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
