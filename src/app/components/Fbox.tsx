import React from 'react';
import { Target, Users, Lightbulb, TrendingUp, Award, LucideIcon, Zap, HandHeart } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SummitObjectivesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const features: Feature[] = [
   {
      icon: Zap,
      title: "Implication of Technological Disruptions",
      description:
        "Discover cutting-edge technologies and disruptive business models that are reshaping industries across Africa and beyond.",
    },
    {
      icon: Users,
      title: "Encourage Youth Readiness",
      description:
        "Connect with C-suite executives, entrepreneurs, and thought leaders who are driving Nigeria's economic transformation.",
    },
    {
      icon: Target,
      title: "Actionable Strategy for Future Readiness",
      description:
        "Learn from industry titans and develop the strategic leadership skills needed to navigate tomorrow's challenges.",
    },
    {
      icon: HandHeart,
      title: "Strengthen Stakeholders' Partnership",
      description:
        "Build meaningful connections and partnerships that drive sustainable economic growth and innovation across sectors.",
    },
    {
      icon: TrendingUp,
      title: "Mobilize Investment in Human Capital Development",
      description:
        "Explore investment opportunities and strategies that prioritize human capital development for sustainable growth.",
    },
];

interface FeatureBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon: Icon, title, description, index }) => {
  const gradients = [
    "from-blue-500 via-purple-500 to-pink-500",
    "from-emerald-500 via-teal-500 to-cyan-500", 
    "from-orange-500 via-red-500 to-rose-500",
    "from-violet-500 via-indigo-500 to-blue-500",
    "from-yellow-500 via-orange-500 to-red-500"
  ];

  const shadowColors = [
    "shadow-blue-500/25",
    "shadow-emerald-500/25",
    "shadow-orange-500/25", 
    "shadow-violet-500/25",
    "shadow-yellow-500/25"
  ];

  const gradient = gradients[index % gradients.length];
  const shadowColor = shadowColors[index % shadowColors.length];

  return (
    <div className="group relative">
      {/* Animated background blur */}
      <div className={``}></div>
      
      {/* Main card */}
      <div className={`relative bg-white rounded-2xl p-5 lg:p-8 shadow-xl ${shadowColor} transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 h-full flex flex-col`}>
        {/* Icon container with gradient */}
        <div className="relative mb-6">
          <div className={`inline-flex gap-3 justify-center items-center`}>
          <div className={`inline-flex p-2 gap-3 justify-center items-center rounded-2xl bg-gradient-to-r ${gradient} shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
<Icon className="w-5 h-5 text-white" />
            </div>  
                       <h3 className="text-md lg:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {title}
          </h3>
          </div>

          {/* Floating dots decoration */}
             </div>

        {/* Content */}
        <div className="space-y-4 flex-grow">
         
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
      </div>
    </div>
  );
};

const SummitObjectives: React.FC<SummitObjectivesProps> = ({ 
  title = "Summit Objectives",
  subtitle = "Discover our comprehensive approach to excellence and innovation",
  features: customFeatures
}) => {
  const displayFeatures = customFeatures || features;

  return (
    <div className="relative py-20 lg:px-4">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-bold bg-clip-text text-transparent bg-blue-900 mb-6">
              {title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-7xl lg:mx-auto">
          {displayFeatures.slice(0, 4).map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
          {displayFeatures.length > 4 && (
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:w-1/2">
                <FeatureBox
                  icon={displayFeatures[4].icon}
                  title={displayFeatures[4].title}
                  description={displayFeatures[4].description}
                  index={4}
                />
              </div>
            </div>
          )}
        </div>

        {/* Decorative elements */}
          </div>

    
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <SummitObjectives />
    </div>
  );
};

export default App;