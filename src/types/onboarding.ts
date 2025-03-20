
export type BusinessType = 
  | "E-commerce" 
  | "Coaching" 
  | "Agency" 
  | "SaaS" 
  | "Real Estate" 
  | "Fitness" 
  | "Beauty" 
  | "Other";

export type TargetingMethod = 
  | "Competitor Accounts" 
  | "Keywords" 
  | "Custom Audience";

export interface UserFormData {
  name: string;
  email: string;
  instagramHandle: string;
  businessType: BusinessType;
}

export interface PreferencesFormData {
  targetingMethod: TargetingMethod;
}

export type OnboardingData = UserFormData & PreferencesFormData;
