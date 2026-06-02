
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  serviceType: z.enum(['digital', 'rhythm']),
  details: z.string().min(10, { message: "Please provide more details." }),
  timeline: z.string().optional(),
  eventDate: z.string().optional(),
});

export const BookingPortal = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      serviceType: "digital",
      details: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setSubmitted(true);
    toast({
      title: "Request Received",
      description: "We've successfully received your brief and will contact you within 24 hours.",
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 md:px-12 bg-black flex justify-center">
        <Card className="max-w-md w-full bg-secondary/50 border-primary text-center py-12">
          <CardContent className="space-y-4">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-headline text-3xl font-bold">THANK YOU</h3>
            <p className="text-white/60">Your professional inquiry has been logged. A receipt has been sent to your email.</p>
            <Button variant="outline" className="border-primary text-primary mt-6" onClick={() => setSubmitted(false)}>
              Send Another Request
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  const serviceType = form.watch('serviceType');

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-secondary/50 border-primary/20 overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="bg-primary p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="font-headline text-4xl font-bold mb-6">READY TO START?</h2>
              <p className="text-white/80 mb-8 font-body">
                Whether you're looking for a technology partner or a professional DJ performance, our onboarding is streamlined and focused.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-bold">01</span>
                  </div>
                  <span>Select your division</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-bold">02</span>
                  </div>
                  <span>Submit your initial brief</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-bold">03</span>
                  </div>
                  <span>Receive expert feedback</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-black border-white/10" />
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
                        <FormLabel>Professional Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="bg-black border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Division</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-4"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="digital" className="border-primary text-primary" />
                              </FormControl>
                              <FormLabel className="font-normal">Digital</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="rhythm" className="border-primary text-primary" />
                              </FormControl>
                              <FormLabel className="font-normal">Rhythm</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {serviceType === 'digital' ? (
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Timeline</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 3-6 months" {...field} className="bg-black border-white/10" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proposed Event Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-black border-white/10" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project / Event Brief</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={serviceType === 'digital' ? "Briefly describe your marketplace idea..." : "Briefly describe your event atmosphere..."} 
                            className="bg-black border-white/10 min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white animate-pulse-120">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
