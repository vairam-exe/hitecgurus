
import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const currentYear = new Date().getFullYear();

  const services = [
    'SAP Implementation',
    'SAP S/4 HANA Solutions',
    'SAP Migration & Support',
    'SAP Integration Services',
    'Custom Software Development',
    'Mobile & Web Development'
  ];

  const industries = [
    'Fashion & Retail',
    'FMCG',
    'E-Commerce',
    'Manufacturing',
    'Pharmaceutical',
    'Automotive'
  ];

  const company = [
    'Services',
    'Industries',
    'Vision',
    'Contact'
  ];

  return (
    <footer 
      ref={ref as any}
      className={`bg-deep-navy text-white relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2C1B6' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="HITECGURUS Logo" 
                    className="h-12 w-12"
                  />
                  <div className="absolute inset-0 bg-warm-taupe/20 rounded-full blur-md"></div>
                </div>
                <div>
                  <span className="text-2xl font-clash font-bold">HITECGURUS</span>
                  <p className="text-warm-taupe text-sm font-medium">Your digital transformation partner</p>
                </div>
              </div>
              
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Transforming businesses through cutting-edge SAP solutions and 
                custom software development. We specialize in digital transformation 
                across multiple industries with deep expertise in SAP technologies.
              </p>

              {/* Contact CTA */}
              <div className="mb-8">
                <p className="text-white/70 mb-4">Ready to start your digital transformation?</p>
                <Button 
                  className="bg-warm-taupe hover:bg-warm-taupe/90 text-deep-navy font-medium"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-clash font-bold text-warm-taupe mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-white/70 hover:text-white transition-colors duration-300 
                               flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 
                                           -translate-x-2 group-hover:translate-x-0 
                                           transition-all duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-clash font-bold text-warm-taupe mb-6">Industries</h3>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry}>
                    <a 
                      href="#industries" 
                      className="text-white/70 hover:text-white transition-colors duration-300 
                               flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 
                                           -translate-x-2 group-hover:translate-x-0 
                                           transition-all duration-300" />
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-clash font-bold text-warm-taupe mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/70 hover:text-white transition-colors duration-300 
                               flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 
                                           -translate-x-2 group-hover:translate-x-0 
                                           transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} HITECGURUS. All rights reserved.
            </div>
            
            <div className="text-white/70 text-sm">
              Your digital transformation partner
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
