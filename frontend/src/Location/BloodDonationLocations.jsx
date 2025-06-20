import React, { useState } from 'react';
import Footer from '../Footer'; 
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Star, 
  Navigation,
  Calendar,
  Users,
  Award,
  Car,
  Accessibility,
  Coffee,
  Wifi
} from 'lucide-react';

const locations = [
  {
    id: 1,
    name: "Kolkata Blood Bank & Transfusion Centre",
    address: "56 AJC Bose Road, Shyama Charan Dey Street",
    city: "Kolkata, West Bengal 700014",
    phone: "+91 33 2227-3417",
    email: "kolkatacentral@bloodbank.org",
    bookingUrl: "https://g.co/kgs/hKJo1YY",
    hours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "10:00 AM - 3:00 PM"
    },
    rating: 4.8,
    reviews: 256,
    description: "Located in the heart of Kolkata, this premier blood bank serves thousands of patients across West Bengal. Equipped with modern facilities and maintaining international safety standards for all blood components.",
    features: ["Free Parking", "AC Waiting Area", "Bengali & Hindi Staff", "Wheelchair Accessible"],
    specialties: ["Whole Blood", "Platelets", "Plasma", "Rare Blood Groups"],
    waitTime: "15-20 minutes",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "SSKM Hospital Blood Bank",
    address: "244 AJC Bose Road, Medical College Campus",
    city: "Kolkata, West Bengal 700020",
    phone: "+91 33 2223-4567",
    email: "donate@sskm.gov.in",
    bookingUrl: "https://bloodlinks.in/details_bank?id=2393",
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 5:00 PM",
      sunday: "9:00 AM - 2:00 PM"
    },
    rating: 4.7,
    reviews: 403,
    description: "Government medical college hospital blood bank serving emergency cases 24/7. Known for handling rare blood group requirements and maintaining extensive donor database across Bengal.",
    features: ["24/7 Emergency", "Government Facility", "Multiple Languages", "Student Volunteers"],
    specialties: ["Whole Blood", "Emergency Supply", "Rare Blood Types"],
    waitTime: "20-25 minutes",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Lions Blood Bank Howrah",
    address: "Station Road, Near Howrah Station",
    city: "Howrah, West Bengal 711101",
    phone: "+91 33 2634-8921",
    email: "info@lionshowrah.org",
    bookingUrl: "https://kolkatacityinfo.com/item/lions-blood-bank/",
    hours: {
      weekdays: "9:00 AM - 5:00 PM",
      saturday: "10:00 AM - 3:00 PM",
      sunday: "Closed"
    },
    rating: 4.6,
    reviews: 198,
    description: "Community-driven blood bank serving Howrah district with focus on rural outreach programs. Regular blood donation camps in villages and commitment to serving underprivileged patients.",
    features: ["Community Service", "Rural Outreach", "Free for Poor", "Local Transport Help"],
    specialties: ["Whole Blood", "Village Camps", "Community Drives"],
    waitTime: "15-25 minutes",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "Siliguri District Hospital Blood Bank",
    address: "Hospital Road, Darjeeling More",
    city: "Siliguri, West Bengal 734001",
    phone: "+91 353 251-7890",
    email: "siliguri@wbhealth.gov.in",
    bookingUrl: "https://wbhealth.gov.in/blood-donation/siliguri/book",
    hours: {
      weekdays: "8:30 AM - 6:30 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "10:00 AM - 2:00 PM"
    },
    rating: 4.5,
    reviews: 167,
    description: "Serving North Bengal region including Darjeeling hills, this blood bank caters to diverse communities. Known for maintaining blood supply during monsoon season and natural calamities.",
    features: ["Hills Coverage", "Multi-ethnic Staff", "Emergency Ready", "Tea Gardens Outreach"],
    specialties: ["Whole Blood", "Emergency Response", "Hills Supply"],
    waitTime: "15-30 minutes",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "Durgapur Steel Plant Hospital Blood Bank",
    address: "Sector-1, Steel Township",
    city: "Durgapur, West Bengal 713205",
    phone: "+91 343 254-6701",
    email: "bloodbank@dsphospital.com",
    bookingUrl: " https://www.justdial.com/Durgapur/Durgapur-Steel-Plant-Hospital-Dhabani/9999PX343-X343-180125230501-M2E2_BZDET/amp",
    hours: {
      weekdays: "6:00 AM - 8:00 PM",
      saturday: "7:00 AM - 6:00 PM",
      sunday: "9:00 AM - 4:00 PM"
    },
    rating: 4.7,
    reviews: 289,
    description: "Modern corporate hospital blood bank serving industrial belt of West Bengal. Advanced equipment and trained staff ensure highest quality blood components for patients across Burdwan district.",
    features: ["Corporate Standard", "Advanced Testing", "Industrial Coverage", "Quick Service"],
    specialties: ["Whole Blood", "Platelets", "Industrial Health"],
    waitTime: "10-15 minutes",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "Malda Medical College Blood Bank",
    address: "Near Malda Railway Station, Hospital Campus",
    city: "Malda, West Bengal 732101",
    phone: "+91 3512 25-2345",
    email: "malda@medicalcollege.gov.in",
    bookingUrl: "https://en.m.wikipedia.org/wiki/Malda_Medical_College_and_Hospital",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "11:00 AM - 3:00 PM"
    },
    rating: 4.4,
    reviews: 145,
    description: "Serving northern districts of West Bengal including border areas with Bangladesh. Focus on maternal health and pediatric blood requirements with special programs for tribal communities.",
    features: ["Border Coverage", "Maternal Care", "Tribal Outreach", "Multiple Dialects"],
    specialties: ["Whole Blood", "Maternal Health", "Pediatric Care"],
    waitTime: "20-25 minutes",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=250&fit=crop"
  }
];

const LocationCard = ({ location }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleBookNow = () => {
    // Open booking URL in new tab
    window.open(location.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
      {/* Header with Medical Theme */}
      <div className="relative h-48 bg-gradient-to-br from-red-500 via-red-600 to-red-700">
        {/* Medical Cross Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-8 h-8">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-6 h-6">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white transform -translate-x-1/2"></div>
          </div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
          <Star className="text-yellow-500 w-4 h-4 mr-1" fill="currentColor" />
          <span className="text-sm font-semibold text-gray-800">{location.rating}</span>
          <span className="text-xs text-gray-600 ml-1">({location.reviews})</span>
        </div>
        
        {/* Title Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
          <h3 className="text-xl font-bold mb-2 text-white leading-tight">{location.name}</h3>
          <div className="flex items-center text-red-100">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm">{location.city}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Address and Contact */}
        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <MapPin className="text-red-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-800 font-medium">{location.address}</p>
              <p className="text-gray-600 text-sm">{location.city}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Phone className="text-green-500 w-5 h-5 mr-3" />
            <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              {location.phone}
            </a>
          </div>

          <div className="flex items-center">
            <Clock className="text-blue-500 w-5 h-5 mr-3" />
            <div className="text-sm">
              <span className="text-gray-800 font-medium">Today: </span>
              <span className="text-green-600 font-medium">{location.hours.weekdays}</span>
            </div>
          </div>
        </div>

        {/* Wait Time and Quick Info */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100">
          <div className="flex items-center">
            <Users className="text-red-600 w-5 h-5 mr-2" />
            <span className="text-sm text-gray-700 font-medium">Wait: {location.waitTime}</span>
          </div>
          <div className="flex items-center">
            <Award className="text-blue-600 w-5 h-5 mr-2" />
            <span className="text-sm text-gray-700 font-medium">{location.specialties.length} Services</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {location.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {location.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                {feature}
              </span>
            ))}
            {location.features.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                +{location.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={handleBookNow}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md transform hover:scale-105"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Now
          </button>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
          >
            {showDetails ? 'Less' : 'More'}
          </button>
        </div>

        {/* Expanded Details */}
        {showDetails && (
          <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
            {/* Hours */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                Operating Hours
              </h4>
              <div className="text-sm space-y-2">
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Mon - Fri:</span>
                  <span className="text-gray-800 font-medium">{location.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-800 font-medium">{location.hours.saturday}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-gray-800 font-medium">{location.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2 text-red-600" />
                Available Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {location.specialties.map((specialty, index) => (
                  <span key={index} className="bg-red-100 text-red-800 text-xs px-3 py-1.5 rounded-full font-medium">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* All Features */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Amenities</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {location.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600 py-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                Contact Information
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${location.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Link */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-green-600" />
                Online Booking
              </h4>
              <p className="text-sm text-gray-600 mb-3">Schedule your appointment online for faster service</p>
              <a 
                href={location.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-700 hover:text-green-800 font-medium text-sm transition-colors"
              >
                Visit Booking Portal
                <Navigation className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BloodDonationLocations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');

  const cities = ['all', ...new Set(locations.map(loc => loc.city.split(',')[1].trim()))];
  
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || location.city.includes(selectedCity);
    return matchesSearch && matchesCity;
  });

  return (
    <>
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">
            Find Blood Donation Centers Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover convenient locations with detailed information about services, hours, and amenities. 
            Each center is committed to providing a safe and comfortable donation experience.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location name, city, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
              />
            </div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city === 'all' ? 'All States' : city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-red-600">{filteredLocations.length}</span> donation centers
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* No Results */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No locations found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
    <Footer/>
   </>
  );
};

export default BloodDonationLocations;