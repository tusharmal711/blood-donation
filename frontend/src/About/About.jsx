import React from 'react';
import Footer from '../Footer'; 

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-pink-400 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-red-600 text-2xl mx-auto mb-6">
            ❤
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BloodLife</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Connecting hearts, saving lives through the power of blood donation
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BloodLife is dedicated to bridging the gap between blood donors and those in urgent need. 
                We believe that every drop of blood donated has the power to save a life, and our platform 
                makes it easier than ever to connect generous donors with patients who need their help.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through our comprehensive network, we facilitate blood donations, provide educational 
                resources, and maintain a database that helps match donors with recipients efficiently 
                and safely.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🩸
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Every 2 Seconds</h3>
                <p className="text-gray-600">
                  Someone in the world needs blood. Your donation can make the difference between life and death.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every interaction with empathy and understanding, recognizing the courage 
                it takes to donate and the urgency of those in need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Safety</h3>
              <p className="text-gray-600">
                We maintain the highest standards of safety and hygiene, ensuring that every donation 
                process is secure for both donors and recipients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Time is critical in emergency situations. Our streamlined process ensures quick matching 
                and coordination between donors and those in need.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">25,000+</div>
              <div className="text-gray-600 font-medium">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15,000+</div>
              <div className="text-gray-600 font-medium">Active Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                BloodLife was founded in 2018 by a group of healthcare professionals and technology 
                enthusiasts who witnessed firsthand the challenges in blood donation coordination. 
                After seeing too many cases where patients couldn't find compatible donors in time, 
                they decided to create a solution.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                What started as a simple database has evolved into a comprehensive platform that serves 
                thousands of users across the region. We've facilitated over 50,000 successful blood 
                donations and continue to grow our network of donors and partner hospitals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, BloodLife stands as a testament to the power of community and technology working 
                together to save lives. Every success story motivates us to continue improving and 
                expanding our reach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-red-600 to-pink-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to donate blood or need urgent assistance, 
            we're here to help you make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Become a Donor
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transition">
              Request Blood
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;