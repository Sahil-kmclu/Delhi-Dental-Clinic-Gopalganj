import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-clinic-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Visit Us</h2>
           <h3 className="text-3xl md:text-5xl font-bold text-white">Book Your Appointment</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900/30 border border-white/5 rounded-3xl p-4 md:p-8 backdrop-blur-sm">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400 text-sm">FC6Q+W97, Jangalia Rd, Ward No 18,<br/> Gopalganj, Bihar 841428</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href="tel:+919990866642" className="text-gray-400 text-sm hover:text-white transition-colors">+91 9990866642</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 relative group">
                {/* Note: In production, replace src with the actual Google Maps Embed link for "Delhi Dental Clinic Gopalganj" */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.667232367284!2d84.43745267615964!3d26.46782487691501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39930f7f90f339ef%3A0x6b4f745778216c0!2sGopalganj%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709825421234!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Clinic Location"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
               <div className="absolute bottom-4 left-4">
                   <a href="https://maps.google.com" target="_blank" className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-4 py-2 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 transition-all">Get Directions</a>
               </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-6">Quick Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Phone</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="+91 0000000000" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="I need a consultation for..."></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-[1.02]">
                Request Appointment
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                For fastest response, please use WhatsApp or Call.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;