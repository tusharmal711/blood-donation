import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';


const Login_D = () => {
  const [FullName, setFullName] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const match = async (e) => {
    e.preventDefault();
    const new_user = {
      FullName: FullName,
      Password: Password,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_user),
    };
    const response = await fetch('http://localhost:3000/Donate/connect', requestOptions);

    const data = await response.json();
    console.log(new_user);
    if (data.user != null) {
      localStorage.setItem('Donate', JSON.stringify(data.user));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = '/';
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Failed',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
         <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">Donate Login</h2>
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter your userid"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 pr-10"
                placeholder="Enter your password"
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
            {/* Forgot Password Option */}
           <div className="text-right mt-2">
          <a href="/forgotpsw_D" className="text-sm text-red-500 hover:underline">
          Forgot password?
           </a>
</div>

          </div>

          <button
            onClick={match}
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 font-medium"
          >
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <span className="text-red-500 cursor-pointer">
            <a href="/Donate">Sign up</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login_D;
