import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-24 bg-wii3-dark text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="mb-8">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-wii3-red rounded-br-lg rounded-tl-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <span className="font-display font-bold text-3xl tracking-tight">Wii3</span>
                </div>
                <h2 className="text-4xl font-display font-bold mb-6">Let's create something extraordinary.</h2>
                <p className="text-gray-400 text-lg max-w-md">
                    Ready to scale your brand through the power of authentic influence? Join Wii3 today.
                </p>
            </div>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-wii3-red">
                        <Mail size={20} />
                    </div>
                    <span>hello@wii3.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-wii3-red">
                        <Phone size={20} />
                    </div>
                    <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-wii3-red">
                        <MapPin size={20} />
                    </div>
                    <span>88 Influence Blvd, Los Angeles, CA</span>
                </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-wii3-red outline-none transition-colors" />
                    <input type="text" placeholder="Last Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-wii3-red outline-none transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-wii3-red outline-none transition-colors" />
                <textarea rows={4} placeholder="Tell us about your brand..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-wii3-red outline-none transition-colors"></textarea>
                <button className="w-full bg-white text-wii3-dark font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">Send Inquiry</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2024 Wii3 Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};