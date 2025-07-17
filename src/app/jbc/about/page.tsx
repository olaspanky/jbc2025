import React from 'react';
import { Calendar, Users, Target, Award, ChevronRight, MapPin, Clock, Building } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-600/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <Building className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Est. 2002</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Jericho Businessmen Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering Ibadan professionals, technocrats, and entrepreneurs for mutual economic development and positive socio-cultural transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Join Our Network
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Our Legacy</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story At a Glance</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Established through the pioneering and visionary efforts of <strong>Chief Adeyemi Soladoye (Ekerin Baameto of Ibadan Land)</strong>, our Founding President, the Jericho Businessmen Club was formally launched on <strong>January 2nd, 2002</strong>.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our membership comprises accomplished and upwardly mobile Ibadan Indigenes - professionals, technocrats and entrepreneurs gainfully engaged in various sectors of the Nigeria economy as well as in the diaspora. From 2002 to date, our membership has grown significantly with many Ibadan sons from across the various indigenous areas joining our fold.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Discover Our Impact</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">23+</div>
                    <div className="text-blue-100">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-blue-100">Annual Summits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Non-Partisan</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Summit Legacy Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-600 text-white rounded-full px-4 py-2 mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-medium">Annual Summit</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">JBC Socio-Economic Summit</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our flagship event brings together thought leaders, entrepreneurs, policymakers, and changemakers to address pressing socio-economic challenges facing Oyo State through constructive dialogue and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 2023 Summit */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">2023</div>
                  <div className="text-green-100">Inaugural Edition</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Agricultural Transformation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  "Driving Agricultural Transformation in Oyo State Through Value Chain Integration for Sustainable Development"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>November 24, 2023</span>
                </div>
              </div>
            </div>

            {/* 2024 Summit */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">2024</div>
                  <div className="text-blue-100">Second Edition</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Industrialization Focus</h3>
                <p className="text-gray-600 text-sm mb-4">
                  "Powering Oyo State for Industrialization and Economic Development"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>November 15, 2024</span>
                </div>
              </div>
            </div>

            {/* 2025 Summit */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ring-2 ring-blue-500">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">2025</div>
                  <div className="text-purple-100">Third Edition</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Digital Transformation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Technology, talent, and transformation positioning Oyo State for long-term prosperity
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Coming Soon</span>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To network like-minded professionals, technocrats and entrepreneurs of Ibadan extraction for mutual economic development and impacting public policy discourse for the benefit of our people.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Network</h3>
              <p className="text-gray-600 leading-relaxed">
                A vibrant community of accomplished professionals engaged in various sectors of the Nigerian economy and diaspora, united by our Ibadan heritage and shared vision for progress.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Through our non-partisan platform, we generate progressive ideas and recommendations for socio-economic and cultural transformation of Oyo State and Nigeria at large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Network Today</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be part of a community that's shaping the future of Oyo State through innovation, collaboration, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Become a Member
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">JBC</h3>
              <p className="text-gray-400">
                Empowering Ibadan professionals for mutual economic development and positive transformation since 2002.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Summit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Ibadan, Oyo State</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>jbc.summit@jbcibadan.org</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jericho Businessmen Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;