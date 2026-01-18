import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { CheckCircle2, Shield, Network, Zap, Lock, Headset } from "lucide-react";
import { services } from "@/lib/services-data";
import logo from "@assets/Untitled_design_(4)_1768732028230.png";
import videoBg from "@assets/11104160-hd_1920_1080_25fps_1768727591204.mp4";
import generatedSecurity from "@assets/generated_images/professional_cctv_surveillance_camera_system.png";
import generatedAccess from "@assets/generated_images/electronic_office_key_card_reader.png";
import generatedNetwork from "@assets/generated_images/data_center_server_rack_networking_cables.png";
import generatedPower from "@assets/generated_images/industrial_ups_power_backup_system.png";
import indSmartCity from "@assets/generated_images/modern_smart_city_with_connectivity_lines.png";
import indManufacturing from "@assets/generated_images/industrial_manufacturing_facility_with_automation.png";
import indMedical from "@assets/generated_images/advanced_medical_technology_research_lab.png";
import indCorporate from "@assets/generated_images/corporate_office_building_interior_luxury.png";

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
      <section className="py-24 bg-[#050a15] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 font-poppins text-white leading-tight uppercase tracking-tighter lg:whitespace-nowrap">
                Redefining Security & <span className="text-[#3b82f6]">Connectivity</span>
              </h2>
              <p className="text-white mb-12 text-lg md:text-xl max-w-6xl mx-auto leading-relaxed px-8 md:px-32">
                VIP Networks specializes in delivering top-tier IT infrastructure and security solutions. From enterprise networking to advanced surveillance, we build systems that safeguard your assets and streamline your operations.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
                {[
                  { text: "Expert installation & maintenance", icon: Shield },
                  { text: "24/7 Technical Support", icon: Headset },
                  { text: "Customized Enterprise Solutions", icon: Lock }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-widest text-xs md:text-sm">
                    <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <item.icon className="w-6 h-6 text-[#3b82f6]" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="relative w-full">
                <div className="absolute -inset-20 bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Security", img: generatedSecurity, desc: "Comprehensive protection for physical and digital assets." },
                    { title: "Network", img: generatedNetwork, desc: "High-speed infrastructure for modern business." },
                    { title: "Access", img: generatedAccess, desc: "Smart control systems for regulated entry." },
                    { title: "Power", img: generatedPower, desc: "Uninterrupted power solutions for continuity." }
                  ].map((card, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-[#0d1526] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group flex flex-col aspect-[3/4]"
                    >
                      <div className="h-[70%] overflow-hidden relative">
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-transparent to-transparent opacity-40" />
                      </div>
                      <div className="h-[30%] p-5 md:p-6 flex flex-col justify-center text-left">
                        <h3 className="font-bold text-lg md:text-xl text-white font-poppins uppercase tracking-wider mb-1">{card.title}</h3>
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed">{card.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <Link href="/about">
                  <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-sm hover:brightness-125 cursor-pointer transition-all border-b-2 border-[#3b82f6] pb-1">
                    Read More About Us
                  </span>
                </Link>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight">Our Core <span className="text-[#3b82f6]">Solutions</span></h2>
            <p className="text-white text-lg">
              We offer end-to-end technology services designed to enhance efficiency and ensure security across your organization.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx * 0.1} showDescription={false} />
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <button className="px-8 py-3 bg-secondary hover:bg-white/10 text-white border border-white/10 rounded-full font-bold uppercase text-sm tracking-wide transition-all cursor-pointer flex items-center gap-2 mx-auto">
                View All Services <span className="text-xl">→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Get in touch with our experts today for a customized quote tailored to your specific business needs.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-wide cursor-pointer font-poppins">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight">Industries We Serve</h2>
            <p className="text-muted-foreground text-lg">
              Tailored technology solutions for diverse sectors, driving innovation and security across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Smart Cities", img: indSmartCity, desc: "Urban infrastructure with integrated IoT and security." },
              { title: "Manufacturing", img: indManufacturing, desc: "Industrial automation and robust network connectivity." },
              { title: "Healthcare", img: indMedical, desc: "Secure digital health systems and reliable power backup." },
              { title: "Corporate", img: indCorporate, desc: "Premium IT infrastructure for modern enterprise workspaces." },
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-2xl border border-white/5 shadow-xl overflow-hidden group flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={industry.img} alt={industry.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-white font-poppins mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg">What our partners say about our commitment to excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Al-Sayed", role: "IT Director, Urban Tech", content: "VIP Networks transformed our security infrastructure. Their attention to detail and technical expertise is unmatched." },
              { name: "Sarah Johnson", role: "Operations Manager, Global Logistics", content: "The network reliability they provided has significantly improved our warehouse efficiency. Truly a professional team." },
              { name: "Mark Peterson", role: "CEO, Peterson Enterprise", content: "From initial consultation to final implementation, the experience was seamless. Highly recommend their power solutions." },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl relative"
              >
                <div className="text-accent text-4xl mb-4 font-serif">"</div>
                <p className="text-white/90 italic mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <h4 className="font-bold text-white font-poppins">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
