import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Ім'я має містити щонайменше 2 символи" }),
  email: z.string().email({ message: "Введіть дійсну email адресу" }),
  subject: z.string().min(3, { message: "Тема має містити щонайменше 3 символи" }),
  message: z.string().min(10, { message: "Повідомлення має містити щонайменше 10 символів" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Call the Supabase Edge Function to send the message to Telegram
      const { error } = await supabase.functions.invoke('contact-form', {
        body: {
          ...values,
          companyName: 'GG POLAND'
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      // Reset form on successful submission
      form.reset();
      toast({
        title: "Успіх!",
        description: "Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.",
      });
    } catch (error) {
      toast({
        title: "Помилка",
        description: "Не вдалося надіслати повідомлення. Будь ласка, спробуйте пізніше.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#16213E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Зв'яжіться з нами</h2>
            <p className="text-[#aaadb0] max-w-2xl mx-auto">
              Запишіться на консультацію, щоб обговорити ваші юридичні потреби. Я тут, щоб допомогти вам впевнено орієнтуватися в польському законодавстві.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1F1F3A] border border-[#333333] rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-serif text-white mb-6">Контактна інформація</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#60A5FA] mr-3 mt-0.5"/>
                    <div>
                      <p className="text-sm text-[#aaadb0]">Email</p>
                      <p className="text-white">
                        <a href="mailto:info@chea-taic.be" className="hover:underline">info@chea-taic.be</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#60A5FA] mr-3 mt-0.5"/>
                    <div>
                      <p className="text-sm text-[#aaadb0]">Телефон</p>
                      <p className="text-white">
                        <a href="tel:+48539240846" className="hover:underline">+48 539 240 846</a>
                      </p>
                      <p className="text-white">
                        <a href="tel:+380504130393" className="hover:underline">+380 50 413 03 93</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#60A5FA] mr-3 mt-0.5"/>
                    <div>
                      <p className="text-sm text-[#aaadb0]">Предствавництво в Польщі</p>
                      <p className="text-white">J.Hallera 1/20</p>
                      <p className="text-white">45867 Opole, Poland</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#60A5FA] mr-3 mt-0.5"/>
                    <div>
                      <p className="text-sm text-[#aaadb0]">Предствавництво в Україні</p>
                      <p className="text-white">вул. Левка Лук'яненка, 21, к. 3, офіс 7</p>
                      <p className="text-white">04207, Україна, м. Київ, Україна</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#60A5FA] mr-3 mt-0.5"/>
                    <div>
                      <p className="text-sm text-[#aaadb0]">Години роботи</p>
                      <p className="text-white">Понеділок - П'ятниця: 10:00 - 17:00</p>
                      <p className="text-white">Субота: За попереднім записом</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F1F3A] border border-[#333333] rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-serif text-white mb-3">Мови</h3>
                <div className="space-y-2">
                  <p className="text-white">Українська - Вільно</p>
                  <p className="text-white">Російська - Вільно</p>
                  <p className="text-white">Польська - Вільно</p>
                  <p className="text-white">Англійська - Вільно</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-[#1F1F3A] border border-[#333333] rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-serif text-white mb-6">Надіслати повідомлення</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-[#aaadb0]">Повне ім'я</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Ваше ім'я" 
                              className="bg-[#0F1729] border-[#333333] text-white focus:border-[#60A5FA]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-[#aaadb0]">Email адреса</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Ваш email" 
                              className="bg-[#0F1729] border-[#333333] text-white focus:border-[#60A5FA]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#aaadb0]">Тема</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Як я можу допомогти?" 
                            className="bg-[#0F1729] border-[#333333] text-white focus:border-[#60A5FA]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#aaadb0]">Повідомлення</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ваше повідомлення..."
                            rows={5}
                            className="bg-[#0F1729] border-[#333333] text-white resize-none focus:border-[#60A5FA]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="button-gradient text-white hover:opacity-90 w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Надсилання...' : 'Надіслати повідомлення'}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
