import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MatchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = location.state?.matches || [];

  return (
    <div className="min-h-screen bg-red-50 p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-red-600 mb-6 font-semibold"
      >
        <ArrowLeft className="mr-2" /> Back to Request
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-8">Matched Donors</h2>

      {matches.length === 0 ? (
        <div className="text-xl text-gray-500">No matches found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((donor, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {donor.fullname}
              </h3>
              <p><strong>Blood Type:</strong> {donor.bloodType}</p>
              <p><strong>Email:</strong> {donor.email}</p>
              <p><strong>Phone:</strong> {donor.phone}</p>
              <p><strong>Address:</strong> {donor.Address}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchResults;
