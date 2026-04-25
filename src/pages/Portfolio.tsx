import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

// ✅ Import your local assets
import g from "../assets/graphic.jpeg";
import web from "../assets/web design.png";
import video from "../assets/video editing.jpeg";
import av from "../assets/animated video.png";
import ads from "../assets/adsresult.png";
import logo from "../assets/logo Branding.jpeg";
import sc from "../assets/scholarix-Dubai Based .png";

// Categories
const categories = ["All", "Web", "Branding", "Video", "Social Media"];

// ✅ Clean project data (using ONLY local images)
const projects = [
  {
    id: 1,
    title: "Website Development Project",
    category: "Web",
    description: "Modern responsive website built for high conversion and user experience.",
    image: web,
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete logo and branding package for a premium business.",
    image: logo,
  },
  {
    id: 3,
    title: "Video Editing Project",
    category: "Video",
    description: "High-quality promotional video designed to attract and engage audience.",
    image: video,
  },
  {
    id: 4,
    title: "Ads Campaign Result",
    category: "Social Media",
    description: "Performance-driven Meta Ads campaign with strong ROI results.",
    image: ads,
  },
 
  {
    id: 6,
    title: "Graphic Design Work",
    category: "Branding",
    description: "Creative and eye-catching graphics for marketing and branding.",
    image: g,
  },
  {
    id: 7,
    title: "Animated Video Project",
    category: "Video",
    description: "Professional animated video for brand storytelling.",
    image: av,
  },
  {
    id: 8,
    title: "Dubai Client Project",
    category: "Social Media",
    description: "International project delivering premium marketing results.",
    image: sc,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter logic
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <FloatingBubbles />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                Our Work
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
                Featured <span className="text-primary">Projects</span>
              </h1>

              <p className="text-muted-foreground text-lg">
                Explore our portfolio and see how we help businesses grow with
                powerful digital solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= FILTER ================= */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* ================= GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -10 }}
                    className="glass-card cursor-pointer overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />

                    <div className="p-4">
                      <span className="text-primary text-xs">
                        {project.category}
                      </span>
                      <h3 className="font-semibold mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-card rounded-xl overflow-hidden max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    className="w-full h-64 object-cover"
                  />

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6">
                  <span className="text-primary text-sm">
                    {selectedProject.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-2">
                    {selectedProject.title}
                  </h2>

                  <p className="text-muted-foreground mt-3">
                    {selectedProject.description}
                  </p>

                  <button className="mt-5 px-5 py-2 bg-primary text-white rounded-lg flex items-center gap-2">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;