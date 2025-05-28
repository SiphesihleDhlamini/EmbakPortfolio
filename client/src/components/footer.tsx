import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Web Development",
    "UI/UX Design",
    "Full-Stack Development",
    "Design Systems",
  ];

  const companyLinks = [
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Dribbble, href: "#" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Embak<span className="text-accent">.</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping businesses embark on their digital transformation journey
              with innovative web development and design solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service}>
                  <button className="hover:text-accent transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Embakh Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
