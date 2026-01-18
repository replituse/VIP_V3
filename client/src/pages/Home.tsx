import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { CheckCircle2, Shield, Network, Zap, Lock } from "lucide-react";
import { services } from "@/lib/services-data";
import logo from "@assets/Untitled_design_(4)_1768732028230.png";
import videoBg from "@assets/11104160-hd_1920_1080_25fps_1768727591204.mp4";
import generatedSecurity from "@assets/generated_images/high-tech_digital_security_shield_illustration.png";
import generatedAccess from "@assets/generated_images/futuristic_biometric_access_control_system.png";
import generatedNetwork from "@assets/generated_images/global_network_infrastructure_connectivity_hub.png";
import generatedPower from "@assets/generated_images/industrial_power_energy_management_system.png";

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
      <section className="py-24 bg-secondary/50 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-white">
                Redefining Security & <br />
                <span className="text-primary">Connectivity</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                VIP Networks specializes in delivering top-tier IT infrastructure and security solutions. From enterprise networking to advanced surveillance, we build systems that safeguard your assets and streamline your operations.
              </p>
              <ul className="space-y-4 mb-8">
                {["Expert installation & maintenance", "24/7 Technical Support", "Customized Enterprise Solutions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <span className="text-primary font-bold uppercase tracking-wider text-sm hover:underline cursor-pointer">
                  Read More About Us
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-card rounded-2xl border border-white/5 shadow-xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img src={generatedSecurity} alt="Security" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-white font-poppins">Security</h3>
                      <p className="text-sm text-muted-foreground mt-2">Comprehensive protection for physical and digital assets.</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl border border-white/5 shadow-xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img src={generatedAccess} alt="Access" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-white font-poppins">Access</h3>
                      <p className="text-sm text-muted-foreground mt-2">Smart control systems for regulated entry.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card rounded-2xl border border-white/5 shadow-xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img src={generatedNetwork} alt="Network" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-white font-poppins">Network</h3>
                      <p className="text-sm text-muted-foreground mt-2">High-speed infrastructure for modern business.</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl border border-white/5 shadow-xl overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img src={generatedPower} alt="Power" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-white font-poppins">Power</h3>
                      <p className="text-sm text-muted-foreground mt-2">Uninterrupted power solutions for continuity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight">Our Core Solutions</h2>
            <p className="text-muted-foreground text-lg">
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
