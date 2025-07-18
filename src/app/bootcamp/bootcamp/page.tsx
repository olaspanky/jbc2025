
"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, Globe, Eye, ArrowRight, Zap, Rocket, Code, Network, Trophy, Star } from 'lucide-react';

const JBCBootcampLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Digital Tools & Freelancing",
      desc: "Practical Training in Digital Tools, Freelancing, and Innovation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Clinics",
      desc: "Career Clinics, Mentorship Sessions, and Networking Opportunities "
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Hub",
      desc: "A Platform to Build Community and Inspire Transformation among Youth "
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Lab",
      desc: "Hands-on training in entrepreneurial thinking"
    }
  ];

  const partnerBenefits = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Showcase Your Commitment",
      desc: "Demonstrate your commitment to sustainable development and corporate social responsibility.​"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Shape the Future",
      desc: "Contribute to shaping the policies and strategies that will drive Oyo State’s Digital Readiness and economic future.​"

    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network with Key Stakeholders",
      desc: "Engage with entrepreneurs, government officials, industry leaders, financial institutions, and international organizations.​"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Gain Visibility",
      desc: "Your organization will be prominently featured in all summit communications and promotional materials.​"
    }
  ];

  const gradientTexts = [
    "Future-Ready Youth",
    "Digital Innovation",
    "Economic Growth"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
    
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
                ✨ Digital Innovation Summit 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                {gradientTexts[currentSlide]}
              </span>
              <br />
              <span className="text-4xl md:text-5xl">Digital Boot Camp</span>
            </h1>
            
            <p className="text-left lg:text-center text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
             A cornerstone of this year’s summit is the Digital Youth Boot Camp - a comprehensive initiative to support the youth and drive economic development. A 4-Day pre-summit engagement that offers hands-on training in digital skills, workplace readiness, and entrepreneurial thinking, the boot camp is designed for students, job seekers, and young entrepreneurs. It will feature:

            </p>

            {/* Image Placeholder */}
            <div className="my-12 mx-auto max-w-4xl">
              <div  style={{ backgroundImage: `url(/images/bc1.jpg)` }} className="h-64 md:h-96 bg-cover">
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="bootcamp" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                What You'll Experience
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training designed for students, job seekers, and young entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partners" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Partner With Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join a team dedicated to delivering success through innovation, global reach, and trusted collaboration
            </p>
          </div>

          {/* Partner Image Placeholder */}
          <div className="mb-16 mx-auto max-w-5xl">
            <div  style={{ backgroundImage: `url(/images/bc2.jpg)` }} className="h-64 md:h-96 bg-cover">
               
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partnerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.location.href = 'mailto:jbc.summit@jbcibadan.org?subject=Sponsorship Interest'}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sponsorship Interest
                <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:jbc.summit@jbcibadan.org?subject=Exhibition Interest'}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Exhibition Interest
                <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:jbc.summit@jbcibadan.org?subject=Partnership Interest'}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Partnership Interest
                <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              JBC Club
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering the next generation of digital innovators
          </p>
          <p className="text-gray-500">
            © 2025 JBC Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JBCBootcampLanding;