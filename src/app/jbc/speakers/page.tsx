"use client";
import { useState } from "react";
import Image from "next/image";
import fav from "../../../../public/assets/fav.png";
import caa from "../../../../public/speakers/caa.png";
import sm from "../../../../public/speakers/sm.png";
import edf from "../../../../public/speakers/edf.png";
import sp4 from "../../../../public/speakers/sp40.png";
import sp5 from "../../../../public/speakers/sige0.png";
import sp6 from "../../../../public/speakers/sao0.png";
import sp7 from "../../../../public/speakers/seu0.png";
import sp8 from "../../../../public/speakers/s70.png";
import sp9 from "../../../../public/speakers/s080.png";
import spx from "../../../../public/speakers/spx0.png";
import spx1 from "../../../../public/speakers/spx10.png";
import sptp from "../../../../public/speakers/sptp0.png";
import fe from "../../../../public/speakers/fe.png";
import wj from "../../../../public/speakers/wj.png";
import ta from "../../../../public/speakers/ta.png";
import lp from "../../../../public/speakers/lp.png";
import mb from "../../../../public/speakers/mb.png";
import ya from "../../../../public/speakers/ya.png";
import spa from "../../../../public/speakers/spa.png";
import spo from "../../../../public/speakers/spo.png";

import SpeakerModal from "@/app/components/SpeakerModal";

// Define the shape of a speaker or panelist
interface Person {
  name: string;
  qualification: string;
  gender: "male" | "female";
  dp?: any; // Optional, as it falls back to fav
  role?: string; // Optional for speakers
  role2?: string; // Optional for speakers (e.g., Keynote)
  details?: string; // Optional, as it may not always be present
}

// Define the speakers and panelists arrays with type
const speakers: Person[] = [
  {
    name: "HE Engr. Seyi Makinde",
    qualification: "Executive Governor, Oyo State",
    gender: "male",
    dp: sm,
    role2: "Keynote",
    role: "Special Guest of Honor",
    details:
      "His Excellency, Seyi Makinde, is a Nigerian engineer, businessman and politician who has served as the governor of Oyo State since 2019. His Roadmap for Accelerated Development in Oyo State rests on four pillars: Education, Healthcare, Security and the use of Agribusiness to drive the Economy. He is determined to run an inclusive government, and maintain an effective feedback system, so he remains apprised of all governance challenges facing the people of Oyo State. As a philanthropist, he touched the lives of thousands in Oyo State through scholarships and other community development projects. His quest to touch even more lives and a commitment to helping Oyo State’s private sector create more job opportunities dictated his sojourn into politics. Gov. Seyi remains committed to using his office as Governor of Oyo State, to bring about development that will outlast his tenure and be used as a benchmark for good governance in Oyo State and Nigeria.",
  },
  {
    name: "Chief Adebayo Adelabu, OFR",
    qualification: "Hon. Minister for Power, Federal Republic of Nigeria",
    gender: "male",
    dp: caa,
    role: "Special Guest of Honor",
    details:
      "Chief Adebayo Adelabu is a former deputy governor, operations of the Central Bank of Nigeria and currently serving as the federal minister of power of Nigeria. Adelabu is also a businessman and has investments spanning the hospitality, entertainment, agriculture and real estate industries. He is the Group Chairman of Bayse One Group of Hotels, the Best Western Plus Hotels, Ibadan and Bayse One Farm.",
  },
  {
    name: "Engr. Adeoye Fadeyibi",
    qualification: "Expert Consultant Adviser, Ibadan Electricity Distribution Company",
    gender: "male",
    dp: edf,
    role: "Keynote Speaker",
    details:
      "Adeoye Fadeyibi has two decades of professional experience in the Power industry. He started his career at General Electric (GE) where he held different positions between 2000 to 2013. He served as a Gas Turbines Technical Advisor and rose to the position of a Sales Director for GE Energy covering the Middle East and African Regions. In 2013, he was appointed Managing Director/ Chief Executive Officer of Transcorp Power Limited (TPL), Ughelli, Delta State, a 1,000MW generation Company and one of the six-generation assets of the erstwhile Power Holding Company of Nigeria (PHCN). Under his direction and a testament to his assiduous work ethics, TPL grew from 160MW of available capacity at handover (1st November 2013) to 634MW (by December 2015). After making his mark in the Generation section, Engr. Adeoye moved downstream along the Electricity Power Sector’s value chain into the Electricity Distribution sub-sector where he assumed office as the MD/CEO of Eko Electricity Distribution Company (EKEDC) on 1st January 2018. As at March 2022, he was called on a national assignment to steer the turnaround of Abuja Electricity Distribution Company (AEDC).",
  },
];

const panelists: Person[] = [
  {
    name: "Abimbola Olufore Wycliffe",
    qualification: "Head, UNIDO ITPO Nigeria",
    gender: "female",
    dp: sp6,
    details:
      "Abimbola Olufore Wycliffe is a dynamic professional with a track record of pioneering gender lens investing across Africa. With a diverse background spanning the private sector to public service, she currently serves as the head of the ITPO in Nigeria at UNIDO. Her focus lies in enhancing investment, driving technology adoption, and promoting financial inclusion, embodying a unique blend of expertise and a passion for transformative change.",
  },
  {
    name: "Seye Bassir",
    qualification: "Investment Manager, All On",
    gender: "male",
    dp: sp9,
    details:
      "Seye Bassir, based in Lagos, Nigeria, is currently an Investment Director at Ifu. He is a seasoned finance professional with extensive experience in investment banking, project and infrastructure finance. Mr Bassir has provided project finance modelling and advisory services to various companies and consortia; through which he has established a high-level working relationship with various American and European institutional investment funds. Seye worked as a developer in thermal and renewable energy, as well as an advisor to infrastructure project sponsors. Seye has worked in various renewable energy, ICT, power, infrastructure, and agribusiness initiatives in a career spanning the last 15 years. Mr Bassir holds an Executive Certificate in Infrastructure in a Market Economy from Harvard University Kennedy School of Government, an MBA degree from the University of Kansas, USA, and a Bachelor’s degree in Economics from the University of Ibadan, Nigeria.",
  },
  {
    name: "Dr Lanre Phillips",
    qualification: "Channel Manager, Africa | Classera",
    gender: "male",
    dp: lp,
    details:
      "Dr. Lanre Phillips is a seasoned professional whose experience has spanned over 25 years in the FMCG, Banking and Telecommunications industry. In the social enterprise space, he has worked with several business hubs, incubators and accelerators in Nigeria and other parts of Africa. He has an unusual passion for the growth of small business through the development of human capacity and implementation of sound business strategies which translate into operational excellence. He is in the faculty of several training organizations and has trained extensively on Business Strategy, Storytelling, Organizational Behavior, Business Branding, Customer Service, Leadership, Sales Techniques and Entrepreneurship amongst others. A proficient member of the Global Entrepreneurship Network, Nigeria team, he has worked in different capacities on projects such as You WIN, World Bank’s Women X Programme and the Road to Growth by the Cherie Blaire Foundation. He is a member of the board of several organizations including the Integrated Institute of Professional Management (IIPM).",
  },
  {
    name: "Ed Ubong",
    qualification: "Coordinating Director, Decade of Gas",
    gender: "female",
    dp: sp7,
    details:
      "Ed Ubong Managing Director, Shell Nigeria Gas Ed Ubong is the Managing Director of Shell Nigeria Gas Limited (SNG) and is responsible for leading the company and safely delivering its domestic gas growth aspirations. He is passionate about unlocking domestic gas to energy value chain. He joined Shell in 2001 as a Systems Engineer and has worked across various functions in the organisation including Strategy, Deal delivery and Asset Commercial. He holds a Bachelor’s Degree in Electrical & Electronics Engineering from the Federal University of Technology Owerri; Master’s Degree in Engineering from the University of Southampton, UK and an MBA from INSEAD (France, US, Singapore). Ed is a member of the leadership council of the Nigerian Gas Association (NGA), the umbrella association for gas advocacy and development in Nigeria. He is also a member of other professional associations including the Society of Petroleum Engineers.",
  },
  {
    name: "Felix Ekundayo",
    qualification: "CEO | Asiko Energy & Gas Terminalling",
    gender: "female",
    dp: fe,
    details:
      "A sound Chemical Engineer with over 30 solid years of perceptible experience in the Oil and Gas Industry, Mr. Ekundayo has meticulously piloted the affairs of Gas Terminalling Limited, turning it into a foremost LPG supply, logistics and distribution company. Mr. Felix Ekundayo, a graduate of University College, London, also doubles as the Managing Director of Asiko Energy, a forward-thinking company currently constructing the first dual fuel Terminal in the country – the dual Liquefied Gas (Propane/LPG) Storage Terminal in Ijora, Lagos.",
  },
  {
    name: "Bayo Ige",
    qualification: "MD/CEO International Energy Services Limited",
    gender: "male",
    dp: sp5,
    details:
      "Bayo is the CEO of International Energy Services Limited (IESL) where he is responsible for the day-to-day operation and providing leadership for the strategic direction of the company. He has a successful track record of building enduring business relationships, delivering complex projects, and providing top management leadership. Bayo possesses significant experience in engineering design, procurement, construction and project management consultancy in the oil and gas industry with over 25 years’ experience. Prior to his appointment as the CEO of IESL, Bayo was the Managing Director of IESL-DORISL Ltd., a JV between DORIS Engineering SA of Paris and IESL. Before then, he was a GM at IESL, a Construction Manager and Project Manager respectively at NALCO, a U.S. based Chemical Company and at Enerplus, an oil Exploration and Production Company based in Canada.",
  },
  {
    name: "Wola Joseph-Condotti",
    qualification: "Group MD/CEO | West Power & Gas Limited",
    gender: "male",
    dp: wj,
    details:
      "Wola Joseph Condotti is the Group Managing Director and Chief Executive Officer of West Power & Gas Limited, the parent company of Eko Electricity Distribution PLC (EKEDP), and eight other subsidiaries with diverse interests across the energy sector. She is a recognized thought leader in the energy sector, with a strong focus on renewable energy, sustainability, and carbon markets. Prior to her current role, Wola served as the pioneer Chief, Legal & Company Secretariat at EKEDP, and held various key positions including Head of Regulatory Compliance and Chief Human Resources and Administration Officer. Wola holds a law degree from the University of Ibadan, an LLM from Harvard Law School, and an MBA from INSEAD Business School. Her achievements have earned her numerous awards, including being listed among the top 100 General Counsels by the Legal 500 GC Power list: Nigeria, 2024.",
  },
  {
    name: "Oluwatobi Phillips",
    qualification: "Business Development & Commercial Lead, Daystar Power Group.",
    gender: "male",
    dp: sptp,
    details:
      "Oluwatobi is results-driven strategist with a talent for turning challenges into opportunities. She is passionate about revolutionizing businesses through strategic planning and operational excellence. She is currently the Business Development and Commercial Lead at Daystar Power Group and has experience in Green Technology, Business Strategy and Operations.",
  },
  {
    name: "Tosin Adewuyi",
    qualification: "Executive Director, Corporate Banking | First Bank of Nigeria Ltd",
    gender: "male",
    dp: ta,
    details:
      "Oluwatosin Adewuyi is the Executive Director, Corporate Banking - FirstBank of Nigeria PLC. Prior to his appointment, he was the Group Executive, Corporate Banking, a position he held since 2019. In addition, he was the Executive Director, Business Development, FBNBank UK where he led and managed origination, Client relationship management and the overall portfolio. He brings to the Executive Management of FirstBank over 20 years’ extensive banking experience of the UK and Sub-Saharan Africa, with cross-functional exposure covering Corporate and Investment Banking, Treasury and Investor Services, Trade Finance and Audit. Outside of his core banking career, Tosin was a member of the J.P. Morgan EMEA Diversity Committee and one of the Senior Members of the Black Organization for Leadership Development. In addition, Tosin was judged one of the Top 100 Influential Black People in the UK, 2012 Power List in the Business Category. Tosin is also an Honorary Senior Member of the Chartered Institute of Bankers of Nigeria.",
  },
  {
    name: "Lolu Akingbe",
    qualification: "Group Chief Operating Officer",
    gender: "male",
    dp: spo,
    details:
      "Lolu is a resourceful individual with broad experience of over 25 years in Infrastructure development (Information Technology focus), Strategy Planning and Project Management. He has a strong base and is known for managing diverse teams and resources to drive successful completion of projects and initiatives. Backed by a strong proven record of developing efficient processes, governance and control protocols; he is an excellent solution provider and management of project stakeholders. He is energetic, trusted, and prides himself on delivering excellence across Fenchurch Group. Lolu has a wealth of experience that spans multiple business units and functional areas working in highly regulated environments in both the public and private sector in Nigeria and in the UK where he previously was based before moving to Nigeria. Lolu holds a BSc in Mathematics from Lagos State University, Lagos Nigeria, and MSc computing and Information Systems from University of Greenwich, London, England. Lolu is a football fan, a chess player, and serves on several private committees that support education for the less privileged.",
  },
  {
    name: "ADENIJI A. ONI",
    qualification: "PRINCIPAL NIJI ONI & CO",
    gender: "male",
    dp: spa,
    details:
      "Lolu is a resourceful individual with broad experience of over 25 years in Infrastructure development (Information Technology focus), Strategy Planning and Project Management. He has a strong base and is known for managing diverse teams and resources to drive successful completion of projects and initiatives. Backed by a strong proven record of developing efficient processes, governance and control protocols; he is an excellent solution provider and management of project stakeholders. He is energetic, trusted, and prides himself on delivering excellence across Fenchurch Group. Lolu has a wealth of experience that spans multiple business units and functional areas working in highly regulated environments in both the public and private sector in Nigeria and in the UK where he previously was based before moving to Nigeria. Lolu holds a BSc in Mathematics from Lagos State University, Lagos Nigeria, and MSc computing and Information Systems from University of Greenwich, London, England. Lolu is a football fan, a chess player, and serves on several private committees that support education for the less privileged.",
  },
  {
    name: "Erabor Okogun",
    qualification: "Head, Energy Infrastructure, Infrastructure & Major Projects Advisory, KPMG Nigeria",
    gender: "male",
    dp: spx1,
    details:
      "Erabor Okogun is currently the Managing Director at Nemoante a Project Development and Advisory firm. In the past 17 years Erabor Okogun has closely worked with Executive Management and at Board levels delivering on over 50 projects and investments. His contacts, network, insight and experience are very diverse and highly valued. Erabor Okogun leverages a multidisciplinary background and a global perspective in the adoption of competitive strategies and the application of financing and technology to create and sustain new revenue models. From Nigerian American Merchant Bank, Erabor worked as a Credit Analyst at an Energy Desk and was involved in providing debts and structuring bank syndications in the upstream sector to meet funding obligations for IOC Joint Venture by Shell and Chevron for their Field Development Plans.",
  },
  {
    name: "Muhtar Bakare",
    qualification: "Chairman, The Alternative Bank",
    gender: "male",
    dp: mb,
  },
  {
    name: "Yewande Adewusi",
    qualification: "Chief Operating Officer, Alitheia Capital Limited",
    gender: "male",
    dp: ya,
  },
];

const MeetOurSpeakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = (speaker: Person) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <section className="pt-2 bg-[#e5e7eb] w-full mt-12 ">
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">Meet Our Speakers</h2>

        {/* Speakers */}
        <div className="flex justify-center items-center xl:mx-20 2xl:mx-52 gap-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="relative lg:w-1/3 bg-white transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-blue-800 p-4 rounded-lg shadow-xl flex flex-col items-center justify-start"
                onClick={() => handleClick(speaker)}
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center mb-4">
                  <Image
                    src={speaker.dp ?? fav}
                    alt={speaker.name}
                    className="object-cover h-full w-full"
                    width={128} // w-32 = 128px
                    height={128} // h-32 = 128px
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-800">{speaker.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{speaker.qualification}</p>
                <p className="text-md font-bold text-black">{speaker.role ?? ""}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 mb-8 mt-12">Meet Our Panelists</h2>

        {/* Panelists */}
        <div className="flex flex-wrap gap-4 lg:gap-4 justify-center p-3">
          {panelists.map((panelist, index) => (
            <div
              key={index}
              className="relative group flex-grow 2xl:max-w-[22%] max-w-[98%] md:max-w-[30%] flex-shrink-0 bg-white transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-blue-800 p-4 rounded-lg shadow-xl flex flex-col items-center justify-start"
              onClick={() => handleClick(panelist)}
              style={{ minWidth: "22%" }} // Ensure images are side by side with a fixed width
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center mb-4">
                <Image
                  src={panelist.dp ?? fav}
                  alt={panelist.name}
                  className="object-cover h-full w-full"
                  width={128} // w-32 = 128px
                  height={128} // h-32 = 128px
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800">{panelist.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{panelist.qualification}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <SpeakerModal isOpen={isModalOpen} onClose={closeModal} speaker={selectedSpeaker} />
    </section>
  );
};

export default MeetOurSpeakers;