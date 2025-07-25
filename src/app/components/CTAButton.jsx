import { Users, ArrowRight, Calendar, ExternalLink, Download, Play } from 'lucide-react';

// Reusable CTA Button Component
function CTAButton({ 
  href, 
  text = "Click Here", 
  icon = "users", 
  badge = null, 
  variant = "primary",
  size = "md",
  external = true,
  className = ""
}) {
  // Icon mapping
  const iconMap = {
    users: Users,
    calendar: Calendar,
    external: ExternalLink,
    download: Download,
    play: Play,
    arrow: ArrowRight
  };
  
  const IconComponent = iconMap[icon] || Users;
  
  // Variant styles
  const variants = {
    primary: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25",
    success: "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-green-500/25",
    warning: "from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover:shadow-orange-500/25",
    dark: "from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 hover:shadow-gray-500/25"
  };
  
  // Size styles
  const sizes = {
    sm: "px-6 py-3 text-sm gap-2",
    md: "px-8 py-4 text-lg gap-3",
    lg: "px-10 py-5 text-xl gap-4"
  };

  return (
    <div className="relative">
      <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
        className={`group inline-flex items-center justify-center bg-gradient-to-r ${variants[variant]} ${sizes[size]} rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden ${className}`}
      >
        {/* Subtle background animation */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon */}
        <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        
        {/* Text */}
        <span className="relative font-bold tracking-wide">{text}</span>
        
        {/* Arrow that slides in */}
        <ArrowRight className="w-5 h-5 transform translate-x-0 opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </a>
      
      {/* Optional badge */}
      {badge && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          {badge}
        </div>
      )}
    </div>
  );
}

// Demo component showing different usage examples
export default function CTAButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-8 p-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Reusable CTA Button Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Original Registration Button */}
        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700">Registration Button</h3>
          <CTAButton
            href="https://forms.gle/VK8ZhMgpvFKbfp87A"
            text="Register Now"
            icon="users"
            badge="Sep 12"
            variant="primary"
          />
        </div>

        {/* Download Button */}
        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700">Download Button</h3>
          <CTAButton
            href="/download"
            text="Download PDF"
            icon="download"
            variant="success"
            external={false}
          />
        </div>

        {/* Event Button */}
        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700">Event Button</h3>
          <CTAButton
            href="/events"
            text="Book Event"
            icon="calendar"
            badge="Limited"
            variant="warning"
            size="lg"
            external={false}
          />
        </div>

        {/* Play Button */}
        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700">Media Button</h3>
          <CTAButton
            href="https://youtube.com/watch"
            text="Watch Demo"
            icon="play"
            variant="dark"
            size="sm"
          />
        </div>
        
      </div>

      {/* Usage Example Code */}
      <div className="w-full max-w-4xl mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">How to Use:</h2>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="whitespace-pre">{`// Basic usage
<CTAButton 
  href="https://example.com" 
  text="Click Me" 
/>

// With all options
<CTAButton
  href="https://forms.gle/VK8ZhMgpvFKbfp87A"
  text="Register Now"
  icon="users"           // users, calendar, external, download, play, arrow
  badge="Sep 12"         // optional badge text
  variant="primary"      // primary, success, warning, dark
  size="md"             // sm, md, lg
  external={true}        // true for external links
  className="extra-css"  // additional CSS classes
/>`}</div>
        </div>
      </div>
    </div>
  );
}