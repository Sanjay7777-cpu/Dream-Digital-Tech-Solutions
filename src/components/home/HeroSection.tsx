import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <FloatingBubbles />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground/80">Premium Digital Agency</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            WE MAKE BRANDS THAT{" "}
            <span className="text-primary text-glow">HAVE PREMIUM</span>{" "}
            FEELINGS
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Dream Digital Tech Solution Transform your digital presence with cutting-edge design, strategic marketing, 
            and innovative solutions. We craft experiences that captivate audiences and 
            drive unprecedented business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg flex items-center gap-2 glow-red transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary/50 text-foreground rounded-xl font-semibold text-lg flex items-center gap-2 border border-border hover:border-primary/50 transition-all"
              >
                <Play size={20} className="text-primary" />
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "25+", label: "Online Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
