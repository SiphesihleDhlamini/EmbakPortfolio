import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Settings } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and design trends to create solutions that stand out in the digital landscape."
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Every design decision is made with your users in mind, ensuring intuitive and engaging experiences."
    },
    {
      icon: Settings,
      title: "Quality Driven",
      description: "We maintain the highest standards in code quality, design excellence, and project delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">About Embark Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a forward-thinking digital agency specializing in web development and UI/UX design. 
            Our mission is to help businesses embark on their digital transformation journey with 
            innovative solutions and exceptional user experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
