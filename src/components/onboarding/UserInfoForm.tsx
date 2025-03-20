
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserFormData, BusinessType } from '@/types/onboarding';

const businessTypes: BusinessType[] = [
  "E-commerce",
  "Coaching",
  "Agency",
  "SaaS",
  "Real Estate",
  "Fitness",
  "Beauty",
  "Other"
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  instagramHandle: z.string()
    .min(1, { message: "Instagram handle is required." })
    .refine(value => !value.includes("@") || value.startsWith("@"), {
      message: "Instagram handle should not contain @ or should start with @.",
    }),
  businessType: z.enum(["E-commerce", "Coaching", "Agency", "SaaS", "Real Estate", "Fitness", "Beauty", "Other"]),
});

interface UserInfoFormProps {
  initialData: UserFormData;
  onSubmit: (data: UserFormData) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ initialData, onSubmit }) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const handleSubmit = (data: UserFormData) => {
    // Format Instagram handle if needed (ensure it has @ if missing)
    const formattedHandle = data.instagramHandle.startsWith('@') 
      ? data.instagramHandle 
      : `@${data.instagramHandle}`;
    
    onSubmit({
      ...data,
      instagramHandle: formattedHandle
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 max-w-md mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="instagramHandle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram Handle</FormLabel>
              <FormControl>
                <Input placeholder="@yourhandle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="businessType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {businessTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
        >
          Next Step
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};

export default UserInfoForm;
