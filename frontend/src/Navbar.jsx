import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [donor, setDonor] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('User');
    const storedDonor = localStorage.getItem('Donate');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedDonor) {
      setDonor(JSON.parse(storedDonor));
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem('User');
    setUser(null);
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const logoutDonor = () => {
    localStorage.removeItem('Donate');
    setDonor(null);
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    ...(user ? [{ path: '/Request', label: 'Request' }] : []),
    { path: '/Location', label: 'Location' },
    { path: '/Learn', label: 'Learn' },
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-b shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center font-bold text-xl text-black">
          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2">❤</div>
          BloodLife
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-red-500 transition-colors ${isActive ? 'text-red-500 font-semibold' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Desktop User Authentication */}
          {user && !donor && (
            <>
              <span className="text-gray-700">Welcome, {user.userid}</span>
              <button
                onClick={logoutUser}
                className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </>
          )}

          {!user && donor && (
            <>
              <NavLink to="/DonorProfile" className="flex items-center gap-2 hover:opacity-90">
              
                <img
                
                  src={`http://localhost:3000/uploads/${donor.profileImagePath}`}
                  alt="Donor Profile"
                  className="w-10 h-10 rounded-full border object-cover"
                />
                
                <span className="text-gray-700 font-medium">{donor.FullName}</span>
              </NavLink>
              <button
                onClick={logoutDonor}
                className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </>
          )}

          {!user && !donor && (
            <>
              <NavLink
                to="/Login"
                className="border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/Login_D"
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                Donate Now
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-2 space-y-2">
          {/* Mobile Navigation Links */}
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors ${
                  isActive ? 'text-red-500 font-semibold bg-red-50' : 'text-gray-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile User Authentication */}
          <div className="border-t pt-2 mt-2">
            {user && !donor && (
              <div className="space-y-2">
                <div className="py-2 px-3 text-gray-700 text-sm">Welcome, {user.userid}</div>
                <button
                  onClick={logoutUser}
                  className="w-full text-left py-2 px-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}

            {!user && donor && (
              <div className="space-y-2">
                <NavLink 
                  to="/DonorProfile" 
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <img
                    src={donor.profileImagePath}
                    alt="Donor Profile"
                    className="w-8 h-8 rounded-full border object-cover"
                  />
                  <span className="text-gray-700 font-medium">{donor.FullName}</span>
                </NavLink>
                <button
                  onClick={logoutDonor}
                  className="w-full text-left py-2 px-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}

            {!user && !donor && (
              <div className="space-y-2">
                <NavLink
                  to="/Login"
                  onClick={closeMobileMenu}
                  className="block py-2 px-3 text-center border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/Login_D"
                  onClick={closeMobileMenu}
                  className="block py-2 px-3 text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Donate Now
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;