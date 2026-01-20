import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Target, Zap, Award, CheckCircle2, Rocket, Network, ShieldAlert, Flame, Fingerprint, MessageSquare, Cloud, Lightbulb, HeartHandshake, UserCheck, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import stockDataCenter from "@assets/stock_images/modern_datacenter_se_70373e6b.jpg";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    const increment = end / (totalMiliseconds / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Projects Delivered", value: "500+", icon: Rocket },
    { label: "Technology Partners", value: "20+", icon: Network },
    { label: "Client Relationships", value: "100%", icon: HeartHandshake },
  ];

  const whatWeDo = [
    { title: "IT Networking & Infrastructure", icon: Network, animation: "rotate" },
    { title: "CCTV & AI Surveillance Systems", icon: ShieldAlert, animation: "pulse" },
    { title: "Fire, Thermal & Safety Solutions", icon: Flame, animation: "bounce" },
    { title: "Access Control & Biometrics", icon: Fingerprint, animation: "scan" },
    { title: "Communication & AV Systems", icon: MessageSquare, animation: "ping" },
    { title: "IoT, Cloud & Software Solutions", icon: Cloud, animation: "float" },
  ];

  const getAnimationProps = (type: string) => {
    switch (type) {
      case "rotate": return { whileHover: { rotate: 360 }, transition: { duration: 0.8 } };
      case "pulse": return { whileHover: { scale: [1, 1.2, 1] }, transition: { repeat: Infinity, duration: 0.6 } };
      case "bounce": return { whileHover: { y: [0, -10, 0] }, transition: { repeat: Infinity, duration: 0.5 } };
      case "scan": return { whileHover: { x: [-5, 5, -5] }, transition: { repeat: Infinity, duration: 0.8 } };
      case "ping": return { whileHover: { opacity: [1, 0.5, 1] }, transition: { repeat: Infinity, duration: 0.4 } };
      case "float": return { whileHover: { y: -5 }, transition: { yoyo: Infinity, duration: 0.5 } };
      default: return {};
    }
  };

  const industries = [
    { title: "Corporate Offices", icon: Briefcase },
    { title: "Manufacturing & Warehousing", icon: Network },
    { title: "Retail & Commercial Spaces", icon: Rocket },
    { title: "Education Institutions", icon: Lightbulb },
    { title: "Healthcare Facilities", icon: HeartHandshake },
    { title: "Residential & Gated Communities", icon: UserCheck },
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white overflow-x-hidden">
      <Navbar />

      {/* 1. About Header */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30 animate-pulse"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a15]/90 via-[#050a15]/70 to-[#050a15]" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
              About <span className="text-[#3b82f6]">VIP Networks</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where Technology Meets Reliability
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1526]/80 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#3b82f6]/30 rounded-tl-[2.5rem]" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#3b82f6]/30 rounded-br-[2.5rem]" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
                VIP Networks is a technology-driven IT and infrastructure solutions company delivering reliable, secure, and scalable systems for businesses across industries.
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                We specialize in networking, surveillance, security, automation, and digital transformation solutions designed to improve operational efficiency and safety. With a focus on innovation and performance, we help organizations build future-ready technology environments that support growth and continuity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="py-24 bg-secondary/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight font-poppins">What We <span className="text-[#3b82f6]">Do</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We design, deploy, and support end-to-end technology solutions that integrate networking, security, communication, automation, and cloud platforms. Our solutions are engineered to meet enterprise standards while remaining flexible for evolving business needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="bg-[#0d1526] p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-[#3b82f6]/40 transition-all duration-300 cursor-default"
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 transition-colors"
                  {...getAnimationProps(item.animation)}
                >
                  <item.icon className="w-7 h-7 text-[#3b82f6]" />
                </motion.div>
                <h4 className="font-bold text-lg leading-tight group-hover:text-[#3b82f6] transition-colors">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1526] p-12 rounded-[2.5rem] border border-white/5 relative group overflow-hidden h-full"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] rounded-full group-hover:bg-[#3b82f6]/10 transition-colors" />
              <Target className="w-16 h-16 text-[#3b82f6] mb-8" />
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight font-poppins">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                To deliver dependable, innovative, and secure technology solutions that empower businesses to operate efficiently and confidently.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1526] p-12 rounded-[2.5rem] border border-white/5 relative group overflow-hidden h-full"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] rounded-full group-hover:bg-[#3b82f6]/10 transition-colors" />
              <Rocket className="w-16 h-16 text-[#3b82f6] mb-8" />
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight font-poppins">Our Vision</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                To be a trusted technology partner recognized for quality, innovation, and long-term customer relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Why We Are Different */}
      <section className="py-24 bg-gradient-to-b from-[#050a15] to-[#0d1526]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight font-poppins">Why We Are <span className="text-[#3b82f6]">Different</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Client-focused solution design",
              "Enterprise-grade technologies",
              "Skilled and certified professionals",
              "Strong after-sales and AMC support",
              "Commitment to reliability and performance"
            ].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 p-8 rounded-3xl border border-white/5 flex items-center gap-4 group hover:border-[#3b82f6]/40 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-[#3b82f6] shrink-0" />
                <span className="text-lg font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight font-poppins">Industries We <span className="text-[#3b82f6]">Serve</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0d1526]/40 p-10 rounded-[2.5rem] border border-white/5 text-center group hover:border-[#3b82f6]/40 transition-all"
              >
                <div className="w-20 h-20 mx-auto bg-[#3b82f6]/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-10 h-10 text-[#3b82f6]" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight">{industry.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trust & Credibility */}
      <section className="py-24 bg-[#0d1526]/50 border-y border-white/5">
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
                <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins tracking-tighter">
                  <Counter value={stat.value} />
                </div>
                <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-16 bg-[#3b82f6] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter leading-tight font-poppins">
                Ready to Collaborate with us?
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium">
                Let VIP Networks design the right solution for your business.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-[#3b82f6] hover:bg-black hover:text-white font-bold rounded-full shadow-xl transition-all uppercase tracking-widest text-base font-poppins cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
