import React from 'react';
import { Eye } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="vision" 
      ref={ref as any}
      className={`py-24 bg-gradient-mesh relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-warm-taupe/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Vision content */}
          <div className="space-y-8">
            {/* Section badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-warm-taupe text-sm font-medium">
              <Eye className="mr-2 h-4 w-4" />
              Our Vision
            </div>
            
            {/* Vision heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-clash font-bold text-white leading-tight">
              Shaping the
              <span className="block text-warm-taupe">Future of Technology</span>
            </h2>
            
            {/* Vision description */}
            <div className="space-y-6">
              <p className="text-xl text-white/90 leading-relaxed">
                We envision a world where technology seamlessly integrates with human potential, 
                creating innovative solutions that transform businesses and enhance lives.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Our commitment extends beyond delivering exceptional software. We strive to be 
                catalysts of digital transformation, empowering organizations to reach new heights 
                of efficiency, innovation, and growth in an ever-evolving technological landscape.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Through cutting-edge development practices, strategic thinking, and unwavering 
                dedication to excellence, we build lasting partnerships that drive meaningful 
                change and sustainable success.
              </p>
            </div>

            {/* Vision highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-taupe rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Innovation First</h4>
                  <p className="text-white/70 text-sm">Pioneering solutions that set industry standards</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-taupe rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Human-Centered</h4>
                  <p className="text-white/70 text-sm">Technology that enhances human capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-taupe rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sustainable Growth</h4>
                  <p className="text-white/70 text-sm">Building solutions for long-term success</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-taupe rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Global Impact</h4>
                  <p className="text-white/70 text-sm">Creating positive change worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative group">
              <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden">
                {/* Vision Image */}
                <img 
                  src="/placeholder.png" 
                  alt="Our Vision - Shaping the Future of Technology"
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-warm-taupe/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-warm-taupe/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-12 left-8 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
