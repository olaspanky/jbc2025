import React from 'react'
import {
  Zap,
  Users,
  Target,
  HandHeart,
  TrendingUp,
  Award,
  Quote,
  ArrowRight,
} from "lucide-react";

const Sub = () => {
  return (
    <div className='bg-[#F2F3F4] bg-cover bg-center py-16 px-4'
                //   style={{ backgroundImage: `url(/images/aibg.jpg)` }}
>
         {/* Sub-Thematic Areas */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Sub-Thematic Areas
                    </h3>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-4">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Technological Disruption and Workforce Evolution
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Exploring how emerging technologies like AI, robotics, and automation are transforming the nature of work. Focus areas will include workforce upskilling, digital integration in both formal and informal sectors, and building a resilient, future-ready labor market.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-4">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Digital Economy and Entrepreneurship
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Examining how Oyo State can leverage digital infrastructure to unlock entrepreneurship, drive innovation, and expand market access. Areas of focus include fintech, e-commerce, gig work, and removing barriers for youth and underserved entrepreneurs.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-4">
                          <Award className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Education and Skills for the Future
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Addressing the need to reform education to match future workforce demands. Focus will be on critical thinking, creativity, digital literacy, curriculum reform, and strengthening vocational and lifelong learning systems.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-4">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Policy and Governance in the Digital Age
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Assessing how the government can adopt digital tools for smarter, more transparent governance. This will cover digital public services, data privacy, cybersecurity, and building institutional capacity for tech-driven policy-making.
                      </p>
                    </div>
                  </div>
                </div>
        
                {/* Future-Ready Youth Digital Boot Camp */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-blue-600 mb-4">
                      The Future-Ready Youth Digital Boot Camp
                    </h3>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
                  </div>
                  <div className='w-full flex flex-col lg:flex-row mx-auto lg:p-9 gap-5'>

                     <div className="lg:w-1/2 ">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      A cornerstone of this year’s summit is the{" "}
                      <span className="font-semibold text-blue-600">
                        Digital Youth Boot Camp
                      </span>{" "}
                      - a comprehensive initiative to support the youth and drive economic development. This 4-day pre-summit engagement offers hands-on training in digital skills, workplace readiness, and entrepreneurial thinking, designed for students, job seekers, and young entrepreneurs.
                    </p>
                    <div className="flex flex-col gap-5">
                      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Practical Training
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Hands-on training in digital tools, freelancing, and innovation to equip participants with actionable skills.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Career & Mentorship
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Career clinics, mentorship sessions, and networking opportunities to guide participants toward success.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Community Building
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          A platform to build community and inspire transformation among youth, fostering collaboration and innovation.
                        </p>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      This initiative ensures the summit’s impact extends beyond conversation, by directly empowering participants to act on what they learn.
                    </p>
                    <div className="text-center">
                      <a
                        href="https://bootcamp.jbcibadan.org" // Replace with actual Boot Camp website URL
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                  </div>
                   <div
              className="lg:w-5/10 h-[80vh] bg-cover bg-center rounded-tl-lg rounded-bl-lg shadow-lg"
              style={{ backgroundImage: `url(/images/ai2.jpg)` }}
              aria-label="Summit Background Image"
            ></div>
                  </div>
                 
                </div>
    </div>
  )
}

export default Sub