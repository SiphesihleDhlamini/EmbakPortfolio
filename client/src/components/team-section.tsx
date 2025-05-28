import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Linkedin, Github, Twitter, Dribbble } from "lucide-react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      description: "Full-stack developer with 8+ years of experience in modern web technologies and user experience design.",
      gradient: "from-primary to-accent",
      color: "primary",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" },
        { icon: Twitter, href: "#" }
      ]
    },
    {
      name: "Sarah Chen",
      role: "Senior UI/UX Designer",
      description: "Creative designer specializing in user research, interface design, and creating delightful user experiences.",
      gradient: "from-accent to-primary",
      color: "accent",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Dribbble, href: "#" },
        { icon: Twitter, href: "#" }
      ]
    },
    {
      name: "Mike Rodriguez",
      role: "Project Manager",
      description: "Experienced project manager ensuring smooth delivery and exceptional client communication throughout projects.",
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to delivering exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-50 p-8 rounded-xl text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                <User className="text-white h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{member.name}</h3>
              <p className={`font-medium mb-3 ${
                member.color === "primary" ? "text-primary" : 
                member.color === "accent" ? "text-accent" : "text-purple-600"
              }`}>
                {member.role}
              </p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <div className="flex justify-center space-x-4">
                {member.social.map((social, socialIndex) => (
                  <button
                    key={socialIndex}
                    className={`hover:transition-colors ${
                      member.color === "primary" ? "text-gray-400 hover:text-primary" : 
                      member.color === "accent" ? "text-gray-400 hover:text-accent" : "text-gray-400 hover:text-purple-600"
                    }`}
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
