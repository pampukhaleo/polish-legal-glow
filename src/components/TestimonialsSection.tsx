
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Експертиза Геннадія в польському імміграційному праві була неоціненною для переїзду нашої родини з України. Його рекомендації зробили весь процес простим і безстресовим.",
    author: "Наталія Кравчук",
    position: "Українська родина, Варшава",
  },
  {
    quote: "Як український підприємець, що відкриває бізнес у Польщі, я не зміг би розібратися у складних правилах без професійних порад Геннадія. Дуже рекомендую!",
    author: "Михайло Шевченко",
    position: "Засновник технологічного стартапу",
  },
  {
    quote: "Його глибоке розуміння як української, так і польської правових систем дало нам значну перевагу в наших транскордонних бізнес-операціях.",
    author: "Катерина Бондар",
    position: "Фінансовий директор, Торгова компанія",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#0C1220]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Відгуки клієнтів</h2>
          <p className="text-[#aaadb0] max-w-2xl mx-auto">
            Дізнайтеся, що клієнти говорять про мої юридичні послуги та відданість справі.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1F1F3A] border-[#333333] relative overflow-hidden h-full shadow-md">
              <CardContent className="pt-10 pb-6 px-5 flex flex-col h-full">
                <Quote className="absolute top-4 right-4 h-6 w-6 text-[#60A5FA]" />
                <p className="text-[#aaadb0] mb-6 flex-grow italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-[#aaadb0] text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
