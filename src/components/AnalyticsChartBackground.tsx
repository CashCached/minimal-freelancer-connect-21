
import React, { useEffect, useRef } from 'react';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, ResponsiveContainer } from 'recharts';

const generateChartData = (length: number, min: number, max: number) => {
  return Array.from({ length }, (_, i) => ({
    name: `Point ${i}`,
    value: Math.floor(Math.random() * (max - min) + min)
  }));
};

const data1 = generateChartData(12, 10, 100);
const data2 = generateChartData(8, 20, 80);
const data3 = generateChartData(10, 30, 90);

interface AnalyticsChartBackgroundProps {
  className?: string;
}

const AnalyticsChartBackground: React.FC<AnalyticsChartBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const charts = containerRef.current.querySelectorAll('.chart-element');
      
      charts.forEach((chart, index) => {
        const chartElement = chart as HTMLElement;
        const offsetX = (x - 0.5) * 20 * (index % 2 === 0 ? 1 : -1);
        const offsetY = (y - 0.5) * 20 * (index % 3 === 0 ? 1 : -1);
        
        chartElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Area Chart */}
      <div className="chart-element absolute -top-10 right-10 w-72 h-48 opacity-20 transition-transform duration-300">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data1}>
            <defs>
              <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#9b87f5" fill="url(#colorPurple)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Line Chart */}
      <div className="chart-element absolute bottom-20 left-10 w-80 h-40 opacity-15 transition-transform duration-300">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data2}>
            <Line type="monotone" dataKey="value" stroke="#E5DEFF" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Bar Chart */}
      <div className="chart-element absolute top-1/3 left-20 w-60 h-40 opacity-10 transition-transform duration-300">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data3}>
            <Bar dataKey="value" fill="#7E69AB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Additional Line Chart */}
      <div className="chart-element absolute top-40 right-20 w-64 h-36 opacity-10 transition-transform duration-300">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data1}>
            <Line type="monotone" dataKey="value" stroke="#9b87f5" strokeWidth={1.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChartBackground;
