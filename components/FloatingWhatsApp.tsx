import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to appear after initial load for dramatic effect
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "919990866642";
  const message = encodeURIComponent("Hello Delhi Dental Clinic, I would like to book a dental appointment.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
          {/* Tooltip */}
          <span className="hidden md:block absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-sm px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Instant Appointment
          </span>

          {/* Button */}
          <div className="relative">
             {/* Pulse ring */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
            <div className="relative bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] border border-green-400">
              <MessageCircle size={28} fill="currentColor" />
            </div>
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"></div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;