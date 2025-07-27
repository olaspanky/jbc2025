import React from "react";
import {
  Zap,
  Sparkles, Users, Building, Handshake,
  Target,
  HandHeart,
  TrendingUp,
  Award,
  Quote,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import PremiumButtons from "./PremiumButtons";
import Fbox from "./Fbox";
import Speaker from "./Speaker";

const FeatureItem = ({
  icon: Icon,
  title,
  description,
  index,
  isLast,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}) => {
  const colors = [
    "text-blue-600",
    "text-red-600",
    "text-gray-600",
    "text-blue-700",
    "text-red-700",
  ];

  const color = colors[index % colors.length];

  return (
    <div className="relative flex items-start space-x-6 pb-8">
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300"></div>
      )}
      <div
        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2`}
      >
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const StatCard = ({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) => (
  <div className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300">
    <div className={`lg:text-4xl font-bold ${color} mb-2`}>{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const AboutSection: React.FC = () => {
  const features = [
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto lg:px-4 justify-center items-center flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <div className="inline-flex lg:items-center text-blue-600 font-bold mb-6">
            <span className="text-3xl sm:text-4xl md:text-4xl 2xl:text-6xl font-bold text-blue-900 mb-4">
              A Case for Technology Preparedness
            </span>
          </div>
          <div className="flex flex-col lg:flex-row max-w-7xl  justify-center items-stretch gap-4 mx-auto p-2 lg:px-4">
      <div className="text-left lg:w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center lg:text-center">
            In an era shaped by artificial intelligence, digital disruption,
            automation, and shifting global markets, the future of work and
            economic growth is no longer abstract—it is happening now. For Oyo
            State—with its rapidly growing youth population, educational
            institutions, and emerging innovation ecosystem—
            <span className="font-semibold text-blue-600">
              {" "}
              the moment to act is now
            </span>.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center lg:text-center">
            We are organizing a Socio-Economic Summit themed "Future-ready Oyo
            State: Tech, Talent and Transformation for a Thriving Tomorrow" to
            explore actionable solutions and mobilize resources for a
            prosperous future.
          </p>
          <div>
            <Quote className="w-5 h-5 text-gray-400 mb-4" />
            <p className="text-gray-600 italic leading-relaxed text-xl font-bold">
              "The workforce of the future is being shaped today. We must
              ensure our youth are ready to build it. Because preparing young
              minds today is the surest investment in tomorrow's progress."
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-stretch">
        <img
          src="/images/ai1.png"
          alt="AI Illustration"
          className="rounded-lg shadow-lg object-cover w-full h-full"
          aria-label="AI Illustration"
        />
      </div>
    </div>
        
        </div>


<Speaker/>

        {/* Summit Objectives */}
        <div className="flex ">
           <div className="mb-16 p-2">
         
        <div>
          <Fbox/>
        </div>
        </div>

        </div>
       

       

        {/* Partner With Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Partner With Us
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center lg:text-left">
              Partnering with us means joining a team dedicated to delivering success through innovation, global reach, and trusted collaboration.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Showcase Your Commitment
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Demonstrate your commitment to sustainable development and corporate social responsibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Shape the Future
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Contribute to shaping the policies and strategies that will drive Oyo State’s digital readiness and economic future.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Network with Key Stakeholders
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Engage with entrepreneurs, government officials, industry leaders, financial institutions, and international organizations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Gain Visibility
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Your organization will be prominently featured in all summit communications and promotional materials.
                </p>
              </div>
            </div>
           <PremiumButtons/>
          </div>
        </div>

        {/* Statistics */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Summit Impact
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Join industry leaders, innovators, and change-makers shaping the
            future of Oyo State's economy
          </p>
          <div className="grid grid-cols-3 lg:gap-6 gap-2 max-w-3xl mx-auto">
            <StatCard
              number="1000+"
              label="Elite Attendees"
              color="text-gray-600"
            />
            <StatCard
              number="100+"
              label="Industry Leaders"
              color="text-gray-600"
            />
            <StatCard
              number="10+"
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