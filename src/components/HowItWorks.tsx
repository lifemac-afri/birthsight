import React from 'react';
import { Baby, Smartphone, Wifi, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Baby,
      title: 'Child is Born',
      description: 'A baby is born in a remote community on an island or rural area in Ghana.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Local Agent Records',
      description: 'Trained community health worker captures birth details using the offline BirthSight app.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Wifi,
      title: 'Data Syncs Automatically',
      description: 'When internet becomes available, encrypted data automatically syncs to government systems.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Legal Identity Confirmed',
      description: 'Child receives verifiable legal identity, enabling access to healthcare, education, and rights.',
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-green-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From birth to legal identity in four simple steps, designed to work 
            in the most challenging environments.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-green-300 via-blue-300 to-amber-300 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-transparent hover:border-gray-200">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-white px-3 py-1 rounded-full border-2 border-gray-200 text-sm font-bold text-gray-600">
                    Step {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See It in Action?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the BirthSight system with a live demonstration.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;