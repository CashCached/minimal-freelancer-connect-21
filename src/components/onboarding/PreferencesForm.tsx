
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PreferencesFormData, TargetingMethod } from '@/types/onboarding';

const targetingMethods: { value: TargetingMethod; label: string; description: string }[] = [
  {
    value: "Competitor Accounts",
    label: "Competitor Accounts",
    description: "Target followers of your competitors' Instagram accounts"
  },
  {
    value: "Keywords",
    label: "Keywords",
    description: "Find users based on hashtags and keywords in their profiles"
  },
  {
    value: "Custom Audience",
    label: "Custom Audience",
    description: "Upload your own list of Instagram handles to target"
  }
];

const formSchema = z.object({
  targetingMethod: z.enum(["Competitor Accounts", "Keywords", "Custom Audience"]),
});

interface PreferencesFormProps {
  initialData: PreferencesFormData;
  onSubmit: (data: PreferencesFormData) => void;
  onBack: () => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ initialData, onSubmit, onBack }) => {
  const form = useForm<PreferencesFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
        <FormField
          control={form.control}
          name="targetingMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-base">Select Your Targeting Method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="space-y-3"
                >
                  {targetingMethods.map((method) => (
                    <FormItem key={method.value} className="flex items-start space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={method.value} className="mt-1" />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base font-semibold">{method.label}</FormLabel>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-between pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onBack}
            className="border-brand-darkGreen text-brand-darkGreen hover:bg-brand-darkGreen/5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Button 
            type="submit" 
            className="bg-brand-green hover:bg-brand-green/90 text-white"
          >
            Start AI Outreach
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PreferencesForm;
