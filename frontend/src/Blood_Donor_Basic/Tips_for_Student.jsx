import React, { useState } from 'react';
import '../index.css'
import Footer from '../Footer'; 
const studentTipsData = {
  title: "Blood Donation Tips for Students",
  subtitle: "Making Blood Donation Work with Your Academic Life",
  heroQuote: "Be a hero on campus - your donation can save up to 3 lives while fitting into your busy student schedule!",
  tips: [
    {
      icon: "📚",
      title: "Schedule Around Exams",
      description: "Plan donations at least 2-3 days before major exams to ensure you're at full energy for studying and test-taking.",
      category: "Academic Planning",
      detailedTips: ["Avoid donating during finals week", "Best time is after midterms", "Check your academic calendar first"]
    },
    {
      icon: "🍕",
      title: "Dorm-Friendly Nutrition",
      description: "Stock up on iron-rich snacks like nuts, dried fruits, and fortified cereals that are easy to store in your dorm.",
      category: "Nutrition",
      detailedTips: ["Keep trail mix handy", "Buy fortified breakfast bars", "Stock canned spinach for easy meals"]
    },
    {
      icon: "💧",
      title: "Campus Hydration Hacks",
      description: "Carry a large water bottle and use campus water fountains to stay hydrated throughout the day.",
      category: "Hydration",
      detailedTips: ["Drink 16oz extra water day before", "Use campus dining hall beverages", "Avoid excessive caffeine"]
    },
    {
      icon: "🎒",
      title: "Bring Study Materials",
      description: "The donation process includes waiting time - perfect for reviewing flashcards, light reading, or catching up on assignments.",
      category: "Time Management",
      detailedTips: ["Pack flashcards", "Bring textbook for light reading", "Download lecture notes on phone"]
    },
    {
      icon: "👥",
      title: "Buddy System",
      description: "Donate with friends for moral support and to make it a positive social experience. Many first-time donors feel more comfortable with friends.",
      category: "Social Support",
      detailedTips: ["Organize dorm floor donations", "Join student organization drives", "Share experiences on social media"]
    },
    {
      icon: "📅",
      title: "Use Campus Drives",
      description: "Take advantage of on-campus blood drives - they're convenient, often offer student incentives, and fit into your class schedule.",
      category: "Convenience",
      detailedTips: ["Sign up early for preferred times", "Check for student organization partnerships", "Look for incentives like t-shirts or pizza"]
    },
    {
      icon: "💪",
      title: "Post-Donation Recovery",
      description: "Skip intense workouts and sports for 24 hours. Light walking to classes is fine, but avoid heavy lifting at the gym.",
      category: "Recovery",
      detailedTips: ["No gym workouts for 24 hours", "Avoid intramural sports same day", "Take elevator instead of stairs when possible"]
    },
    {
      icon: "🏥",
      title: "Know Campus Health Services",
      description: "Familiarize yourself with campus health center locations and hours in case you need support or have questions.",
      category: "Safety",
      detailedTips: ["Save health center number in phone", "Know after-hours emergency contacts", "Understand insurance coverage"]
    },
    {
      icon: "🆔",
      title: "Student ID Requirements",
      description: "Bring your student ID plus another form of identification. Some drives accept student ID as primary identification.",
      category: "Documentation",
      detailedTips: ["Student ID + driver's license", "Keep backup ID in wallet", "Check drive-specific requirements"]
    },
    {
      icon: "⏰",
      title: "Class Schedule Planning",
      description: "Schedule donations between classes or during longer breaks. Avoid tight schedules that might make you feel rushed.",
      category: "Time Management",
      detailedTips: ["Allow 1-2 hours total time", "Don't schedule before important classes", "Use lunch breaks for longer time slots"]
    },
    {
      icon: "💰",
      title: "Budget-Friendly Recovery",
      description: "Take advantage of free post-donation snacks. Many drives offer cookies, juice, and crackers to help with recovery.",
      category: "Nutrition",
      detailedTips: ["Eat all provided snacks", "Take extra crackers if allowed", "Stay in recovery area full recommended time"]
    },
    {
      icon: "📱",
      title: "Use Mobile Apps",
      description: "Download blood donation apps to track your donations, find nearby drives, and get appointment reminders.",
      category: "Technology",
      detailedTips: ["Red Cross Blood Donor App", "Set donation reminders", "Track donation history for resume/applications"]
    }
  ],
  benefits: [
    { icon: "🩸", title: "Health Check", description: "Free mini-physical including blood pressure and hemoglobin check" },
    { icon: "🎁", title: "Campus Perks", description: "Many campus drives offer student-specific rewards and recognition" },
    { icon: "📝", title: "Resume Builder", description: "Volunteer experience that looks great on applications and resumes" },
    { icon: "🏆", title: "Feel Good Factor", description: "Knowing you potentially saved 3 lives while managing your studies" }
  ]
};

const TipsForStudents = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedTip, setExpandedTip] = useState(null);
  const { title, subtitle, heroQuote, tips, benefits } = studentTipsData;

  const categories = ['all', ...new Set(tips.map(tip => tip.category))];
  const filteredTips = activeCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-4xl font-bold  pt-6 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-xl italic text-red-600">
              "{heroQuote}"
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 shadow-md'
                }`}
              >
                {category === 'all' ? 'All Tips' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => setExpandedTip(expandedTip === idx ? null : idx)}
              >
                <div className="p-8">
                  <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {tip.icon}
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-red-100 text-purple-800 text-sm px-4 py-2 rounded-full font-semibold">
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center mb-4">
                    {tip.description}
                  </p>
                  
                  {/* Expanded Details */}
                  {expandedTip === idx && (
                    <div className="border-t pt-4 mt-4 animate-in fade-in duration-300">
                      <h4 className="font-semibold text-gray-800 mb-2 text-center">Quick Tips:</h4>
                      <ul className="space-y-2">
                        {tip.detailedTips.map((detailTip, detailIdx) => (
                          <li key={detailIdx} className="text-sm text-gray-600 flex items-center">
                            <span className="text-red-400 mr-2">•</span>
                            {detailTip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-400">
                      {expandedTip === idx ? 'Click to collapse' : 'Click for more tips'}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Students Love Donating Blood
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default TipsForStudents;