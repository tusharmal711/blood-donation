import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';

const Signup = () => {
  const [formData, setFormData] = useState({
    userid: '',
    name: '',
    password: '',
    contact: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: basic validation
    if (!formData.userid || !formData.name || !formData.password || !formData.contact) {
      Swal.fire({
        icon: 'warning',
        title: 'All fields are required',
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/User/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Registration successful!',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = '/login'; // Redirect to login
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: data.message || 'Registration failed',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Server error',
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">User Registration</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">User ID</label>
            <input
              type="text"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter user ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 pr-10"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter phone number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 font-medium"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-red-500">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
