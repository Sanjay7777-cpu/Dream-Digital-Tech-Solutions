import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}
      >
        <div className="accent-line" />
        <span className="text-primary font-medium text-sm uppercase tracking-wider">
          {title}
        </span>
        <div className="accent-line rotate-180" />
      </motion.div>

      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading"
        >
          {subtitle}
        </motion.h2>
      )}
    </div>
  );
};

export default SectionHeading;
