import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

// Placeholder brand logos (using text for demo)
const brands = [
  "TechCorp",
  "InnovateLabs",
  "DigiFlow",
  "CloudNine",
  "FutureTech",
  "NextGen",
  "CyberPulse",
  "DataDrive",
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Trusted By"
          subtitle="Brands We've Worked With"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center p-8 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infinite scroll animation - logos */}
        <div className="mt-16 relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <span
                key={index}
                className="text-4xl font-bold text-muted-foreground/20 hover:text-primary/40 transition-colors"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
