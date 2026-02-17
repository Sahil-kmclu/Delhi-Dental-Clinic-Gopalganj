import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-[60] bg-black border-t border-white/5 pt-16 pb-8">
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
              Experience ultra-premium dental care in Gopalganj,Siwan,Saran. Dr. Shahroz Raza and his team are dedicated to your smile and hygiene.
            </p>
            <div className="flex gap-4 relative z-[70]">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://www.facebook.com/shahroz.raza.35', '_blank', 'noopener,noreferrer');
                }}
                aria-label="Visit our Facebook page"
                title="Facebook Profile"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/20 group"
              >
                <Facebook size={24} className="pointer-events-none group-hover:scale-110 transition-transform" />
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://www.instagram.com/delhidentalclinic?utm_source=qr&igsh=MXM2c3I2NXoxMjFubw==', '_blank', 'noopener,noreferrer');
                }}
                aria-label="Visit our Instagram page"
                title="Instagram Profile"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg shadow-pink-500/20 group"
              >
                <Instagram size={24} className="pointer-events-none group-hover:scale-110 transition-transform" />
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://youtube.com/@shahrozraza2334?si=K1Ky-UctE4TOtXBu', '_blank', 'noopener,noreferrer');
                }}
                aria-label="Visit our YouTube channel"
                title="YouTube Channel"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg shadow-red-500/20 group"
              >
                <Youtube size={24} className="pointer-events-none group-hover:scale-110 transition-transform" />
              </button>
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
          <p className="text-gray-500 text-sm">© 2026 Delhi Dental Hospital. All Rights Reserved.</p>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-600 text-xs mb-1">Designed & Developed by</p>
            <p className="text-emerald-500/80 text-sm font-medium hover:text-emerald-400 transition-colors cursor-default">
              Sahil Raja
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;