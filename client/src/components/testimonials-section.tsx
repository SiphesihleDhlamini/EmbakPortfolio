import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Star } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Tumelo Biyela",
      company: "Client",
      content: "Embakh Solutions delivered beyond our expectations. Their attention to detail and user-focused approach resulted in outstanding results for our project.",
      color: "accent"
    },
    {
      name: "Lebohang Khoahlape",
      company: "Client",
      content: "Professional, creative, and technically excellent. The team at Embakh helped us transform our vision into a beautiful, functional web application.",
      color: "primary"
    },
    {
      name: "Thobejane Solutions",
      company: "Business Partner",
      content: "Their expertise in both design and development made our project seamless. Highly recommend for anyone looking for quality digital solutions.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-[#0F172A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  testimonial.color === "accent" ? "bg-accent" : "bg-primary"
                }`}>
                  <User className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
