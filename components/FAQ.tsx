import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Which platforms does Wii3 specialize in for KOL Marketing?",
    answer: "We focus on the most high-impact platforms for the Asian and global markets, specifically XiaoHongShu (Red), TikTok, Instagram, and Facebook. Our network covers verified creators across these channels to ensure maximum reach within your specific niche."
  },
  {
    question: "What is the difference between KOL Marketing and the Digital Media Platform?",
    answer: "KOL Marketing involves partnering with individual influencers (creators) to generate authentic content and reviews. Our Digital Media Platform service leverages our partnerships with large-scale media publishers and pages on Facebook and Instagram to broadcast your brand message to massive, established audiences instantly."
  },
  {
    question: "How do you measure campaign success?",
    answer: "We provide a real-time analytics dashboard that tracks key performance indicators (KPIs) such as Total Reach, Engagement Rate, Click-Through Rate (CTR), and ROI. Our data-driven approach ensures you have full visibility into how your budget is performing."
  },
  {
    question: "Is the Social Media Management service available now?",
    answer: "Our comprehensive Social Media Management service is currently in the final stages of development ('Coming Soon'). We are building a robust team to handle everything from content strategy to community management. Contact us to be notified when it launches."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-wii3-dark relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-4">
            <HelpCircle className="text-wii3-red" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-white/10 rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-wii3-red/30' : 'bg-transparent hover:bg-white/5'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-wii3-red flex-shrink-0 ml-4" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0 ml-4" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};