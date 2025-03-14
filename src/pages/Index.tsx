
import React from 'react';
import { Calendar, Mail, Check, Target, Users, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Minimal design for cold email agency */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-brand-teal/15 blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-brand-darkBlue/10 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10 max-w-3xl">
          {/* Simple tag line */}
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20">
            <span className="text-brand-teal font-medium text-sm">Cold Email Appointment Setting</span>
          </div>
          
          {/* Clean heading without background */}
          <h1 className="heading-xl text-brand-darkBlue mb-6 tracking-tight">
            Fill Your Calendar With
            <span className="text-gradient block mt-1">Qualified Meetings</span>
          </h1>
          
          {/* Concise subtitle */}
          <p className="text-lg md:text-xl text-brand-darkBlue/70 mb-8 font-normal max-w-2xl">
            We help B2B companies land more meetings with decision-makers through targeted cold email campaigns.
          </p>
          
          {/* Clear call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-white"
            >
              Book a Strategy Call
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              View Our Services
            </button>
          </div>
          
          {/* Simplified stats with subtle styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="flex flex-col items-start">
              <div className="text-4xl font-bold text-brand-teal mb-2">35%</div>
              <div className="text-brand-darkBlue/70 font-medium">Average Response Rate</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-4xl font-bold text-brand-darkBlue mb-2">15+</div>
              <div className="text-brand-darkBlue/70 font-medium">Meetings Per Month</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-4xl font-bold text-brand-coral mb-2">90%</div>
              <div className="text-brand-darkBlue/70 font-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mail className="h-6 w-6" />}
              title="Cold Email Campaigns"
              description="Professionally written, personalized cold emails that get responses from your ideal prospects."
              delay="delay-100"
              variant="default"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Lead Research"
              description="Targeted prospect lists built specifically for your ideal customer profile."
              delay="delay-200"
              variant="cool"
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6" />}
              title="Meeting Scheduling"
              description="We handle the back-and-forth to get meetings confirmed on your calendar."
              delay="delay-300"
              variant="warm"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Prospect Nurturing"
              description="Strategic follow-ups to warm leads who haven't responded yet."
              delay="delay-400"
              variant="default"
            />
            <FeatureCard
              icon={<Check className="h-6 w-6" />}
              title="Campaign Analytics"
              description="Detailed reporting on open rates, response rates, and appointments set."
              delay="delay-500"
              variant="cool"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Email Deliverability"
              description="Technical setup to ensure your emails land in the inbox, not spam folders."
              delay="delay-600"
              variant="warm"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding px-4">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Client Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Their cold email campaigns generated 22 qualified meetings in our first month alone. ROI after the first closed deal."
              author="Sarah Johnson"
              position="Sales Director, SaaS Company"
              delay="delay-100"
            />
            <TestimonialCard
              quote="We tried multiple agencies before, but their targeting and messaging finally got us in front of the right decision-makers."
              author="Michael Chen"
              position="CEO, Marketing Agency"
              delay="delay-200"
            />
            <TestimonialCard
              quote="Not only did they set appointments, but the quality of leads was exceptional - these were genuinely qualified prospects."
              author="Emily Rodriguez"
              position="VP of Sales, Financial Services"
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-4">Book Your Strategy Call</h2>
          <p className="subtitle text-center mb-12 max-w-2xl mx-auto">
            Let's discuss your target market and how our cold email campaigns can fill your sales pipeline with qualified meetings.
          </p>
          <BookingSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding px-4">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-4">Get in Touch</h2>
          <p className="subtitle text-center mb-12 max-w-2xl mx-auto">
            Have questions about our cold email services? Contact us directly through any of these channels.
          </p>
          <ContactSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
