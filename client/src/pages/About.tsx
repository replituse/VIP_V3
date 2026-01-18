import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Target, Zap, Award, CheckCircle2, Building2, Users2, Rocket } from "lucide-react";
import stockDataCenter from "@assets/stock_images/modern_datacenter_se_70373e6b.jpg";
import stockMeeting from "@assets/stock_images/professional_busines_c2a75c63.jpg";
import stockSecurity from "@assets/stock_images/high-tech_security_c_fccaba08.jpg";
import stockNetwork from "@assets/stock_images/advanced_networking__5e2a61e1.jpg";

const stats = [
  { label: "Years Experience", value: "10+", icon: Award },
  { label: "Projects Delivered", value: "500+", icon: Rocket },
  { label: "Certified Engineers", value: "25+", icon: Users2 },
  { label: "Client Satisfaction", value: "99%", icon: CheckCircle2 },
];

const values = [
  {
    title: "Technical Excellence",
    desc: "We pride ourselves on staying at the forefront of IT innovation, ensuring our clients receive the most advanced and reliable infrastructure solutions available in the industry.",
    image: stockNetwork,
  },
  {
    title: "Client-Centric Approach",
    desc: "Your success is our priority. We work closely with every partner to design bespoke systems that address unique operational challenges and drive business growth.",
    image: stockMeeting,
  },
  {
    title: "Uncompromising Security",
    desc: "In an increasingly complex digital landscape, we provide robust, multi-layered security frameworks that protect both physical assets and sensitive digital information.",
    image: stockSecurity,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#050a15] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={stockDataCenter} 
            alt="Data Center" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a15]/80 via-[#050a15] to-[#050a15]" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-8 uppercase tracking-tighter leading-tight font-poppins">
              Pioneering the Future of <span className="text-[#3b82f6]">Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              VIP Networks is India's leading system integrator, providing end-to-end IT, security, and networking solutions that empower modern enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1526] p-12 rounded-[2.5rem] border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] rounded-full group-hover:bg-[#3b82f6]/10 transition-colors" />
              <Target className="w-16 h-16 text-[#3b82f6] mb-8" />
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight font-poppins">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                To empower organizations with reliable, cutting-edge technology infrastructure that ensures maximum security, seamless connectivity, and operational efficiency. We strive to be the most trusted technical partner for businesses across the region.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1526] p-12 rounded-[2.5rem] border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] rounded-full group-hover:bg-[#3b82f6]/10 transition-colors" />
              <Zap className="w-16 h-16 text-[#3b82f6] mb-8" />
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight font-poppins">Our Vision</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                To redefine the standards of system integration through technical excellence, innovation, and a relentless focus on customer success. We envision a future where every business operates on a resilient and intelligent digital foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0d1526]/50 border-y border-white/5 backdrop-blur-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#3b82f6]/20">
                  <stat.icon className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins tracking-tighter">{stat.value}</div>
                <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Detailed Sections */}
      <section className="py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter font-poppins">
              The VIP <span className="text-[#3b82f6]">Standard</span>
            </h2>
            <p className="text-white/60 text-lg">
              Our approach combines decades of technical expertise with a commitment to delivering future-ready infrastructure.
            </p>
          </div>

          <div className="space-y-32">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
              >
                <div className="flex-1 space-y-8">
                  <div className="inline-block px-6 py-2 bg-[#3b82f6]/10 rounded-full border border-[#3b82f6]/20 text-[#3b82f6] text-sm font-bold uppercase tracking-widest">
                    Standard 0{i + 1}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight font-poppins">{value.title}</h3>
                  <p className="text-white/60 text-xl leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
                <div className="flex-1 w-full aspect-video md:aspect-square overflow-hidden rounded-[3rem] border border-white/5 relative group">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a15]/60 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#3b82f6] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-tight font-poppins">
              Build Your Digital <br /> Foundation with Us
            </h2>
            <p className="text-white/90 text-xl md:text-2xl font-light">
              Experience the perfect blend of high-end security and seamless connectivity.
            </p>
            <div className="flex justify-center">
              <button className="px-12 py-5 bg-white text-[#3b82f6] font-bold rounded-full shadow-2xl hover:scale-105 transition-transform uppercase tracking-widest text-lg font-poppins">
                Connect With Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
