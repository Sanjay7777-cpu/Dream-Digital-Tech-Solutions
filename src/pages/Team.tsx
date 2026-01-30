import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
import profileImage from "../assets/sk.jpg";
import profileImage2 from "../assets/AA.png";
import profileImage3 from "../assets/dp.png";

const teamMembers = [
  {
    name: "Sanjay Kumar Thakur",
    role: "Founder & CEO",
    bio: "Visionary leader with 3+ years in Web Development/ Nodejs and Brand strategy.",
   image: profileImage,
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Aashish Chaudhary",
    role: "Founder & CTO",
    bio: "Award-winning Video Editor, Passionate about creating memorable Brand experiences.",
      image: profileImage2,
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Dipesh Thapa",
    role: "Tech Lead",
    bio: "Expert in Video Editing and Motion Graphics with a keen eye for details.",
    image: profileImage3,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
 
];

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  github: Github,
};

const Team = () => {
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
                Our Team
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet the{" "}
                <span className="text-primary text-glow">Dreamers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A passionate team of creative minds and strategic thinkers dedicated 
                to bringing your digital vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Social Links Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="flex gap-3">
                        {Object.entries(member.socials).map(([platform, url]) => {
                          const Icon = socialIcons[platform];
                          return (
                            <motion.a
                              key={platform}
                              href={url}
                              whileHover={{ scale: 1.2, boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2.5 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Icon size={18} />
                            </motion.a>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Decorative Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
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
                Want to Join Our Team?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals who share our passion for 
                creating exceptional digital experiences.
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

export default Team;
