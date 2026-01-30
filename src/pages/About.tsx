import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Users, Award, Rocket } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue perfection in every project, never settling for mediocrity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge solutions and creative thinking.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to bring their visions to life.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We build trust through transparency and honest communication.",
  },
];

const timeline = [
  { year: "2023", title: "The Beginning", description: "Founded with a vision to transform digital experiences." },
  { year: "2024", title: "Expansion", description: "Grew our team and expanded services to include full-stack development." },
  { year: "2025", title: "Going Global", description: "Started serving international clients across 20+ countries." },
  { year: "2026", title: "Industry Leader", description: "Recognized as a top digital agency with 150+ successful projects." },
];

const About = () => {
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });

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
                About Us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Crafting Digital{" "}
                <span className="text-primary text-glow">Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We're a passionate team of creators, strategists, and innovators dedicated 
                to transforming brands through exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with premium digital solutions that drive growth, 
                  inspire audiences, and create lasting brand impact. We believe every brand 
                  deserves to stand out in the digital landscape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in premium digital experiences, setting new 
                  standards for creativity, innovation, and client success. We envision a 
                  world where every brand can achieve digital excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading title="Our Journey" subtitle="The Story So Far" />
            
            <div className="mt-16 relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <div className="glass-card p-6">
                        <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center z-10">
                    <span className="text-lg font-bold text-primary">{item.year}</span>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="glass-card p-6">
                        <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeading title="Our Values" subtitle="What Drives Us" />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-6 text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5"
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join the ranks of successful brands we've helped transform. Let's create something amazing together.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg glow-red"
                >
                  Get In Touch
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

export default About;
