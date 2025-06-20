import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../Video/homevideo1.mp4';
import Footer from '../Footer';
import {
  School,
  Syringe,
  HelpingHand,
  HeartHandshake,
  FileQuestion,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const actions = [
  { icon: <HeartHandshake size={40} />, title: 'Blood Donor Basic', path: '/Donor_basic' },
  { icon: <Syringe size={40} />, title: 'Blood Types', path: '/types' },
  { icon: <HelpingHand size={40} />, title: 'Blood Reward', path: '/Reward' },
  { icon: <School size={40} />, title: 'High School Donors', path: '/HighSchool' }
];

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Chicago, IL",
    rating: 5,
    text: "Donating blood has been one of the most rewarding experiences of my life. The staff is incredibly professional and caring. Knowing that my donation could save up to 3 lives makes it all worthwhile.",
    date: "2 months ago",
    donationCount: "15+ donations"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "I started donating in college and haven't stopped since. The process is quick, safe, and the health benefits are amazing. Plus, the free health screenings have been really valuable.",
    date: "1 month ago",
    donationCount: "25+ donations"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "After my father needed multiple blood transfusions during his surgery, I realized how crucial blood donors are. Now I donate regularly to give back to the community that helped save his life.",
    date: "3 weeks ago",
    donationCount: "8+ donations"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Denver, CO",
    rating: 5,
    text: "The entire experience exceeded my expectations. From scheduling to aftercare, everything was handled professionally. I feel proud to be part of something that makes such a big difference.",
    date: "1 week ago",
    donationCount: "12+ donations"
  },
  {
    id: 5,
    name: "Lisa Park",
    location: "Miami, FL",
    rating: 5,
    text: "I was nervous about my first donation, but the staff made me feel so comfortable. Now I'm a regular donor and even organized a blood drive at my workplace. It's incredibly fulfilling!",
    date: "2 weeks ago",
    donationCount: "20+ donations"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className="text-yellow-500 text-lg">★</span>
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-red-600 h-[90vh] pt-10 relative overflow-hidden rounded-2xl">
        <div className="w-full h-full flex flex-col lg:flex-row min-h-screen">
          <div className="lg:w-1/2 flex items-center">
            <div className="p-8 sm:p-12 text-white max-w-xl mx-auto text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-500 drop-shadow-md">
                DONATING BLOOD
              </h1>
              <p className="text-lg sm:text-base mb-8 text-white/90 font-medium leading-relaxed tracking-wide">
                <span className="text-blue-100 font-semibold">Blood</span> is made up of four main components:
                <span className="text-cyan-100"> red blood cells</span>,
                <span className="text-sky-100"> platelets</span>,
                <span className="text-emerald-100"> plasma</span>, and
                <span className="text-indigo-100"> white blood cells</span>. Each whole blood donation has the potential to
                <span className="text-green-200 font-semibold"> save up to three lives</span>.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button onClick={() => navigate('/Donor_Eligibility')} className="bg-white border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-full font-semibold text-base transition-all hover:bg-blue-100 hover:shadow-md transform hover:-translate-y-1">
                  Donor Eligibility
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[86vh] overflow-hidden">
            <video className="w-full h-full object-cover object-center" src={video} autoPlay loop muted playsInline />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((action, index) => (
              <div key={index} onClick={() => navigate(action.path)} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer flex flex-col items-center min-h-[180px] justify-center">
                <div className="text-red-600 text-5xl mb-4">{action.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800">{action.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Donate Blood?</h2>
            <p className="text-lg text-gray-600">Every donation makes a difference in someone's life</p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Save Lives</h3>
              <p className="text-gray-600">One donation can save up to 3 lives. Your blood helps patients during surgeries, cancer treatments, and emergencies.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Syringe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Health Benefits</h3>
              <p className="text-gray-600">Regular donation helps maintain healthy iron levels and provides free health screenings.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpingHand className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Impact</h3>
              <p className="text-gray-600">Help ensure adequate blood supply for your local hospitals and emergency services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Carousel */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Donors Say</h2>
            <p className="text-lg text-gray-600">Real stories from people making a difference</p>
          </div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-4xl mx-auto">
            <div className="absolute top-4 left-6">
              <Quote className="text-red-200" size={40} />
            </div>
            <div className="text-center pt-4">
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{reviews[currentReview].text}"
              </p>
              <div className="flex flex-col items-center">
                <h4 className="font-semibold text-gray-800 text-lg">{reviews[currentReview].name}</h4>
                <p className="text-gray-500 text-sm mb-2">{reviews[currentReview].location}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">{reviews[currentReview].donationCount}</span>
                  <span>{reviews[currentReview].date}</span>
                </div>
              </div>
            </div>
            <button onClick={prevReview} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="text-gray-600" size={24} />
            </button>
            <button onClick={nextReview} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors">
              <ChevronRight className="text-gray-600" size={24} />
            </button>
          </div>
          <div className="flex justify-center gap-2 mb-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentReview ? 'bg-red-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Blood Donation Facts</h2>
            <p className="text-lg text-gray-600">Important information about blood donation</p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">38%</div>
              <p className="text-gray-700 font-medium">of population eligible to donate</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">6.8M</div>
              <p className="text-gray-700 font-medium">people donate blood annually</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">4.5M</div>
              <p className="text-gray-700 font-medium">lives saved each year</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">56 days</div>
              <p className="text-gray-700 font-medium">between whole blood donations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of heroes who donate blood regularly and help save lives in your community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate('/Donor_Eligibility')} className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-red-50 hover:shadow-lg transform hover:-translate-y-1">
              Check Eligibility
            </button>
            <button onClick={() => navigate('/Donor_basic')} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white hover:text-red-600 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
