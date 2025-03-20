
import React, { useState } from 'react';
import { toast } from 'sonner';
import { UserFormData, PreferencesFormData, OnboardingData } from '@/types/onboarding';
import StepIndicator from '@/components/onboarding/StepIndicator';
import UserInfoForm from '@/components/onboarding/UserInfoForm';
import PreferencesForm from '@/components/onboarding/PreferencesForm';
import SuccessMessage from '@/components/onboarding/SuccessMessage';

const GetStarted: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    name: '',
    email: '',
    instagramHandle: '',
    businessType: 'E-commerce',
    targetingMethod: 'Competitor Accounts',
  });
  
  const handleUserInfoSubmit = (data: UserFormData) => {
    console.log('User info submitted:', data);
    
    setFormData(prev => ({ ...prev, ...data }));
    
    // In a real app, you might want to validate or send data to API here
    setCurrentStep(2);
  };
  
  const handlePreferencesSubmit = async (data: PreferencesFormData) => {
    console.log('Preferences submitted:', data);
    
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
    // Simulate sending data to a server
    try {
      // In a real implementation, you would send the data to n8n or your backend here
      console.log('Sending data to service:', updatedData);
      
      // Show loading toast
      toast.loading('Setting up your automation...');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Dismiss loading toast and show success
      toast.dismiss();
      toast.success('Setup successful!');
      
      // Move to success step
      setCurrentStep(3);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };
  
  const handleBackToUserInfo = () => {
    setCurrentStep(1);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-teal/5">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-brand-darkGreen">
              Automate Your Instagram Growth in 3 Simple Steps
            </h1>
            <p className="text-lg text-brand-darkGreen/70 max-w-lg mx-auto">
              Set up your Instagram DM automation in minutes and start generating leads while you sleep.
            </p>
          </div>
          
          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} totalSteps={3} />
          
          {/* Card Container */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Step Title */}
            {currentStep === 1 && (
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                Step 1: Tell us about yourself
              </h2>
            )}
            
            {currentStep === 2 && (
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                Step 2: Set your targeting preferences
              </h2>
            )}
            
            {currentStep === 3 && (
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                Step 3: Your automation is ready!
              </h2>
            )}
            
            {/* Forms */}
            {currentStep === 1 && (
              <UserInfoForm 
                initialData={formData} 
                onSubmit={handleUserInfoSubmit} 
              />
            )}
            
            {currentStep === 2 && (
              <PreferencesForm 
                initialData={formData} 
                onSubmit={handlePreferencesSubmit}
                onBack={handleBackToUserInfo}
              />
            )}
            
            {currentStep === 3 && (
              <SuccessMessage 
                userName={formData.name} 
                email={formData.email} 
              />
            )}
            
            {/* Free Trial Message */}
            {currentStep < 3 && (
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-brand-green">Start Free – No Credit Card Needed.</span> You'll get 14 days to try our service without any commitment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
