import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Database, Cloud, Globe, Cpu } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const TechSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories = {
    frontend: {
      icon: Globe,
      title: 'Frontend & UI',
      color: '#456882',
      technologies: [
        { name: 'React', color: '#61DAFB', badge: 'Expert' },
        { name: 'Vue.js', color: '#4FC08D', badge: 'Advanced' },
        { name: 'TypeScript', color: '#3178C6', badge: 'Expert' },
        { name: 'Next.js', color: '#000000', badge: 'Advanced' },
        { name: 'Tailwind', color: '#06B6D4', badge: 'Expert' },
        { name: 'Flutter', color: '#02569B', badge: 'Proficient' },
      ]
    },
    backend: {
      icon: Database,
      title: 'Backend & APIs',
      color: '#1B3C53',
      technologies: [
        { name: 'Node.js', color: '#339933', badge: 'Expert' },
        { name: 'Python', color: '#3776AB', badge: 'Expert' },
        { name: 'Go', color: '#00ADD8', badge: 'Advanced' },
        { name: 'Java', color: '#ED8B00', badge: 'Advanced' },
        { name: 'GraphQL', color: '#E10098', badge: 'Expert' },
        { name: 'PostgreSQL', color: '#336791', badge: 'Expert' },
      ]
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: '#D2C1B6',
      technologies: [
        { name: 'AWS', color: '#FF9900', badge: 'Expert' },
        { name: 'Docker', color: '#2496ED', badge: 'Expert' },
        { name: 'Kubernetes', color: '#326CE5', badge: 'Advanced' },
        { name: 'Terraform', color: '#623CE4', badge: 'Advanced' },
        { name: 'GitHub Actions', color: '#2088FF', badge: 'Expert' },
        { name: 'Azure', color: '#0078D4', badge: 'Proficient' },
      ]
    },
    ai: {
      icon: Cpu,
      title: 'AI & Analytics',
      color: '#456882',
      technologies: [
        { name: 'TensorFlow', color: '#FF6F00', badge: 'Advanced' },
        { name: 'PyTorch', color: '#EE4C2C', badge: 'Advanced' },
        { name: 'OpenAI', color: '#412991', badge: 'Expert' },
        { name: 'Elasticsearch', color: '#005571', badge: 'Advanced' },
        { name: 'Apache Spark', color: '#E25A1C', badge: 'Proficient' },
        { name: 'Jupyter', color: '#F37626', badge: 'Expert' },
      ]
    }
  };

  const categories = Object.keys(techCategories) as (keyof typeof techCategories)[];

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => {
        const currentIndex = categories.indexOf(prev as keyof typeof techCategories);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="tech" 
      ref={ref as any}
      className={`py-24 bg-gradient-mesh relative overflow-hidden scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
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
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-warm-taupe text-sm font-medium mb-6">
            <Sparkles className="mr-2 h-4 w-4" />
            Technology Expertise
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-clash font-bold text-white mb-6">
            Cutting-Edge
            <span className="block text-warm-taupe">Technology Stack</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We leverage the most advanced technologies to build scalable, 
            performant, and future-ready solutions for your business.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {categories.map((category) => {
              const Icon = techCategories[category].icon;
              const isActive = activeCategory === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-warm-taupe text-deep-navy shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{techCategories[category].title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[activeCategory as keyof typeof techCategories].technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 
                          transition-all duration-500 cursor-pointer hover:scale-105 hover:bg-white/20
                          ${hoveredTech === tech.name ? 'ring-2 ring-warm-taupe' : ''}`}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slide-up 0.6s ease-out forwards'
                }}
              >
                {/* Tech icon/logo placeholder */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                  
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      tech.badge === 'Expert' ? 'bg-green-500/20 text-green-300' :
                      tech.badge === 'Advanced' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {tech.badge}
                    </span>
                  </div>
                </div>

                {/* Tech name */}
                <h3 className="text-xl font-clash font-bold text-white mb-3 group-hover:text-warm-taupe transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-taupe/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: tech.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
