import React from 'react';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-wii3-dark overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-wii3-red/20 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[40%] h-[40%] bg-blue-900/10 blur-[60px] md:blur-[100px] rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 md:pt-48 pb-12">
        
        {/* Review Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6 md:mb-8 animate-fade-in-up">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-white">4.9/5 Rating</span>
          <span className="text-xs text-gray-400 border-l border-white/20 pl-2 ml-1">Trusted by 500+ Brands</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] uppercase">
          Brands Grow Faster with the <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wii3-red to-orange-500">Right Creators</span>
        </h1>
        
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-400 font-light px-4">
          We connect you with influencers who <span className="text-white font-medium">drive engagement, trust, and real conversions.</span>. 
        </p>
        
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-6 sm:px-0">
          <button className="group relative px-8 py-4 bg-wii3-red text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center justify-center gap-2">
              Start Campaign <ArrowRight size={20} />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
            <PlayCircle size={20} /> View Showreel
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-10">
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-white">25k+</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Creators</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-white">1.2B</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Reach</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-white">98%</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold text-white">500+</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Brands</div>
          </div>
        </div>
      </div>
    </div>
  );
};