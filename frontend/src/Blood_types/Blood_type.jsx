import React, { useState } from 'react';
import { Heart, Droplets, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Footer from '../Footer'; 
const Blood_type = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('O+');
  const [showCompatibility, setShowCompatibility] = useState(false);

  const bloodTypes = [
    { type: 'O+', percentage: '38%', canDonateTo: ['O+', 'A+', 'B+', 'AB+'], canReceiveFrom: ['O+', 'O-'] },
    { type: 'O-', percentage: '7%', canDonateTo: ['All'], canReceiveFrom: ['O-'] },
    { type: 'A+', percentage: '34%', canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['A+', 'A-', 'O+', 'O-'] },
    { type: 'A-', percentage: '6%', canDonateTo: ['A+', 'A-', 'AB+', 'AB-'], canReceiveFrom: ['A-', 'O-'] },
    { type: 'B+', percentage: '9%', canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['B+', 'B-', 'O+', 'O-'] },
    { type: 'B-', percentage: '2%', canDonateTo: ['B+', 'B-', 'AB+', 'AB-'], canReceiveFrom: ['B-', 'O-'] },
    { type: 'AB+', percentage: '3%', canDonateTo: ['AB+'], canReceiveFrom: ['All'] },
    { type: 'AB-', percentage: '1%', canDonateTo: ['AB+', 'AB-'], canReceiveFrom: ['AB-', 'A-', 'B-', 'O-'] }
  ];

  const getBloodTypeColor = (type) => {
    const colors = {
      'O+': 'bg-red-500', 'O-': 'bg-red-600',
      'A+': 'bg-blue-500', 'A-': 'bg-blue-600',
      'B+': 'bg-green-500', 'B-': 'bg-green-600',
      'AB+': 'bg-purple-500', 'AB-': 'bg-purple-600'
    };
    return colors[type] || 'bg-gray-500';
  };

  const selectedType = bloodTypes.find(bt => bt.type === selectedBloodType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white pt-32 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">Know Your Blood Type</h2>
            <p className="text-xl mb-8 text-yellow-200">
              "Understanding blood compatibility saves lives. Learn about different blood types and their donation potential."
            </p>
          </div>
        </div>
      </section>

      {/* Blood Types Grid & Compatibility Section */}
      <section id="blood-types" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Blood Type Distribution</h3>
            <p className="text-lg text-gray-600">Click on any blood type to see compatibility information</p>
          </div>

          {/* Blood Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mb-12">
            {bloodTypes.map((bloodType) => (
              <div
                key={bloodType.type}
                onClick={() => {
                  setSelectedBloodType(bloodType.type);
                  setShowCompatibility(true);
                }}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedBloodType === bloodType.type ? 'ring-4 ring-blue-400' : ''
                }`}
              >
                <div className={`${getBloodTypeColor(bloodType.type)} rounded-2xl p-4 text-white text-center shadow-lg`}>
                  <div className="text-3xl font-bold mb-2">{bloodType.type}</div>
                  <div className="text-lg opacity-90">{bloodType.percentage}</div>
                  <div className="text-sm opacity-75 mt-2">of population</div>
                </div>
              </div>
            ))}
          </div>

          {/* Compatibility Info */}
          {showCompatibility && selectedType && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-red-500">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Blood Type {selectedType.type} Compatibility
              </h4>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                    <Droplets className="w-5 h-5 mr-2" /> Can Donate To:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedType.canDonateTo.map((type, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2" /> Can Receive From:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedType.canReceiveFrom.map((type, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Population:</strong> {selectedType.percentage} of people have {selectedType.type} blood type.
                  {selectedType.type === 'O-' && (
                    <span className="text-red-600 font-medium"> This is the universal donor type!</span>
                  )}
                  {selectedType.type === 'AB+' && (
                    <span className="text-blue-600 font-medium"> This is the universal recipient type!</span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Blood Group Facts Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Blood Group Facts</h3>
            <p className="text-lg text-gray-600">Discover fascinating facts about blood types and genetics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FactCard icon={<Droplets className="w-6 h-6 text-red-600" />} title="Universal Donor" description="O- blood type can donate to anyone, making it the most valuable in emergencies." note="O- donors are heroes!" />
            <FactCard icon={<Heart className="w-6 h-6 text-blue-600" />} title="Universal Recipient" description="AB+ blood type can receive from any blood type, but can only donate to AB+." note="Only 3% of population" />
            <FactCard icon={<Users className="w-6 h-6 text-green-600" />} title="Rh Factor" description="The + or - indicates the presence or absence of the Rh protein on red blood cells." note="85% of people are Rh+" />
            <FactCard icon={<Calendar className="w-6 h-6 text-purple-600" />} title="Donation Frequency" description="You can donate whole blood every 56 days, platelets every 7 days." note="Set your reminder!" />
            <FactCard icon={<MapPin className="w-6 h-6 text-yellow-600" />} title="Global Distribution" description="Blood type distribution varies by ethnicity and geographic region." note="Diversity matters" />
            <FactCard icon={<Phone className="w-6 h-6 text-indigo-600" />} title="Emergency Need" description="Every 2 seconds, someone needs blood. Your donation saves up to 3 lives." note="Be a lifesaver" />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

// Reusable FactCard Component
const FactCard = ({ icon, title, description, note }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-opacity-20">{icon}</div>
    <h4 className="text-xl font-semibold mb-3">{title}</h4>
    <p className="text-gray-600 mb-3">{description}</p>
    <div className="text-sm font-medium text-gray-700">{note}</div>
  </div>
);

export default Blood_type;
