
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0F1729]">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-serif mb-8">Про мене</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1F1F3A] border border-[#333333] rounded-lg p-8 mb-8 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-4">Геннадій Пампуха</h2>
              <p className="text-[#aaadb0]">
                Досвідчений юрист з більш ніж 20-річним стажем у сфері міжнародного права. 
                Спеціалізуюся на вирішенні складних правових питань у цивільному, господарському 
                та кримінальному праві.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Освіта та кваліфікація</h3>
              <ul className="list-disc list-inside text-[#aaadb0] space-y-2">
                <li>Магістр права, Київський національний університет імені Тараса Шевченка</li>
                <li>Сертифікований адвокат України</li>
                <li>Член Національної асоціації адвокатів України</li>
                <li>Експерт з міжнародного арбітражу</li>
              </ul>

              <h3 className="text-2xl font-bold text-white pt-4">Професійний досвід</h3>
              <ul className="list-disc list-inside text-[#aaadb0] space-y-2">
                <li>Більше 1000 успішно вирішених справ</li>
                <li>Представництво інтересів клієнтів у судах України та Європи</li>
                <li>Експертиза в міжнародних арбітражних справах</li>
                <li>Консультування з питань українського та європейського права</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
