
import React from 'react';
import { Calendar, Clock, Check, Users, Target, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-teal/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-yellow/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-teal/30 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-brand-coral/30 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-brand-darkBlue/25 blur-2xl"></div>
        
        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30">
            <span className="text-brand-teal font-medium">Professional Scheduling Service</span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-up opacity-0 text-brand-darkBlue">
            <span className="relative inline-block">
              Professional 
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-coral opacity-50"></div>
            </span>{" "}
            <span className="text-gradient">Appointment</span> Scheduling
          </h1>
          
          <p className="subtitle max-w-2xl mx-auto mb-6 animate-fade-up opacity-0 delay-100 font-medium text-brand-darkBlue">
            Streamline your appointments with our efficient scheduling service. Save time and focus on what matters most - your clients.
          </p>
          
          {/* Added descriptive text with improved visibility */}
          <p className="text-brand-darkBlue max-w-3xl mx-auto mb-8 animate-fade-up opacity-0 delay-150 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/70">
            Our intelligent scheduling system helps professionals manage their time effectively. 
            With automated reminders, custom availability, and seamless integration, 
            you'll reduce no-shows and maximize your productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up opacity-0 delay-200">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Book Now
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Explore Services
            </button>
          </div>
          
          {/* Stats Section with improved contrast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 mb-6 animate-fade-up opacity-0 delay-300">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-md">
              <div className="text-3xl font-bold text-brand-darkBlue mb-1">98%</div>
              <div className="text-brand-darkBlue font-medium text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-md">
              <div className="text-3xl font-bold text-brand-teal mb-1">24/7</div>
              <div className="text-brand-darkBlue font-medium text-sm">Online Booking</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-md">
              <div className="text-3xl font-bold text-brand-coral mb-1">50%</div>
              <div className="text-brand-darkBlue font-medium text-sm">Time Saved</div>
            </div>
          </div>
          
          {/* Brand Color Indicators */}
          <div className="flex justify-center gap-2 mt-8 animate-fade-up opacity-0 delay-300">
            <div className="w-8 h-2 rounded-full bg-brand-darkBlue"></div>
            <div className="w-8 h-2 rounded-full bg-brand-teal"></div>
            <div className="w-8 h-2 rounded-full bg-brand-yellow"></div>
            <div className="w-8 h-2 rounded-full bg-brand-orange"></div>
            <div className="w-8 h-2 rounded-full bg-brand-coral"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding px-4">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="h-6 w-6" />}
              title="Smart Scheduling"
              description="Intelligent appointment scheduling that adapts to your availability and preferences."
              delay="delay-100"
              variant="default"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Time Management"
              description="Efficient time slots and automatic reminders to keep your schedule organized."
              delay="delay-200"
              variant="cool"
            />
            <FeatureCard
              icon={<Check className="h-6 w-6" />}
              title="Easy Booking"
              description="Simple and intuitive booking process for your clients."
              delay="delay-300"
              variant="warm"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Client Management"
              description="Keep track of your clients and their appointment history."
              delay="delay-400"
              variant="default"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Custom Availability"
              description="Set your own availability and working hours."
              delay="delay-500"
              variant="cool"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Confirmation"
              description="Automatic confirmation and reminder emails for every booking."
              delay="delay-600"
              variant="warm"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding px-4 bg-brand-darkBlue/5">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The scheduling system has transformed how I manage my appointments. It's intuitive and efficient!"
              author="Sarah Johnson"
              position="Business Owner"
              delay="delay-100"
            />
            <TestimonialCard
              quote="Outstanding service! The automated reminders have significantly reduced no-shows."
              author="Michael Chen"
              position="Consultant"
              delay="delay-200"
            />
            <TestimonialCard
              quote="Clean interface and excellent customer support. Highly recommended!"
              author="Emily Rodriguez"
              position="Freelancer"
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding px-4">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-4">Book an Appointment</h2>
          <p className="subtitle text-center mb-12 max-w-2xl mx-auto">
            Schedule a time that works best for you. We'll confirm your appointment within 24 hours.
          </p>
          <BookingSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding px-4">
        <div className="container mx-auto">
          <h2 className="heading-lg text-center mb-4">Get in Touch</h2>
          <p className="subtitle text-center mb-12 max-w-2xl mx-auto">
            Have questions? We're here to help. Contact us through any of these channels.
          </p>
          <ContactSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
