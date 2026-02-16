import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                   <span className="text-white font-bold">D</span>
               </div>
               <span className="text-xl font-bold text-white">Delhi<span className="text-emerald-400">Dental</span></span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Experience ultra-premium dental care in Gopalganj. Dr. Shahroz Raza and his team are dedicated to your smile and hygiene.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Delhi Dental Clinic. All Rights Reserved.</p>
          <p className="text-gray-600 text-xs">Designed with precision in Gopalganj.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;