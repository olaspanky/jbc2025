"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Calendar,
  MapPin,
  Users,
  Clock,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X,
  CheckCircle,
  Zap,
  Target,
} from "lucide-react";
import Head from "./components/Head";
import About from "./components/About";
import Sub from "./components/Sub";
import Speaker from "./components/Speaker";
import Image from "next/image";
import logo from "../../public/images/emlogo.png";
import Reg from "./components/Reg";
import Cta from "./components/CTAButton";

// Interfaces for TypeScript
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

interface CountdownBoxProps {
  value: number;
  label: string;
  color: string;
  prevValue?: number;
}

interface SpeakerCardProps {
  name: string;
  title: string;
  company: string;
  initials: string;
  gradient: string;
}

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  color: string;
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  ticketType: string;
}

// Main component
const JerichoSummitWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const prevTimeLeft = useRef<TimeLeft>({...timeLeft});

  // Countdown timer with animation support

  // Floating particle for hero section


  // Glass card component
  const GlassCard: React.FC<GlassCardProps> = React.memo(({ children, className = "", hover = true }) => {
  const hoverClasses = hover 
    ? "hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] hover:-translate-y-1" 
    : "";
    
  return (
    <div
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
        transition-all duration-300 ease-in-out shadow-xl
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

const FeatureItem = ({ icon: Icon, title, description, gradient }: { icon: React.ElementType; title: string; description: string; gradient: string }) => (
    <div className="group relative flex items-center space-x-4 p-4 ">
      <div className={`p-3 rounded-full bg-white text-white`}>
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-blue-500 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-black mt-1">{description}</p>
      </div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  // Countdown box component with animation
  const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label, color, prevValue }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      if (value !== displayValue) {
        setAnimate(true);
        const timer = setTimeout(() => {
          setDisplayValue(value);
          setAnimate(false);
        }, 300); // Match this with CSS transition duration
        
        return () => clearTimeout(timer);
      }
    }, [value, displayValue]);

    return (
      <div className={`text-center p-4 rounded-xl bg-gradient-to-br ${color} backdrop-blur-lg overflow-hidden`}>
        <div className="relative h-12 sm:h-16 md:h-24 flex items-center justify-center">
          <div 
            className={`absolute text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 transition-all duration-300 transform ${
              animate ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}
            key={`current-${value}`}
          >
            {displayValue}
          </div>
          {animate && (
            <div 
              className={`absolute text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 transition-all duration-300 transform ${
                animate ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
              key={`previous-${prevValue}`}
            >
              {prevValue}
            </div>
          )}
        </div>
        <div className="text-[8px] sm:text-xs md:text-sm text-white/80 uppercase tracking-wide">{label}</div>
      </div>
    );
  };

  // Speaker card component
  const SpeakerCard: React.FC<SpeakerCardProps> = React.memo(({ name, title, company, initials, gradient }) => (
    <GlassCard className="p-6 text-center group">
      <div
        className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br ${gradient} group-hover:scale-110 transition-transform duration-300`}
      >
        {initials}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-purple-300 font-semibold mb-1">{title}</p>
      <p className="text-gray-300 text-sm">{company}</p>
    </GlassCard>
  ));

  // Schedule item component
  const ScheduleItem: React.FC<ScheduleItemProps> = React.memo(({ time, title, description, color }) => (
    <div className={`border-l-4 ${color} pl-4 py-2`}>
      <div className="text-purple-300 font-bold text-sm">{time}</div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-gray-400 text-sm">{description}</div>
    </div>
  ));

  // Feature card component
  const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ icon: Icon, title, description, gradient }) => (
    <GlassCard className="p-2 text-center group">
      <div
        className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </GlassCard>
  ));

  // Navigation component
 

  // Hero section with improved animations
  const HeroSection: React.FC = () => {
    const particles = useRef([...Array(12)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.5,
      duration: `${3 + Math.random() * 2}s`
    })));

    return (
      <section>
        <Head/>
       
      </section>
    );
  };

 

  // About section
  const AboutSection: React.FC = () => (
<section
  id="about"
 
>
     <About/>
    </section>
  );

  // Speakers section
  const SpeakersSection: React.FC = () => (
    <section id="speakers" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Keynote Speakers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Industry titans and visionary leaders who are shaping Africa's business landscape
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SpeakerCard
            name="Adebayo Ogunlesi"
            title="Chairman & CEO"
            company="Global Infrastructure Partners"
            initials="AO"
            gradient="from-purple-500 to-pink-500"
          />
          <SpeakerCard
            name="Tony Elumelu"
            title="Chairman"
            company="United Bank for Africa"
            initials="TE"
            gradient="from-blue-500 to-purple-500"
          />
          <SpeakerCard
            name="Aliko Dangote"
            title="President & CEO"
            company="Dangote Group"
            initials="AD"
            gradient="from-green-500 to-blue-500"
          />
          <SpeakerCard
            name="Folorunsho Alakija"
            title="Executive Vice-Chairman"
            company="Famfa Oil Limited"
            initials="FA"
            gradient="from-pink-500 to-red-500"
          />
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">And many more industry leaders...</p>
          <a
            href="#speakers"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            aria-label="View all speakers"
          >
            View All Speakers
          </a>
        </div>
      </div>
    </section>
  );

  // Schedule section
  const ScheduleSection: React.FC = () => (
    <section id="schedule" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-purple-900/10" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">Three intensive days of learning, networking, and innovation</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlassCard className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">Day 1</div>
              <div className="text-base sm:text-lg text-gray-300 mb-2">March 15, 2025</div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>
            <div className="space-y-6">
              <ScheduleItem
                time="9:00 AM"
                title="Opening Ceremony"
                description="Welcome Address & Keynote Presentation"
                color="border-purple-500"
              />
              <ScheduleItem
                time="11:00 AM"
                title="Digital Transformation Panel"
                description="The Future of African Business Technology"
                color="border-purple-500"
              />
              <ScheduleItem
                time="2:00 PM"
                title="Investment Opportunities"
                description="Identifying High-Growth Sectors"
                color="border-purple-500"
              />
              <ScheduleItem
                time="4:30 PM"
                title="Networking Reception"
                description="Connect with Industry Leaders"
                color="border-purple-500"
              />
            </div>
          </GlassCard>
          <GlassCard className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">Day 2</div>
              <div className="text-base sm:text-lg text-gray-300 mb-2">March 16, 2025</div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
            <div className="space-y-6">
              <ScheduleItem
                time="9:00 AM"
                title="Leadership in Crisis"
                description="Strategic Decision Making Masterclass"
                color="border-blue-500"
              />
              <ScheduleItem
                time="11:30 AM"
                title="Sustainable Business Models"
                description="ESG and Impact Investing"
                color="border-blue-500"
              />
              <ScheduleItem
                time="2:00 PM"
                title="Fintech Revolution"
                description="Digital Financial Services Panel"
                color="border-blue-500"
              />
              <ScheduleItem
                time="7:00 PM"
                title="Exclusive Gala Dinner"
                description="Awards Ceremony & Entertainment"
                color="border-blue-500"
              />
            </div>
          </GlassCard>
          <GlassCard className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">Day 3</div>
              <div className="text-base sm:text-lg text-gray-300 mb-2">March 17, 2025</div>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
            </div>
            <div className="space-y-6">
              <ScheduleItem
                time="9:00 AM"
                title="Future of Finance"
                description="Cryptocurrency & Digital Assets"
                color="border-green-500"
              />
              <ScheduleItem
                time="11:00 AM"
                title="Innovation Showcase"
                description="Startup Pitch Competition"
                color="border-green-500"
              />
              <ScheduleItem
                time="1:00 PM"
                title="Strategic Partnerships"
                description="Building Cross-Border Alliances"
                color="border-green-500"
              />
              <ScheduleItem
                time="3:00 PM"
                title="Closing Ceremony"
                description="Key Takeaways & Future Commitments"
                color="border-green-500"
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );

  // Registration section
  const RegistrationSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      ticketType: "",
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      // Basic validation
      if (!formData.fullName || !formData.email || !formData.phone || !formData.company || !formData.ticketType) {
        setError("Please fill in all required fields");
        return;
      }

      try {
        // Mock API call - replace with your actual endpoint
        console.log("Submitting form data:", formData);
        // Example: await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });

        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ fullName: "", email: "", phone: "", company: "", ticketType: "" });
        }, 3000);
      } catch (err) {
        setError("An error occurred during submission. Please try again.");
      }
    };

    return (
      <section
        id="register"
        className="py-20 bg-gray-100 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto lg:px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-blue-900 drop-shadow-2xl">
              Secure Your Spot
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 drop-shadow-lg">
              Limited seats available - Register today for early bird pricing
            </p>
          </div>

          <Reg/>
      
        </div>
      </section>
    );
  };

  // Footer component
  const Footer: React.FC = () => (
    <footer className="bg-gray-900 py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <Image src={logo} alt="Jericho Businessmen Club Logo" width={40} height={40} className="rounded-full" />
              <span className="text-lg sm:text-xl font-bold text-white">Jericho Businessmen Club</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Connecting visionary leaders to shape the future of business in Africa.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Speakers", "Schedule", "Register"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="text-purple-400" size={16} />
                <span className="text-gray-400 text-sm sm:text-base">info@jerichobusinessclub.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-purple-400" size={16} />
                <span className="text-gray-400 text-sm sm:text-base">+234 123 456 7890</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Jericho Businessmen Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
    
      <AboutSection />

      {/* <SpeakersSection />
      <ScheduleSection /> */}
      
      <Sub />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default JerichoSummitWebsite;