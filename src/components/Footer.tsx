
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CauseForConnect</h3>
                <p className="text-gray-400 text-sm">Empowering Communities</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Bridging the gap between vulnerability and opportunity through education, 
              health initiatives, and inclusive community programs for underprivileged 
              children and families.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <div className="w-5 h-5"></div>
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-200">
                <div className="w-5 h-5"></div>
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200">
                <div className="w-5 h-5"></div>
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200">
                <div className="w-5 h-5"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Our Programs</a></li>
              <li><a href="#stories" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Success Stories</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Gallery</a></li>
              <li><a href="#volunteer" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Volunteer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 mt-1" />
                <div>
                  <p className="text-gray-300">info@causeforconnect.org</p>
                  <p className="text-gray-300">founder@causeforconnect.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 mt-1" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    123 Hope Street<br />
                    Community Center, Block A<br />
                    District - 560001, State, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CauseForConnect. All rights reserved. | Reg. No: NGO/2023/001
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Annual Reports</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              CauseForConnect - A Digital Bridge for NGOs | College Mini Project 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
