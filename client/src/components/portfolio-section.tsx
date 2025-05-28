import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced filtering and seamless checkout experience.",
      tags: ["React", "Node.js", "Stripe"],
      gradient: "from-blue-400 to-purple-500",
      color: "primary"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive business intelligence platform with real-time data visualization.",
      tags: ["Vue.js", "D3.js", "Python"],
      gradient: "from-green-400 to-blue-500",
      color: "accent"
    },
    {
      title: "Mobile App Design",
      description: "Intuitive mobile application with focus on user experience and accessibility.",
      tags: ["Figma", "React Native", "UI/UX"],
      gradient: "from-pink-400 to-red-500",
      color: "primary"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise in web development and design.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className={project.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className={`font-semibold hover:underline flex items-center gap-1 ${
                  project.color === "primary" ? "text-primary" : "text-accent"
                }`}>
                  View Project <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 h-auto text-base font-semibold">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
