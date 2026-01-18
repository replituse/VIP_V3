import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { CheckCircle2, Shield, Network, Zap, Lock } from "lucide-react";
import { services } from "@/lib/services-data";
import logo from "@assets/Untitled_design_(4)_1768732028230.png";

import videoBg from "@assets/11104160-hd_1920_1080_25fps_1768727591204.mp4";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 -mb-8 md:-mb-16">
              <img 
                src={logo} 
                alt="VIP Networks" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white uppercase tracking-tight relative z-10">
              Where Technology Meets <br />
              <span className="text-white">
                Reliability
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-lg">
              Empowering your business with cutting-edge security, networking, and IT infrastructure solutions tailored for the modern enterprise.
            </p>
            
            <div className="flex flex-row gap-3 md:gap-4 justify-center w-full max-w-[600px] px-2">
              <Link href="/services" className="flex-1">
                <button className="w-full px-4 md:px-8 py-4 md:py-3 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase text-xs md:text-lg tracking-wider flex items-center justify-center cursor-pointer no-default-hover-elevate no-default-active-elevate whitespace-nowrap">
                  Explore Solutions
                </button>
              </Link>
              <Link href="/contact" className="flex-1">
                <button className="w-full px-4 md:px-8 py-4 md:py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all uppercase text-xs md:text-lg tracking-wider flex items-center justify-center cursor-pointer backdrop-blur-sm no-default-hover-elevate no-default-active-elevate whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT PREVIEW */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Corporate Excellence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                Redefining Security <br />
                <span className="text-primary font-light italic">& Connectivity</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed max-w-xl font-medium">
                VIP Networks delivers high-performance IT infrastructure and elite security solutions. We specialize in engineering resilient, scalable environments for the modern enterprise.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: "Engineering", desc: "Precision-grade installations." },
                  { title: "Support", desc: "24/7 elite technical response." },
                  { title: "Innovation", desc: "Future-ready tech architecture." },
                  { title: "Reliability", desc: "Mission-critical uptime." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-3">
                  Our Corporate Profile
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>→</motion.span>
                </button>
              </Link>
            </motion.div>
            
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {[
                  { icon: Shield, title: "Security", desc: "Enterprise-grade physical and digital asset protection." },
                  { icon: Network, title: "Network", desc: "High-speed infrastructure for mission-critical operations." },
                  { icon: Lock, title: "Access", desc: "Biometric and smart control systems for regulated entry." },
                  { icon: Zap, title: "Power", desc: "Industrial-scale uninterruptible power solutions." }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group bg-background p-10 hover:bg-white/[0.02] transition-colors duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-inner">
                      <card.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-3 tracking-[0.1em] uppercase">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full" />

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</span>
              <div className="w-8 h-[1px] bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase">Our Core Solutions</h2>
            <p className="text-muted-foreground text-lg font-medium">
              We offer end-to-end technology services designed to enhance efficiency and ensure security across your organization.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.slice(0, 6).map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx * 0.1} />
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <button className="px-8 py-3 bg-secondary hover:bg-white/10 text-white border border-white/10 rounded-full font-bold uppercase text-sm tracking-wide transition-all cursor-pointer">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        {/* Tech abstract image for overlay texture */}
        
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Get in touch with our experts today for a customized quote tailored to your specific business needs.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-wide cursor-pointer">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
