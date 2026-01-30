import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Chundevi ", "Bhaktapur , Nepal "],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+977 9824804400 ", "+ 977 9704563825"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["ddmagency7777@gmail.com", "the.sanjay7777@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Let's Start a{" "}
                <span className="text-primary text-glow">Conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder=" "
                          className="peer w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                        <label className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:-translate-y-full peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1">
                          Your Name
                        </label>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder=" "
                          className="peer w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                        <label className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:-translate-y-full peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1">
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                        <label className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:-translate-y-full peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1">
                          Phone Number
                        </label>
                      </div>

                      {/* Subject */}
                      <div>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        >
                          <option value="">Select a Subject</option>
                          <option value="web">Web Development</option>
                          <option value="design">Graphic Design</option>
                          <option value="video">Video Production</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder=" "
                        className="peer w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      />
                      <label className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:-translate-y-full peer-focus:bg-card peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-1">
                        Your Message
                      </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg flex items-center justify-center gap-2 glow-red"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle size={20} />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground">
                    We're here to help and answer any question you might have. 
                    We look forward to hearing from you.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="glass-card p-6 flex gap-4 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="glass-card p-4 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Chundevi , Bhaktapur , Nepal 
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
