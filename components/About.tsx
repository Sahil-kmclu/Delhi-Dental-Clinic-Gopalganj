import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Experienced care by Dr. Shahroz Raza",
    "Advanced sterilization & hygiene",
    "Transparent pricing",
    "Relaxing, premium environment"
  ];

  return (
    <section id="about" className="py-24 bg-clinic-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">About The Clinic</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Modern Dentistry with a Gentle Touch</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Delhi Dental Clinic is a trusted and highly rated dental clinic in Gopalganj, Bihar. 
              Our clinic is designed to deliver a premium healthcare experience with modern dental 
              technology, strict hygiene standards, and patient-first care.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From routine checkups to advanced dental treatments, we focus on long-term oral 
              health, comfort, and transparent treatment planning.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Doctor Image / Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                {/* Note: In a real deployment, replace with the actual image of Dr. Shahroz Raza provided */}
                <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dr. Shahroz Raza" 
                    className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h4 className="text-2xl font-bold text-white">Dr. Shahroz Raza</h4>
                    <p className="text-emerald-400 font-medium">Chief Dental Surgeon</p>
                    <p className="text-gray-400 text-sm mt-2">
                        Committed to delivering safe, hygienic, and patient-focused dental care.
                    </p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;