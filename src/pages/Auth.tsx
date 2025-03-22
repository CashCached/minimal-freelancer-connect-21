
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, EyeOff, Eye } from 'lucide-react';
import Logo from '@/components/Logo';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';
import { 
  Card,
  CardContent, 
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Form validation schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const registerSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const Auth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  // Define forms
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Add animations on load
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });
    
    const sections = document.querySelectorAll('.section-animate');
    const staggerLists = document.querySelectorAll('.stagger-list');
    
    sections.forEach(section => observer.observe(section));
    staggerLists.forEach(list => observer.observe(list));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
      staggerLists.forEach(list => observer.unobserve(list));
    };
  }, []);

  // Handle login
  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      toast({
        title: "Login successful",
        description: "You are now logged in",
      });
      
      // The App.tsx redirect will handle navigation
    } catch (error: any) {
      console.error("Error logging in:", error);
      toast({
        title: "Login failed",
        description: error.message || "Failed to log in. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle registration
  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        }
      });

      if (error) throw error;

      setVerificationSent(true);
      toast({
        title: "Registration successful",
        description: "Please check your email to verify your account",
      });
    } catch (error: any) {
      console.error("Error registering:", error);
      toast({
        title: "Registration failed",
        description: error.message || "Failed to register. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handleForgotPassword = async (values: z.infer<typeof forgotPasswordSchema>) => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/`,
      });

      if (error) throw error;

      toast({
        title: "Password reset email sent",
        description: "Please check your email to reset your password",
      });
      
      // Hide the reset form
      setShowResetForm(false);
    } catch (error: any) {
      console.error("Error resetting password:", error);
      toast({
        title: "Password reset failed",
        description: error.message || "Failed to send password reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Render verification sent message
  if (verificationSent) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden amoled-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-brand-purpleDark/20 z-0"></div>
        
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
          <Card className="w-full max-w-md glass-card border border-brand-purple/20 backdrop-blur-xl animate-fade-up section-animate">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient-primary glow-text-strong">Verification Email Sent</CardTitle>
              <CardDescription className="text-white/70">
                We've sent a verification email to your email address. Please check your inbox and follow the instructions to verify your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-brand-purple/10 flex items-center justify-center animate-pulse">
                <Mail className="w-12 h-12 text-brand-purple" />
              </div>
              <p className="text-white/70 text-center text-sm">
                If you don't see the email in your inbox, please check your spam folder.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-white/70 hover:text-white"
              >
                Back to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  // Render forgot password form
  if (showResetForm) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden amoled-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-brand-purpleDark/20 z-0"></div>
        
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
          <Card className="w-full max-w-md glass-card border border-brand-purple/20 backdrop-blur-xl animate-fade-up section-animate">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient-primary glow-text-strong">Reset Your Password</CardTitle>
              <CardDescription className="text-white/70">
                Enter your email and we'll send you a link to reset your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...forgotPasswordForm}>
                <form onSubmit={forgotPasswordForm.handleSubmit(handleForgotPassword)} className="space-y-4">
                  <FormField
                    control={forgotPasswordForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                            <Input
                              placeholder="name@example.com"
                              className="pl-10 bg-white/5 border-white/10 text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                variant="ghost" 
                onClick={() => setShowResetForm(false)}
                className="text-white/70 hover:text-white"
              >
                Back to Login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  // Render main auth form
  return (
    <div className="min-h-screen bg-black relative overflow-hidden amoled-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-brand-purpleDark/20 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <Card className="w-full max-w-md glass-card border border-brand-purple/20 backdrop-blur-xl animate-fade-up section-animate">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardTitle className="text-2xl font-bold text-gradient-primary glow-text-strong">Welcome Back</CardTitle>
            <CardDescription className="text-white/70">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/5">
                <TabsTrigger value="login" className="text-white">Login</TabsTrigger>
                <TabsTrigger value="register" className="text-white">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                              <Input
                                placeholder="name@example.com"
                                className="pl-10 bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                              <Input
                                type={showPassword ? "text" : "password"}
                                className="pl-10 pr-10 bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-0 top-0 h-10 w-10 px-0 text-white/40"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="link"
                        className="text-sm text-brand-purple p-0 h-auto"
                        onClick={() => setShowResetForm(true)}
                      >
                        Forgot Password?
                      </Button>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="register">
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
                    <FormField
                      control={registerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                              <Input
                                placeholder="name@example.com"
                                className="pl-10 bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                              <Input
                                type={showPassword ? "text" : "password"}
                                className="pl-10 pr-10 bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-0 top-0 h-10 w-10 px-0 text-white/40"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={registerForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Confirm Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                              <Input
                                type={showPassword ? "text" : "password"}
                                className="pl-10 bg-white/5 border-white/10 text-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center">
              <p className="text-white/50 text-sm">
                By continuing, you agree to our 
                <span className="text-brand-purple hover:text-brand-purpleLight transition-colors cursor-pointer"> Terms of Service </span> 
                and 
                <span className="text-brand-purple hover:text-brand-purpleLight transition-colors cursor-pointer"> Privacy Policy</span>
              </p>
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white/70 hover:text-white"
            >
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
