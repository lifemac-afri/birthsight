import React from 'react';
import { MapPin, Users, Heart, Star, Quote } from 'lucide-react';

const Impact = () => {
  const stats = [
    { value: '50+', label: 'Target Communities', icon: MapPin, color: 'text-green-600' },
    { value: '200+', label: 'Children Registered', icon: Users, color: 'text-blue-600' },
    { value: '15', label: 'Trained Agents', icon: Heart, color: 'text-amber-600' },
    { value: '100%', label: 'Success Rate', icon: Star, color: 'text-purple-600' }
  ];

  const testimonials = [
    {
      quote: "BirthSight has revolutionized how we register births in our community. No more long journeys to the district capital.",
      author: "Akosua Mensah",
      role: "Community Health Nurse, Dodi Island",
      avatar: "AM"
    },
    {
      quote: "The offline capability means we can register children immediately, even during the rainy season when connectivity is poor.",
      author: "Emmanuel Asante",
      role: "District Health Officer, Afram Plains",
      avatar: "EA"
    }
  ];

  const partners = [
    { name: 'LIFE-MAC Africa', type: 'Innovation Hub' },
    { name: 'Birth & Death Registry', type: 'Government' },
    { name: 'Ghana Health Service', type: 'Healthcare' },
    { name: 'Local Assemblies', type: 'Community' }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Creating <span className="text-green-600">Real Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pilot program is already transforming lives across Ghana's most 
            remote communities, with strong partnerships and measurable results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Visualization */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pilot Coverage Areas
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">Active Communities</span>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div>• Dodi Island, Volta Lake</div>
                  <div>• Afram Plains North District</div>
                  <div>• Kete Krachi Traditional Area</div>
                  <div>• Ada East Coastal Communities</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="font-semibold">Upcoming Expansion</span>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div>• Northern Region Rural Areas</div>
                  <div>• Upper East Border Communities</div>
                  <div>• Western Region Fishing Villages</div>
                  <div>• Central Region Island Communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Voices from the Field
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted Partners
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-green-200 transition-colors">
                <div className="font-semibold text-gray-900 mb-2">{partner.name}</div>
                <div className="text-sm text-gray-600">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;