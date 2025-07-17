import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const IndustriesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    {
      image: '/1.png', // Fashion & Retail industry image
      title: 'Fashion & Retail',
      description: 'The pace of change across retail is dramatic, we have expertise and ability to quickly develop and deploy solution that guarantee commercial success.',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/2.png', // FMCG industry image
      title: 'FMCG',
      description: 'FMCG industry remains resilient and continues to flourish and facing significant warehousing challenges. We\'re ready with right solution to',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/3.png', // 3PL industry image
      title: '3PL',
      description: '3PL partners are becoming more mainstream in today\'s world. We have expertise in B2B SAP Business ByDesign\'s 3PL',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/4.png', // E-Commerce industry image
      title: 'E-Commerce',
      description: 'Industry is facing many challenges in the ever-growing world of e-commerce. Our expertise solution ensures complete integration',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/5.png', // Manufacturing industry image
      title: 'Manufacturing',
      description: 'Successful Manufacturing thrives on efficient processes. Being future-proof is the key success factor.',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/6.png', // Pharmaceutical industry image
      title: 'Pharmaceutical',
      description: 'Pharmaceutical sector can be mapped more clearly and reliably in SAP EWM with our extensive experience',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/7.png', // Automotive industry image
      title: 'Automotive',
      description: 'SAP EWM leverages Automated Guided Vehicles (AGVs) and Automated Storage and Retrieval Systems (AS/RS)',
      color: 'from-blue-600 to-blue-800',
      
    },
    {
      image: '/8.png', // Food & Beverage industry image
      title: 'Food & Beverage',
      description: 'SAP EWM is a powerful warehouse management system that helps food and beverage businesses increase',
      color: 'from-blue-600 to-blue-800',
      
    },
  ];

  return (
    <section 
      id="industries" 
      ref={ref as any}
      className={`py-24 bg-gradient-subtle relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23456882' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warm-taupe/20 rounded-full text-steel-blue text-sm font-medium mb-6">
            <Sparkles className="mr-2 h-4 w-4" />
            Industries We Expertise
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-clash font-bold text-deep-navy mb-6">
            Experience makes
            <span className="block gradient-text">a difference.</span>
          </h2>
          
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto">
            Our deep industry knowledge and specialized expertise enable us to deliver 
            tailored solutions that address the unique challenges and requirements 
            of your specific sector.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndustry === index;
            
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-white/90 border border-warm-taupe/20 
                          cursor-pointer overflow-hidden transition-all duration-300 ease-out
                          hover:shadow-xl hover:shadow-steel-blue/10"
                style={{ 
                  willChange: 'transform',
                  transform: isHovered ? 'translateZ(0) scale(1.03)' : 'translateZ(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                tabIndex={0}
                onFocus={() => setHoveredIndustry(index)}
                onBlur={() => setHoveredIndustry(null)}
                role="button"
                aria-label={`Learn more about ${industry.title}`}
              >
                {/* Optimized background effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-3xl`}
                  style={{
                    opacity: isHovered ? 0.08 : 0,
                    transition: 'opacity 0.3s ease-out'
                  }}
                ></div>
                
                {/* Optimized glow effect */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, rgba(69, 104, 130, 0.1), rgba(210, 193, 182, 0.1))`,
                    filter: 'blur(8px)',
                    transition: 'opacity 0.3s ease-out',
                    zIndex: -1
                  }}
                ></div>
                
                {/* Always visible content - Image and Title */}
                <div className="p-8">
                  {/* Industry Image */}
                  <div className="relative mb-6" style={{ willChange: 'transform' }}>
                    <div 
                      className="w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-steel-blue/10 to-warm-taupe/10"
                      style={{
                        transform: isHovered ? 'translateZ(0) scale(1.05)' : 'translateZ(0) scale(1)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <img 
                        src={industry.image}
                        alt={`${industry.title} industry`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Industry Title - Always Visible */}
                  <h3 
                    className="text-2xl font-clash font-bold mb-4 transition-colors duration-300"
                    style={{
                      color: isHovered ? '#456882' : '#1B3C53',
                    }}
                  >
                    {industry.title}
                  </h3>
                </div>

                {/* Hover reveal content - Description and Button */}
                <div 
                  className="px-8 pb-8 transition-all duration-500 ease-out"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                    maxHeight: isHovered ? '200px' : '0px',
                    overflow: 'hidden'
                  }}
                >
                  <p className="text-steel-blue/80 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* View More Button */}
                  {industry.hasViewMore && (
                    <Button 
                      variant="ghost" 
                      className="group/btn text-steel-blue hover:text-deep-navy p-0 h-auto font-medium
                                transition-all duration-300"
                    >
                      View More
                      <ArrowRight 
                        className="ml-2 h-4 w-4 transition-transform duration-300"
                        style={{
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      />
                    </Button>
                  )}
                </div>

                {/* Decorative elements */}
                <div 
                  className="absolute top-4 right-4 w-3 h-3 bg-warm-taupe/30 rounded-full transition-transform duration-300"
                  style={{
                    transform: isHovered ? 'translateZ(0) scale(1.5)' : 'translateZ(0) scale(1)',
                  }}
                ></div>
                <div 
                  className="absolute bottom-4 left-4 w-2 h-2 bg-steel-blue/30 rounded-full transition-transform duration-300"
                  style={{
                    transform: isHovered ? 'translateZ(0) scale(1.5)' : 'translateZ(0) scale(1)',
                    transitionDelay: '0.1s'
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-steel-blue/80 mb-8 text-lg">
            Looking for industry-specific solutions tailored to your business needs?
          </p>
          <Button className="btn-premium group text-lg px-8 py-4" onClick={scrollToContact}>
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection; 