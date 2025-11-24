import React, { useState } from 'react';
import { generateCampaignStrategy } from '../services/geminiService';
import { Sparkles, Loader2, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const AiCampaignGenerator: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [audience, setAudience] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !audience || !goal) return;

    setLoading(true);
    setResult(null);
    
    try {
      const strategy = await generateCampaignStrategy(brandName, audience, goal);
      setResult(strategy);
    } catch (error) {
      console.error(error);
      setResult("Error generating strategy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategy" className="py-24 bg-wii3-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wii3-red/10 to-transparent"></div>
        <div className="absolute -left-20 top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-wii3-red/10 rounded-full mb-4">
                <Sparkles className="text-wii3-red" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Wii3 AI Strategist</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Not sure where to start? Let our Gemini-powered AI generate a tailored campaign roadmap for your brand in seconds.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Input Form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <form onSubmit={handleGenerate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Brand Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Wii3 Athletics"
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Target Audience</label>
                        <input 
                            type="text" 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Gen Z gamers, Eco-conscious moms"
                            value={audience}
                            onChange={(e) => setAudience(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Campaign Goal</label>
                        <select 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-wii3-red focus:border-transparent outline-none transition-all appearance-none"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        >
                            <option value="">Select a goal...</option>
                            <option value="Brand Awareness">Brand Awareness</option>
                            <option value="Lead Generation">Lead Generation</option>
                            <option value="Product Launch">Product Launch</option>
                            <option value="Community Engagement">Community Engagement</option>
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading || !brandName || !audience || !goal}
                        className="w-full py-4 bg-wii3-red hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                        {loading ? "Analyzing..." : "Generate Strategy"}
                    </button>
                </form>
            </div>

            {/* Output Display */}
            <div className={`min-h-[400px] rounded-3xl p-8 border border-white/10 transition-all duration-500 ${result ? 'bg-white text-gray-900' : 'bg-black/20 flex items-center justify-center'}`}>
                {result ? (
                    <div className="prose prose-red max-w-none">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                             <div className="w-8 h-8 rounded-full bg-wii3-red flex items-center justify-center text-white font-bold">AI</div>
                             <span className="font-bold text-gray-900">Strategy Report</span>
                        </div>
                        <div className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                           <ReactMarkdown>{result}</ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
                        <p>Fill out the form to unlock your custom campaign strategy.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};
