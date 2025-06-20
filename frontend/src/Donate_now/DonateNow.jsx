
import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import Swal from 'sweetalert2';

const DonateNow = () => {
  const [form, setForm] = useState({
    FullName: '',
    Email: '',
    Password: '',
    PhoneNO: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    weight: '',
    Address: '',
    LastDonation: '',
    TotalDonation: ''
  });

  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState('');


  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      alert('Invalid file type. Use JPEG, PNG, or GIF.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File too large. Max 5MB allowed.');
      return;
    }

    setProfilePic(file);
    const reader = new FileReader();
    reader.onloadend = () => setProfilePicPreview(reader.result);
    reader.readAsDataURL(file);
  };


  const removeProfilePic = () => {
    setProfilePic(null);
    setProfilePicPreview('');
    document.getElementById('profilePic').value = '';
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    
    // Add form fields
    Object.entries(form).forEach(([key, value]) => {
      if (value) { // Only add non-empty values
        formData.append(key, value);
      }
    });

     // Get file directly from input instead of state
    const fileInput = document.getElementById('profilePic');
    if (fileInput.files[0]) {
      formData.append('profileImage', fileInput.files[0]);
    }
  
    try {
      const res = await fetch('http://localhost:3000/Donate/register', {
        method: 'POST',
        body: formData,
      });
  
      const data = await res.json();
      
      if (res.ok) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Donation submitted successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        
        // Reset form
        setForm({
          FullName: '',
          Email: '',
          Password: '',
          PhoneNO: '',
          dateOfBirth: '',
          gender: '',
          bloodType: '',
          weight: '',
          Address: '',
          LastDonation: '',
          TotalDonation: ''
        });
        removeProfilePic();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission failed',
          text: data.message || 'Try again later.',
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Server error',
        text: 'Try again later.',
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">Donate Now</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center space-y-3">
          {profilePicPreview ? (
            <div className="relative">
              <img
                src={profilePicPreview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-red-200"
              />
              <button
                type="button"
                onClick={removeProfilePic}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <Camera className="text-gray-400" size={24} />
            </div>
          )}
          <label
            htmlFor="profilePic"
            className="cursor-pointer bg-red-50 text-red-600 px-4 py-2 rounded-md border border-red-200 hover:bg-red-100 transition text-sm font-medium"
          >
            {profilePicPreview ? 'Change Photo' : 'Upload Photo'}
          </label>
          <input
            type="file"
            id="profilePic"
            name="profileImage"
            accept="image/jpeg,image/jpg,image/png,image/gif"
            onChange={handleProfilePicChange}
            className="hidden"
          />
          <p className="text-xs text-gray-500 text-center">JPEG, PNG, or GIF (max 5MB)</p>
        </div>
        {[
          { name: 'FullName', type: 'text', label: 'Full Name' },
          { name: 'Email', type: 'email', label: 'Email' },
          { name: 'Password', type: 'password', label: 'Password' },
          { name: 'PhoneNO', type: 'tel', label: 'Phone No' },
          { name: 'dateOfBirth', type: 'date', label: 'DOB' },
          { name: 'weight', type: 'number', label: 'Weight (kg)' },
          { name: 'Address', type: 'text', label: 'Address' },          
          { name: 'TotalDonation', type: 'number', label: 'If donated (Enter No. of Donation otherwise skip)' },
          form.TotalDonation!=''?{ name: 'LastDonation', type: 'date', label: 'Last Donation' }:{ name: 'LastDonation', type: 'hidden' },
        ].map(({ name, type, label }) => (
          <div key={name}>
            <div className="text-slate-900 font-bold">{label}</div>
            <input
              type={type}
              name={name}
              placeholder={label}
              value={form[name]}
              onChange={handleInputChange}
              required={name !== 'LastDonation' && name !== 'TotalDonation'}
              className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
        ))}

        {/* Gender */}
        <div>
          <div className="text-slate-900 font-bold">Gender</div>
          <select
            name="gender"
            value={form.gender}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Blood Type */}
        <div>
          <div className="text-slate-900 font-bold">Blood-Type</div>
          <select
            name="bloodType"
            value={form.bloodType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select Blood Type</option>
            {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-br from-red-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-md shadow hover:from-red-700 hover:to-pink-600 transition"
        >
          Submit Donation
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/Login_D" className="text-red-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default DonateNow;