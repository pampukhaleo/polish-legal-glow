
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black py-10 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-serif text-xl font-bold">Геннадій Пампуха</span>
            <p className="text-gray-500 text-sm mt-1">Український юридичний експерт у Польщі</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Усі права захищені.
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Політика конфіденційності</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Умови використання</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors"
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
