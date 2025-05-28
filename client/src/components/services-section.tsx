import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Check, Building, Globe, Paintbrush } from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const webDevFeatures = [
    "React & Next.js Applications",
    "Full-Stack Development",
    "API Integration & Development",
    "Performance Optimization"
  ];

  const designFeatures = [
    "User Research & Testing",
    "Wireframing & Prototyping",
    "Design Systems & Style Guides",
    "Responsive Design"
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we offer comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Web Development Service */}
          <motion.div 
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <Code className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Web Development</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Custom web applications built with modern frameworks and technologies. We create scalable, 
              performant solutions that grow with your business.
            </p>
            <ul className="space-y-3">
              {webDevFeatures.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
                  <Check className="text-primary mr-3 h-5 w-5" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* UI/UX Design Service */}
          <motion.div 
            className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                <Palette className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">UI/UX Design</h3>
            </div>
            <p className="text-gray-600 mb-6">
              User-centered design solutions that combine aesthetics with functionality. We create 
              intuitive interfaces that enhance user satisfaction and business outcomes.
            </p>
            <ul className="space-y-3">
              {designFeatures.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
                  <Check className="text-accent mr-3 h-5 w-5" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company Registrations Service */}
          <motion.div 
            className="bg-gradient-to-br from-green-500/5 to-green-500/10 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <Building className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Company Registrations</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Complete business registration services to help you establish your company legally 
              and efficiently with all necessary documentation and compliance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                Business Registration
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                Legal Documentation
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                Compliance Support
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                Registration Consulting
              </li>
            </ul>
          </motion.div>
          
          {/* Domain & Hosting Service */}
          <motion.div 
            className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Globe className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Domain Buying & Support</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Professional domain registration and management services with ongoing technical 
              support to keep your online presence running smoothly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <Check className="text-purple-500 mr-3 h-5 w-5" />
                Domain Registration
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-purple-500 mr-3 h-5 w-5" />
                DNS Management
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-purple-500 mr-3 h-5 w-5" />
                Technical Support
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-purple-500 mr-3 h-5 w-5" />
                Domain Transfers
              </li>
            </ul>
          </motion.div>
          
          {/* Branding Service */}
          <motion.div 
            className="bg-gradient-to-br from-pink-500/5 to-pink-500/10 p-8 rounded-2xl lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                <Paintbrush className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Branding</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Comprehensive branding solutions that establish your unique identity and create 
              memorable experiences that resonate with your target audience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check className="text-pink-500 mr-3 h-5 w-5" />
                  Logo Design & Identity
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-pink-500 mr-3 h-5 w-5" />
                  Brand Guidelines
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-pink-500 mr-3 h-5 w-5" />
                  Marketing Materials
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check className="text-pink-500 mr-3 h-5 w-5" />
                  Brand Strategy
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-pink-500 mr-3 h-5 w-5" />
                  Visual Identity
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-pink-500 mr-3 h-5 w-5" />
                  Brand Consulting
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
