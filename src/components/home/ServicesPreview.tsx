import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Video, 
  Globe, 
  Search, 
  Share2, 
  Users,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals that capture your brand essence and leave lasting impressions.",
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    description: "Cinematic storytelling that engages audiences and amplifies your message.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "High-performance websites that convert visitors into loyal customers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization that puts your brand at the top of search results.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Targeted campaigns that build communities and drive meaningful engagement.",
  },
  {
    icon: Users,
    title: "Social Media Handling",
    description: "Full-service management that grows your presence across all platforms.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="glass-card p-6 group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20"
      >
        <service.icon className="w-7 h-7 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
        <ArrowRight size={16} />
      </div>
    </motion.div>
  );
};

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="What We Do Best"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
