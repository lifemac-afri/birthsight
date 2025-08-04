import React from "react";
import { Users, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">BirthSight</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Ensuring every child in Ghana gets the legal identity they deserve
              through innovative, offline-first birth registration technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>hello@birthsight.lifemac.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+233 53 721 1043</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Ho, Ghana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="#problem"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                The Problem
              </a>
              <a
                href="#solution"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Our Solution
              </a>
              <a
                href="#impact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Impact
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 BirthSight. All rights reserved. Compliant with Ghana Data
              Protection Act.
            </div>
            <div className="text-gray-400 text-sm">
              Powered by LIFE-MAC Africa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
