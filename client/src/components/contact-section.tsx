import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  Dribbble,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
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

  const onSubmit = async (data: InsertContactSubmission) => {
    try {
      // Simple form submission without backend mutation for now
      console.log("Form submitted:", data);
      toast({
        title: "Email client opened!",
        description:
          "Your default email app should open with the message pre-filled.",
      });

       // Create email content
       const subject = `New Project Inquiry from ${data.name}`;
       const body = `
 Hi Embak Solutions Team,

 I'm interested in your services and would like to discuss a potential project.

 Contact Details:
 - Name: ${data.name}
 - Email: ${data.email}
 - Company: ${data.company || "Not specified"}
 - Budget Range: ${data.budget || "Not specified"}

 Project Details:
 ${data.message}

 Best regards,
 ${data.name}
     `.trim();

     // Create mailto URL
     const mailtoUrl = `mailto:hello@embaksolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

     // Open default email client
     window.open(mailtoUrl, "_self");

      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@embakh.co.za",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+28 81 798 5685",
      color: "accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote & Global",
      color: "primary",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, color: "primary", href: "#" },
    { icon: Facebook, color: "accent", href: "#" },
    { icon: Github, color: "primary", href: "#" },
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
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to embark on your digital journey? Get in touch and let's
            discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#0F172A] mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      info.color === "primary"
                        ? "bg-primary/10"
                        : "bg-accent/10"
                    }`}
                  >
                    <info.icon
                      className={
                        info.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-gray-600">{info.label}</p>
                    <p className="text-[#0F172A] font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[#0F172A] mb-4">
                Socials Coming soon
              </h4>
              { <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors ${
                      social.color === "primary"
                        ? "bg-primary hover:bg-primary/90"
                        : social.color === "accent"
                          ? "bg-accent hover:bg-accent/90"
                          : social.color === "pink"
                            ? "bg-pink-500 hover:bg-pink-600"
                            : "bg-[#0F172A] hover:bg-gray-700"
                    }`}
                  >
                    <social.icon className="h-4 w-4" />
                  </button>
                ))}
              </div> }
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
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Name *
                        </FormLabel>
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
                        <FormLabel className="text-gray-700 font-medium">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
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
                        <FormLabel className="text-gray-700 font-medium">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company" 
                            {...field}
                            value={field.value || ""}
                          />
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
                        <FormLabel className="text-gray-700 font-medium">
                          Project Budget
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || undefined}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1.5k-3.5k">
                              R1,500 - R3,500
                            </SelectItem>
                            <SelectItem value="3.5k-5k">
                              R3,500 - R5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              R5,000 - R10,000
                            </SelectItem>
                            <SelectItem value="10k+">R10,000+</SelectItem>
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
                      <FormLabel className="text-gray-700 font-medium">
                        Project Details *
                      </FormLabel>
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
                >
                  Open Email Client
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