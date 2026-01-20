import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Users, ShieldCheck, Cpu, Headphones, Trophy } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/services-data";
import radarGif from "@assets/CCTV_Camera_1768636156008.gif";

import projectNetwork from "@assets/generated_images/modern_office_network_infrastructure_installation_photo.png";
import projectAV from "@assets/generated_images/commercial_building_smart_lighting_and_av_installation_photo.png";
import projectSecurity from "@assets/generated_images/industrial_facility_security_and_cctv_installation_photo.png";
import projectSmartCity from "@assets/generated_images/smart_city_traffic_monitoring_system_installation_photo.png";
import projectHealthcare from "@assets/generated_images/modern_health_clinic_digital_medical_system_installation_photo.png";
import projectEducation from "@assets/generated_images/university_smart_lecture_hall_av_and_lighting_project_photo.png";
import projectRetail from "@assets/generated_images/luxury_retail_smart_store_security_and_av_project_photo.png";
import projectDataCenter from "@assets/generated_images/large_data_center_networking_and_server_setup_photo.png";

export default function Services() {
  const whyChooseFeatures = [
    {
      icon: Users,
      title: "Experienced Technical Team",
      desc: "Skilled professionals with hands-on expertise in enterprise IT, networking, and security systems."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Solutions",
      desc: "High-performance, scalable solutions built using industry-leading technologies and standards."
    },
    {
      icon: Cpu,
      title: "Customized System Design",
      desc: "Tailor-made solutions designed specifically to meet your operational and business requirements."
    },
    {
      icon: Headphones,
      title: "Reliable Support & AMC",
      desc: "Proactive maintenance, quick response, and dependable annual support services you can trust."
    },
    {
      icon: Trophy,
      title: "Proven Industry Expertise",
      desc: "Successful deployments across commercial, industrial, and enterprise environments."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-secondary relative overflow-hidden">
        {/* Horizontal Full Heading Cover Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center opacity-30 animate-pulse"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')` }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Solutions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology services tailored to secure, connect, and empower your enterprise.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 container px-4 md:px-6 mx-auto space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image/Icon Side */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-lg aspect-video rounded-2xl bg-gradient-to-br from-secondary to-card border border-white/10 shadow-2xl overflow-hidden group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 w-full">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Solution {String(index + 1).padStart(2, '0')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors uppercase tracking-wider text-sm group cursor-pointer">
                  Request Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WHY CHOOSE VIP NETWORKS */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight">Why Choose <span className="text-[#3b82f6]">VIP Networks?</span></h2>
              <p className="text-muted-foreground text-lg">
                Trusted technology partner delivering reliable, secure, and scalable solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl hover:shadow-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-[1.03] group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center mb-6 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (duplicated from Home.tsx) */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight uppercase">Completed <span className="text-[#3b82f6]">Projects</span></h2>
            <p className="text-white text-lg">A showcase of our successfully delivered infrastructure and security solutions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Enterprise Networking", img: projectNetwork, location: "Corporate Plaza" },
              { title: "Smart Hotel AV", img: projectAV, location: "Grand Regency" },
              { title: "Industrial Security", img: projectSecurity, location: "Manufacturing Hub" },
              { title: "Smart City Traffic", img: projectSmartCity, location: "Urban Center" },
              { title: "Healthcare Systems", img: projectHealthcare, location: "Global Medical Center" },
              { title: "Smart Education AV", img: projectEducation, location: "National University" },
              { title: "Retail Tech Solutions", img: projectRetail, location: "Luxury Mall" },
              { title: "Cloud Data Center", img: projectDataCenter, location: "Tech Park" },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#0d1526] rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/5]"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#0d1526]/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-2">{project.location}</p>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{project.title}</h3>
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
