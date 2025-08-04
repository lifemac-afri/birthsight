import React from 'react';
import { Play, ArrowRight, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Every Child
                <span className="text-green-600 block">Counts.</span>
                <span className="text-amber-600">Everywhere.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Offline-first. Blockchain-backed. Powered by LIFE-MAC Africa.
                Ensuring every child gets the legal identity they deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl">
                <Users className="w-5 h-5" />
                <span>Join the Pilot</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-green-600 hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold">
                <Play className="w-5 h-5" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">200+</div>
                <div className="text-sm text-gray-600">Children Registered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Offline Capable</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">New Birth Registration</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-sm">Child's Name: Kwame Asante</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-sm">Location: Dodi Island</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span className="text-sm">Status: Sync Pending</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-600 text-white rounded-lg p-3 text-center">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Offline Registration Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;