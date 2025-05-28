import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@embarksolutions.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote & Global",
      color: "primary"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, color: "primary", href: "#" },
    { icon: Twitter, color: "accent", href: "#" },
    { icon: Github, color: "primary", href: "#" },
    { icon: Dribbble, color: "pink", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Let's Start Your Project</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to embark on your digital journey? Get in touch and let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#0F172A] mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    info.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                    <info.icon className={info.color === "primary" ? "text-primary" : "text-accent"} />
                  </div>
                  <div>
                    <p className="text-gray-600">{info.label}</p>
                    <p className="text-[#0F172A] font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[#0F172A] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors ${
                      social.color === "primary" ? "bg-primary hover:bg-primary/90" :
                      social.color === "accent" ? "bg-accent hover:bg-accent/90" :
                      social.color === "pink" ? "bg-pink-500 hover:bg-pink-600" :
                      "bg-[#0F172A] hover:bg-gray-700"
                    }`}
                  >
                    <social.icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
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
                        <FormLabel className="text-gray-700 font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Project Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k+">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Project Details *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell us about your project, goals, and timeline..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto text-base font-semibold transition-all duration-300 transform hover:scale-105"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
