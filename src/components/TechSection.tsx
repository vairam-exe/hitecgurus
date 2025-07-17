import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Mouse tracking for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="vision" 
      ref={ref as any}
      className={`py-24 bg-gradient-mesh relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Enhanced background patterns with mouse parallax */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-warm-taupe/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              transform: `translate(${mousePosition.x * (0.5 + i * 0.1)}px, ${mousePosition.y * (0.5 + i * 0.1)}px)`,
              transition: 'transform 0.6s ease-out',
            }}
          />
        ))}
        
        {/* Additional gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-warm-taupe/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.8s ease-out',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
            transition: 'transform 1s ease-out',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Vision content with staggered animations */}
          <div className={`space-y-8 scroll-animate-stagger ${isVisible ? 'visible' : ''}`}>
            {/* Section badge with enhanced animation */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-warm-taupe text-sm font-medium
                          hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default
                          animate-fade-in border border-white/20">
              <Eye className="mr-2 h-4 w-4 animate-pulse" />
              Our Vision
            </div>
            
            {/* Vision heading with advanced text animation */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-clash font-bold text-white leading-tight">
              <span className="block animate-slide-up">Shaping the</span>
              <span className="block text-warm-taupe animate-slide-up animate-delay-200 
                             hover:text-white transition-colors duration-500 cursor-default">
                Future of Technology
              </span>
            </h2>
            
            {/* Vision description with enhanced typography animations */}
            <div className="space-y-6">
              <p className="text-xl text-white/90 leading-relaxed animate-slide-up animate-delay-400
                          hover:text-white transition-colors duration-300">
                We envision a world where technology seamlessly integrates with human potential, 
                creating innovative solutions that transform businesses and enhance lives.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed animate-slide-up animate-delay-600
                          hover:text-white/90 transition-colors duration-300">
                Our commitment extends beyond delivering exceptional software. We strive to be 
                catalysts of digital transformation, empowering organizations to reach new heights 
                of efficiency, innovation, and growth in an ever-evolving technological landscape.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed animate-slide-up animate-delay-800
                          hover:text-white/90 transition-colors duration-300">
                Through cutting-edge development practices, strategic thinking, and unwavering 
                dedication to excellence, we build lasting partnerships that drive meaningful 
                change and sustainable success.
              </p>
            </div>

            {/* Vision highlights with sophisticated hover effects */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  title: "Innovation First",
                  description: "Pioneering solutions that set industry standards",
                  delay: "1s"
                },
                {
                  title: "Human-Centered",
                  description: "Technology that enhances human capabilities",
                  delay: "1.2s"
                },
                {
                  title: "Sustainable Growth",
                  description: "Building solutions for long-term success",
                  delay: "1.4s"
                },
                {
                  title: "Global Impact",
                  description: "Creating positive change worldwide",
                  delay: "1.6s"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-3 p-3 rounded-2xl
                           hover:bg-white/5 transition-all duration-300 cursor-default
                           animate-slide-up"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-2 h-2 bg-warm-taupe rounded-full mt-3 flex-shrink-0
                                group-hover:scale-150 group-hover:bg-white
                                transition-all duration-300 animate-pulse"></div>
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold mb-1 
                                 group-hover:text-warm-taupe transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-sm
                                group-hover:text-white/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Enhanced image with sophisticated animations */}
          <div className="relative animate-slide-in-right animate-delay-400">
            {/* Main image container with advanced hover effects */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <div className={`aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm 
                             rounded-3xl border border-white/20 overflow-hidden
                             transition-all duration-500 ease-out
                             ${isImageHovered ? 'scale-105 border-warm-taupe/40' : 'scale-100'}
                             hover:shadow-2xl hover:shadow-warm-taupe/20`}>
                {/* Vision Image with enhanced effects */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src="/placeholder.png" 
                    alt="Our Vision - Shaping the Future of Technology"
                    className={`w-full h-full object-cover transition-all duration-700 ease-out
                              ${isImageHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'}`}
                  />
                  
                  {/* Dynamic gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent
                                 transition-opacity duration-500
                                 ${isImageHovered ? 'opacity-30' : 'opacity-100'}`}></div>
                  
                  {/* Animated border effect */}
                  <div className={`absolute inset-0 border-2 border-warm-taupe/0 rounded-3xl
                                 transition-all duration-500
                                 ${isImageHovered ? 'border-warm-taupe/30' : 'border-warm-taupe/0'}`}></div>
                </div>
              </div>

              {/* Enhanced decorative elements with mouse tracking */}
              <div 
                className="absolute -top-4 -right-4 w-32 h-32 bg-warm-taupe/10 rounded-full blur-2xl
                         transition-all duration-500"
                style={{
                  transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) 
                             ${isImageHovered ? 'scale(1.3)' : 'scale(1)'}`,
                  opacity: isImageHovered ? 0.8 : 0.5,
                }}
              ></div>
              <div 
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/5 rounded-full blur-3xl
                         transition-all duration-700"
                style={{
                  transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) 
                             ${isImageHovered ? 'scale(1.2)' : 'scale(1)'}`,
                  opacity: isImageHovered ? 0.6 : 0.3,
                }}
              ></div>
            </div>

            {/* Enhanced floating accent elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-warm-taupe/30 rounded-full 
                          animate-pulse hover:animate-ping transition-all duration-300
                          hover:bg-warm-taupe/60 hover:scale-150 cursor-pointer"></div>
            <div className="absolute bottom-12 left-8 w-3 h-3 bg-white/30 rounded-full 
                          animate-pulse hover:animate-ping transition-all duration-300
                          hover:bg-white/60 hover:scale-150 cursor-pointer" 
                 style={{ animationDelay: '1s' }}></div>
            
            {/* Additional micro-interaction elements */}
            <div className="absolute top-1/3 left-4 w-2 h-2 bg-warm-taupe/40 rounded-full 
                          animate-float hover:animate-ping transition-all duration-300
                          hover:bg-warm-taupe/80 hover:scale-200 cursor-pointer"
                 style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 right-12 w-1.5 h-1.5 bg-white/40 rounded-full 
                          animate-float hover:animate-ping transition-all duration-300
                          hover:bg-white/80 hover:scale-200 cursor-pointer"
                 style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>

      {/* Subtle animated bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r 
                    from-transparent via-warm-taupe/30 to-transparent animate-gradient-shift"></div>
    </section>
  );
};

export default VisionSection;
