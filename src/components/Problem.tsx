import React from 'react';
import { AlertCircle, MapPin, Users, Wifi } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">73%</span> of rural clusters in Ghana
            <br />lack birth registration access
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of children remain invisible to their government, missing out on 
            healthcare, education, and basic rights due to systemic barriers.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Transport</h3>
            <p className="text-gray-600">
              Families in remote islands and rural areas face days of travel to reach 
              the nearest registration office, often impossible without boats or roads.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Staff</h3>
            <p className="text-gray-600">
              Limited government personnel means registration offices are often closed 
              or understaffed, creating massive backlogs and frustrated families.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Connectivity</h3>
            <p className="text-gray-600">
              Poor internet infrastructure makes digital registration impossible, 
              forcing reliance on paper-based systems prone to loss and corruption.
            </p>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 lg:p-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Devastating Impact</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="mb-3">
                    <strong>Only 30%</strong> of children are registered in some regions, 
                    leaving them without access to:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Healthcare services and immunizations</li>
                    <li>• School enrollment and education</li>
                    <li>• Social protection programs</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-3">
                    Without legal identity, children become:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Vulnerable to trafficking and exploitation</li>
                    <li>• Unable to prove citizenship or inheritance rights</li>
                    <li>• Excluded from economic opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl italic text-gray-600 max-w-4xl mx-auto">
            "Every child has the right to a name and nationality. Birth registration is 
            the first legal acknowledgment of a child's existence and their right to recognition 
            before the law."
          </blockquote>
          <cite className="block mt-4 text-gray-500">— UN Convention on the Rights of the Child</cite>
        </div>
      </div>
    </section>
  );
};

export default Problem;