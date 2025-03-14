
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast.error('Please select a date and time');
      return;
    }
    
    if (!name || !email) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // In a real app, this would submit to a backend
    toast.success('Appointment request submitted!', {
      description: `We'll contact you shortly to confirm your appointment for ${format(date, 'MMMM d, yyyy')} at ${timeSlot}.`
    });
    
    // Reset form
    setDate(undefined);
    setTimeSlot(null);
    setName('');
    setEmail('');
  };

  return (
    <div className="glass-panel p-6 md:p-8 max-w-xl mx-auto animate-fade-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-brand-darkBlue">
            Select Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-brand-darkBlue">
            Select Time
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                type="button"
                variant="outline"
                className={cn(
                  "justify-start",
                  timeSlot === slot && "bg-brand-teal text-white hover:bg-brand-teal/90"
                )}
                onClick={() => setTimeSlot(slot)}
              >
                <Clock className="mr-2 h-4 w-4" />
                {slot}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-brand-darkBlue">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-brand-darkBlue/10 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            placeholder="Your name"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-brand-darkBlue">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-brand-darkBlue/10 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            placeholder="your@email.com"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-brand-teal text-white hover:bg-brand-teal/90"
        >
          Book Appointment
        </Button>
      </form>
    </div>
  );
};

export default BookingSection;
