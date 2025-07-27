import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Import images (assuming these are correctly referenced in your project)
import fav from '../../../public/assets/fav.png'; // Female avatar
import mav from '../../../public/assets/mav.png'; // Male avatar
import caa from '../../../public/speakers/caa.png';
import sm from '../../../public/speakers/sm.png';
import edf from '../../../public/speakers/edf.png';
import sp4 from '../../../public/speakers/sp40.png';
import sp5 from '../../../public/speakers/sige0.png';
import sp6 from '../../../public/speakers/sao0.png';
import sp7 from '../../../public/speakers/seu0.png';
import sp8 from '../../../public/speakers/s70.png';
import sp9 from '../../../public/speakers/s080.png';
import spx from '../../../public/speakers/spx0.png';
import spx1 from '../../../public/speakers/spx10.png';
import sptp from '../../../public/speakers/sptp0.png';
import fe from '../../../public/speakers/fe.png';
import wjc from '../../../public/speakers/wjc.png';
import ta from '../../../public/speakers/ta.png';
import lp from '../../../public/speakers/lp.png';
import mb from '../../../public/speakers/mb.png';
import ya from '../../../public/speakers/ya.png';
import wj from '../../../public/speakers/wj.png';
import spa from '../../../public/speakers/spa.png';
import spo from '../../../public/speakers/spo.png';

// Define TypeScript interfaces
interface Speaker {
  name: string;
  qualification: string;
  gender: 'male' | 'female';
  dp: any;
  role?: string;
  role2?: string;
  details?: string;
}

interface ArrowProps {
  onClick?: () => void;
}

// Custom Arrow Components
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-[-20px] z-10 p-3 text-gray-700 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
    onClick={onClick}
    aria-label="Next slide"
  >
    <IoIosArrowForward size={24} />
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-[-20px] z-10 p-3 text-gray-700 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <IoIosArrowBack size={24} />
  </button>
);

const speakers1: Speaker[] = [
  {
    name: 'HE Engr. Seyi Makinde',
    qualification: 'Executive Governor, Oyo State',
    gender: 'male',
    dp: sm,
    role2: 'Keynote',
    role: 'Special Guest of Honor',
  },
  {
    name: 'Chief Adebayo Adelabu, OFR',
    qualification: 'Hon. Minister for Power, Federal Republic of Nigeria',
    gender: 'male',
    dp: caa,
    role: 'Special Guest of Honor',
  },
  {
    name: 'Engr. Adeoye Fadeyibi',
    qualification: 'Expert Consultant Adviser, Ibadan Electricity Distribution Company',
    gender: 'male',
    dp: edf,
    role: 'Keynote Speaker',
  },
];

const speakers: Speaker[] = [
  {
    name: 'Abimbola Olufore Wycliffe',
    qualification: 'Head, UNIDO ITPO Nigeria',
    gender: 'female',
    dp: sp6,
    details:
      "His Excellency, Seyi Makinde, is a Nigerian engineer, businessman and politician who has served as the governor of Oyo State since 2019. His Roadmap for Accelerated Development in Oyo State rests on four pillars: Education, Healthcare, Security and the use of Agribusiness to drive the Economy. He is determined to run an inclusive government, and maintain an effective feedback system, so he remains apprised of all governance challenges facing the people of Oyo State. As a philanthropist, he touched the lives of thousands in Oyo State through scholarships and other community development projects. His quest to touch even more lives and a commitment to helping Oyo State’s private sector create more job opportunities dictated his sojourn into politics. Gov. Seyi remains committed to using his office as Governor of Oyo State, to bring about development that will outlast his tenure and be used as a benchmark for good governance in Oyo State and Nigeria.",
  },
  { name: 'Seye Bassir', qualification: 'Investment Manager, All On', gender: 'male', dp: sp9, details: '' },
  { name: 'Dr Lanre Phillips', qualification: 'Channel Manager, Africa | Classera', gender: 'male', dp: lp },
  { name: 'Ed Ubong', qualification: 'Coordinating Director, Decade of Gas', gender: 'female', dp: sp7 },
  { name: 'Felix Ekundayo', qualification: 'CEO | Asiko Energy & Gas Terminalling', gender: 'female', dp: fe },
  { name: 'Bayo Ige', qualification: 'MD/CEO International Energy Services Limited', gender: 'male', dp: sp5 },
  { name: 'Wola Joseph-Condotti', qualification: 'Group MD/CEO | West Power & Gas Limited', gender: 'male', dp: wj },
  { name: 'Oluwatobi Phillips', qualification: 'Business Development & Commercial Lead, Daystar Power Group', gender: 'male', dp: sptp },
  { name: 'Tosin Adewuyi', qualification: 'Executive Director, Corporate Banking | First Bank of Nigeria Ltd', gender: 'male', dp: ta },
  { name: 'Lolu Akingbe', qualification: 'Group Chief Operating Officer', gender: 'male', dp: spo },
  { name: 'Adeniji A. Oni', qualification: 'PRINCIPAL NIJI ONI & CO', gender: 'male', dp: spa },
  { name: 'Erabor Okogun', qualification: 'Head, Energy Infrastructure, Infrastructure & Major Projects Advisory, KPMG Nigeria', gender: 'male', dp: spx1 },
  { name: 'Muhtar Bakare', qualification: 'Chairman, The Alternative Bank', gender: 'male', dp: mb },
  { name: 'Yewande Adewusi', qualification: 'Chief Operating Officer, Alitheia Capital Limited', gender: 'male', dp: ya },
];

const MeetOurSpeakers: React.FC = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
   <section className="pt-2 text-black w-full bg-white">
      <div className="text-center my-9">
        <h2 className="text-4xl font-bold text-blue-800">Meet Our Speakers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:mx-20 2xl:mx-52">
          {speakers1.map((speaker, index) => (
            <div key={index} className="lg:px-4 px-2">
              <div className={`relative bg-white h-[400px] transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-blue-800 mt-5 xl:mt-9 p-2 rounded-lg shadow-xl flex flex-col items-center justify-start transition-transform duration-300 ${speaker.role2 === "Keynote" ? "shadow-2xl hover:shadow-md hover:shadow-red-800" : ""}`}>
                <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={speaker.dp ? speaker.dp : fav} 
                    alt="Speaker"
                    className="object-cover h-full"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-xl font-bold h-9 text-blue-800 my-2">{speaker.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 h-9">{speaker.qualification}</p>
                  <p className="text-md font-bold text-black-800 my-2">{speaker.role ? speaker.role : ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r w-full py-2 px-4">
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {speakers.map((speaker, index) => (
              <div key={index} className="lg:px-4 px-2 my-2">
                <div className="relative bg-white h-[400px] transition-transform transform hover:scale-105 hover:shadow-md hover:shadow-blue-800 mt-5 xl:mt-9 p-2 rounded-lg shadow-xl flex flex-col items-center justify-start transition-transform duration-300">
                  <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={speaker.dp ? speaker.dp : fav} 
                      alt="Speaker"
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-xl font-bold text-blue-800 my-2">{speaker.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{speaker.qualification}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MeetOurSpeakers;