
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1729]">
      <div className="text-center p-8 bg-[#1F1F3A] border border-[#333333] rounded-xl max-w-md shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-white font-serif">404</h1>
        <p className="text-xl text-[#aaadb0] mb-6">Page not found</p>
        <p className="text-[#aaadb0] mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Button asChild className="inline-flex items-center button-gradient text-white hover:opacity-90">
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
