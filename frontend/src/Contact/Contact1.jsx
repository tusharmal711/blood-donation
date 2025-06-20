import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Heart, Users, Droplet } from 'lucide-react';
import Footer from '../Footer'; 
import Swal from 'sweetalert2'

const Contact1 = () => {
  
  const [fullname,setfullname]=useState('')
  const [phoneno,setphoneno]=useState('')
  const [email,setemail]=useState('')
  const [inquiryType,setinquiryType]=useState('')
  const [subject,setsubject]=useState('')
  const [message,setmessage]=useState('')
 
   const Contactus = async (e) =>{
       e.preventDefault(); 
        const new_user ={
            "fullname":fullname,
            "email":email,
            "phoneno":phoneno,
            "inquiryType":inquiryType,
            "subject":subject,
            "message":message
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_user)
        };
        const response = await fetch('http://localhost:3000/Contact/register', requestOptions);
        
        const data = await response.json();
        if(data._id!=null){
            Swal.fire({
               position: "center",
               icon: "success",
               title: "success",
               showConfirmButton: false,
               timer: 1500
             })
        }
        else{
           Swal.fire({
              position: "center",
              icon: "error",
              title: "Filed",
              showConfirmButton: false,
              timer: 1500
            });
        }
    }
  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      info: "1-800-BLOOD-HELP",
      description: "24/7 urgent blood requests",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      info: "contact@bloodlife.org",
      description: "General inquiries & support",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Main Office",
      info: "123 Life Center Ave, Health City, HC 12345",
      description: "Visit us during business hours",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 8AM-6PM",
      description: "Sat-Sun: 9AM-4PM",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const quickStats = [
    { icon: Users, number: "50K+", label: "Lives Saved" },
    { icon: Droplet, number: "25K+", label: "Active Donors" },
    { icon: Heart, number: "100+", label: "Partner Hospitals" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-red-700 text-white pt-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
              Have questions about blood donation? Need urgent help? We're here 24/7 to support you and save lives together.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-50 to-transparent"></div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the best way to reach us based on your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-900 font-medium mb-2">{method.info}</p>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    onChange = {(e)=> setfullname(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    onChange = {(e)=> setphoneno(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                    onChange = {(e)=> setemail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                <select
                  name="inquiryType"
                  onChange = {(e)=> setinquiryType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="general">General Information</option>
                  <option value="donation">Blood Donation</option>
                  <option value="urgent">Urgent Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                   onChange = {(e)=> setsubject(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Brief subject of your message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  onChange = {(e)=> setmessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button
               onClick={Contactus}
                type="button"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
              >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
          
              </button>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Emergency Blood Requests</h3>
              </div>
              <p className="text-pink-100 mb-6 leading-relaxed">
                For urgent blood requests, please call our 24/7 emergency hotline. Our dedicated team is always ready to help coordinate life-saving blood donations.
              </p>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold text-lg">1-800-BLOOD-HELP</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Blood Type Matching</p>
                    <p className="text-gray-600 text-sm">Find compatible donors for specific blood types</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Donation Scheduling</p>
                    <p className="text-gray-600 text-sm">Book your next donation appointment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Medical Questions</p>
                    <p className="text-gray-600 text-sm">Get answers about donation eligibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Volunteer Opportunities</p>
                    <p className="text-gray-600 text-sm">Join our community of life-savers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly do you respond to messages?</h3>
              <p className="text-gray-600">We respond to all inquiries within 24 hours during business days, and emergency requests are handled immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Can I schedule a donation appointment online?</h3>
              <p className="text-gray-600">Yes! Contact us through this form or call our hotline to schedule your appointment at a convenient time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Do you provide transportation for donors?</h3>
              <p className="text-gray-600">We offer transportation assistance for donors who need it. Contact us to learn more about this service.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How can I become a volunteer?</h3>
              <p className="text-gray-600">We'd love to have you join our team! Fill out the contact form above and select "Volunteer Opportunities" as your inquiry type.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact1;