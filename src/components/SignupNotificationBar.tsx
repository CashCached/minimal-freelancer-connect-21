
import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

// We'll use an array of fake sign-ups for the real-time effect
const fakeSignups = [
  { name: 'Sarah J.', location: 'New York', timeAgo: '2 minutes ago', business: 'E-commerce' },
  { name: 'Mike T.', location: 'Los Angeles', timeAgo: '5 minutes ago', business: 'Coaching' },
  { name: 'Emma L.', location: 'London', timeAgo: '7 minutes ago', business: 'SaaS' },
  { name: 'Robert K.', location: 'Toronto', timeAgo: '12 minutes ago', business: 'Real Estate' },
  { name: 'Sophia Q.', location: 'Sydney', timeAgo: '15 minutes ago', business: 'Agency' },
  { name: 'Daniel F.', location: 'Berlin', timeAgo: '18 minutes ago', business: 'Fitness' },
  { name: 'Lisa M.', location: 'Chicago', timeAgo: '23 minutes ago', business: 'Beauty' },
  { name: 'James B.', location: 'Miami', timeAgo: '25 minutes ago', business: 'Other' },
];

const SignupNotificationBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSignup, setCurrentSignup] = useState(fakeSignups[0]);
  const [index, setIndex] = useState(0);

  // Initially hide the notification, then show it after a short delay
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Cycle through the fake signups to create a real-time effect
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      // After hiding, update to the next signup
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % fakeSignups.length);
        setCurrentSignup(fakeSignups[(index + 1) % fakeSignups.length]);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible, index]);

  // Hide notification when the close button is clicked
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex items-center bg-white/90 backdrop-blur-sm border border-brand-teal/20 shadow-lg rounded-full py-2 pl-3 pr-4 max-w-xs">
        <div className="flex-shrink-0 bg-brand-teal/10 p-2 rounded-full mr-3">
          <Bell size={18} className="text-brand-teal" />
        </div>
        <div className="flex-1 mr-2">
          <p className="text-sm font-medium text-brand-darkGreen">
            {currentSignup.name} from {currentSignup.location}
          </p>
          <p className="text-xs text-brand-darkGreen/70">
            Started a free trial <span className="font-medium">{currentSignup.timeAgo}</span>
          </p>
        </div>
        <button 
          onClick={handleClose}
          className="flex-shrink-0 text-brand-darkGreen/50 hover:text-brand-darkGreen"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default SignupNotificationBar;
