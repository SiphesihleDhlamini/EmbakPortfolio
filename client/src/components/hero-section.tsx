import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crafting Digital
              <span className="text-accent block">Experiences</span>
              That Matter
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We specialize in creating stunning web applications and user experiences that drive business growth and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 h-auto text-base font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 h-auto text-base font-semibold transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative animate-float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8">
                <div className="h-16 bg-primary/30 rounded-lg"></div>
                <div className="h-16 bg-accent/30 rounded-lg"></div>
                <div className="h-16 bg-primary/30 rounded-lg"></div>
                <div className="h-24 bg-accent/30 rounded-lg col-span-2"></div>
                <div className="h-24 bg-primary/30 rounded-lg"></div>
                <div className="h-16 bg-primary/30 rounded-lg"></div>
                <div className="h-16 bg-accent/30 rounded-lg col-span-2"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
