import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Stethoscope, Sparkles, Scissors, Syringe, Zap, Smile } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: 1, title: 'General Dentistry', description: 'Routine checkups and comprehensive oral health exams.', icon: Stethoscope },
  { id: 2, title: 'Cleaning & Scaling', description: 'Professional deep cleaning to remove plaque and tartar.', icon: Sparkles },
  { id: 3, title: 'Tooth Extraction', description: 'Painless removal of damaged or decayed teeth.', icon: Scissors },
  { id: 4, title: 'Dental Fillings', description: 'Restoring decayed teeth with high-quality composite fillings.', icon: Syringe },
  { id: 5, title: 'Root Canal', description: 'Advanced therapy to save infected teeth from extraction.', icon: Zap },
  { id: 6, title: 'Cosmetic Dentistry', description: 'Smile enhancement, whitening, and aesthetic corrections.', icon: Smile },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
  const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20); // Multiplier controls tilt intensity
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full group perspective-1000"
    >
      <div className="h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 transition-colors hover:bg-white/10 hover:border-emerald-500/30 shadow-lg">
        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
        
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-emerald-900/50">
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-clinic-dark relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Comprehensive Hospital Services</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We use the latest technology and techniques to ensure your treatment is effective, painless, and long-lasting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;