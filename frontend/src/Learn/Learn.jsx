import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Users, Clock, Shield, AlertCircle, CheckCircle, Droplet, Activity } from 'lucide-react';
import Footer from '../Footer'; 
import { useNavigate } from 'react-router-dom';

const Learn = () => {
    const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('basics');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const bloodTypes = [
    { type: 'O-', canDonateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], canReceiveFrom: ['O-'], isUniversalDonor: true },
    { type: 'O+', canDonateTo: ['O+', 'A+', 'B+', 'AB+'], canReceiveFrom: ['O-', 'O+'] },
    { type: 'A-', canDonateTo: ['A-', 'A+', 'AB-', 'AB+'], canReceiveFrom: ['O-', 'A-'] },
    { type: 'A+', canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['O-', 'O+', 'A-', 'A+'] },
    { type: 'B-', canDonateTo: ['B-', 'B+', 'AB-', 'AB+'], canReceiveFrom: ['O-', 'B-'] },
    { type: 'B+', canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['O-', 'O+', 'B-', 'B+'] },
    { type: 'AB-', canDonateTo: ['AB-', 'AB+'], canReceiveFrom: ['O-', 'A-', 'B-', 'AB-'] },
    { type: 'AB+', canDonateTo: ['AB+'], canReceiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], isUniversalReceiver: true }
  ];

  const eligibilityRequirements = [
    { icon: <Users className="w-5 h-5" />, title: "Age", description: "Be between 17-65 years old (16 with parental consent in some areas)" },
    { icon: <Activity className="w-5 h-5" />, title: "Weight", description: "Weigh at least 110 pounds (50 kg)" },
    { icon: <Shield className="w-5 h-5" />, title: "Health", description: "Be in good general health and feeling well" },
    { icon: <Clock className="w-5 h-5" />, title: "Rest", description: "Have had adequate sleep the night before donation" }
  ];

  const donationProcess = [
    { step: 1, title: "Registration", description: "Complete health history questionnaire and show ID", time: "10-15 min" },
    { step: 2, title: "Mini Physical", description: "Check temperature, blood pressure, pulse, and hemoglobin", time: "5 min" },
    { step: 3, title: "Donation", description: "The actual blood draw process", time: "8-10 min" },
    { step: 4, title: "Recovery", description: "Rest and enjoy refreshments to replenish fluids", time: "10-15 min" }
  ];

  const faqs = [
    {
      question: "Does donating blood hurt?",
      answer: "Most donors describe the needle stick as a brief pinch. The actual donation is usually painless, though you may feel a slight tugging sensation."
    },
    {
      question: "How often can I donate blood?",
      answer: "Whole blood can be donated every 56 days (8 weeks). Platelet donations can be made every 7 days, up to 24 times per year."
    },
    {
      question: "What should I eat before donating?",
      answer: "Eat a healthy meal within 3 hours of donation. Include iron-rich foods like lean meat, fish, poultry, beans, or iron-fortified cereals."
    },
    {
      question: "Can I donate if I have a tattoo?",
      answer: "In most cases, yes. If you got your tattoo from a licensed facility in a regulated state, you can donate immediately. Otherwise, wait 3 months."
    },
    {
      question: "How long does donated blood last?",
      answer: "Red blood cells can be stored for up to 42 days, platelets for 5 days, and plasma can be frozen for up to one year."
    },
    {
      question: "Will I feel weak after donating?",
      answer: "Most people feel fine after donating. Rest for 10-15 minutes, stay hydrated, and avoid heavy lifting for the rest of the day."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-pink-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn About Blood Donation</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Everything you need to know about giving the gift of life
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'basics', label: 'Basics', icon: <Heart className="w-4 h-4" /> },
              { id: 'process', label: 'Process', icon: <Clock className="w-4 h-4" /> },
              { id: 'eligibility', label: 'Eligibility', icon: <CheckCircle className="w-4 h-4" /> },
              { id: 'blood-types', label: 'Blood Types', icon: <Droplet className="w-4 h-4" /> },
              { id: 'faq', label: 'FAQ', icon: <AlertCircle className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Basics Tab */}
        {activeTab === 'basics' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Blood Donation Matters</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Every two seconds, someone in the U.S. needs blood. Your donation can save up to three lives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Lives</h3>
                <p className="text-gray-600">One donation can help up to 3 patients in need of blood transfusions.</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Process</h3>
                <p className="text-gray-600">The entire donation process takes about 1 hour from start to finish.</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Completely Safe</h3>
                <p className="text-gray-600">All equipment is sterile and used only once. Donation is completely safe.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blood Donation Facts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Only 3% of age-eligible people donate blood yearly</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Blood cannot be manufactured - it can only come from donors</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Red blood cells have a shelf life of only 42 days</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Platelets must be used within 5 days of donation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Type O blood is needed most often by hospitals</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Your body replaces the blood volume within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Donation Process</h2>
              <p className="text-xl text-gray-600">Step-by-step guide to what happens when you donate</p>
            </div>

            <div className="space-y-8">
              {donationProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">{step.time}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Before You Donate</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What to Do:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Get a good night's sleep</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Eat a healthy meal within 3 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Drink plenty of water</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Bring a valid photo ID</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What to Avoid:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span>Fatty foods before donation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span>Alcohol 24 hours before</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span>Aspirin 48 hours before (for platelet donation)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span>Strenuous exercise before donation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Eligibility Tab */}
        {activeTab === 'eligibility' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation Eligibility</h2>
              <p className="text-xl text-gray-600">Basic requirements to become a blood donor</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {eligibilityRequirements.map((req, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      {req.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{req.title}</h3>
                  </div>
                  <p className="text-gray-600">{req.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h3>
                  <div className="text-yellow-700 space-y-2">
                    <p>• Some medications may affect your eligibility - please inform staff about any medications you're taking</p>
                    <p>• Recent travel to certain countries may require a waiting period</p>
                    <p>• Certain medical conditions or procedures may affect eligibility</p>
                    <p>• When in doubt, contact us or visit - our medical staff will determine your eligibility</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Benefits of Donating</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Heart Health</h4>
                  <p className="text-gray-600 text-sm">Regular donation may reduce the risk of heart disease</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Free Health Check</h4>
                  <p className="text-gray-600 text-sm">Mini-physical checks your vitals and hemoglobin</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Iron Balance</h4>
                  <p className="text-gray-600 text-sm">Helps maintain healthy iron levels in your body</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blood Types Tab */}
        {activeTab === 'blood-types' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blood Type Compatibility</h2>
              <p className="text-xl text-gray-600">Understanding who can donate to whom</p>
            </div>

            <div className="grid gap-6">
              {bloodTypes.map((blood, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${
                  blood.isUniversalDonor ? 'border-red-500' : blood.isUniversalReceiver ? 'border-blue-500' : 'border-gray-300'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                        blood.isUniversalDonor ? 'bg-red-500' : blood.isUniversalReceiver ? 'bg-blue-500' : 'bg-gray-500'
                      }`}>
                        {blood.type}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Blood Type {blood.type}</h3>
                        {blood.isUniversalDonor && <span className="text-red-600 text-sm font-medium">Universal Donor</span>}
                        {blood.isUniversalReceiver && <span className="text-blue-600 text-sm font-medium">Universal Receiver</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Can Donate To:</h4>
                      <div className="flex flex-wrap gap-2">
                        {blood.canDonateTo.map((type, i) => (
                          <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Can Receive From:</h4>
                      <div className="flex flex-wrap gap-2">
                        {blood.canReceiveFrom.map((type, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blood Type Distribution</h3>
              <p className="text-gray-600 mb-6">Percentage of population with each blood type:</p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">O+</div>
                  <div className="text-sm text-gray-600">38% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">A+</div>
                  <div className="text-sm text-gray-600">34% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">B+</div>
                  <div className="text-sm text-gray-600">9% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">AB+</div>
                  <div className="text-sm text-gray-600">3% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">O-</div>
                  <div className="text-sm text-gray-600">7% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">A-</div>
                  <div className="text-sm text-gray-600">6% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">B-</div>
                  <div className="text-sm text-gray-600">2% of population</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">AB-</div>
                  <div className="text-sm text-gray-600">1% of population</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about blood donation</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl text-white font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
            Now that you know the facts, take the next step and become a blood donor. 
            Your donation could be the difference between life and death for someone in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
             onClick={() => navigate('/Donate')}
            className="bg-gradient-to-br from-red-600 to-pink-400 text-white font-semibold px-8 py-4 rounded-full text-lg hover:from-red-700 hover:to-pink-500 transition shadow-lg">
              Donate Now
            </button>
            <button 
            onClick={() => navigate('/location')}
            className="border-2 border-gray-600 text-gray-300 font-semibold px-8 py-4 rounded-full text-lg hover:border-white hover:text-white transition">
              Find Location
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Learn;