import React from 'react';
import { Crown, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function Upsells() {
  const premiumFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast Authentication",
      description: "Reduce authentication time by 99% with our advanced pre-auth technology.",
      benefit: "Save 8+ minutes daily"
    },
    {
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      title: "Premium Security Suite",
      description: "Military-grade encryption with biometric verification and hardware key support.",
      benefit: "Enterprise-level protection"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-500" />,
      title: "Universal Compatibility",
      description: "Works with all major platforms and services - no setup required.",
      benefit: "One solution for everything"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Upgrade to SwiftAuth Premium
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of authentication with our premium features designed for power users.
          </p>
        </div>

        {/* Premium Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-gray-600">
              <div className="w-16 h-16 mb-6 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
              <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                <div className="text-blue-400 font-semibold">{feature.benefit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who have already upgraded to premium authentication.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 mx-auto">
            <span>Upgrade Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}