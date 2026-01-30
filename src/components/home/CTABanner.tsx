import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Ready to Transform?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Let's Build Something{" "}
            <span className="text-primary text-glow">Great Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Ready to elevate your brand to the next level? Let's discuss your vision 
            and create something extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg flex items-center gap-2 glow-red mx-auto sm:mx-0"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border border-border text-foreground rounded-xl font-semibold text-lg hover:border-primary/50 transition-all"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
