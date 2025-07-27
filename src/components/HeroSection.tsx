import React from 'react';
import { ArrowRight, Sparkles, Code, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const floatingElements = [
    { icon: Code, delay: 0, position: 'top-1/4 left-1/4' },
    { icon: Database, delay: 2, position: 'top-1/3 right-1/4' },
    { icon: Cloud, delay: 4, position: 'bottom-1/3 left-1/3' },
    { icon: Sparkles, delay: 6, position: 'bottom-1/4 right-1/3' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref as any}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-warm-taupe rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      {floatingElements.map(({ icon: Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-20 z-10`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="h-12 w-12 text-warm-taupe" />
        </div>
      ))}

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-4xl">
          {/* Main content - left aligned */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-warm-taupe text-sm font-medium">
                <Sparkles className="mr-2 h-4 w-4" />
                Transforming Digital Futures
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-clash font-bold text-white leading-normal">
                <span className="block animate-slide-up">Premium</span>
                <span className="block animate-slide-up animate-delay-200 gradient-text">Technology</span>
                <span className="block animate-slide-up animate-delay-400">Solutions</span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl animate-slide-up animate-delay-600">
                We craft sophisticated software architectures and digital transformations 
                that propel enterprises into the future. Experience the intersection of 
                innovation and excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-800">
              <Button className="btn-premium group text-lg px-8 py-4" onClick={scrollToContact}>
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8 animate-slide-up animate-delay-800">
              {[
                { value: '200+', label: 'Projects Delivered' },
                { value: '50+', label: 'Enterprise Clients' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-clash font-bold text-warm-taupe">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-taupe rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
