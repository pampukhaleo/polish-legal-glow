
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Зв'яжіться з нами</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Запишіться на консультацію, щоб обговорити ваші юридичні потреби. Я тут, щоб допомогти вам впевнено орієнтуватися в польському законодавстві.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-serif text-white mb-6">Контактна інформація</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">contact@genadii.pl</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Телефон</p>
                      <p className="text-white">+48 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Адреса офісу</p>
                      <p className="text-white">вул. Нови Свят 45</p>
                      <p className="text-white">00-029 Варшава, Польща</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Години роботи</p>
                      <p className="text-white">Понеділок - П'ятниця: 9:00 - 17:00</p>
                      <p className="text-white">Субота: За попереднім записом</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-serif text-white mb-3">Мови</h3>
                <div className="space-y-2">
                  <p className="text-white">Українська - Рідна</p>
                  <p className="text-white">Польська - Вільно</p>
                  <p className="text-white">Англійська - Вільно</p>
                  <p className="text-white">Російська - Вільно</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-serif text-white mb-6">Надіслати повідомлення</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Повне ім'я</label>
                    <Input 
                      id="name"
                      placeholder="Ваше ім'я"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email адреса</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Ваш email"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Тема</label>
                  <Input 
                    id="subject"
                    placeholder="Як я можу допомогти?"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Повідомлення</label>
                  <Textarea 
                    id="message"
                    placeholder="Ваше повідомлення..."
                    rows={5}
                    className="bg-zinc-800 border-zinc-700 text-white resize-none"
                  />
                </div>
                
                <div className="pt-2">
                  <Button className="bg-white text-black hover:bg-gray-200 w-full md:w-auto">
                    Надіслати повідомлення
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
