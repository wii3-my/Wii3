import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Jan', reach: 4000, engagement: 2400 },
  { name: 'Feb', reach: 3000, engagement: 1398 },
  { name: 'Mar', reach: 2000, engagement: 9800 },
  { name: 'Apr', reach: 2780, engagement: 3908 },
  { name: 'May', reach: 1890, engagement: 4800 },
  { name: 'Jun', reach: 2390, engagement: 3800 },
  { name: 'Jul', reach: 3490, engagement: 4300 },
];

export const DashboardStats: React.FC = () => {
  return (
    <section id="analytics" className="py-16 md:py-24 bg-gray-50 text-wii3-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Real-Time Performance</h2>
          <p className="text-gray-600 text-sm md:text-base">Track ROI, engagement, and conversion metrics in our comprehensive dashboard.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl font-bold">Campaign Reach</h3>
                    <select className="bg-gray-100 border-none text-xs md:text-sm rounded-lg px-3 py-1 outline-none">
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                    </select>
                </div>
                <div className="h-[250px] md:h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#DC2626" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{backgroundColor: '#0F0F0F', border: 'none', borderRadius: '8px', color: '#fff'}}
                                itemStyle={{color: '#fff'}}
                            />
                            <Area type="monotone" dataKey="reach" stroke="#DC2626" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Secondary Stats */}
            <div className="space-y-6 md:space-y-8">
                <div className="bg-wii3-dark text-white p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10">
                        <div className="w-32 h-32 bg-wii3-red rounded-full blur-2xl"></div>
                     </div>
                     <h3 className="text-gray-400 text-sm font-medium mb-1">Total ROI</h3>
                     <div className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">487%</div>
                     <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full w-fit">
                        <span>+24.5%</span>
                        <span>vs last month</span>
                     </div>
                </div>

                 <div className="bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-gray-100 h-[220px]">
                    <h3 className="text-lg font-bold mb-4">Engagement by Platform</h3>
                    <ResponsiveContainer width="100%" height="80%">
                        <BarChart data={[
                            {name: 'IG', val: 65},
                            {name: 'TT', val: 85},
                            {name: 'YT', val: 45},
                        ]}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="val" fill="#DC2626" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};