import React from 'react';
import { CheckCircle, Zap, Crown, Rocket } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Personal',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for individuals who want faster 2FA',
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      features: [
        'Up to 10 accounts',
        'Basic biometric unlock',
        'Mobile app access',
        'Email support',
        'Time tracking',
        '30-day free trial'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$49.99',
      period: '/month',
      description: 'For power users and small teams',
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      features: [
        'Unlimited accounts',
        'Advanced biometrics',
        'Desktop + mobile apps',
        'Priority support',
        'Advanced analytics',
        'Team sharing',
        'Custom integrations',
        'Hardware security key support',
        'API access'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/user/month',
      description: 'For organizations needing scale and control',
      icon: <Rocket className="h-8 w-8 text-emerald-500" />,
      features: [
        'Everything in Professional',
        'SSO integration',
        'Admin dashboard',
        'Compliance reporting',
        'White-label options',
        'Dedicated support',
        'Custom deployment',
        'SLA guarantees',
        'On-premise options'
      ],
      color: 'from-emerald-500 to-emerald-600',
      popular: false
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your authentication needs. All plans include our core 99% time reduction technology.
          </p>
          
          <div className="inline-flex items-center p-1 bg-gray-700 rounded-xl">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-400 rounded-lg font-medium hover:text-white transition-colors">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-800 rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular ? 'border-purple-500 ring-4 ring-purple-500/20' : 'border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-0.5' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Calculate Your Time Savings
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">12.5 minutes</div>
              <div className="text-gray-300 mb-4">Daily 2FA time (average user)</div>
              <div className="text-sm text-gray-500">≈ 76 hours per year</div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">→</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">0.12 minutes</div>
              <div className="text-gray-300 mb-4">With SwiftAuth</div>
              <div className="text-sm text-gray-500">≈ 0.7 hours per year</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white text-center">
            <div className="text-2xl font-bold mb-2">You'll Save 75+ Hours Annually</div>
            <div className="text-green-100">Worth $3,750+ in productivity gains!</div>
          </div>
        </div>

        {/* Pricing Logic & Justification */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Pay for 2FA When Free Options Exist?
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Free Solutions */}
            <div className="bg-red-900/20 border-2 border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Free Solutions</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Google Authenticator</h4>
                  <div className="text-sm text-gray-300 mb-2">No sync, basic UX, manual entry</div>
                  <div className="text-red-400 font-bold">30-45 seconds per login</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Microsoft Authenticator</h4>
                  <div className="text-sm text-gray-300 mb-2">MS ecosystem only, still manual</div>
                  <div className="text-red-400 font-bold">25-40 seconds per login</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">SMS Codes</h4>
                  <div className="text-sm text-gray-300 mb-2">Carrier delays, manual typing</div>
                  <div className="text-red-400 font-bold">15-60 seconds per login</div>
                </div>
              </div>
              <div className="text-center p-4 bg-red-900/30 rounded-lg">
                <div className="text-xl font-bold text-red-400 mb-2">Hidden Cost</div>
                <div className="text-red-300">75+ hours wasted annually</div>
                <div className="text-sm text-red-200">= $3,750 in lost productivity</div>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="bg-orange-900/20 border-2 border-orange-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">Enterprise Solutions</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Duo Security</h4>
                  <div className="text-sm text-gray-300 mb-2">$3-9/user/month, complex setup</div>
                  <div className="text-orange-400 font-bold">Enterprise-only focus</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Okta</h4>
                  <div className="text-sm text-gray-300 mb-2">$2-15/user/month, IT required</div>
                  <div className="text-orange-400 font-bold">Overkill for individuals</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">RSA SecurID</h4>
                  <div className="text-sm text-gray-300 mb-2">$50-100/user/month</div>
                  <div className="text-orange-400 font-bold">Hardware tokens required</div>
                </div>
              </div>
              <div className="text-center p-4 bg-orange-900/30 rounded-lg">
                <div className="text-xl font-bold text-orange-400 mb-2">Wrong Fit</div>
                <div className="text-orange-300">Built for IT departments</div>
                <div className="text-sm text-orange-200">Not consumer-friendly</div>
              </div>
            </div>

            {/* SwiftAuth Premium */}
            <div className="bg-green-900/20 border-2 border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">SwiftAuth Premium</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Consumer-First Design</h4>
                  <div className="text-sm text-gray-300 mb-2">Built for individuals, not IT</div>
                  <div className="text-green-400 font-bold">0.3 seconds per login</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Universal Compatibility</h4>
                  <div className="text-sm text-gray-300 mb-2">Works with all services</div>
                  <div className="text-green-400 font-bold">No ecosystem lock-in</div>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Invisible Experience</h4>
                  <div className="text-sm text-gray-300 mb-2">Automatic code handling</div>
                  <div className="text-green-400 font-bold">Zero manual work</div>
                </div>
              </div>
              <div className="text-center p-4 bg-green-900/30 rounded-lg">
                <div className="text-xl font-bold text-green-400 mb-2">Perfect Fit</div>
                <div className="text-green-300">Premium UX worth paying for</div>
                <div className="text-sm text-green-200">Saves 75+ hours annually</div>
              </div>
            </div>
          </div>

          {/* Value Proposition Breakdown */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              The Premium 2FA Market Gap
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Why Free Solutions Fail</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Time Waste</div>
                      <div className="text-gray-300 text-sm">12+ minutes daily spent on 2FA friction</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Poor UX</div>
                      <div className="text-gray-300 text-sm">Manual code entry, app switching, delays</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">No Innovation</div>
                      <div className="text-gray-300 text-sm">Same clunky experience for 10+ years</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Hidden Costs</div>
                      <div className="text-gray-300 text-sm">Productivity loss worth $3,000+ annually</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-6">Why Enterprise Solutions Don't Fit</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-400 text-xs">!</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Wrong Target</div>
                      <div className="text-gray-300 text-sm">Built for IT departments, not individuals</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-400 text-xs">!</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Complex Setup</div>
                      <div className="text-gray-300 text-sm">Requires technical expertise to configure</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-400 text-xs">!</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Overkill Features</div>
                      <div className="text-gray-300 text-sm">Compliance tools individuals don't need</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-400 text-xs">!</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">High Minimums</div>
                      <div className="text-gray-300 text-sm">Enterprise contracts, bulk licensing only</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
              <h4 className="text-2xl font-bold text-white text-center mb-4">SwiftAuth's Market Position</h4>
              <p className="text-gray-300 text-center text-lg leading-relaxed mb-6">
                We're the first premium consumer 2FA solution. Like how Spotify disrupted free music with premium UX, 
                or how Netflix beat free TV with convenience, SwiftAuth offers premium authentication worth paying for.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">99% Faster</div>
                  <div className="text-gray-300">Than any free solution</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">10x Simpler</div>
                  <div className="text-gray-300">Than enterprise tools</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">$3,000+ Value</div>
                  <div className="text-gray-300">Annual productivity savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How secure is SwiftAuth?",
                answer: "SwiftAuth uses end-to-end encryption, zero-knowledge architecture, and advanced biometric authentication. Your data never leaves your devices unencrypted."
              },
              {
                question: "Does it work with my existing accounts?",
                answer: "Yes! SwiftAuth is compatible with all major platforms including Google, Microsoft, AWS, banking sites, and any service using standard 2FA protocols."
              },
              {
                question: "What if my phone is lost or stolen?",
                answer: "SwiftAuth includes secure cloud backup and recovery options. You can instantly revoke access and restore on a new device using your master recovery key."
              },
              {
                question: "How does the 99% time reduction work?",
                answer: "Through intelligent pre-authentication, biometric unlock, and automated code injection. The average traditional 2FA takes 35 seconds, SwiftAuth takes under 1 second."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gray-700 rounded-xl">
                <h4 className="font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
