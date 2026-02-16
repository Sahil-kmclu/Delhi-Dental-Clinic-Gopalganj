import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    if (!name || !phone) return;

    const text = `*New Appointment Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/919990866642?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-clinic-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Our Locations</h2>
           <h3 className="text-3xl md:text-5xl font-bold text-white">Visit Our Hospital Branches</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900/30 border border-white/5 rounded-3xl p-4 md:p-8 backdrop-blur-sm">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Book Appointment</h4>
                  <a href="tel:+919990866642" className="text-gray-400 text-lg hover:text-white transition-colors">+91 9990866642</a>
                </div>
              </div>

              {/* Location 1 */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Gopalganj Hospital (Main Branch)</h4>
                  <p className="text-gray-400 text-sm mb-2">Purana Targhar, Opposite Aam Hospital,<br/>Jangalia Muhalla, Gopalganj</p>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                    <Clock size={12} />
                    <span>Mon, Tue, Wed</span>
                  </div>
                </div>
              </div>

              {/* Location 2 */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Janta Bazar (Saran)</h4>
                  <p className="text-gray-400 text-sm mb-2">Kunwar Ji Complex, Opp. Bihari Ji Iron Shop,<br/>Main Road, Janta Bazar</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                      <Clock size={12} />
                      <span>Thu, Fri, Sat</span>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Kunwar+Ji+Complex+Janta+Bazar+Saran+Bihar" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer z-10">
                      <MapPin size={12} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 3 */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Kasdewra Bangra</h4>
                  <p className="text-gray-400 text-sm mb-2">C/O Manzar Hussain,<br/>Kasdewra Bangra</p>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                    <Clock size={12} />
                    <span>Sunday Only</span>
                  </div>
                </div>
              </div>

            </div>
            
             {/* Google Map Embed - Gopalganj Main Branch */}
             <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.667232367284!2d84.43745267615964!3d26.46782487691501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39930f7f90f339ef%3A0x6b4f745778216c0!2sGopalganj%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709825421234!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Gopalganj Hospital Location"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
               <div className="absolute bottom-4 left-4 z-10">
                   <a href="https://www.google.com/maps/search/?api=1&query=Delhi+Dental+Hospital+Gopalganj+Bihar" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-4 py-2 rounded-lg hover:bg-emerald-500 hover:border-emerald-500 transition-all flex items-center gap-2 cursor-pointer">
                     <MapPin size={14} />
                     Get Directions (Hospital)
                   </a>
               </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-6">Quick Inquiry</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
                  placeholder="+91 0000000000" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  rows={3} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
                  placeholder="I need a consultation for..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-[1.02]">
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