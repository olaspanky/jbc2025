import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users, Building, Handshake } from 'lucide-react';

export default function PremiumButtons() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttons = [
    {
      id: 'sponsorship',
      title: 'Sponsorship Interest',
      subtitle: 'Elevate your brand',
      icon: Sparkles,
      gradient: 'from-purple-600 via-blue-600 to-cyan-500',
      hoverGradient: 'from-purple-500 via-blue-500 to-cyan-400',
      glowColor: 'purple',
      subject: 'Sponsorship Interest'
    },
    {
      id: 'exhibition',
      title: 'Exhibition Interest',
      subtitle: 'Showcase innovation',
      icon: Building,
      gradient: 'from-emerald-600 via-teal-600 to-blue-600',
      hoverGradient: 'from-emerald-500 via-teal-500 to-blue-500',
      glowColor: 'emerald',
      subject: 'Exhibition Interest'
    },
    {
      id: 'partnership',
      title: 'Partnership Interest',
      subtitle: 'Collaborate & grow',
      icon: Handshake,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      hoverGradient: 'from-orange-500 via-red-500 to-pink-500',
      glowColor: 'orange',
      subject: 'Partnership Interest'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
      {buttons.map((button) => {
        const Icon = button.icon;
        const isHovered = hoveredButton === button.id;
        
        return (
          <div
            key={button.id}
            className="relative group"
            onMouseEnter={() => setHoveredButton(button.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Animated background glow */}
            <div 
              className={`absolute -inset-1 bg-gradient-to-r ${button.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:blur-lg animate-pulse`}
            />
            
            {/* Main button */}
            <a
              href={`mailto:jbc.summit@jbcibadan.org?subject=${button.subject}`}
              className={`relative flex flex-col items-center justify-center px-8 py-6 w-72 h-48 bg-gradient-to-br ${button.gradient} hover:bg-gradient-to-br hover:${button.hoverGradient} text-white rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 group-hover:shadow-${button.glowColor}-500/25 backdrop-blur-sm border border-white/20`}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm" />
              
              {/* Animated particles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-white/30 rounded-full animate-ping`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="mb-4 transform transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-12 h-12 mx-auto mb-2 drop-shadow-lg" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-wide drop-shadow-lg">
                  {button.title}
                </h3>
                
                <p className="text-sm text-white/90 mb-4 font-medium">
                  {button.subtitle}
                </p>
                
                {/* Animated arrow */}
                <div className="flex items-center justify-center">
                  <span className="text-sm font-semibold mr-2">Get Started</span>
                  <ArrowRight 
                    className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}
                  />
                </div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
            </a>
          </div>
        );
      })}
    </div>
  );
}