import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer'; 
import { GraduationCap, Users, Trophy, 
  Heart, 
  Calendar,
  MapPin,
  Clock,
  Star,
  Award,
  BookOpen,
  Camera,
  Share2,
  Target,
  Zap,
  CheckCircle,
} from 'lucide-react';

const HighSchoolDonors = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const requirements = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Age Requirements',
      description: 'Must be 16-18 years old',
      details: '16-17 year olds need parental consent form'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health Standards',
      description: 'Meet basic health criteria',
      details: 'Minimum weight 110 lbs, good general health'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'School Approval',
      description: 'Principal or nurse approval',
      details: 'Required for on-campus donation drives'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Parental Consent',
      description: 'Guardian signature required',
      details: 'Must be signed within 30 days of donation'
    }
  ];

  const benefits = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Community Service Hours',
      description: 'Earn verified volunteer hours for college applications',
      highlight: 'Up to 4 hours per donation'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Leadership Recognition',
      description: 'Special certificates and awards for student organizers',
      highlight: 'Build your resume'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Social Media Features',
      description: 'Get featured on our official social media channels',
      highlight: 'Share your impact'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Scholarship Opportunities',
      description: 'Exclusive scholarships for active young donors',
      highlight: '$500-$2000 awards'
    }
  ];

  const upcomingEvents = [
    {
      school: 'Roosevelt High School',
      date: 'June 15, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Main Gymnasium',
      participants: 45,
      goal: 60,
      status: 'confirmed'
    },
    {
      school: 'Lincoln Academy',
      date: 'June 22, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Cafeteria',
      participants: 32,
      goal: 50,
      status: 'planning'
    },
    {
      school: 'Washington Prep',
      date: 'June 28, 2025',
      time: '8:30 AM - 1:30 PM',
      location: 'Student Center',
      participants: 28,
      goal: 40,
      status: 'confirmed'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      school: 'Madison High',
      grade: '12th Grade',
      quote: 'Donating blood helped me earn community service hours and made me feel like I was making a real difference. The process was so easy!',
      donations: 3
    },
    {
      name: 'Marcus Chen',
      school: 'Central Academy',
      grade: '11th Grade',
      quote: 'Our school blood drive brought everyone together. I learned so much about helping others and it looks great on college applications.',
      donations: 2
    },
    {
      name: 'Emma Rodriguez',
      school: 'Valley Prep',
      grade: '12th Grade',
      quote: 'Being a student ambassador for blood donation has been amazing. I love educating my peers about how they can save lives.',
      donations: 4
    }
  ];

  const tabs = [
    { id: 'requirements', label: 'Requirements', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'benefits', label: 'Benefits', icon: <Star className="w-5 h-5" /> },
    { id: 'events', label: 'School Events', icon: <Calendar className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Student Stories', icon: <Users className="w-5 h-5" /> }
  ];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-700 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <GraduationCap className="w-10 h-10 text-yellow-300" />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce delay-300">
          <div className="w-16 h-16 bg-pink-400/20 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-pink-300" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-pulse delay-500">
          <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-blue-300" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <GraduationCap className="w-6 h-6 text-yellow-300" />
              <span className="font-semibold">Student Program</span>
            </div>
            <h1 className="text-4xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              High School Heroes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              Join thousands of student donors making a difference in their communities. 
              <span className="text-yellow-200 font-semibold"> Earn community service hours</span>, 
              build leadership experience, and 
              <span className="text-pink-200 font-semibold"> save lives</span> while preparing for your future.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15,000+', label: 'Student Donors', icon: <Users className="w-6 h-6" /> },
              { number: '200+', label: 'Partner Schools', icon: <GraduationCap className="w-6 h-6" /> },
              { number: '45,000+', label: 'Lives Saved', icon: <Heart className="w-6 h-6" /> },
              { number: '$50K+', label: 'Scholarships Given', icon: <Trophy className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabbed Content Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Getting Started</h2>
                <p className="text-xl text-gray-600">Everything you need to know about student blood donation</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {requirements.map((req, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full flex-shrink-0">
                        {req.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{req.title}</h3>
                        <p className="text-gray-600 mb-2">{req.description}</p>
                        <p className="text-sm text-blue-600 font-medium">{req.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Amazing Benefits</h2>
                <p className="text-xl text-gray-600">What you gain from being a student blood donor</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border border-yellow-200/50">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                        {benefit.highlight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming School Drives</h2>
                <p className="text-xl text-gray-600">Join a blood drive at your school or nearby</p>
              </div>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-200/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-800">{event.school}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{event.participants}</div>
                          <div className="text-sm text-gray-600">Registered</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{event.goal}</div>
                          <div className="text-sm text-gray-600">Goal</div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Success Stories</h2>
                <p className="text-xl text-gray-600">Hear from your peers about their donation experience</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-pink-200/50">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.school} • {testimonial.grade}</p>
                      <div className="flex justify-center gap-1 mt-2">
                        {[...Array(testimonial.donations)].map((_, i) => (
                          <Heart key={i} className="w-4 h-4 text-red-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-center">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Donate Now Section */}
      <div className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Donate Now
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Take the first step to save lives. Find a donation center near you or schedule your appointment today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Check Eligibility</h3>
                    <p className="text-white/80">See if you qualify to donate</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/eligibility')}
                className="w-full bg-white text-green-600 font-bold py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Check Now
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Find Locations</h3>
                    <p className="text-white/80">Donation centers near you</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/location')}
                className="w-full bg-white text-blue-600 font-bold py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Find Centers
                </button>
              </div>
            </div>  
            {/* Donation Impact */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Your Impact</h3>
                <p className="text-white/90">Every donation makes a difference</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Your donation can save</p>
                    <p className="text-2xl font-bold text-yellow-300">Up to 3 Lives</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Donation time</p>
                    <p className="text-2xl font-bold text-blue-300">30-45 Minutes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Service hours earned</p>
                    <p className="text-2xl font-bold text-green-300">4 Hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl border border-yellow-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-yellow-300" />
                  <h4 className="font-bold text-lg">Quick Tip</h4>
                </div>
                <p className="text-white/90">
                  Eat a good meal and stay hydrated before donating. Bring a friend for support and make it a fun experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HighSchoolDonors;