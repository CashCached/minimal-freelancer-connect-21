
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Step Circle */}
          <div 
            className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 
              ${index < currentStep 
                ? 'bg-brand-green border-brand-green text-white' 
                : index === currentStep 
                  ? 'border-brand-green text-brand-green' 
                  : 'border-gray-300 text-gray-400'
              }`}
          >
            {index < currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>
          
          {/* Connector Line (except after the last step) */}
          {index < totalSteps - 1 && (
            <div 
              className={`h-1 w-16 md:w-24 mx-1 
                ${index < currentStep ? 'bg-brand-green' : 'bg-gray-300'}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
