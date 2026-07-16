import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Mail,
  Bed,
  Bath,
  Square,
  Heart,
  Star,
  ArrowRight,
  Building2,
  Award,
  Users,
  Briefcase,
  Linkedin,
  MessageCircle,
  QrCode,
  ExternalLink
} from "lucide-react";

import FloatingBubbles from "@/components/ui/FloatingBubbles";

import heroImage from "@/assets/raj-property-hero.jpg";
import property1 from "@/assets/raj-property-1.jpg";
import property2 from "@/assets/raj-property-2.jpg";
import property3 from "@/assets/raj-property-3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const properties = [
  {
    id: 1,
    image: property1,
    title: "The Skyline Residency",
    location: "Bandra West, Mumbai",
    price: "₹4.2 Crore",
    beds: 3,
    baths: 2,
    sqft: 1850,
    tag: "Premium Apartment",
    featured: true
  },
  {
    id: 2,
    image: property2,
    title: "Heritage Villa Estate",
    location: "Alibaug, Maharashtra",
    price: "₹8.5 Crore",
    beds: 5,
    baths: 4,
    sqft: 4200,
    tag: "Luxury Villa",
    featured: false
  },
  {
    id: 3,
    image: property3,
    title: "Urban Penthouse Suite",
    location: "Lower Parel, Mumbai",
    price: "₹6.8 Crore",
    beds: 4,
    baths: 3,
    sqft: 2400,
    tag: "Penthouse",
    featured: true
  }
];

const stats = [
  { icon: Building2, value: "850+", label: "Properties Sold" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Briefcase, value: "98%", label: "Client Satisfaction" }
];

const services = [
  {
    title: "Property Sales",
    description: "Strategic marketing and sales for residential, commercial, and luxury properties across prime Indian markets."
  },
  {
    title: "Property Management",
    description: "End-to-end management services including tenant screening, maintenance, and rental collection."
  },
  {
    title: "Investment Advisory",
    description: "Data-driven insights and portfolio guidance to maximize returns on real estate investments."
  },
  {
    title: "Legal & Documentation",
    description: "Hassle-free paperwork, title verification, and registration support for smooth transactions."
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    text: "Raj Property made our dream home search effortless. Their team understood exactly what we needed and closed the deal seamlessly.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Investor",
    text: "Professional, transparent, and incredibly knowledgeable. They helped me build a solid real estate portfolio in Mumbai.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    role: "First-Time Buyer",
    text: "From site visits to paperwork, the entire journey was smooth. I highly recommend Raj Property to anyone buying a home.",
    rating: 5
  }
];

export default function RajProperty() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingBubbles />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury villa with pool at sunset"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            Premium Real Estate Since 2009
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Find Your Perfect Space With{" "}
            <span className="text-primary">Raj Property</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
          >
            Luxury homes, premium apartments, and curated estates across India&apos;s most desirable locations.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#properties"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-accent"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-20 mx-4 sm:mx-6 lg:mx-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-lg sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center bg-card p-6 text-center sm:p-8"
            >
              <stat.icon className="mb-3 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium uppercase tracking-widest text-primary">
              Handpicked Listings
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Properties
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Discover exceptional homes selected for their design, location, and investment potential.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {properties.map((property) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={944}
                    height={704}
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      {property.tag}
                    </span>
                    {property.featured && (
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                  <button
                    className="absolute right-4 top-4 rounded-full bg-background/90 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary"
                    aria-label="Save to favorites"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{property.title}</h3>
                      <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {property.location}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-primary">{property.price}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {property.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      {property.sqft} sqft
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
            >
              View All Properties
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium uppercase tracking-widest text-primary">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Comprehensive real estate solutions tailored for buyers, sellers, and investors.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium uppercase tracking-widest text-primary">
              Client Stories
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p variants={fadeInUp} className="text-sm font-medium uppercase tracking-widest text-primary">
                Get In Touch
              </motion.p>
              <motion.h2 variants={fadeInUp} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s Discuss Your Property Goals
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 max-w-md text-muted-foreground">
                Whether you are buying, selling, or investing, our experts are ready to guide you every step of the way.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-medium text-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-medium text-foreground">hello@rajproperty.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit Us</p>
                    <p className="font-medium text-foreground">14th Floor, Bandra Kurla Complex, Mumbai</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Youtube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your property requirements..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect & Portfolio Section */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium uppercase tracking-widest text-primary">
              Connect With Us
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stay In Touch
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* LinkedIn */}
            <motion.a
              variants={fadeInUp}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Linkedin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Follow our journey and network with our team of real estate experts.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                Connect <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={fadeInUp}
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Chat with us instantly for quick property queries and site visits.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                Message Us <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>

            {/* Similar Portfolio */}
            <motion.a
              variants={fadeInUp}
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ExternalLink className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Similar Portfolio</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore a curated portfolio of similar premium real estate work.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                View Portfolio <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>

            {/* QR Code */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-4 rounded-xl bg-white p-3">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Frajproperty.com"
                  alt="Scan QR code"
                  width={140}
                  height={140}
                  className="h-32 w-32"
                />
              </div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <QrCode className="h-5 w-5 text-primary" />
                Scan Me
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Point your camera to open our contact card instantly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
