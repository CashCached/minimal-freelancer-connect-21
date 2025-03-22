
import React, { useEffect, useState } from 'react';
import { AlertCircle, Bell, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Mock data for random signups
const mockCompanies = [
  "TechCorp", "DataFlow", "AIVentures", "NeuralWorks", "QuantumAI", 
  "CogniSys", "DeepTech", "IntelliCorp", "NexusBrain", "SynthInc"
];

const mockLocations = [
  "San Francisco", "New York", "London", "Berlin", "Tokyo", 
  "Singapore", "Sydney", "Toronto", "Paris", "Bangalore"
];

const generateRandomSignup = () => {
  const company = mockCompanies[Math.floor(Math.random() * mockCompanies.length)];
  const location = mockLocations[Math.floor(Math.random() * mockLocations.length)];
  const timeAgo = Math.floor(Math.random() * 10) + 1;
  
  return {
    company,
    location,
    timeAgo,
    id: Date.now()
  };
};

const SignupNotificationBar = () => {
  const [notifications, setNotifications] = useState<Array<{company: string, location: string, timeAgo: number, id: number}>>([]);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Initial notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setNotifications([generateRandomSignup()]);
      setVisible(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }, 5000);
    
    // Generate a new notification every 15-30 seconds
    const intervalTimer = setInterval(() => {
      const newSignup = generateRandomSignup();
      setNotifications([newSignup]);
      setVisible(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }, Math.random() * 15000 + 15000); // Random interval between 15-30 seconds
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);
  
  return (
    <AnimatePresence>
      {visible && notifications.length > 0 && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="neo-blur p-4 pr-10 rounded-lg shadow-lg max-w-md relative overflow-hidden">
            <button 
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 text-white/60 hover:text-white"
            >
              <X size={14} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center animate-pulse-soft">
                  <Bell size={16} className="text-brand-purple" />
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span className="font-semibold">{notifications[0].company}</span> from {notifications[0].location} just 
                  joined Vora {notifications[0].timeAgo} {notifications[0].timeAgo === 1 ? 'minute' : 'minutes'} ago
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupNotificationBar;
