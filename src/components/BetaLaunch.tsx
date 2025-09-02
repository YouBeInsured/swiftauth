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
