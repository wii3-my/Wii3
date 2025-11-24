import React from 'react';
import { Users, MonitorPlay, Layers, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-wii3-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-wii3-red/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-wii3-red"></span>
              <span className="text-wii3-red font-bold uppercase tracking-widest text-xs md:text-sm">What We Do</span>
              <span className="h-[2px] w-8 bg-wii3-red"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
            Comprehensive <br className="md:hidden" /> Brand Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We provide a holistic ecosystem for brand growth, combining influencer power, media reach, and strategic management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Service 1: KOL Influencer Marketing */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-wii3-red to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">KOL Influencer Marketing</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              Connect with top-tier creators across key platforms to drive authentic engagement and conversions.
            </p>
            <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    <span className="text-sm">XiaoHongShu (Red)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-black border border-gray-600 rounded-full"></span>
                    <span className="text-sm">TikTok Creative</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span className="text-sm">Instagram & Facebook</span>
                </div>
            </div>
          </div>

          {/* Service 2: Digital Media Platform */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
              <MonitorPlay className="text-white" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Digital Media Platform</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              Amplify your message through our extensive network of big media partners and digital publishers.
            </p>
            <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-gray-300">
                    <Facebook size={16} className="text-blue-500" />
                    <span className="text-sm">FB Big Media Partners</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                    <Instagram size={16} className="text-pink-500" />
                    <span className="text-sm">IG Media Network</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                    <ArrowRight size={14} className="text-gray-500" />
                    <span className="text-sm">Premium Ad Placements</span>
                </div>
            </div>
          </div>

          {/* Service 3: Social Media Management */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden">
             {/* Coming Soon Overlay */}
             <div className="absolute top-4 right-4 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">
                Coming Soon
             </div>

            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20 opacity-80">
              <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 opacity-80">Social Media Management</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              Full-service account management to maintain consistency and growth for your brand's digital presence.
            </p>
            <div className="space-y-3 border-t border-white/10 pt-6 opacity-60">
                <div className="flex items-center gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    <span className="text-sm">Content Strategy</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    <span className="text-sm">Community Management</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    <span className="text-sm">Analytics Reporting</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};