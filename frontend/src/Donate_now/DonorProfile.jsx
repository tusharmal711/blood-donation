import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonorProfile = () => {
  const [donor, setDonor] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDonor = localStorage.getItem('Donate');
    if (storedDonor) {
      setDonor(JSON.parse(storedDonor));
    } else {
      navigate('/Login_D');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('Donate');
    navigate('/');
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 'N/A';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      'A+': 'bg-red-100 text-red-800 border-red-200',
      'A-': 'bg-red-100 text-red-800 border-red-200',
      'B+': 'bg-blue-100 text-blue-800 border-blue-200',
      'B-': 'bg-blue-100 text-blue-800 border-blue-200',
      'AB+': 'bg-purple-100 text-purple-800 border-purple-200',
      'AB-': 'bg-purple-100 text-purple-800 border-purple-200',
      'O+': 'bg-green-100 text-green-800 border-green-200',
      'O-': 'bg-green-100 text-green-800 border-green-200',
    };
    return colors[bloodType] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!donor) return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
    </div>
  );

  const profileImageURL = donor.profileImagePath
    ? (donor.profileImagePath.startsWith('http')
      ? donor.profileImagePath
      : `http://localhost:3000/uploads/${donor.profileImagePath}`)
    : '/default-avatar.png';

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 pt-20 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 h-32 relative">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <img
                  src={profileImageURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-6 border-white shadow-lg"
                  onError={(e) => {
                    e.target.src = '/default-avatar.png';
                  }}
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all"
              onClick={() => setIsEditing(!isEditing)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>

          <div className="pt-20 pb-6 px-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{donor.FullName}</h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getBloodTypeColor(donor.bloodType || donor.BloodGroup)}`}>
                🩸 {donor.bloodType} Blood Type
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Age {calculateAge(donor.dateOfBirth)}
              </span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proud blood donor making a difference in the community. Every donation saves lives! 
            </p>
          </div>
        </div>
        {/* Profile Information */}
        <div className="bg-white shadow-2xl rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-gray-600 block mb-1">Full Name</label>
                <p className="text-lg text-gray-800 font-medium">{donor.FullName}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-gray-600 block mb-1">Email Address</label>
                <p className="text-lg text-gray-800">{donor.Email}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-gray-600 block mb-1">Phone Number</label>
                <p className="text-lg text-gray-800">{donor.PhoneNO || 'Not provided'}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-gray-600 block mb-1">Date of Birth</label>
                <p className="text-lg text-gray-800">{formatDate(donor.dateOfBirth)}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-gray-600 block mb-1">Blood Type</label>
                <p className="text-lg text-gray-800 font-semibold text-red-600">
                  {donor.bloodType}
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-gray-600 block mb-1">Address</label>
                <p className="text-lg text-gray-800">{donor.Address || 'Not provided'}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowConfirmLogout(true)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Confirm Logout</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to logout from your account?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmLogout(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorProfile;
