import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Rocket, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const usps = [
  {
    icon: Award,
    title: "Premium Brand Identity",
    description:
      "We don't just design — we craft premium brand identities that command attention and establish market authority.",
    accent: "150+",
    accentLabel: "Brands Transformed",
  },
  {
    icon: Rocket,
    title: "Growth-Driven Strategy",
    description:
      "Every pixel, every campaign is strategically designed to accelerate your business growth and maximize ROI.",
    accent: "300%",
    accentLabel: "Average Growth",
  },
  {
    icon: Heart,
    title: "Passionate Excellence",
    description:
      "We pour passion into every project, treating your brand as our own. Your success is the metric we obsess over.",
    accent: "98%",
    accentLabel: "Client Satisfaction",
  },
];

const USPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="The Dream Digital Difference"
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass-card p-8 h-full flex flex-col">
                {/* Accent Number */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary rounded-lg">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {usp.accent}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <usp.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {usp.description}
                </p>

                {/* Accent Label */}
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {usp.accentLabel}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-foreground max-w-4xl mx-auto leading-relaxed">
            "We don't just build websites or run campaigns — we{" "}
            <span className="text-primary text-glow">architect success</span>{" "}
            for brands that refuse to be ordinary."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;
