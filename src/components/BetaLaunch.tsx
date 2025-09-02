import React, { useState } from 'react';
import { Users, Rocket, Shield, Clock, CheckCircle, Mail, Star, TrendingUp } from 'lucide-react';

export default function BetaLaunch() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState('individual');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would send to your backend
    console.log('Beta signup:', { email, userType });
    setIsSubmitted(true);
  };

  const betaFeatures = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Early Access",
      description: "Be among the first 100 users to experience SwiftAuth"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: "Lifetime Discount",
      description: "50% off for life when you upgrade from beta"
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Direct Feedback",
      description: "Shape the product with direct access to our development team"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Priority Support",
      description: "Get premium support during the beta period"
    }
  ];

  const timeline = [
    { phase: "Beta Launch", date: "October 2025", status: "upcoming" },
    { phase: "Security Audit", date: "November 2025", status: "planned" },
    { phase: "Public Launch", date: "December 2025", status: "planned" },
    { phase: "Enterprise Features", date: "Q1 2026", status: "planned" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="h-12 w-12 text-blue-500" />
            <h1 className="text-5xl font-bold text-white">
              Join the SwiftAuth Beta
            </h1>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              Be part of the authentication revolution. Test SwiftAuth before anyone else, 
              help shape the product, and get exclusive lifetime benefits.
            </p>
          </div>
        </div>

        {/* Beta Value Proposition */}
        <div className="mb-16">
          {/* Founder Beta User */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGr1mIpccwjGQ/profile-displayphoto-scale_400_400/B56Zi7.vyOHAAg-/0/1755500445406?e=1759968000&v=beta&t=ot8oVgiXOI33cUTFfgYunk2GA3hxBjk6JOg9Cjc5YOs" 
                  alt="SwiftAuth Founder" 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 shadow-2xl"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Beta User #001: The Founder</h2>
              <p className="text-gray-300 text-xl mb-6 max-w-3xl mx-auto">
                "As an entrepreneur with ADHD running multiple businesses, I was constantly frustrated by 
                authentication interruptions. Every SMS delay, every app switch, every manual code entry was 
                breaking my flow and killing my productivity. I built SwiftAuth because I needed it to exist."
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">47</div>
                  <div className="text-gray-300">Daily Logins</div>
                  <div className="text-sm text-gray-400">Across 3 businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">23min</div>
                  <div className="text-gray-300">Daily Time Saved</div>
                  <div className="text-sm text-gray-400">With SwiftAuth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
                  <div className="text-gray-300">Flow Interruptions</div>
                  <div className="text-sm text-gray-400">ADHD-friendly design</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Why Join the Beta?</h2>
              <p className="text-gray-300 text-lg">
                Get early access to revolutionary 2FA technology while helping us perfect the experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {betaFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-900 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Beta Signup Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Reserve Your Beta Spot</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    I'm interested as a:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="individual"
                        checked={userType === 'individual'}
                        onChange={(e) => setUserType(e.target.value)}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-300">Individual User</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="adhd-entrepreneur"
                        checked={userType === 'adhd-entrepreneur'}
                        onChange={(e) => setUserType(e.target.value)}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-300">ADHD Entrepreneur (like the founder!)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="business"
                        checked={userType === 'business'}
                        onChange={(e) => setUserType(e.target.value)}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-300">Business/Team</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="developer"
                        checked={userType === 'developer'}
                        onChange={(e) => setUserType(e.target.value)}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-300">Developer/Security Professional</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Join Beta Waitlist
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Limited to first 100 beta testers. No spam, unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">You're In!</h3>
                <p className="text-gray-300 mb-6">
                  Thanks for joining the SwiftAuth beta. We'll email you when it's ready to test.
                </p>
                <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-medium">
                    🎉 You'll get 50% off for life when you upgrade from beta!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Beta Timeline */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Launch Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    item.status === 'upcoming' ? 'bg-blue-500' : 
                    item.status === 'planned' ? 'bg-gray-500' : 'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-white">{item.phase}</h4>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Beta Benefits</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Free access during beta period</li>
                <li>• 50% lifetime discount on paid plans</li>
                <li>• Direct line to development team</li>
                <li>• Priority feature requests</li>
                <li>• Exclusive beta tester community</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Market Validation Strategy */}
        <div className="mb-16">
          {/* ADHD-Specific Benefits */}
          <div className="mb-12 bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Built for ADHD Brains
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">ADHD Authentication Hell</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Flow Interruption</div>
                      <div className="text-gray-300 text-sm">Every 2FA breaks hyperfocus and derails productivity</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Task Switching Penalty</div>
                      <div className="text-gray-300 text-sm">ADHD brains take 23+ minutes to refocus after interruption</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Frustration Spiral</div>
                      <div className="text-gray-300 text-sm">Authentication delays trigger emotional dysregulation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">SwiftAuth ADHD Solution</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Invisible Authentication</div>
                      <div className="text-gray-300 text-sm">Zero interruption to your flow state</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Instant Access</div>
                      <div className="text-gray-300 text-sm">Sub-second authentication maintains momentum</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Stress Reduction</div>
                      <div className="text-gray-300 text-sm">Eliminates authentication-induced anxiety</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Smart Launch Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-900 rounded-xl flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 1: Beta Testing</h3>
              <p className="text-gray-300 mb-4">
                100 beta users validate core functionality and user experience
              </p>
              <div className="text-sm text-blue-400 font-medium">Oct 2025 • FREE</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-900 rounded-xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 2: Security Audit</h3>
              <p className="text-gray-300 mb-4">
                Professional security audit based on beta feedback and traction
              </p>
              <div className="text-sm text-green-400 font-medium">Nov 2025 • $10K Investment</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-900 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 3: Public Launch</h3>
              <p className="text-gray-300 mb-4">
                Full public launch with security credentials and proven demand
              </p>
              <div className="text-sm text-purple-400 font-medium">Dec 2025 • Revenue Ready</div>
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Beta First Makes Sense
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Validate Before Investing</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-medium text-white">Market Demand</div>
                    <div className="text-gray-300 text-sm">Confirm people actually want this solution</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-medium text-white">Product-Market Fit</div>
                    <div className="text-gray-300 text-sm">Refine features based on real user feedback</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-medium text-white">Pricing Validation</div>
                    <div className="text-gray-300 text-sm">Test willingness to pay before audit costs</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Financial Planning</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <div className="font-medium text-white">Zero Upfront Costs</div>
                    <div className="text-gray-300 text-sm">Beta testing costs nothing but time</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <div className="font-medium text-white">Revenue-Based Decisions</div>
                    <div className="text-gray-300 text-sm">Only invest in audit after proving demand</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <div className="font-medium text-white">Better Audit ROI</div>
                    <div className="text-gray-300 text-sm">Audit a proven product, not an assumption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Smart Entrepreneur Approach</h4>
            <p className="text-gray-300">
              Test the market with beta → Validate demand → Invest in security audit → Launch with confidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
