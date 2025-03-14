
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Redesigned for minimalism */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          {/* Simple tag line */}
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20">
            <span className="text-brand-teal font-medium text-sm">Professional Scheduling Service</span>
          </div>
          
          {/* Clean heading without background */}
          <h1 className="heading-xl text-brand-darkBlue mb-6 tracking-tight">
            Streamline Your
            <span className="text-gradient block mt-1">Appointments</span>
          </h1>
          
          {/* Concise subtitle */}
          <p className="text-lg md:text-xl text-brand-darkBlue/70 mb-8 font-normal max-w-2xl mx-auto">
            Help your business save time and reduce no-shows with our intelligent scheduling system.
          </p>
          
          {/* Clear call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-white"
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
          
          {/* Simplified stats with subtle styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">98%</div>
              <div className="text-brand-darkBlue/70 font-medium">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-brand-darkBlue mb-2">24/7</div>
              <div className="text-brand-darkBlue/70 font-medium">Online Booking</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-brand-coral mb-2">50%</div>
              <div className="text-brand-darkBlue/70 font-medium">Time Saved</div>
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
      <section id="testimonials" className="section-padding px-4">
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
      <section id="booking" className="section-padding px-4 bg-gray-50">
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
