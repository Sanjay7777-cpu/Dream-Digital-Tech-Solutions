import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Video, 
  Globe, 
  Search, 
  Share2, 
  Users,
  Check,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Create stunning visual identities that capture your brand essence and leave lasting impressions on your audience.",
    features: [
      "Logo Design & Branding",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
      "Packaging Design",
    ],
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    description: "Produce cinematic content that tells your story, engages viewers, and amplifies your brand message.",
    features: [
      "Commercial Videos",
      "Motion Graphics",
      "Social Media Content",
      "Product Videos",
      "Animation",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Build high-performance websites that convert visitors into customers with stunning design and seamless functionality.",
    features: [
      "Custom Web Development",
      "E-commerce Solutions",
      "Landing Pages",
      "Web Applications",
      "CMS Integration",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and boost visibility.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Launch targeted campaigns that build communities, drive engagement, and convert followers into customers.",
    features: [
      "Campaign Strategy",
      "Paid Advertising",
      "Influencer Marketing",
      "Community Building",
      "Performance Analytics",
    ],
  },
  {
    icon: Users,
    title: "Social Media Handling",
    description: "Full-service social media management that grows your presence and maintains consistent brand voice.",
    features: [
      "Content Creation",
      "Daily Posting",
      "Engagement Management",
      "Reputation Monitoring",
      "Monthly Reporting",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <FloatingBubbles />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Premium Digital{" "}
                <span className="text-primary text-glow">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Dream Digital Transform Your Business Into Brand
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                    <div className="glass-card p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                      >
                        <service.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link to="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                        >
                          Get Started
                          <ArrowRight size={18} />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                    <div className="glass-card p-8 bg-secondary/20">
                      <h4 className="text-lg font-semibold text-foreground mb-6">
                        What's Included
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg glow-red"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
