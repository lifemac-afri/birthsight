import React from 'react';
import { Smartphone, Users, Sun, Shield, Wifi, Database } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Offline Mobile App',
      description: 'Registration works without internet connection, storing data securely until sync is possible.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Community Agents',
      description: 'Local healthcare workers and trusted community members trained to register births.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Sun,
      title: 'Solar-Powered Kits',
      description: 'Portable registration stations with solar charging for remote areas without electricity.',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Immutable records prevent fraud while ensuring data integrity and verification.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-green-600">BirthSight</span> Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive, technology-driven approach that brings birth registration 
            directly to communities, eliminating barriers and ensuring every child is counted.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:bg-white border-2 border-transparent hover:border-gray-200">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Built on Robust Technology
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Offline-First PWA</h4>
              <p className="text-sm text-gray-600">
                Progressive Web App that works seamlessly with or without internet connectivity
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">End-to-End Encrypted</h4>
              <p className="text-sm text-gray-600">
                Military-grade encryption ensures data privacy and complies with Ghana Data Protection Act
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Interoperable APIs</h4>
              <p className="text-sm text-gray-600">
                Seamless integration with NHIS, NIA, and other government systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;