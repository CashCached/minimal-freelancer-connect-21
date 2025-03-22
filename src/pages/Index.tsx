
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import StatCard from '@/components/StatCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BarChart2,
  ShieldCheck,
  Clock,
  CreditCard,
  AreaChart,
  Palette,
  AppWindow,
  Wallet,
  Zap,
  Brain
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-blackAmoled amoled-grid">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-brand-purple/20 via-transparent to-transparent opacity-50"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-purpleDark/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-brand-purpleLight/10 blur-2xl"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="heading-xl text-gradient-primary mb-4">
              Revolutionizing AI Financial Management
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              CashCached – Simplifying AI Payments
            </h2>
            <p className="subtitle max-w-3xl mx-auto mb-8">
              The unified AI fund management platform that helps companies allocate, track, and audit AI spending with ease.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <BarChart2 className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white">35%</p>
                  <p className="text-sm text-white/70">Cost Reduction</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <ShieldCheck className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white">10+</p>
                  <p className="text-sm text-white/70">AI Services Integrated</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white">15hrs</p>
                  <p className="text-sm text-white/70">Saved Weekly</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purpleDark text-white">
                Try Vora Dashboard
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple/50 text-white bg-transparent hover:bg-brand-purple/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient-primary mb-4">Our Products</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Comprehensive solutions for managing AI expenditure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              title="Vora"
              description="AI Fund Management & Analytics"
              icon={AreaChart}
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
              icon={Palette}
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
              icon={Wallet}
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
              icon={Brain}
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
      
      {/* Why CashCached Section */}
      <section id="why" className="py-16 md:py-24 px-4 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-brand-purple/10 via-transparent to-transparent opacity-30"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gradient-primary mb-4">Why CashCached?</h2>
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
          
          <div className="glass-card p-8 md:p-10 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Trusted by 500+ enterprises</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                    <span className="text-white/80">$50M+ AI Payments Processed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                    <span className="text-white/80">99.9% Uptime</span>
                  </div>
                </div>
              </div>
              <Button className="bg-brand-purple hover:bg-brand-purpleDark text-white">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section id="case-study" className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h2 className="heading-lg text-gradient-primary mb-4">Real Results, Real Companies</h2>
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
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass-card p-8 md:p-12 overflow-hidden relative border-brand-purple/30">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-purple/20 blur-3xl"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-lg text-gradient-primary mb-6">Get Started Today</h2>
              <p className="subtitle mb-8">
                Join hundreds of forward-thinking companies optimizing their AI expenditure
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-purpleDark text-white">
                  Schedule a Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-brand-purple/50 text-white bg-transparent hover:bg-brand-purple/10">
                  Try Vora Dashboard
                </Button>
              </div>
              
              <p className="text-white/70">
                Contact: cashcach3@gmail.com | 123 AI Street, Tech Valley
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
