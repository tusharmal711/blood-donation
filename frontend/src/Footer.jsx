// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Blood Donation Center</h3>
            <p className="text-gray-400">Saving lives through voluntary blood donation. Every drop counts.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/Donor_basic" className="hover:text-white transition-colors">Donor Basics</a></li>
              <li><a href="/types" className="hover:text-white transition-colors">Blood Types</a></li>
              <li><a href="/Reward" className="hover:text-white transition-colors">Rewards</a></li>
              <li><a href="/HighSchool" className="hover:text-white transition-colors">High School Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/Donor_Eligibility" className="hover:text-white transition-colors">Eligibility</a></li>
              <li><a href="/location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="/learn" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <div className="text-gray-400 space-y-2">
              <p>📞 1-800-DONATE</p>
              <p>📧 info@blooddonation.org</p>
              <p>📍 Your Local Blood Center</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Blood Donation Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
