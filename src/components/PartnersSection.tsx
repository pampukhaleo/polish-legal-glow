
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { partners } from "@/data/partners";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-[#0F1729] border-t border-[#333333]/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Наші партнери</h2>
          <p className="text-[#aaadb0] max-w-2xl mx-auto">
            Команда професійних юристів, які спеціалізуються у різних галузях права та надають послуги найвищої якості.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          { partners.map((partner) => (
            <Link to={ `/partners/${ partner.id }` } key={ partner.id } className="no-underline">
              <Card className="max-w-sm mx-auto h-full flex flex-col service-card-gradient border-[#333333] hover:border-[#60A5FA] transition-all shadow-md">
              <CardHeader className="items-center pt-6 pb-4">
                  <Avatar className="h-32 w-32 border-2 border-[#333333] rounded-none mb-4 overflow-hidden items-start">
                    <AvatarImage
                      src={ partner.image }
                      alt={ partner.name }
                      className="object-cover h-full w-full"
                    />
                    <AvatarFallback className="text-lg bg-[#1F1F3A] text-[#aaadb0]">
                      { partner.name.split(' ').map(n => n[0]).join('') }
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-white font-serif text-center">
                    { partner.name }
                  </CardTitle>
                  <CardDescription className="text-[#aaadb0] font-medium mt-1 text-center">
                    { partner.role }
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-[#aaadb0] text-center">{ partner.shortDescription }</p>
                </CardContent>
              </Card>
            </Link>
          )) }
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
