
import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const currentYear = new Date().getFullYear();

  const services = [
    'Custom Software Development',
    'Cloud Transformation',
    'Data Engineering',
    'Cybersecurity Solutions',
    'Enterprise Architecture',
    'Digital Innovation'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Case Studies',
    'Blog',
    'Contact'
  ];

  const resources = [
    'Documentation',
    'API Reference',
    'Support Center',
    'Status Page',
    'Security',
    'Privacy Policy'
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
                Transforming businesses through cutting-edge technology solutions. 
                We craft sophisticated software architectures that propel enterprises 
                into the digital future with our comprehensive digital transformation services.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/70 hover:text-warm-taupe transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                  <span>hello@hitechgurus.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-warm-taupe transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70 hover:text-warm-taupe transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4 mt-8">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center 
                             hover:bg-warm-taupe hover:scale-110 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-white group-hover:text-deep-navy" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-clash font-bold text-warm-taupe mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
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

            {/* Company */}
            <div>
              <h3 className="text-lg font-clash font-bold text-warm-taupe mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
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

            {/* Resources */}
            <div>
              <h3 className="text-lg font-clash font-bold text-warm-taupe mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-300 
                               flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 
                                           -translate-x-2 group-hover:translate-x-0 
                                           transition-all duration-300" />
                      {resource}
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
            
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-white/70 hover:text-warm-taupe transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-warm-taupe transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-warm-taupe transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
