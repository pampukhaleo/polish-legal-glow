
import { Briefcase, FileText, Globe, Building, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Цивільне право",
    description: "Кредитні відносини, поділ майна, розлучення, розподіл опіки над дітьми, нотаріальні послуги, виконавче провадження, ДВС.",
    icon: Globe,
  },
  {
    title: "Господарське право",
    description: "Господарські суди, адміністративні спори з податковими органами, міжнародні арбітражні спори, супровід виконання судових рішень.",
    icon: Building,
  },
  {
    title: "Міжнародний арбітраж",
    description: "Представництво інтересів підприємств у міжнародних арбітражних судах 59 країн світу, виконання рішень міжнародних арбітражних судів.",
    icon: FileText,
  },
  {
    title: "Кримінальне право",
    description: "Суди загальної юрисдикції, аналіз та підготовка доказової бази, призначення, супровід і застосування судової експертизи у процесі, оскарження дій державних органів.",
    icon: Briefcase,
  },
  {
    title: "Судова експертиза в Україні",
    description: "Консультації, супровід та проведення судових експертиз в Україні на досудовій та судовій стадіях, рецензування.",
    icon: Users,
  },
  {
    title: "Судові та наукові експертизи в Європі",
    description: "Формування вашої правової позиції на основі судової експертизи проведеної європейськими експертами.",
    icon: ShieldCheck,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Юридичні послуги</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Комплексні юридичні рішення для українських громадян та бізнесу, що працюють у Польщі, Україні та країн Європи.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
