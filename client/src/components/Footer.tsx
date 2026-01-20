import { Link } from "wouter";
import logo from "@assets/VIP_Networks_logo_(2)_1768635368208.png";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const socialLinks = [
    { Icon: FaFacebookF, color: "bg-[#1877F2]", hoverColor: "hover:bg-[#166fe5]", href: "#" },
    { Icon: FaTwitter, color: "bg-[#1DA1F2]", hoverColor: "hover:bg-[#1a91da]", href: "#" },
    { Icon: FaLinkedinIn, color: "bg-[#0A66C2]", hoverColor: "hover:bg-[#0958a8]", href: "#" },
    { Icon: FaInstagram, color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", hoverColor: "hover:opacity-90", href: "#" },
    { Icon: FaWhatsapp, color: "bg-[#25D366]", hoverColor: "hover:bg-[#20bd5a]", href: "#" },
    { Icon: FaYoutube, color: "bg-[#FF0000]", hoverColor: "hover:bg-[#e60000]", href: "#" }
  ];

  return (
    <footer className="bg-[#050a15] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-12 mb-16 items-start">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4 pr-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="VIP Networks" className="w-16 h-16 object-contain bg-white/5 rounded-full p-1" />
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-none">VIP NETWORKS</h3>
                <p className="text-[#3b82f6] text-[11px] tracking-[0.2em] uppercase mt-1 font-bold">Technology Meets Reliability</p>
              </div>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-xs">
              Leading provider of comprehensive IT infrastructure, security systems, and networking solutions for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, color, hoverColor, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg shadow-black/20 ${color} ${hoverColor}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-[#3b82f6] transition-colors cursor-pointer flex items-center text-[16px]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Our Services</h4>
            <ul className="space-y-3">
              {[
                "CCTV Surveillance",
                "Fire Detection",
                "Access Control",
                "Networking",
                "Public Address",
                "Audio Visual"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-[16px]">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-[16px]">
                <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>Jogeshwari East,<br />Mumbai - 400060</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[16px]">
                <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="tel:+919326144739" className="hover:text-white transition-colors">+91 9326144739</a>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[16px]">
                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="mailto:vip.itinfra@gmail.com" className="hover:text-white transition-colors">vip.itinfra@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscribe */}
          <div className="lg:col-span-2 lg:text-right">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px] lg:text-right">Subscribe</h4>
            <p className="text-white/50 text-[15px] mb-6 leading-relaxed lg:text-right">
              Stay updated with our latest technology solutions and industry insights.
            </p>
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 transition-all lg:text-left"
              />
              <button 
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#3b82f6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors shadow-lg shadow-[#3b82f6]/20"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px] text-white/40">
          <p>© {new Date().getFullYear()} VIP Networks. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
