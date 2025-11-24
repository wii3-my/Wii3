import React from 'react';

const brands = [
  "AYAM BRAND",
  "SPACELIFT",
  "FARM FRESH",
  "SHAKE SHACK",
  "MLE HOME EXPO",
  "ALCOCUT",
  "BEACON MART",
  "GO TRAVEL",
  "BARENBLISS",
  "GLAD2GLOW",
  "NIRVANA",
  "GLASSLOCK",
  "7 AUTOSPA"
];

export const BrandTicker: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-12 bg-wii3-dark overflow-hidden flex items-center relative z-20">
      {/* Left Fade Gradient - adjusted to match wii3-dark */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-wii3-dark to-transparent z-10"></div>
      {/* Right Fade Gradient */}
      <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-wii3-dark to-transparent z-10"></div>

      <div className="inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-16 [&_li]:max-w-none animate-infinite-scroll">
          {brands.map((brand, index) => (
            <li key={index} className="flex items-center justify-center">
               {/* Large, bold, gradient text to simulate logos */}
               <span className="text-3xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 hover:from-white hover:to-white/60 transition-all duration-500 uppercase whitespace-nowrap tracking-tighter select-none cursor-pointer">
                 {brand}
               </span>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-16 [&_li]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {brands.map((brand, index) => (
            <li key={`dup-${index}`} className="flex items-center justify-center">
               <span className="text-3xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 hover:from-white hover:to-white/60 transition-all duration-500 uppercase whitespace-nowrap tracking-tighter select-none cursor-pointer">
                 {brand}
               </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};