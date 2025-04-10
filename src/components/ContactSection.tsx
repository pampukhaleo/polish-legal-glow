
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
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Schedule a consultation to discuss your legal needs. I'm here to help you navigate Polish law with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-serif text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">contact@olenakovalenko.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">+48 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Office Address</p>
                      <p className="text-white">ul. Nowy Świat 45</p>
                      <p className="text-white">00-029 Warsaw, Poland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Office Hours</p>
                      <p className="text-white">Monday - Friday: 9:00 - 17:00</p>
                      <p className="text-white">Saturday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-serif text-white mb-3">Languages</h3>
                <div className="space-y-2">
                  <p className="text-white">Ukrainian - Native</p>
                  <p className="text-white">Polish - Fluent</p>
                  <p className="text-white">English - Fluent</p>
                  <p className="text-white">Russian - Fluent</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-serif text-white mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Full Name</label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email Address</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                  <Input 
                    id="subject"
                    placeholder="How can I help you?"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    className="bg-zinc-800 border-zinc-700 text-white resize-none"
                  />
                </div>
                
                <div className="pt-2">
                  <Button className="bg-white text-black hover:bg-gray-200 w-full md:w-auto">
                    Send Message
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
