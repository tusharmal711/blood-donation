import React, { useState } from 'react';
import { Heart, MapPin, Droplets } from 'lucide-react';
import Swal from 'sweetalert2';
import Footer from '../Footer';

const Request = () => {
  const [bloodType, setbloodtype] = useState('');
  const [Address, setAddress] = useState('');
  const [matches, setMatches] = useState(null); 

  const match = async (e) => {
    e.preventDefault();

    const new_user = {
      bloodType,
      Address,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_user),
    };

    try {
      const response = await fetch('http://localhost:3000/Donate/match', requestOptions);
      const data = await response.json();

      if (data.user && data.user.length > 0) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Match Found',
          showConfirmButton: false,
          timer: 1500,
        });

        setMatches(data.user); 
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No Match Found',
          showConfirmButton: false,
          timer: 1500,
        });

        setMatches(null); 
      }
    } catch (error) {
      console.error('Matching failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong.',
      });
    }
  };

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <>
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-pink-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold">Urgent Request</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-100 to-pink-200 bg-clip-text text-transparent leading-tight">
            Request Blood
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
            Every second counts when lives are at stake. Submit your blood request and connect with our network of donors.
          </p>
        </div>
        <div className="absolute top-24 left-12 animate-bounce delay-150">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10a8 8 0 00-16 0c0 5.5 8 10 8 10z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-24 right-12 animate-bounce delay-300">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="min-h-screen bg-red-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-8 border-2 border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Droplets className="w-8 h-8 mr-3 text-red-600" />
                Quick Blood Request
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <Droplets className="w-5 h-5 inline mr-2 text-red-600" />
                    Blood Type Needed *
                  </label>
                  <select
                    onChange={(e) => setbloodtype(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-xl bg-white shadow-lg"
                    required
                    value={bloodType}
                  >
                    <option value="">Select Blood Type</option>
                    {bloodTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <MapPin className="w-5 h-5 inline mr-2 text-blue-600" />
                    Your Location *
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-xl bg-white shadow-lg"
                    placeholder="Enter your city, state"
                    required
                    value={Address}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={match}
                className="bg-gradient-to-r from-red-600 to-pink-400 text-white font-bold py-6 px-12 rounded-2xl text-2xl hover:from-red-700 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
              >
                Find Blood Donors Now
              </button>
            </div>

            {/* Match results */}
            {matches && (
              <div className="mt-16">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Matched Donors</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {matches.map((donor, index) => (
                    <div key={index} className="border rounded-xl p-6 shadow-md bg-white">
                      <h3 className="text-xl font-bold mb-2">{donor.FullName || 'Donor Name'}</h3>
                      <p>
                        <strong>Blood Type:</strong> {donor.bloodType}
                      </p>
                      <p>
                        <strong>Location:</strong> {donor.Address}
                      </p>
                      <p>
                        <strong>Email:</strong> {donor.Email || 'N/A'}
                      </p>
                      <p>
                        <strong>Phone:</strong> {donor.PhoneNO || 'N/A'}
                      </p>
                      <p>
                        <strong>Gender:</strong> {donor.gender || 'N/A'}
                      </p>
                      <p>
                        <strong>Weight:</strong> {donor.weight ? `${donor.weight} kg` : 'N/A'}
                      </p>
                     
                      <p>
                        <strong>Last Donation:</strong> {donor.LastDonation || 'N/A'}
                      </p>
                      <p>
                        <strong>Total Donations:</strong> {donor.TotalDonation || 'N/A'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Request;
