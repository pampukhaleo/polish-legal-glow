
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#1A1F2C] py-10 border-t border-[#6E59A5]/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-serif text-xl font-bold">Геннадій Пампуха</span>
            <p className="text-[#9b87f5] text-sm mt-1">Український юридичний експерт у Польщі</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-[#D6BCFA] text-sm">
              &copy; {new Date().getFullYear()} Усі права захищені.
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-[#D6BCFA] hover:text-white text-sm">Політика конфіденційності</a>
              <a href="#" className="text-[#D6BCFA] hover:text-white text-sm">Умови використання</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full purple-gradient hover:opacity-90 flex items-center justify-center text-white transition-colors"
              aria-label="Прокрутити вгору"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
