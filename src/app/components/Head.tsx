import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  ChevronDown,
  Clock,
  Users,
  Award,
} from "lucide-react";

const ProfessionalSummitHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Calculate initial time left
  const targetDate = new Date("2025-11-21T00:00:00").getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const particles = useRef<
    Array<{
      id: number;
      left: string;
      top: string;
      duration: string;
      delay: number;
      size: number;
    }>
  >([]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generate particles on mount
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: `${4 + Math.random() * 6}s`,
          delay: Math.random() * 2,
          size: 4 + Math.random() * 8,
        });
      }
      particles.current = newParticles;
    };

    generateParticles();
  }, []);

  const GlassCard = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      <div
        className={`bg-gradient-to-br border border-white/20 rounded-xl p-3 sm:p-4 text-center shadow-lg backdrop-blur-sm`}
      >
        <div className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-white mb-1 font-mono">
          {String(value).padStart(2, "0")}
        </div>
        <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 z-0">
  <div
    className="absolute inset-0 bg-cover bg-center md:bg-[url('/images/n1.jpg')] bg-[url('/images/n12.jpg')]"
    style={{ zIndex: 10 }}
  />
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-20" />
</div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-20" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-float {
          animation: float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Particles */}
      {particles.current.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-float"
          style={
            {
              left: particle.left,
              top: particle.top,
              "--duration": particle.duration,
              "--delay": `${particle.delay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              zIndex: 15,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Main Content - Centered within Left Side */}
      <div className="relative z-30 text-center px-6 py-12 w-[100vw]">
        <div className="space-y-8 pt-12 lg:pt-7 xl:pt-5">
          {/* Event Badge */}
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-6 py-3 backdrop-blur-sm animate-fade-in-up">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">3rd Annual Summit</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 text-center animate-fade-in-up">
            <h1 className="text-xl sm:text-4xl md:text-4xl 2xl:text-6xl font-bold leading-tight text-center">
              <span className="block text-xl md:text-xl 2xl:text-3xl text-white bg-clip-text font-light">
                JERICHO BUSINESSMEN CLUB
              </span>
              <span className="text-3xl lg:text-5xl block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl mb-4 relative overflow-hidden">
                3rd Annual SOCIO-ECONOMIC SUMMIT
              </span>
            </h1>
          </div>

          {/* Theme */}
          <div
            className="max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl text-white/90 leading-relaxed font-light text-center">
              <span className="font-semibold text-white">
                Future-Ready Oyo State:
              </span>
              <br />
              <span className="text-white font-bold">
                Tech, Talent, and Transformation for a Thriving Tomorrow
              </span>
            </p>
          </div>

          {/* Event Details Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <GlassCard className="2xl:p-6 p-2 group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center space-x-3 text-white mb-3">
                <Calendar className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="2xl:text-xl text-lg font-bold">
                    Friday, November 21
                  </div>
                  <div className="text-white/70">2025</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="2xl:p-6 p-2 group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center space-x-3 text-white mb-3">
                <MapPin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="2xl:text-xl text-md font-bold">
                    Ibadan, Nigeria
                  </div>
                  <div className="text-white/70 text-lg">
                    International Conference Centre, UI
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Countdown Timer */}
          <div
            className="text-center mb-6 flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="grid grid-cols-4 gap-4 max-w-2xl">
              <CountdownBox value={timeLeft.days} label="Days" />
              <CountdownBox value={timeLeft.hours} label="Hours" />
              <CountdownBox value={timeLeft.minutes} label="Minutes" />
              <CountdownBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#register"
              className="group inline-flex items-center justify-center space-x-2 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Users className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <span>Register Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummitHero;