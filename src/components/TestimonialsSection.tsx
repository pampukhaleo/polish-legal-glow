
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Olena's expertise in Polish immigration law was invaluable for our family's relocation from Ukraine. Her guidance made the entire process smooth and stress-free.",
    author: "Nataliya Kravchuk",
    position: "Ukrainian Family, Warsaw",
  },
  {
    quote: "As a Ukrainian entrepreneur opening a business in Poland, I couldn't have navigated the complex regulations without Olena's professional advice. Highly recommended!",
    author: "Mikhail Shevchenko",
    position: "Tech Startup Founder",
  },
  {
    quote: "Her detailed understanding of both Ukrainian and Polish legal systems gave us a significant advantage in our cross-border business operations.",
    author: "Kateryna Bondar",
    position: "CFO, Trading Company",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what clients say about my legal services and commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700 relative overflow-hidden h-full">
              <CardContent className="pt-10 pb-6 px-5 flex flex-col h-full">
                <Quote className="absolute top-4 right-4 h-6 w-6 text-zinc-600" />
                <p className="text-gray-300 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
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
