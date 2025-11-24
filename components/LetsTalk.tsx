import React from 'react';
import { Quote, Paperclip, Send } from 'lucide-react';

export const LetsTalk: React.FC = () => {
  return (
    <section id="lets-talk" className="scroll-mt-24 py-16 md:py-24 bg-wii3-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wii3-red/10 to-transparent"></div>
      <div className="absolute -left-20 top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Left Side: Header & QR */}
          <div className="space-y-8 md:space-y-10 pt-4 md:pt-8">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-[0.9]">
                Let's <br /> Talk!
              </h2>
              {/* Quote Icon positioning - adjusted for mobile to be relative/scaled */}
              <div className="absolute -top-4 left-[120px] md:left-[220px] text-wii3-red transform -rotate-12 bg-white rounded-full p-2 shadow-lg scale-75 md:scale-100">
                <Quote size={40} fill="currentColor" className="transform scale-x-[-1]" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl text-wii3-red font-medium mb-1">Get in touch</h3>
                <p className="text-gray-400 text-base md:text-lg max-w-xs leading-relaxed">
                  Scan the QR code for a quick WhatsApp chat.
                </p>
              </div>
              
              {/* QR Code Card */}
              <div className="bg-white p-4 rounded-3xl w-48 h-48 md:w-56 md:h-56 flex items-center justify-center shadow-2xl shadow-black/50 border-4 border-white/10">
                 {/* Placeholder for QR Code */}
                 <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/" 
                    alt="WhatsApp QR Code" 
                    className="w-full h-full object-contain"
                 />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl md:rounded-[3rem] shadow-2xl">
            <div className="mb-6 md:mb-8 border-b border-white/10 pb-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Ready to start a project?</h3>
              <p className="text-gray-400 text-sm md:text-base">Fill out the contact form below.</p>
            </div>

            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all text-sm md:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Company</label>
                  <input type="text" placeholder="Company Name" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all text-sm md:text-base" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all text-sm md:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all text-sm md:text-base" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your campaign goals..." className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all resize-none text-sm md:text-base"></textarea>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Attach your files (Optional)</label>
                <div className="relative group">
                  <input type="file" className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="flex items-center gap-3 w-fit px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all">
                    <Paperclip size={18} className="text-wii3-red" /> 
                    <span className="font-medium">Choose Files</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 md:pt-6">
                <button type="button" className="w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};