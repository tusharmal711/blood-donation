import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Scale, Heart, Clock, Shield, AlertTriangle, Calendar,
  Thermometer, Droplets, Activity, FileText, ChevronRight, Info
} from 'lucide-react';
import '../index.css';
import bgimage  from'../pic/Donor.jpg';
import Footer from '../Footer';
const Donor_Eligibility = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [expandedRequirement, setExpandedRequirement] = useState({});

  const eligibilityCategories = {
    general: {
      title: "General Requirements", icon: <User size={20} />, color: "text-rose-600", bg: "bg-rose-100",
      requirements: [
        { icon: <Calendar size={20} />, title: "Age Requirement", description: "18-65 years old", details: "First-time donors must be 18-60 years. Regular donors can donate until age 65.", status: "required" },
        { icon: <Scale size={20} />, title: "Weight Requirement", description: "Minimum 50 kg (110 lbs)", details: "Weight ensures safe donation volume and donor safety during the process.", status: "required" },
        { icon: <Heart size={20} />, title: "General Health", description: "Good overall health", details: "You must be in good health and feeling well on the day of donation.", status: "required" }
      ]
    },
    medical: {
      title: "Medical History", icon: <Activity size={20} />, color: "text-green-600", bg: "bg-green-100",
      requirements: [
        { icon: <Thermometer size={20} />, title: "Vital Signs", description: "Normal blood pressure & temperature", details: "BP: 90/50 to 180/100 mmHg, Temp: Below 37.5°C", status: "required" },
        { icon: <Droplets size={20} />, title: "Hemoglobin Level", description: "Adequate iron levels", details: "Men: ≥13.5 g/dL, Women: ≥12.5 g/dL", status: "required" },
        { icon: <Shield size={20} />, title: "No High-Risk Conditions", description: "Free from major diseases", details: "No history of hepatitis, HIV, cancer, or blood disorders", status: "required" }
      ]
    },
    lifestyle: {
      title: "Lifestyle Factors", icon: <Clock size={20} />, color: "text-purple-600", bg: "bg-purple-100",
      requirements: [
        { icon: <Clock size={20} />, title: "Previous Donations", description: "56+ days since last whole blood", details: "Different intervals for platelets (7 days) and plasma (28 days)", status: "timing" },
        { icon: <AlertTriangle size={20} />, title: "Recent Travel", description: "No high-risk destinations", details: "Certain countries require temporary deferrals", status: "review" },
        { icon: <FileText size={20} />, title: "Medications", description: "Review your meds", details: "Some may require temporary deferral. Aspirin is okay", status: "review" }
      ]
    }
  };

  const toggleExpanded = (index) => {
    setExpandedRequirement((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] === index ? null : index,
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-center text-rose-600 min-h-[90vh] flex items-center pt-24"
        style={{  backgroundImage: `url(${bgimage})`  }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-5">Donor Eligibility Guidelines</h1>
          <p className="text-xl mb-8">
            "Your eligibility is the first step — join countless heroes who save lives through blood donation.”
          </p>
          <Link to="/eligibility" className="bg-white text-rose-600 font-bold py-3 px-6 rounded">Check my eligibility</Link>
          <Link to="" className="bg-white text-rose-600 font-bold py-3 px-6 rounded ml-4">Book Appointment</Link>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">Eligibility Requirements</h2>
            <p className="text-gray-500 text-lg">Review these requirements to ensure you're ready to donate</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {Object.entries(eligibilityCategories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition border-2 ${
                  activeTab === key
                    ? `${cat.bg} ${cat.color} border-transparent`
                    : 'bg-white text-gray-600 border-gray-300 hover:border-current hover:text-current'
                }`}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </div>

          {/* Requirement Cards */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">{eligibilityCategories[activeTab].title}</h3>
            <div className="grid gap-6">
              {eligibilityCategories[activeTab].requirements.map((req, index) => (
                <div key={req.title} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                  <div
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50"
                  >
                    <div className="p-3 rounded-xl bg-rose-100 text-rose-600">{req.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{req.title}</h4>
                      <p className="text-sm text-gray-500">{req.description}</p>
                    </div>
                    <div className={`w-2.5 h-2.5 rounded-full ${req.status === 'required' ? 'bg-red-500' : req.status === 'timing' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                    <ChevronRight size={20} className={`transition-transform ${expandedRequirement[activeTab] === index ? 'rotate-90' : ''}`} />
                  </div>
                  {expandedRequirement[activeTab] === index && (
                    <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 flex gap-2 text-sm text-gray-600">
                      <Info size={16} className="mt-1 text-gray-400" />
                      <p>{req.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-10 grid md:grid-cols-2 items-center gap-8">
            <div>
              <h3 className="text-white text-3xl font-bold mb-4">Ready to Save Lives?</h3>
              <p className="text-gray-300 mb-6">Complete our quick eligibility check and schedule your donation appointment today.</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/eligibility" className="bg-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-700">Start Eligibility Check</Link>
                <Link to="/contact" className="border border-gray-500 text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-600">Have Questions?</Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <Droplets size={64} className="text-rose-600 animate-bounce" />
              <div className="absolute w-32 h-32 border-2 border-rose-300 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Donor_Eligibility;
