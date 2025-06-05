
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnchorLink from "@/components/AnchorLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F1729] border-b border-[#333333]/30 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 min-w-0">
            <div className="flex-shrink-0 min-w-0">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="text-white font-serif font-bold hover:text-[#60A5FA] transition-colors block"
              >
                <span className="text-sm sm:text-base lg:text-xl leading-tight">
                  <span className="block lg:inline">Міжнародний Юридичний</span>
                  <span className="block lg:inline lg:ml-1">та Експертний Консалт</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <Link to="/about" className="text-[#aaadb0] hover:text-[#60A5FA] px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap">
                Про мене
              </Link>
              <AnchorLink to="services" className="text-[#aaadb0] hover:text-[#60A5FA] px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap">
                Послуги
              </AnchorLink>
              <AnchorLink to="testimonials" className="text-[#aaadb0] hover:text-[#60A5FA] px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap">
                Відгуки
              </AnchorLink>
              <AnchorLink to="contact" className="text-[#aaadb0] hover:text-[#60A5FA] px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium whitespace-nowrap">
                Контакти
              </AnchorLink>

              <Button
                onClick={scrollToContact}
                className="ml-2 lg:ml-4 button-gradient text-white hover:opacity-90 whitespace-nowrap text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
              >
                Записатись на консультацію
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-[#aaadb0] hover:text-[#60A5FA] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0F1729] border-t border-[#333333]/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="text-[#aaadb0] hover:text-[#60A5FA] block px-3 py-2 text-base font-medium">
              Про мене
            </Link>
            <AnchorLink to="services" className="text-[#aaadb0] hover:text-[#60A5FA] block px-3 py-2 text-base font-medium">
              Послуги
            </AnchorLink>
            <AnchorLink to="testimonials" className="text-[#aaadb0] hover:text-[#60A5FA] block px-3 py-2 text-base font-medium">
              Відгуки
            </AnchorLink>
            <AnchorLink to="contact" className="text-[#aaadb0] hover:text-[#60A5FA] block px-3 py-2 text-base font-medium">
              Контакти
            </AnchorLink>
            <div className="pt-2">
              <Button
                onClick={scrollToContact}
                className="w-full button-gradient text-white hover:opacity-90"
              >
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