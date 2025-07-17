import React from 'react';
import { Zap, Users, Target, HandHeart, TrendingUp, Award, Quote, ArrowRight } from 'lucide-react';

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  isLast 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  index: number;
  isLast: boolean;
}) => {
  const colors = [
    'text-blue-600',
    'text-red-600', 
    'text-gray-600',
    'text-blue-700',
    'text-red-700',
  ];
  
  const color = colors[index % colors.length];
  
  return (
    <div className="relative flex items-start space-x-6 pb-8">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300"></div>
      )}
      
      {/* Icon Circle */}
      <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2`}>
        <Icon className={`w-6 h-6 text-blue-600`} />
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const StatCard = ({ 
  number, 
  label, 
  color 
}: { 
  number: string; 
  label: string; 
  color: string;
}) => (
  <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300">
    <div className={`text-4xl font-bold ${color} mb-2`}>
      {number}
    </div>
    <div className="text-gray-600 font-medium">
      {label}
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Implication of Technological Disruptions",
      description: "Discover cutting-edge technologies and disruptive business models that are reshaping industries across Africa and beyond."
    },
    {
      icon: Users,
      title: "Encourage Youth Readiness",
      description: "Connect with C-suite executives, entrepreneurs, and thought leaders who are driving Nigeria's economic transformation."
    },
    {
      icon: Target,
      title: "Actionable Strategy for Future Readiness",
      description: "Learn from industry titans and develop the strategic leadership skills needed to navigate tomorrow's challenges."
    },
    {
      icon: HandHeart,
      title: "Strengthen Stakeholders' Partnership",
      description: "Build meaningful connections and partnerships that drive sustainable economic growth and innovation across sectors."
    },
    {
      icon: TrendingUp,
      title: "Mobilize Investment in Human Capital Development",
      description: "Explore investment opportunities and strategies that prioritize human capital development for sustainable growth."
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
    >
      <div className=" max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-blue-600 font-bold mb-6">
            <span className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-bold text-blue-900 mb-4">About the Summit</span>
          </div>
          
          <div className=" mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In an era shaped by artificial intelligence digital disruption, automation, and shifting global markets, 
              the future of work and economic growth is no longer abstract it is happening now. 
              For Oyo State - with its rapidly growing youth population, educational institutions, and emerging innovation ecosystem—
              <span className="font-semibold text-blue-600"> the moment to act is now</span>.
            </p>
            
            <div className="">
              <Quote className="w-3 h-3 text-gray-400 mb-4" />
              <p className="text-gray-600 italic leading-relaxed">
                "The workforce of the future is being shaped today. We must ensure our youth are ready to build it. 
                Because preparing young minds today is the surest investment in tomorrow's progress."
              </p>
            </div>
          </div>
        </div>

        {/* Summit Objectives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Summit Objectives
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                isLast={index === features.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Summit Impact
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Join industry leaders, innovators, and change-makers shaping the future of Oyo State's economy
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <StatCard 
              number="500+" 
              label="Elite Attendees" 
              color="text-gray-600"
            />
            <StatCard 
              number="50+" 
              label="Industry Leaders" 
              color="text-gray-600"
            />
            <StatCard 
              number="25+" 
              label="Expert Sessions" 
              color="text-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;