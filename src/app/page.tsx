"use client";

import React, { useState, useEffect } from "react";
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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date("2025-10-15T09:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000); // Reduced interval for smoother countdown

    return () => clearInterval(timer);
  }, []);

  // Floating particle for hero section
  const FloatingParticle: React.FC<{ delay?: number }> = ({ delay = 0 }) => (
    <div
      className="absolute w-2 h-2 bg-gradient-to-r fromwhite to-gray-400 rounded-full opacity-60 animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  );

  // Glass card component
  const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hover = true }) => (
    <div
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
        ${hover ? "hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-2" : ""}
        transition-all duration-500 ease-out shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );

  // Countdown box component
  const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label, color }) => (
    <div className={`text-center p-4 rounded-xl bg-gradient-to-br ${color} backdrop-blur-lg`}>
      <div className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-[8px] sm:text-xs md:text-sm text-white/80 uppercase tracking-wide">{label}</div>
    </div>
  );

  // Speaker card component
  const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, company, initials, gradient }) => (
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
  );

  // Schedule item component
  const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, title, description, color }) => (
    <div className={`border-l-4 ${color} pl-4 py-2`}>
      <div className="text-purple-300 font-bold text-sm">{time}</div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-gray-400 text-sm">{description}</div>
    </div>
  );

  // Feature card component
  const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, gradient }) => (
    <GlassCard className="p-8 text-center group">
      <div
        className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </GlassCard>
  );

  // Navigation component
  const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">JBC</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">Jericho Businessmen Club</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Speakers", "Schedule", "Register"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-300 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/40 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Speakers", "Schedule", "Register"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero section with improved animations and responsiveness
 // Hero section with background image
// Hero section with background image and black-and-white overlay
const HeroSection: React.FC = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `url('/jbcaud.webp'), linear-gradient(45deg, black, white, black, white, black, #00f2fe)`,
      backgroundSize: "cover, 400% 400%", // Image: cover, Gradient: animated
      backgroundPosition: "center, center", // Center both image and gradient
      backgroundBlendMode: "overlay", // Blend image with gradient
      animation: "gradientShift 15s ease infinite",
    }}
  >
    <style jsx>{`
      @keyframes gradientShift {
        0% {
          background-position: 0% 50%, center;
        }
        50% {
          background-position: 100% 50%, center;
        }
        100% {
          background-position: 0% 50%, center;
        }
      }
      @keyframes float {
        0% {
          transform: translateY(0) scale(1);
          opacity: 0.6;
        }
        50% {
          transform: translateY(-20px) scale(1.2);
          opacity: 0.8;
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 0.6;
        }
      }
    `}</style>
    {/* Black and white gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5))",
      }}
    />
    {[...Array(12)].map((_, i) => (
      <FloatingParticle key={i} delay={i * 0.5} />
    ))}
    <div className="relative z-10 text-center px-4 max-w-6xl mt-1 lg:mt-12 mx-auto">
      <div className="space-y-6 sm:space-y-8 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
          <span className="block text-white mb-4 drop-shadow-2xl">JBC SUMMIT</span>
          <span className="block bg-white bg-clip-text text-transparent drop-shadow-lg">
            2025
          </span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
          Where Visionary Leaders Converge to Shape the Future of Business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <GlassCard className="p-4 sm:p-6 text-center min-w-[180px] sm:min-w-[200px]">
            <div className="flex items-center justify-center space-x-2 text-white mb-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-base sm:text-lg md:text-2xl font-bold">March 15-17</span>
            </div>
            <div className="text-white/70 text-sm sm:text-base">2025</div>
          </GlassCard>
          <GlassCard className="p-4 sm:p-6 text-center min-w-[180px] sm:min-w-[200px]">
            <div className="flex items-center justify-center space-x-2 text-white mb-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-base sm:text-lg md:text-2xl font-bold">Ibadan, Nigeria</span>
            </div>
            <div className="text-white/70 text-sm sm:text-base">Civic Centre</div>
          </GlassCard>
        </div>
        <GlassCard className="p-4 sm:p-6 max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-base sm:text-lg text-white/80 mb-2">Event Starts In</h3>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              <CountdownBox
                value={timeLeft.days}
                label="Days"
                color="black"
              />
              <CountdownBox
                value={timeLeft.hours}
                label="Hours"
                color="black"
              />
              <CountdownBox
                value={timeLeft.minutes}
                label="Minutes"
                color="black"
              />
              <CountdownBox
                value={timeLeft.seconds}
                label="Seconds"
                color="black"
              />
            </div>
          </div>
        </GlassCard>
        <a
          href="#register"
          className="inline-block text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Register for the summit"
        >
          Register Now - Early Bird Special
        </a>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
    </div>
  </section>
);

  // About section
  const AboutSection: React.FC = () => (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About the Summit
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The premier gathering of Nigeria's most influential business leaders, innovators, and visionaries,
            driving transformation across Africa's largest economy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Innovation"
            description="Discover cutting-edge technologies and disruptive business models that are reshaping industries across Africa and beyond."
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard
            icon={Users}
            title="Networking"
            description="Connect with C-suite executives, entrepreneurs, and thought leaders who are driving Nigeria's economic transformation."
            gradient="from-blue-500 to-purple-500"
          />
          <FeatureCard
            icon={Target}
            title="Leadership"
            description="Learn from industry titans and develop the strategic leadership skills needed to navigate tomorrow's challenges."
            gradient="from-green-500 to-blue-500"
          />
        </div>
        <div className="mt-16 text-center">
          <GlassCard className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm sm:text-base">Elite Attendees</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm sm:text-base">Industry Leaders</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm sm:text-base">Expert Sessions</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );

  // Speakers section
  const SpeakersSection: React.FC = () => (
    <section id="speakers" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
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
    <section id="schedule" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
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
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Secure Your Spot
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-lg">
              Limited seats available - Register today for early bird pricing
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <GlassCard className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">Early Bird Special</h3>
                <div className="text-base sm:text-lg md:text-xl font-bold text-white mb-4">
                  Treats and a chance to participate in exciting games
                </div>
                <div className="w-full bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full mb-4">
                  <div className="bg-white h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">Only 30% of early bird tickets remaining</p>
              </div>
              <div className="space-y-4">
                {[
                  "All keynote sessions & workshops",
                  "Exclusive networking events",
                  "Premium conference materials",
                  "Certificate of attendance",
                  "VIP lunch experiences",
                  "Post-event community access",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#register"
                className="inline-block mt-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Register with early bird pricing"
              >
                Register Early Bird
              </a>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Registration Form</h3>
              {error && <p className="text-red-300 text-center mb-4">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    required
                    aria-label="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    required
                    aria-label="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    required
                    aria-label="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company/Organization *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    required
                    aria-label="Company or Organization"
                  />
                </div>
                <div>
                  <select
                    value={formData.ticketType}
                    onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    required
                    aria-label="Select Ticket Type"
                  >
                    <option value="" disabled>
                      Select Ticket Type *
                    </option>
                    <option value="early">Early Bird - ₦500,000</option>
                    <option value="regular">Regular - ₦750,000</option>
                    <option value="vip">VIP Package - ₦1,200,000</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-105 shadow-2xl"
                  }`}
                  disabled={isSubmitted}
                  aria-label={isSubmitted ? "Registration Submitted" : "Submit Registration"}
                >
                  {isSubmitted ? "✓ Registration Submitted!" : "Submit Registration"}
                </button>
              </form>
            </GlassCard>
          </div>
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">JBC</span>
              </div>
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
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default JerichoSummitWebsite;