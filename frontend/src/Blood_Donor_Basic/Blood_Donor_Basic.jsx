import React from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css'  
import bgImage from '../pic/p3.jpg';
import Footer from '../Footer'; 

const bloodDonationData = {
  preparation: {
    title: "Pre-Donation Preparation",
    description: "Proper preparation is key to a successful donation experience. Follow these guidelines the evening before and morning of your donation:",
    tips: [
      { title: "Sleep Well", description: "Get at least 8 hours of sleep to ensure your body is ready for donation." },
      { title: "Eat Hearty Meals", description: "Include eggs, meat, leafy greens, and fruit in your evening and morning meals." },
      { title: "Stay Hydrated", description: "Drink plenty of water and limit caffeine to maintain stable blood pressure." },
      { title: "Fluid Replacement", description: "Your body will lose about two cups of fluid during donation, so hydration is crucial." }
    ]
  },
  process: {
    title: "The Donation Process",
    steps: [
      {
        stepNumber: 1, title: "Registration",
        description: "Provide a photo ID and basic info. Student IDs are typically accepted with another ID."
      },
      {
        stepNumber: 2, title: "Screening",
        description: "Mini-Physical: We check your blood pressure, temperature, heart rate, and hemoglobin. Health Questionnaire: Covers travel, medical history, and risk factors.",
        highlight: {
          title: "Tip: Use the EarlyQ System",
          description: "Complete your questionnaire on the day of donation from home to save time at the site."
        }
      },
      {
        stepNumber: 3,title: "Giving Blood",
        description: "Relax in a chair while a sterile, one-time use kit is used. The process takes 8-10 minutes."
      },
      {
        stepNumber: 4, title: "Post-Donation Care",
        description: "Have a snack and drink water in the canteen area. It helps your body start replenishing.",
        highlight: {
          title: "Rebuild Your Iron",
          description: "Take a daily iron supplement (18–38 mg of ferrous gluconate) for eight weeks to restore iron levels."
        }
      }
    ]
  },
  cta: {
    title: "Ready to Save Lives?",
    message: "Each donation can save up to three lives. Thank you for stepping up!"
  }
};

const Blood_Donor_Basic = () => {
  const { preparation, process, cta } = bloodDonationData;

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center text-center text-[#0f2344f2] min-h-[90vh] pt-[100px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", }}>
        <div className="max-w-xl mx-auto px-4">
          <h1 className="text-[3rem] mb-5 font-sans font-bold">
            Blood Donation Basic
          </h1>
          <p className="text-lg mb-7 font-sans italic">
            "Your eligibility is the first step — join countless heroes who save lives through blood donation.”
          </p>
          <Link
            className="inline-block bg-white text-[#0f2344f2] font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition"
            to="/tips"
          >
            Tips for Student
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-[1140px] mx-auto px-4 my-12">
        {/* Pre-Donation Preparation */}
        <div className="mb-12">
          <h2 className="font-sans font-bold text-[2.5rem] mb-6 border-b-4 border-[#667eea] pb-2 text-[#2c3e50]">
            {preparation.title}
          </h2>
          <p className="text-[#555] text-lg mb-8">{preparation.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparation.tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-[#17a2b8] text-white rounded shadow p-5 flex flex-col h-full"
              >
                <h5 className="font-semibold text-xl mb-2">{tip.title}</h5>
                <p className="flex-grow">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Process */}
        <div className="mb-12">
          <h2 className="font-sans font-bold text-[2.5rem] mb-6 border-b-4 border-[#667eea] pb-2 text-[#2c3e50]">
            {process.title}
          </h2>
          {process.steps.map((step, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="text-[#667eea] font-semibold text-xl mb-2">
                Step {step.stepNumber}: {step.title}
              </h4>
              <p className="text-[#555] text-lg leading-relaxed">{step.description}</p>
              {step.highlight && (
                <div className="mt-2 p-4 rounded shadow bg-yellow-100 border-l-4 border-yellow-400 font-semibold text-yellow-800">
                  <strong>{step.highlight.title}</strong><br />
                  {step.highlight.description}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="bg-gradient-to-tr from-[#e74c3c] to-[#c0392b] text-white rounded-xl p-8 text-center shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{cta.title}</h3>
          <p className="text-lg font-medium mb-6">{cta.message}</p>
          <Link
            className="inline-block border-2 border-white rounded px-6 py-3 font-semibold hover:bg-white hover:text-[#c0392b] transition"
            to="/donate">
            Donate Now
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blood_Donor_Basic;
