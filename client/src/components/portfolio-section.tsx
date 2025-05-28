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
      title: "Blue Portfolio",
      description: "My first ever portfolio that I created and hosted online when I was still a freelancer.",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-blue-400 to-purple-500",
      color: "primary",
      link: "https://github.com/SiphesihleDhlamini/blueportfolio"
    },
    {
      title: "PMB Security Website",
      description: "Professional security services website with modern design and service showcase features.",
      tags: ["React", "CSS", "Responsive"],
      gradient: "from-green-400 to-blue-500",
      color: "accent",
      link: "https://github.com/SiphesihleDhlamini/pmb-security"
    },
    {
      title: "Tag Along E-Hailing App",
      description: "Mobile app design for an innovative e-hailing service with intuitive user experience.",
      tags: ["Figma", "UI/UX", "Mobile Design"],
      gradient: "from-pink-400 to-red-500",
      color: "primary",
      link: "https://www.figma.com/design/YGlLndG1pOD8trZ0STro7O/Tag-Along-App-designs?node-id=49-210"
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
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`font-semibold hover:underline flex items-center gap-1 ${
                    project.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </a>
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
