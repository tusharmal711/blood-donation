import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const [userid, setUserid] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    if (!userid || !newPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Missing fields',
        text: 'Please enter User ID and new password',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/User/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid, newPassword })
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Password Updated',
          text: data.message
        }).then(() => {
        window.location.href = '/Login';
      });
        setUserid('');
        setNewPassword('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message || 'Something went wrong'
        });
      }

    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Please try again later'
      });
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-600">Reset Password</h2>

        <form onSubmit={handleReset} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">User ID</label>
            <input
              type="text"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter your User ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter new password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 font-medium"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{' '}
          <a href="/login" className="text-red-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
