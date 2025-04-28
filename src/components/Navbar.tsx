
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnchorLink from "@/components/AnchorLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-serif text-xl font-bold hover:text-gray-300 transition-colors">
                Геннадій Пампуха
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Про мене
              </Link>
              <AnchorLink to="services" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Послуги
              </AnchorLink>
              <AnchorLink to="testimonials" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Відгуки
              </AnchorLink>
              <AnchorLink to="contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Контакти
              </AnchorLink>

              <Button variant="outline" className="ml-4 text-white border-white hover:bg-white hover:text-black">
                Записатись на консультацію
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Про мене
            </Link>
            <AnchorLink to="services" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Послуги
            </AnchorLink>
            <AnchorLink to="testimonials" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Відгуки
            </AnchorLink>
            <AnchorLink to="contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Контакти
            </AnchorLink>
            <div className="pt-2">
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-black">
                Записатись на консультацію
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
