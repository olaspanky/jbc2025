import { Users, ArrowRight } from 'lucide-react';

export default function CleanCTAButton() {
  return (
    <div className="flex justify-center items-center p-12">
      <div className="relative">
        <a
          href="https://forms.gle/VK8ZhMgpvFKbfp87A"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden"
        >
        {/* Subtle background animation */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon */}
        <Users className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        
        {/* Text */}
        <span className="relative font-bold tracking-wide">Register Now</span>
        
        {/* Arrow that slides in */}
        <ArrowRight className="w-5 h-5 transform translate-x-0 opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </a>
        
        {/* Deadline badge positioned outside the button */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          Sep 12
        </div>
      </div>
    </div>
  );
}