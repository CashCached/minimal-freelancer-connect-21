
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import StatCard from '@/components/StatCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import PricingPlans from '@/components/PricingPlans';
import AnalyticsChartBackground from '@/components/AnalyticsChartBackground';
import ContactSection from '@/components/ContactSection';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  ArrowRight, 
  BarChart2,
  ShieldCheck,
  Clock,
  // Using more subtle, minimalistic icons for product section
  Circle,
  Square,
  Hexagon,
  Triangle,
  TrendingUp,
  PieChart
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const chartData = [
  { name: 'Jan', cost: 4000, savings: 2400, projection: 2800 },
  { name: 'Feb', cost: 3000, savings: 1398, projection: 2800 },
  { name: 'Mar', cost: 2000, savings: 9800, projection: 2800 },
  { name: 'Apr', cost: 2780, savings: 3908, projection: 2800 },
  { name: 'May', cost: 1890, savings: 4800, projection: 2800 },
  { name: 'Jun', cost: 2390, savings: 3800, projection: 2800 },
];

const formatCurrency = (value: number) => {
  return `₹${value.toLocaleString('en-IN')}`;
};

const Index = () => {
  const isMobile = useIsMobile();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });
      
      // Create ripple effect on mouse move
      const ripple = document.createElement('div');
      ripple.className = 'pointer-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };
    
    // Handle touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      
      // Create ripple effect on touch move
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };
    
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.addEventListener('touchmove', handleTouchMove);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobile]);
  
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <style>
        {`
        .pointer-ripple {
          position: fixed;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(155, 135, 245, 0.2) 0%, rgba(155, 135, 245, 0) 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: ripple 1s ease-out forwards;
          z-index: 1;
        }
        
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.5;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
        
        .touch-ripple {
          position: fixed;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(155, 135, 245, 0.2) 0%, rgba(155, 135, 245, 0) 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: ripple 1s ease-out forwards;
          z-index: 1;
        }
      `}
      </style>
      
      <Navbar />
      
      {/* Removed background elements as requested */}
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Removed background elements to let black stand out */}
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20">
              <span className="text-brand-purpleLight font-medium text-sm flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" /> Simplifying AI Financial Management
              </span>
            </div>
            
            <h1 className="heading-xl text-gradient-primary mb-4 animate-fade-up glow-text-strong">
              CashCached
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 animate-fade-up delay-100 glow-text-subtle">
              Revolutionizing AI Financial Management
            </h2>
            <p className="subtitle max-w-3xl mx-auto mb-8 animate-fade-up delay-200">
              The unified AI fund management platform that helps companies allocate, track, and audit AI spending with ease.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
              <div className="flex items-center animate-fade-up delay-300 hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3 glow-purple">
                  <BarChart2 className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white glow-text-subtle">35%</p>
                  <p className="text-sm text-white/70">Cost Reduction</p>
                </div>
              </div>
              
              <div className="flex items-center animate-fade-up delay-400 hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3 glow-purple">
                  <ShieldCheck className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white glow-text-subtle">10+</p>
                  <p className="text-sm text-white/70">AI Services Integrated</p>
                </div>
              </div>
              
              <div className="flex items-center animate-fade-up delay-500 hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3 glow-purple">
                  <Clock className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white glow-text-subtle">15hrs</p>
                  <p className="text-sm text-white/70">Saved Weekly</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purpleDark text-white group relative overflow-hidden">
                <span className="relative z-10">Try Vora Dashboard</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple/50 text-white bg-transparent hover:bg-brand-purple/10 group">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Featured Chart */}
          <div className="mt-16 glass-card p-6 animate-fade-up delay-300 hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300 interactive-hover">
            <h3 className="text-lg font-semibold mb-4 text-white glow-text-subtle">AI Spending Optimization</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={chartData} 
                  margin={{ top: 5, right: isMobile ? 10 : 30, left: isMobile ? 0 : 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#9F9EA1" />
                  <YAxis stroke="#9F9EA1" tickFormatter={formatCurrency} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid rgba(155, 135, 245, 0.2)',
                      borderRadius: '0.5rem'
                    }} 
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#9b87f5' }}
                    formatter={(value) => [formatCurrency(value as number), ""]}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="cost" stroke="#ff6b6b" activeDot={{ r: 8 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="savings" stroke="#9b87f5" strokeWidth={2} />
                  <Line type="monotone" dataKey="projection" stroke="#4ecdc4" strokeDasharray="5 5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-white/80 font-medium text-sm">Our Solutions</span>
            </div>
            <h2 className="heading-lg text-gradient-primary mb-4 glow-text-strong">Suite of Products</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Comprehensive solutions for managing AI expenditure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              title="Vora"
              description="AI Fund Management & Analytics"
              icon={Circle}
              color="bg-gradient-to-br from-brand-purple to-brand-purpleDark"
              features={[
                "Centralized wallet for AI services",
                "Real-time expenditure tracking",
                "KPI-based performance monitoring",
                "Role-based access & anomaly detection"
              ]}
              ctaText="Try Vora Dashboard"
            />
            
            <ProductCard 
              title="Mosaic"
              description="Custom AI Pricing Generator"
              icon={Square}
              color="bg-gradient-to-br from-purple-600 to-pink-500"
              features={[
                "Input AI architecture & calculate costs",
                "Auto-generate tailored pricing plans",
                "Seamless subscription activation"
              ]}
              ctaText="Configure Pricing"
            />
            
            <ProductCard 
              title="Flow"
              description="Unified AI Payment API"
              icon={Hexagon}
              color="bg-gradient-to-br from-blue-500 to-indigo-600"
              features={[
                "Connect UPI wallets (Google Pay, Paytm, etc.)",
                "Centralized balance, no residue funds",
                "One-click AI service payments"
              ]}
              ctaText="Explore API Docs"
            />
            
            <ProductCard 
              title="Nexus"
              description="Agentic AI Fund Automation"
              icon={Triangle}
              color="bg-gradient-to-br from-emerald-500 to-teal-600"
              features={[
                "Autonomous AI-driven fund allocation",
                "Intelligent API-based resource distribution",
                "Real-time analytics & budget control"
              ]}
              ctaText="Join Waitlist"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <PricingPlans />
      
      {/* Why CashCached Section */}
      <section id="why" className="py-16 md:py-24 px-4 relative">
        {/* Removed background effects to let black stand out */}
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient-primary mb-4 glow-text-strong">Why CashCached?</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Trusted by leading enterprises worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StatCard 
              icon={ShieldCheck}
              stat="Enterprise Security"
              description="SOC 2, end-to-end encryption"
              color="bg-gradient-to-br from-emerald-500 to-teal-600"
            />
            
            <StatCard 
              icon={BarChart2}
              stat="35% Cost Savings"
              description="Average reduction in AI expenses"
              color="bg-gradient-to-br from-brand-purple to-brand-purpleDark"
            />
            
            <StatCard 
              icon={Clock}
              stat="2 Weeks"
              description="Go live with minimal setup time"
              color="bg-gradient-to-br from-amber-500 to-orange-600"
            />
          </div>
          
          <div className="glass-card p-8 md:p-10 text-center hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300 group interactive-hover">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-purple transition-colors glow-text-subtle">Trusted by 500+ enterprises</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                    <span className="text-white/80">₹50M+ AI Payments Processed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                    <span className="text-white/80">99.9% Uptime</span>
                  </div>
                </div>
              </div>
              <Button className="bg-brand-purple hover:bg-brand-purpleDark text-white group relative overflow-hidden">
                <span className="relative z-10">Schedule a Demo</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Analytics Dashboard Preview */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-white/80 font-medium text-sm flex items-center">
                  <PieChart className="h-4 w-4 mr-2 text-brand-purple" /> Advanced Analytics
                </span>
              </div>
              <h2 className="heading-lg text-gradient-primary mb-6 glow-text-strong">Real-time AI Fund Tracking</h2>
              <p className="subtitle mb-8">
                Get comprehensive analytics and insights into your AI spending patterns. Identify optimization opportunities and track your savings in real-time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center mt-0.5 glow-purple">
                    <Circle className="h-4 w-4 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 glow-text-subtle">Intuitive Dashboard</h3>
                    <p className="text-white/70">Easy-to-use interface with customizable widgets</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center mt-0.5 glow-purple">
                    <TrendingUp className="h-4 w-4 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 glow-text-subtle">Trend Analysis</h3>
                    <p className="text-white/70">AI-powered predictions and usage patterns</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-brand-purple hover:bg-brand-purpleDark text-white">
                Explore Dashboard
              </Button>
            </div>
            
            <div className="glass-card p-6 hover-lift transition-all duration-500 interactive-hover">
              <div className="bg-black/40 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4 flex-wrap">
                  <h3 className="text-lg font-semibold text-white glow-text-subtle">AI Service Spending</h3>
                  <div className="flex gap-2 overflow-x-auto mt-2 sm:mt-0">
                    <Button variant="outline" size="sm" className="h-8 px-2 text-xs border-white/10 bg-white/5 hover:bg-white/10 whitespace-nowrap">Weekly</Button>
                    <Button variant="outline" size="sm" className="h-8 px-2 text-xs border-white/10 bg-brand-purple/20 text-brand-purple whitespace-nowrap">Monthly</Button>
                    <Button variant="outline" size="sm" className="h-8 px-2 text-xs border-white/10 bg-white/5 hover:bg-white/10 whitespace-nowrap">Yearly</Button>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={chartData} 
                      margin={{ top: 5, right: isMobile ? 10 : 30, left: isMobile ? 0 : 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#9F9EA1" />
                      <YAxis stroke="#9F9EA1" tickFormatter={formatCurrency} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          border: '1px solid rgba(155, 135, 245, 0.2)',
                          borderRadius: '0.5rem'
                        }}
                        formatter={(value) => [formatCurrency(value as number), ""]}
                      />
                      <Legend />
                      <Bar dataKey="cost" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="savings" fill="#7E69AB" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs mb-1">Total Spend</p>
                    <p className="text-lg font-semibold text-white">₹24,560</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs mb-1">Total Savings</p>
                    <p className="text-lg font-semibold text-brand-purple">₹8,790</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs mb-1">Efficiency</p>
                    <p className="text-lg font-semibold text-green-400">+35.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section id="case-study" className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h2 className="heading-lg text-gradient-primary mb-4 glow-text-strong">Real Results, Real Companies</h2>
              <p className="subtitle mb-6">
                See how we've helped organizations transform their AI financial operations
              </p>
              <Button className="bg-brand-purple hover:bg-brand-purpleDark text-white group">
                <span>View All Case Studies</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="lg:col-span-7">
              <CaseStudyCard 
                company="TechMinds AI"
                challenge="Managing payments across 7 AI platforms with fragmented billing systems and unpredictable costs."
                solution="Implemented Vora & Flow for centralized tracking and payment automation across all vendors."
                results={[
                  "40% cost savings through optimized resource allocation",
                  "15 hours saved weekly on manual payment processes",
                  "Complete visibility into API usage and costs across teams"
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gradient-primary mb-4 glow-text-strong">Get in Touch</h2>
            <p className="subtitle max-w-2xl mx-auto mb-8">
              Have questions? Our team is here to help you optimize your AI spending
            </p>
          </div>
          
          <ContactSection />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass-card p-8 md:p-12 overflow-hidden relative border-brand-purple/30 group hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-500 interactive-hover">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-purple/20 blur-3xl group-hover:bg-brand-purple/30 transition-all duration-500"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-gradient-primary mb-6 glow-text-strong">Get Started Today</h2>
              <p className="subtitle mb-8">
                Join hundreds of forward-thinking companies optimizing their AI expenditure
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-purpleDark text-white group relative overflow-hidden">
                  <span className="relative z-10">Schedule a Free Consultation</span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-purple/50 text-white bg-transparent hover:bg-brand-purple/10">
                  Try Vora Dashboard
                </Button>
              </div>
              
              <p className="text-white/70">
                Contact: contact@cashcached.com | Innovation Center 104A, MIT Manipal
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
