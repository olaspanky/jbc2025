"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Users,
  Target,
  Globe,
  Eye,
  ArrowRight,
  Zap,
  Rocket,
  Code,
  Network,
  Trophy,
  Star,
  Clock,
  CheckCircle,
  Award,
  BookOpen,
  Briefcase,
  UserCheck,
  MessageCircle,
} from "lucide-react";

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

  const coreObjectives = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Digital & Soft Skills",
      desc: "Build practical skills in digital tools, communication, and workplace productivity",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Boost Employability & Innovation",
      desc: "Develop growth mindset, problem-solving ability, and entrepreneurial thinking",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Future-Ready Mindsets",
      desc: "Encourage adaptability, continuous learning, and global competitiveness",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Foster Supportive Network",
      desc: "Connect participants to mentors, peers, and growth-focused communities",
    },
  ];

  const bootcampJourney = [
    {
      step: "01",
      icon: <UserCheck className="w-8 h-8" />,
      title: "Application & Selection",
      desc: "Transparent application process where the most promising and motivated candidates are shortlisted based on predefined criteria",
      status: "active",
    },
    {
      step: "02",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Acceptance & Onboarding",
      desc: "Selected applicants receive official acceptance notifications and undergo structured pre-bootcamp onboarding",
      status: "upcoming",
    },
    {
      step: "03",
      icon: <BookOpen className="w-8 h-8" />,
      title: "5-Day Bootcamp Experience",
      desc: "Intensive, hands-on training sessions led by seasoned professionals covering digital skills, workplace readiness, and entrepreneurship",
      status: "upcoming",
    },
    {
      step: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Graduation & Alumni Network",
      desc: "Receive certificates and digital starter kits, then join the Future-Ready Youth Alumni Network for continued growth",
      status: "upcoming",
    },
  ];

  const partnerBenefits = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Showcase Your Commitment",
      desc: "Demonstrate your commitment to sustainable development and corporate social responsibility",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Shape the Future",
      desc: "Contribute to shaping policies and strategies that will drive Oyo State's Digital Readiness and economic future",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network with Key Stakeholders",
      desc: "Engage with entrepreneurs, government officials, industry leaders, financial institutions, and international organizations",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Gain Visibility",
      desc: "Your organization will be prominently featured in all summit communications and promotional materials",
    },
  ];

  const gradientTexts = ["Future-Ready Youth", "Digital Innovation", "Economic Growth"];

  // New: Testimonials Data
  const testimonials = [
    {
      name: "Adewale Adebayo",
      role: "2024 Bootcamp Alumnus",
      quote:
        "The Bootcamp transformed my approach to digital tools and opened doors to internship opportunities I never thought possible!",
      image: "/images/testimonial-1.jpg", // Placeholder
    },
    {
      name: "Funmilayo Ojo",
      role: "Young Entrepreneur",
      quote:
        "The mentorship and networking opportunities provided me with the confidence to launch my own startup. This is a game-changer!",
      image: "/images/testimonial-2.jpg", // Placeholder
    },
    {
      name: "Chinedu Okeke",
      role: "NYSC Member",
      quote:
        "The hands-on training and career clinics gave me a clear path to transition from NYSC to a fulfilling tech career.",
      image: "/images/testimonial-3.jpg", // Placeholder
    },
  ];

  // New: FAQ Data
  const faqs = [
    {
      question: "What is the cost of the Bootcamp?",
      answer: "The Future-Ready Youth Digital Bootcamp is fully funded for selected participants, covering training, materials, and starter kits. There are no fees for applicants.",
    },
    {
      question: "Can I apply if I’m not a tech expert?",
      answer: "Absolutely! The Bootcamp is designed for beginners and intermediates alike. We focus on practical skills and mindset to help you thrive in the digital economy.",
    },
    {
      question: "What happens after the Bootcamp?",
      answer: "Graduates receive certificates, digital starter kits, and access to the Future-Ready Youth Alumni Network for ongoing mentorship, career support, and networking.",
    },
    {
      question: "How are participants selected?",
      answer: "Selection is based on motivation, potential, and alignment with the Bootcamp’s objectives. A transparent evaluation process ensures fairness.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 lg:px-6 p-2 lg:py-20 h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>

            <div className="h-[80vh] lg:h-[90vh] flex flex-col justify-between lg:p-9 2xl:p-32">
            <div className="inline-block xl:mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
                ✨ Digital Innovation Summit 2025
              </span>
            </div>

            <h1 className="text-5xl xl:text-7xl font-bold lg:mb-6 leading-tight flex flex-col">
              
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
               The Future Ready Youth Bootcamp
              </span>
              <br className="hidden 2xl:block"/>
              <span className="text-3xl xl:text-5xl">Digital Bootcamp 2025</span>
            </h1>

            {/* <div className="flex flex-col gap-3 justify-center items-center mb-8">
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Preparing the Next Generation for the Future of Work and Innovation
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A 5-Day On-Site, Intensive and High-Impact Learning Experience Powered by JBC Socio-Economic Summit 2025
              </p>

              <a
                href="#register"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl mt-4"
              >
                <Zap className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Apply Now</span>
              </a>
            </div> */}

            <div className="flex flex-col gap-3 justify-center items-center mb-8">
            <p className="flex flex-col gap-2 text-lg sm:text-xl md:text-2xl 2xl:text-3xl text-white/90 leading-relaxed font-light text-center">
              <span className="font-semibold text-white">
                Preparing the Next Generation for the Future of Work and Innovation:
              </span>
              <br />
              <span className="text-white font-bold ">
                A 5-Day On-Site, Intensive and High-Impact Learning Experience Powered by JBC Socio-Economic Summit 2025
              </span>
            </p>

             <a
                href="#register"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl mt-4"
              >
                <Zap className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Apply Now</span>
              </a>
          </div>
          </div>






           
          </div>
        </div>
      </section>

 <section className="flex justify-center items-center py-16 ">
      <div className="max-w-7xl flex flex-col xl:flex-row gap-8 w-full justify-center items-stretch lg:mb-12 px-4">
        <div className="flex flex-col gap-5 xl:w-1/2 text-center xl:text-left text-xl md:text-2xl  leading-relaxed">
          <span>
            The Future-Ready Youth Digital Bootcamp is a 5-day, hands-on training experience designed to equip young people
            with the practical skills, tools, and mindset needed to thrive in today’s digital economy. Whether you are a
            student, recent graduate, job seeker, or young entrepreneur, this Bootcamp offers real-world learning in digital
            tools, freelancing, productivity, workplace readiness, and business innovation.
          </span>
          <span>
            More than just training, the Bootcamp will connect participants to career clinics, mentorship sessions, and peer
            networking opportunities - all aimed at building confidence, competence, and community. Powered by the Jericho
            Businessmen Club (JBC) as a key part of the 2025 Summit, it is a bold step towards turning potential into action
            - and conversation into impact.
          </span>
        </div>

        {/* Image Container */}
        <div className="xl:w-1/2 flex items-stretch">
          <div className="w-full">
            <Image
              src="/images/z1.jpg"
              alt="Bootcamp Illustration"
              className="rounded-lg shadow-lg object-cover w-full h-full md:bg-[url('/images/n122.jpg')] bg-[url('/images/g2.jpg')]"
              width={600} // Adjust based on your image's aspect ratio
              height={400} // Adjust based on your image's aspect ratio
              priority
            />
          </div>
        </div>
      </div>
    </section>
      

      

      {/* Core Objectives Section */}
      <section id="objectives" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Core Objectives
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Carefully curated to drive lasting positive change in your professional trajectory
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreObjectives.map((objective, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">{objective.icon}</div>
                <h3 className="text-xl font-bold mb-3">{objective.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{objective.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Journey Section */}
      <section id="journey" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Bootcamp Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From application to graduation - your transformation pathway
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bootcampJourney.map((step, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 ${
                  step.status === "active"
                    ? "border-green-500/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
                    : "border-white/10 hover:border-purple-500/50"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg ${
                      step.status === "active"
                        ? "bg-green-500/20 text-green-400 border-2 border-green-500/50"
                        : "bg-purple-500/20 text-purple-400 border-2 border-purple-500/50"
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex lg:flex-row flex-col lg:items-center space-x-3 mb-3">
                      <div className={step.status === "active" ? "text-green-400" : "text-purple-400"}>{step.icon}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      {step.status === "active" && (
                        <span className="px-2 py-1 bg-green-500/20 rounded-full text-xs font-medium text-green-300">
                          OPEN NOW
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Timeline Section */}
      <section id="eligibility" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Eligibility */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Who Can Apply?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Open to vibrant, driven young people ready to transform their future
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold">Age Range</h3>
                  </div>
                  <p className="text-gray-300">18 to 30 years old</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-bold">Location</h3>
                  </div>
                  <p className="text-gray-300">Must reside in South-Western states: Oyo, Lagos, Ogun, Osun, Ondo, or Ekiti</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold">Background</h3>
                  </div>
                  <div className="text-gray-300 space-y-2">
                    <p>• Final-year students of tertiary institutions in South-West</p>
                    <p>• Fresh graduates and NYSC members in South-West</p>
                    <p>• Early-career professionals, young entrepreneurs & digital creatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Important Dates
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Mark your calendar and don’t miss these crucial deadlines
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-green-400">Application Period</h3>
                    <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm font-medium text-green-300">OPEN NOW</span>
                  </div>
                  <p className="text-gray-300 mb-2">
                    <strong>July 28 – September 12</strong>
                  </p>
                  <p className="text-gray-400 text-sm">Submit your application and go through the selection process</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Pre-Onboarding</h3>
                  <p className="text-gray-300 mb-2">
                    <strong>September 15 – September 19</strong>
                  </p>
                  <p className="text-gray-400 text-sm">Successful applicants receive confirmation and next steps</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Onboarding & Preparation</h3>
                  <p className="text-gray-300 mb-2">
                    <strong>October 1 – October 4</strong>
                  </p>
                  <p className="text-gray-400 text-sm">Get fully equipped for the learning experience</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Bootcamp & Graduation</h3>
                  <p className="text-gray-300 mb-2">
                    <strong>October 6 – October 10</strong>
                  </p>
                  <p className="text-gray-400 text-sm">5-day immersive bootcamp and alumni network induction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section id="benefits" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              What Participants Will Gain
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Every aspect designed to set you up for real-world success
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Mentorship from Industry Experts",
                desc: "Direct access to seasoned professionals who will guide your journey",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Internship Opportunities & Career Exposure",
                desc: "Real-world experience and career advancement opportunities",
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Powerful Peer & Professional Network",
                desc: "Connect with peers, professionals, and like-minded innovators",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "High-Value Starter Kits & Learning Resources",
                desc: "Premium tools and resources to jumpstart your career",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certificate of Completion",
                desc: "Official recognition of your achievement and new skills",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Alumni Network Access",
                desc: "Lifelong connections with the Future-Ready Youth community",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="register" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-3 lg:p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Think You Are a Good Fit?
              </span>
            </h2>
            <p className="lg:text-xl text-gray-300 mb-8">
              Join the ranks of Digitally Empowered Youths shaping the Future of Work and Innovation in Oyo State and
              Nigeria. Your journey toward professional transformation and entrepreneurial success begins here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => window.open("https://forms.gle/VK8ZhMgpvFKbfp87A", "_blank")}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Zap className="hidden lg:block lg:w-6 lg:h-6" />
                <span>START YOUR APPLICATION NOW                 
</span>
              </button>
            </div>

            <div className="text-center space-y-4">
              <p className="text-yellow-400 font-semibold">
                ⚡ The application window closes soon. Apply early to secure your spot in this transformative journey!
              </p>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white">Need Help or Have Questions?</h3>
                <p className="text-gray-300 mb-4">We are here to support you throughout the application process.</p>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-semibold mb-2">Email:</p>
                    <p>
                      <a href="mailto:pm@jbcibadan.org" className="text-purple-400 hover:text-purple-300">
                        pm@jbcibadan.org
                      </a>
                    </p>
                    <p>
                      <a href="mailto:jbc.summit@jbcibadan.org" className="text-purple-400 hover:text-purple-300">
                        jbc.summit@jbcibadan.org
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phone (WhatsApp Only):</p>
                    <p>
                      <a href="https://wa.me/2347063428640" className="text-purple-400 hover:text-purple-300">
                        +234 (0)706 342 8640
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="mb-16 mt-16 mx-auto max-w-5xl">
            <div className=" bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30 flex items-center justify-center">
              <div className="text-center">
              <img src="/images/g1.jpg" alt="Partner Placeholder" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partnerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 mt-1">{benefit.icon}</div>
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
                onClick={() => (window.location.href = "mailto:jbc.summit@jbcibadan.org?subject=Sponsorship Interest")}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sponsorship Interest
                <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => (window.location.href = "mailto:jbc.summit@jbcibadan.org?subject=Exhibition Interest")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Exhibition Interest
                <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => (window.location.href = "mailto:jbc.summit@jbcibadan.org?subject=Partnership Interest")}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Partnership Interest
                <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New: Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              What Our Alumni Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Hear from past participants who transformed their careers through the Bootcamp
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                    {/* Placeholder for testimonial image */}
                    <Star className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Got questions? We’ve got answers to help you get started
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-6 h-6 text-purple-400 mt-1" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Footer Section */}
      <footer className="relative z-10 px-6 py-12 bg-gradient-to-br from-slate-900 to-purple-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About JBC */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">About JBC</h3>
              <p className="text-gray-300 mb-4">
                The Jericho Businessmen Club (JBC) is dedicated to fostering economic growth and digital innovation in Oyo
                State and beyond. Through initiatives like the Future-Ready Youth Digital Bootcamp, we empower the next
                generation to thrive in a digital world.
              </p>
              <a
                href="https://jbcibadan.org"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More About JBC
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#objectives" className="hover:text-purple-400 transition-colors">
                    Our Objectives
                  </a>
                </li>
                <li>
                  <a href="#journey" className="hover:text-purple-400 transition-colors">
                    The Bootcamp Journey
                  </a>
                </li>
                <li>
                  <a href="#eligibility" className="hover:text-purple-400 transition-colors">
                    Eligibility & Timeline
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-purple-400 transition-colors">
                    What You’ll Gain
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-purple-400 transition-colors">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#register" className="hover:text-purple-400 transition-colors">
                    Apply Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong>Email:</strong>
                </p>
                <p>
                  <a href="mailto:pm@jbcibadan.org" className="text-purple-400 hover:text-purple-300">
                    pm@jbcibadan.org
                  </a>
                </p>
                <p>
                  <a href="mailto:jbc.summit@jbcibadan.org" className="text-purple-400 hover:text-purple-300">
                    jbc.summit@jbcibadan.org
                  </a>
                </p>
                <p className="mt-4">
                  <strong>Phone (WhatsApp Only):</strong>
                </p>
                <p>
                  <a href="https://wa.me/2347063428640" className="text-purple-400 hover:text-purple-300">
                    +234 (0)706 342 8640
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Jericho Businessmen Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JBCBootcampLanding;