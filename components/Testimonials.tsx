import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: 1, name: "Rahul Kumar", rating: 5, text: "Best dental clinic in Gopalganj. Dr. Shahroz is very polite and professional. Highly recommended!", date: "2 months ago" },
  { id: 2, name: "Priya Singh", rating: 5, text: "Very hygienic and clean clinic. The root canal treatment was completely painless.", date: "1 month ago" },
  { id: 3, name: "Amit Verma", rating: 5, text: "Excellent experience. State of the art equipment and great ambiance. Feels very premium.", date: "3 weeks ago" },
  { id: 4, name: "Md. Irfan", rating: 5, text: "Doctor ne bahut ache se treatment kiya. Staff bhi bahut cooperative hai.", date: "1 week ago" }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-black relative">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Patient Stories</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">What Our Patients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <Quote className="text-gray-700" size={24} />
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="https://www.google.com/search?q=Delhi+Dental+Clinic+Gopalganj+Bihar#lrd=0x39931b0d3dee93b7:0x93387aff5e21c12a,3" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
                Write a Review
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;