import { motion } from "framer-motion";

const FloatingBubbles = () => {
  const bubbles = [
    { size: 200, left: "10%", top: "20%", delay: 0 },
    { size: 150, left: "80%", top: "10%", delay: 2 },
    { size: 100, left: "70%", top: "60%", delay: 4 },
    { size: 180, left: "20%", top: "70%", delay: 1 },
    { size: 120, left: "50%", top: "40%", delay: 3 },
    { size: 80, left: "90%", top: "80%", delay: 5 },
    { size: 160, left: "5%", top: "50%", delay: 2.5 },
    { size: 90, left: "40%", top: "15%", delay: 1.5 },
    { size: 140, left: "60%", top: "85%", delay: 3.5 },
    { size: 110, left: "85%", top: "35%", delay: 4.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
