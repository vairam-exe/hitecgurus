
import React, { useState } from 'react';
import { 
  Code2, Cloud, Database, Shield, Cpu, Zap, ArrowRight, Sparkles,
  Settings, Server, Globe, Smartphone, Monitor, HardDrive, 
  RefreshCw, Lock, Workflow, CloudUpload, Building, TrendingUp,
  Layers, Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Cloud,
      title: 'SAP S/4 HANA RISE with SAP',
      description: 'SAP S/4HANA RISE offers a cloud-based transformation with services for modernizing and optimizing operations.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: TrendingUp,
      title: 'SAP S/4 HANA Grow with SAP',
      description: 'SAP S/4HANA Grow supports SMEs with scalable digital transformation and continuous growth.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Database,
      title: 'SAP S/4 HANA On premise',
      description: 'SAP S/4HANA On-Premise offers full control, customization, and flexibility for compliance-focused businesses.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Settings,
      title: 'SAP Implementation',
      description: 'Deploy SAP to streamline processes, enhance efficiency, train users, and ensure success.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Building,
      title: 'SAP Rollouts',
      description: 'SAP rollouts standardize processes, ensure data consistency, and integrate operations across company locations.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: HardDrive,
      title: 'SAP Support',
      description: 'SAP Support ensures smooth operations, resolves issues, and optimizes system performance for businesses.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: RefreshCw,
      title: 'SAP Migration',
      description: 'SAP Migration moves systems and data to new environments, ensuring minimal business disruption.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Server,
      title: 'SAP Application Management Services',
      description: 'SAP AMS ensures reliable support, performance optimization, and seamless integration for evolving business needs.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Lock,
      title: 'SAP Security Services',
      description: 'SAP Security protects systems with access control, encryption, and audits, ensuring secure operations.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Workflow,
      title: 'SAP Integration',
      description: 'SAP Integration links systems for seamless data exchange, unified workflows, and real-time insights.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: CloudUpload,
      title: 'SAP Migration to Cloud',
      description: 'SAP Cloud Migration moves systems to the cloud for scalability, cost savings, and agility.',
      color: 'from-blue-600 to-blue-800',
      hasViewMore: true,
    },
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Custom software delivers personalized features, enhancing efficiency, scalability, and user experience for unique business needs.',
      color: 'from-steel-blue to-deep-navy',
      hasViewMore: true,
    },
    {
      icon: Layers,
      title: 'Infrastructure Services',
      description: 'Infrastructure Services ensure reliable, scalable, and secure IT operations through server management, cloud services, and security.',
      color: 'from-warm-taupe to-steel-blue',
      hasViewMore: true,
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Mobile Development creates apps for smartphones and tablets, focusing on UX, performance, and seamless integration.',
      color: 'from-deep-navy to-warm-taupe',
      hasViewMore: true,
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Web Development creates and maintains websites, combining front-end and back-end for functionality and responsiveness.',
      color: 'from-steel-blue to-warm-taupe',
      hasViewMore: true,
    },
  ];

  return (
    <section 
      id="services" 
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
            Services We Offer
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-clash font-bold text-deep-navy mb-8 leading-normal">
            Comprehensive
            <span className="block gradient-text leading-normal">Technology Services</span>
          </h2>
          
          <p className="text-xl text-steel-blue/80 max-w-3xl mx-auto">
            As your digital transformation partner, we deliver end-to-end solutions 
            from concept to deployment that transform your business and accelerate 
            growth through technology excellence.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/90 border border-warm-taupe/20 
                          cursor-pointer overflow-hidden"
                style={{ 
                  willChange: 'transform',
                  transform: isHovered ? 'translateZ(0) scale(1.03)' : 'translateZ(0) scale(1)',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Optimized background effect - using transform instead of box-shadow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl`}
                  style={{
                    opacity: isHovered ? 0.08 : 0,
                    transition: 'opacity 0.3s ease-out'
                  }}
                ></div>
                
                {/* Optimized glow effect using pseudo-element */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, rgba(69, 104, 130, 0.1), rgba(210, 193, 182, 0.1))`,
                    filter: 'blur(8px)',
                    transition: 'opacity 0.3s ease-out',
                    zIndex: -1
                  }}
                ></div>
                
                {/* Icon */}
                <div className="relative mb-6" style={{ willChange: 'transform' }}>
                  <div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl 
                               flex items-center justify-center`}
                    style={{
                      transform: isHovered ? 'translateZ(0) scale(1.1)' : 'translateZ(0) scale(1)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 
                    className="text-2xl font-clash font-bold text-deep-navy mb-4"
                    style={{
                      color: isHovered ? '#456882' : '#1B3C53',
                      transition: 'color 0.3s ease-out'
                    }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-steel-blue/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Optimized decorative elements */}
                <div 
                  className="absolute top-4 right-4 w-3 h-3 bg-warm-taupe/30 rounded-full"
                  style={{
                    transform: isHovered ? 'translateZ(0) scale(1.5)' : 'translateZ(0) scale(1)',
                    transition: 'transform 0.3s ease-out'
                  }}
                ></div>
                <div 
                  className="absolute bottom-4 left-4 w-2 h-2 bg-steel-blue/30 rounded-full"
                  style={{
                    transform: isHovered ? 'translateZ(0) scale(1.5)' : 'translateZ(0) scale(1)',
                    transition: 'transform 0.3s ease-out 0.1s'
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-steel-blue/80 mb-8 text-lg">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Button className="btn-premium group text-lg px-8 py-4" onClick={scrollToContact}>
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
