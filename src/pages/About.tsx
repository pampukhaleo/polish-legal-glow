
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
                Досвідчений юрист з більш ніж 20-річним стажем у сфері господарського, цивільного та міжнародного права. Спеціалізуюся на вирішенні складних правових питань у цивільному, господарському, міжнародному приватному праві та міжнародному арбітражному процесі.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Освіта та кваліфікація</h3>
              <ul className="list-disc list-inside text-[#aaadb0] space-y-2">
                <li>Інженер електротехнічного зв'язку, Одеський електротехнічний інститут зв'язку ім. АС Попова</li>
                <li>Інститут економіки і права харківського університету ім. Сковороди</li>
                <li>Харківська юридична академія ім. Ярослава Мудрого</li>
                <li>Адвокат, член київської обласної колегїї національної асоціації адвокатів України</li>
                <li>Судовий експерт міністерства Юстиції України</li>
                <li>Експерт з міжнародного арбітражу, міжнародний арбітр,
                  магістр з нафтогазової інженерії та технологій, Івано-франківський національний технічний університет Нафти і Газу</li>
              </ul>

              <h3 className="text-2xl font-bold text-white pt-4">Професійний досвід</h3>
              <ul className="list-disc list-inside text-[#aaadb0] space-y-2">
                <li>Понад 20 років позитивної судової практики</li>
                <li>Представництво інтересів клієнтів у судах України та Європи</li>
                <li>Супровід та особиста участь у проведені понад 7000 судових експертиз в Україні та поза її межами</li>
                <li>Організація, сприяння та проведення десятків міжнародних експертиз в статусі члена комісії</li>
                <li>Розгляд спорів у міжнародному комерційному арбітражному суді особисто та в складі колегії суддів понад 14 років</li>
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
