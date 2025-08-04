import React from 'react';
import { Building, Heart, Users, Smartphone, ArrowRight, Mail } from 'lucide-react';

const CallToAction = () => {
  const audiences = [
    {
      icon: Building,
      title: 'Government Partners',
      description: 'Join us in scaling birth registration nationwide',
      cta: 'Request Partnership Meeting',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Heart,
      title: 'NGOs & Donors',
      description: 'Support our mission to reach every child',
      cta: 'Fund a Community',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Users,
      title: 'Local Communities',
      description: 'Become a registered agent in your area',
      cta: 'Join as Agent',
      color: 'bg-amber-600 hover:bg-amber-700'
    },
    {
      icon: Smartphone,
      title: 'Tech Partners',
      description: 'Provide infrastructure and technical support',
      cta: 'Explore Partnership',
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join the <span className="text-green-400">Movement</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every child deserves a legal identity. Partner with us to make 
            universal birth registration a reality in Ghana and beyond.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
              <p className="text-gray-300 mb-6">{audience.description}</p>
              <button className={`w-full ${audience.color} text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2`}>
                <span>{audience.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how you can be part of 
            ensuring every Ghanaian child gets the identity they deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>Contact Our Team</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
              Download Project Brief
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">$50K</div>
            <div className="text-gray-300">Funds 1 Complete District</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">1,000+</div>
            <div className="text-gray-300">Children per District</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 mb-2">5 Years</div>
            <div className="text-gray-300">Sustainable Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;