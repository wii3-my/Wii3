import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Smartphone } from 'lucide-react';

interface CaseStudy {
  id: number;
  brand: string;
  industry: string;
  description: string;
  metrics: { value: string; label: string }[];
  strategyTitle: string;
  strategy: string;
  image: string;
  color: string;
}

const cases: CaseStudy[] = [
    {
        id: 1,
        brand: "AYAM BRAND",
        industry: "Official Media Showcase",
        description: "130+ years of history. High quality canned food with rich variety.",
        metrics: [
            { value: "70%", label: "Natural Traffic" },
            { value: "23,852", label: "Clicks" },
            { value: "417,271", label: "Total Views" }
        ],
        strategyTitle: "Multi-scenario Efficient Cooking",
        strategy: "Through the rich uses of 'One Can of Baked Beans', we created a brand image of easy cooking, focusing on 'Weekly Breakfast' and '7 Lunch Delicacies' scenarios to drive consumer interest.",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1000&auto=format&fit=crop", 
        color: "text-wii3-red"
    },
    {
        id: 2,
        brand: "SPACELIFT",
        industry: "Beauty - Influencer Seeding",
        description: "2024 Strategic Partnership. Instant lifting skincare brand.",
        metrics: [
            { value: "70", label: "Influencers" },
            { value: "200%+", label: "Monthly GMV" },
            { value: "2.5M+", label: "Organic Views" }
        ],
        strategyTitle: "High-Efficiency Seeding",
        strategy: "Integrated 70 XiaoHongShu creators to precisely cover target consumers. Combined real seeding content with product highlights to spark rapid discussion and social fission.",
        image: "https://images.unsplash.com/photo-1571781348782-f2c7a2c035d3?q=80&w=1000&auto=format&fit=crop", 
        color: "text-pink-500"
    },
    {
        id: 3,
        brand: "FARM FRESH GROW",
        industry: "Maternal & Infant",
        description: "New kids powder milk launch. Independent convenient packaging.",
        metrics: [
            { value: "70", label: "Insta Creators" },
            { value: "500%+", label: "3-Month GMV" },
            { value: "100%", label: "Natural Traffic" }
        ],
        strategyTitle: "Instagram Precise Seeding",
        strategy: "Focused on 1-6 year old demographic. Highlighted 'Convenience', 'Easy Preparation', and 'Taste' through authentic reviews and daily sharing content to resonate with mothers.",
        image: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1000&auto=format&fit=crop",
        color: "text-blue-500"
    },
     {
        id: 4,
        brand: "SHAKE SHACK TRX",
        industry: "F&B Industry",
        description: "First store opening in 2024. Creating the viral Queue Effect.",
        metrics: [
            { value: "20", label: "Top Foodies" },
            { value: "100%", label: "Natural Traffic" },
            { value: "300K+", label: "Views" }
        ],
        strategyTitle: "Viral Natural Propagation",
        strategy: "Leveraged 20 high-quality food creators to showcase Shake Shack highlights. Triggered user interest and autonomous sharing to achieve a win-win of brand volume and user interaction.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop", 
        color: "text-green-600"
    },
    {
        id: 5,
        brand: "MLE HOME EXPO",
        industry: "Exhibition & Events",
        description: "The hottest furniture expo in the market. Driven by Queue Effect.",
        metrics: [
            { value: "30", label: "Creators" },
            { value: "150%", label: "CTR Increase" },
            { value: "100%", label: "Natural Traffic" }
        ],
        strategyTitle: "FOMO & Crowd Impact",
        strategy: "Creators focused on 'Real Crowds + Limited Time Offers' to create strong visual impact. Successfully created the 'Everyone is here' impression, driving 150% increase in 14-day exposure.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop", 
        color: "text-orange-600"
    }
];

export const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentCase = cases[currentIndex];

  return (
    <section id="work" className="scroll-mt-24 py-12 md:py-16 bg-white text-wii3-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-row justify-between items-end mb-6 md:mb-12 border-b border-gray-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-8 md:w-12 bg-wii3-red"></span>
              <span className="text-wii3-red font-bold uppercase tracking-widest text-xs md:text-sm">Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-wii3-dark leading-tight">
              Our Work
            </h2>
          </div>
          <div className="flex gap-2 md:gap-4 pb-1">
            <button 
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-wii3-dark hover:text-white hover:border-wii3-dark transition-all"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-wii3-dark hover:text-white hover:border-wii3-dark transition-all"
            >
                <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[500px] md:min-h-[600px]">
            <div 
                key={currentCase.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
                {/* Left: Text Content */}
                <div className="space-y-6 pt-4">
                    <div>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                            SHOWCASE - {currentCase.industry}
                        </span>
                        <h3 className={`text-3xl md:text-6xl font-display font-bold mb-3 ${currentCase.color}`}>
                            {currentCase.brand}
                        </h3>
                        <p className="text-base md:text-xl text-gray-600 font-medium leading-relaxed">
                            {currentCase.description}
                        </p>
                    </div>

                    {/* Metrics Grid Cards */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 py-6">
                        {currentCase.metrics.map((metric, idx) => (
                            <div 
                                key={idx} 
                                className="group relative bg-white border border-gray-100 rounded-2xl p-3 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center md:text-left overflow-hidden cursor-default"
                            >
                                {/* Dynamic Hover Background Tint */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${currentCase.color.replace('text-', 'bg-')}`}></div>
                                
                                <div className={`text-xl md:text-3xl lg:text-4xl font-display font-black mb-1 md:mb-2 ${currentCase.color} transition-transform group-hover:scale-105 duration-300 break-words`}>
                                    {metric.value}
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors leading-tight">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Strategy Section */}
                    <div>
                        <h4 className="text-lg md:text-xl font-bold text-wii3-dark mb-2 flex items-center gap-2">
                            Core Strategy
                        </h4>
                        <div className="p-4 md:p-5 bg-gray-50 border-l-4 border-wii3-red rounded-r-lg shadow-sm">
                             <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {currentCase.strategy}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Phone Visual */}
                <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0">
                    {/* Background Blob */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-white rounded-full blur-3xl -z-10`}></div>
                    
                    {/* Phone Mockup */}
                    <div className="relative w-[260px] md:w-[350px] aspect-[9/19] bg-black rounded-[35px] md:rounded-[45px] p-2 md:p-3 shadow-2xl border-4 border-gray-800">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[20px] md:h-[30px] w-[80px] md:w-[120px] bg-black rounded-b-2xl z-20"></div>
                        
                        {/* Screen Content */}
                        <div className="w-full h-full bg-white rounded-[28px] md:rounded-[32px] overflow-hidden relative group">
                            <img 
                                src={currentCase.image} 
                                alt={currentCase.brand} 
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay UI elements to look like an app */}
                            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
                                <div className="font-bold text-lg mb-1">{currentCase.brand}</div>
                                <div className="text-xs opacity-80 flex items-center gap-2">
                                    <TrendingUp size={12} /> Sponsored Content
                                </div>
                            </div>
                            
                            {/* Floating Stats on Image */}
                            <div className="absolute top-10 md:top-12 right-2 md:right-4 bg-white/90 backdrop-blur-md px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] md:text-xs font-bold text-black">Live</span>
                            </div>
                        </div>
                    </div>

                     {/* Second Phone (Background/Offset) - Hidden on mobile */}
                    <div className="hidden md:block absolute top-12 right-[-40px] w-[280px] aspect-[9/19] bg-gray-900 rounded-[40px] p-3 shadow-xl -z-10 opacity-40 transform rotate-6 scale-90 border-4 border-gray-800">
                        <div className="w-full h-full bg-gray-800 rounded-[30px] overflow-hidden">
                             <img 
                                src={currentCase.image} 
                                alt="background" 
                                className="w-full h-full object-cover opacity-50 blur-[1px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-0 left-0 md:left-auto w-full md:w-auto flex justify-center gap-2 mt-8 md:mt-0">
                {cases.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-wii3-red' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};