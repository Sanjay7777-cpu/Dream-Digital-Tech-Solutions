import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const categories = ["All", "Web", "Branding", "Video", "Social Media"];

const projects = [
  {
    id: 1,
    title: "TechStart Website Redesign",
    category: "Web",
    description: "Complete website overhaul for a tech startup, resulting in 200% increase in conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Luxe Brand Identity",
    category: "Branding",
    description: "Premium brand identity for a luxury fashion retailer.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Product Launch Video",
    category: "Video",
    description: "Cinematic product launch video that garnered 1M+ views.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "FoodieApp Campaign",
    category: "Social Media",
    description: "Viral social media campaign for a food delivery app.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "FinTech Dashboard",
    category: "Web",
    description: "Modern dashboard design for a financial technology platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Eco Brand Package",
    category: "Branding",
    description: "Sustainable brand identity for an eco-friendly company.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Corporate Motion Graphics",
    category: "Video",
    description: "Engaging motion graphics for corporate presentations.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Influencer Campaign",
    category: "Social Media",
    description: "Strategic influencer marketing campaign for a beauty brand.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
                Our Work
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Featured{" "}
                <span className="text-primary text-glow">Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of successful projects and see how we've helped 
                brands achieve digital excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedProject(project)}
                    className="glass-card overflow-hidden cursor-pointer group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <span className="text-xs text-primary font-medium">
                            {project.category}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-lg"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-4xl w-full overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="grid md:grid-cols-2">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-8">
                    <span className="text-sm text-primary font-medium">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground mt-2 mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {selectedProject.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2"
                    >
                      View Case Study
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
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
