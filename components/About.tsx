import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Calendar, ArrowRight, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Expert Care by Chief Surgeon Dr. Shahroz Raza",
    "Advanced Surgical & Hygiene Facilities",
    "Transparent & Affordable Pricing",
    "Premium Multi-Specialty Hospital Environment"
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-32 pb-24 bg-clinic-black overflow-hidden">
      {/* Home Anchor for Navbar */}
      <div id="home" className="absolute top-0 left-0 w-full h-1" />
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Award size={16} />
              <span>Chief Dental Surgeon</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Dr. Shahroz Raza</span>
            </h1>

            <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white mb-2">BDS, MDSAI</p>
              <p className="text-emerald-400 font-medium mb-1">Jamia Millia Islamia, Delhi</p>
              <p className="text-gray-400 text-sm">One of India's most prestigious dental institutions</p>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With over <span className="text-white font-bold">15 years of experience</span>, Dr. Shahroz Raza leads Delhi Dental Hospital with a vision to provide world-class dental care in Gopalganj,Siwan,Saran. His expertise spans complex oral surgeries, cosmetic dentistry, and advanced implantology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/919990866642?text=Hello%20Dr.%20Shahroz,%20I%20would%20like%20to%20book%20an%20appointment."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <span>Book Appointment</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all backdrop-blur-md"
              >
                <span>View Locations</span>
                <Calendar size={18} className="text-emerald-400" />
              </a>
            </div>
          </motion.div>

          {/* Doctor Image / Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* Circular Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse scale-90"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shrink-0">
              <img 
                src="/Dr. Shahroz Raza.jpg" 
                alt="Dr. Shahroz Raza" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Experience Badge - Centered Bottom */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-max">
              <div className="flex items-center gap-3 md:gap-4 bg-zinc-900/90 backdrop-blur-xl border border-emerald-500/30 py-3 px-6 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Award size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg md:text-xl leading-none">15+ Years</p>
                  <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider mt-1">of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Clinic Centers Posters */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 border-t border-white/5 pt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-emerald-400 font-medium text-sm tracking-wide uppercase mb-2">Our Presence</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Visit Our Centers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/gopalganj poster.jpeg", alt: "Gopalganj Hospital Branch", label: "Gopalganj (Main Branch)", days: "Mon, Tue, Wed" },
              { src: "/janta Bazar Poster.jpeg", alt: "Janta Bazar Branch", label: "Janta Bazar (Saran)", days: "Thu, Fri, Sat" },
              { src: "/Kasdewra Poster.jpeg", alt: "Kasdewra Bangra Branch", label: "Kasdewra Bangra", days: "Sunday Only" }
            ].map((poster, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col">
                <div className="w-full bg-zinc-900 overflow-hidden">
                  {/* Placeholder fallback if image missing */}
                  <img 
                    src={poster.src} 
                    alt={poster.alt} 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/600x800/10b981/ffffff?text=" + encodeURIComponent(poster.label);
                    }}
                  />
                </div>
                <div className="p-6 bg-zinc-900/50 border-t border-white/5">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">{poster.days}</p>
                  <p className="text-white font-bold text-lg">{poster.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;