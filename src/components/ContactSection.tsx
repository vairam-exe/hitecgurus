import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={ref as any}
      className={`py-20 bg-gradient-to-br from-soft-cream to-white relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2C1B6' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-clash font-bold text-deep-navy mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-deep-navy/70 font-light mb-2">
              Ready to start your digital transformation?
            </p>
            <p className="text-lg text-warm-taupe font-medium">
              Your digital transformation partner is here to help
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-warm-taupe/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-deep-navy font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-warm-taupe" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-soft-cream/50 border border-warm-taupe/30 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-warm-taupe focus:border-transparent
                           transition-all duration-300 text-deep-navy placeholder-deep-navy/50"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-deep-navy font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-warm-taupe" />
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-soft-cream/50 border border-warm-taupe/30 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-warm-taupe focus:border-transparent
                           transition-all duration-300 text-deep-navy placeholder-deep-navy/50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-deep-navy font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-warm-taupe" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-soft-cream/50 border border-warm-taupe/30 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-warm-taupe focus:border-transparent
                           transition-all duration-300 text-deep-navy placeholder-deep-navy/50 resize-none"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-warm-taupe bg-soft-cream border-warm-taupe/30 rounded 
                             focus:ring-warm-taupe focus:ring-2 transition-all duration-300"
                  />
                </div>
                <label htmlFor="newsletter" className="text-sm text-deep-navy/70 leading-relaxed">
                  Sign up for our email list for updates, promotions, and more.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full md:w-auto bg-deep-navy hover:bg-deep-navy/90 text-white 
                           px-12 py-4 rounded-xl text-lg font-medium transition-all duration-300 
                           hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 