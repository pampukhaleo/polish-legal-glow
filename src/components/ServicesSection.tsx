
import { Briefcase, FileText, Globe, Building, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Immigration Law",
    description: "Legal assistance with residence permits, work permits, and citizenship applications for Ukrainians in Poland.",
    icon: Globe,
  },
  {
    title: "Business Formation",
    description: "Complete legal support for setting up your business in Poland, including company registration and compliance.",
    icon: Building,
  },
  {
    title: "Contract Law",
    description: "Drafting and reviewing commercial agreements, employment contracts, and business transactions.",
    icon: FileText,
  },
  {
    title: "Corporate Law",
    description: "Legal advice on corporate governance, mergers & acquisitions, and regulatory compliance.",
    icon: Briefcase,
  },
  {
    title: "Employment Law",
    description: "Guidance on Polish labor regulations, employee rights, and employer obligations.",
    icon: Users,
  },
  {
    title: "Litigation",
    description: "Representation in legal disputes, civil cases, and administrative proceedings in Polish courts.",
    icon: ShieldCheck,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Legal Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to Ukrainian individuals and businesses operating in Poland.
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
