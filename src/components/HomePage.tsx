import React from 'react';
import { Clock, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onViewChange: (view: string) => void;
}

export default function HomePage({ onViewChange }: HomePageProps) {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "99% Faster Authentication",
      description: "Cut your 2FA time from 30+ seconds to under 1 second with our intelligent pre-auth system."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Military-Grade Security",
      description: "Advanced encryption and biometric verification ensure your accounts stay secure."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Universal Compatibility",
      description: "Works with all major platforms - Google, Microsoft, Amazon, banking apps, and more."
    }
  ];

  const stats = [
    { value: "99%", label: "Time Reduction" },
    { value: "2.3s", label: "Average Login" },
    { value: "50K+", label: "Happy Users" },
    { value: "Zero", label: "Security Breaches" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Clock className="h-8 w-8 text-red-500" />
              <span className="text-lg text-gray-400">The 2FA Problem</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Waiting for
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Authentication
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every day you spend <strong>8+ minutes</strong> just waiting for SMS codes, 
              opening authenticator apps, and checking emails. SwiftAuth reduces this to seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button
                onClick={() => onViewChange('demo')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>See Live Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onViewChange('beta')}
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Join Beta Waitlist
              </button>
              <button
                onClick={() => onViewChange('security')}
                className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg border-2 border-gray-600 hover:border-gray-500 transition-all duration-200"
              >
                Security Details
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Future of Authentication
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SwiftAuth revolutionizes how you handle 2FA by intelligently managing 
              all your authentication needs in one seamless experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Hidden Cost of 2FA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              The average person spends over 50 hours per year just waiting for authentication codes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Traditional 2FA Pain Points</h3>
              <div className="space-y-6">
                {[
                  { problem: "SMS delays", time: "15-60 seconds", icon: "📱" },
                  { problem: "App switching", time: "10-20 seconds", icon: "🔄" },
                  { problem: "Email checking", time: "20-45 seconds", icon: "📧" },
                  { problem: "Code typing", time: "5-15 seconds", icon: "⌨️" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl shadow-sm border border-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{item.problem}</div>
                      <div className="text-red-600 font-medium">{item.time} wasted</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-6">SwiftAuth Solution</h3>
              <div className="space-y-4 mb-8">
                {[
                  "Intelligent pre-authentication",
                  "Biometric instant unlock",
                  "Unified credential management",
                  "Zero-wait code delivery",
                  "Cross-device synchronization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-2">Under 1 Second</div>
                <div className="text-green-100">Average authentication time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands who have already eliminated 2FA friction from their daily lives.
          </p>
          <button
            onClick={() => onViewChange('demo')}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Experience SwiftAuth Now
          </button>
        </div>
      </section>
    </div>
  );
}
