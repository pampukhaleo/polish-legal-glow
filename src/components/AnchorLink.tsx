import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface AnchorLinkProps {
  to: string; // якорь без решетки, например "services"
  children: React.ReactNode;
  className?: string;
}

const AnchorLink = ({ to, children, className }: AnchorLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // Переход на главную страницу с параметром
      navigate(`/#${to}`);
    } else {
      // Если уже на главной, просто скроллим
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // При переходе на главную + наличие hash — прокрутить автоматически
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default AnchorLink;
