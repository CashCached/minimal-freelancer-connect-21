
import React from 'react';
import { CheckCircle, ArrowRight, Mail, Users, MessageCircle, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SuccessMessageProps {
  userName: string;
  email: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ userName, email }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="h-16 w-16 text-brand-green" />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4">You're all set, {userName.split(' ')[0]}!</h2>
      
      <p className="text-lg mb-8 text-gray-700">
        Our AI is now finding leads and sending DMs on your behalf. 
        Check your inbox at <strong>{email}</strong> for updates!
      </p>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">What Happens Next</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-brand-green/10 p-2 rounded-full mr-3">
              <Users className="h-5 w-5 text-brand-green" />
            </div>
            <div className="text-left">
              <p className="font-medium">Our AI finds relevant leads</p>
              <p className="text-sm text-gray-600">Based on your targeting preferences</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-brand-green/10 p-2 rounded-full mr-3">
              <MessageCircle className="h-5 w-5 text-brand-green" />
            </div>
            <div className="text-left">
              <p className="font-medium">Smart DMs are sent</p>
              <p className="text-sm text-gray-600">Personalized messages that get responses</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-brand-green/10 p-2 rounded-full mr-3">
              <Bot className="h-5 w-5 text-brand-green" />
            </div>
            <div className="text-left">
              <p className="font-medium">AI qualifies leads for you</p>
              <p className="text-sm text-gray-600">No more wasting time on poor matches</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-brand-green/10 p-2 rounded-full mr-3">
              <Mail className="h-5 w-5 text-brand-green" />
            </div>
            <div className="text-left">
              <p className="font-medium">You receive qualified leads</p>
              <p className="text-sm text-gray-600">Ready for you to close the deal</p>
            </div>
          </div>
        </div>
      </div>
      
      <Link to="/">
        <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
          Return to Homepage
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default SuccessMessage;
