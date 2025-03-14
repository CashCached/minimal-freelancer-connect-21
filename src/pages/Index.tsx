
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
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-up opacity-0">
            Professional <span className="text-gradient">Appointment</span> Scheduling
          </h1>
          <p className="subtitle max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 delay-100">
            Streamline your appointments with our efficient scheduling service. Save time and focus on what matters most - your clients.
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary animate-fade-up opacity-0 delay-200"
          >
            Book Now
          </button>
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
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Time Management"
              description="Efficient time slots and automatic reminders to keep your schedule organized."
              delay="delay-200"
            />
            <FeatureCard
              icon={<Check className="h-6 w-6" />}
              title="Easy Booking"
              description="Simple and intuitive booking process for your clients."
              delay="delay-300"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Client Management"
              description="Keep track of your clients and their appointment history."
              delay="delay-400"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Custom Availability"
              description="Set your own availability and working hours."
              delay="delay-500"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Confirmation"
              description="Automatic confirmation and reminder emails for every booking."
              delay="delay-600"
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
