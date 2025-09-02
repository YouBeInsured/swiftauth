import React, { useState, useEffect } from 'react';
import { Smartphone, MessageSquare, Clock, CheckCircle, AlertCircle, Plus, Settings } from 'lucide-react';

export default function SMSManager() {
  const [smsAccounts, setSmsAccounts] = useState([
    {
      id: 'chase-bank',
      name: 'Chase Bank',
      phoneNumber: '+1 (555) ***-1234',
      status: 'active',
      lastCode: '2 min ago',
      avgDelay: '12s',
      reliability: '94%',
      provider: 'Chase'
    },
    {
      id: 'aws-console',
      name: 'AWS Console',
      phoneNumber: '+1 (555) ***-1234',
      status: 'active',
      lastCode: '1 hour ago',
      avgDelay: '8s',
      reliability: '97%',
      provider: 'Amazon'
    },
    {
      id: 'coinbase',
      name: 'Coinbase',
      phoneNumber: '+1 (555) ***-5678',
      status: 'active',
      lastCode: 'Yesterday',
      avgDelay: '25s',
      reliability: '89%',
      provider: 'Coinbase'
    }
  ]);

  const [recentCodes, setRecentCodes] = useState([
    { service: 'Chase Bank', code: '******', time: '2 min ago', status: 'used' },
    { service: 'AWS Console', code: '******', time: '1 hour ago', status: 'used' },
    { service: 'PayPal', code: '******', time: '3 hours ago', status: 'expired' },
    { service: 'Coinbase', code: '******', time: 'Yesterday', status: 'used' }
  ]);

  const [isReceiving, setIsReceiving] = useState(false);
  const [incomingCode, setIncomingCode] = useState<string | null>(null);

  // Simulate receiving an SMS code
  const simulateIncomingSMS = () => {
    if (isReceiving) return; // Prevent multiple simultaneous simulations
    
    setIsReceiving(true);
    setTimeout(() => {
      setIncomingCode('Chase Bank: 847291');
      setIsReceiving(false);
      // Auto-clear after 5 seconds
      setTimeout(() => setIncomingCode(null), 5000);
    }, 2000);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Smartphone className="h-10 w-10 text-blue-500" />
            <h1 className="text-4xl font-bold text-white">SMS 2FA Management</h1>
          </div>
          <p className="text-xl text-gray-300">
            Intelligent SMS code management that eliminates waiting and automates authentication
          </p>
        </div>

        {/* Live SMS Demo */}
        <div className="mb-12 p-8 bg-gray-800 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Live SMS Interception Demo</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Incoming SMS Monitor</h3>
                  <div className={`w-3 h-3 rounded-full ${isReceiving ? 'bg-yellow-500 animate-pulse' : 'bg-gray-600'}`}></div>
                </div>
                
                {incomingCode ? (
                  <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-green-400 font-medium">Code Received & Auto-Applied</span>
                    </div>
                    <div className="font-mono text-white text-lg">{incomingCode}</div>
                    <div className="text-sm text-gray-400 mt-2">Automatically injected in 0.3 seconds</div>
                  </div>
                ) : isReceiving ? (
                  <div className="p-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-yellow-500 animate-spin" />
                      <span className="text-yellow-400">Waiting for SMS code...</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-gray-700 rounded-lg text-center">
                    <MessageSquare className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                    <div className="text-gray-400">No incoming SMS codes</div>
                  </div>
                )}
              </div>
              
              <button
                onClick={simulateIncomingSMS}
                disabled={isReceiving}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isReceiving ? 'Receiving SMS...' : 'Simulate SMS Login'}
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">How SMS Auto-Fill Works</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">SMS Interception</div>
                      <div className="text-gray-400">SwiftAuth monitors incoming SMS messages for 2FA codes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-purple-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Pattern Recognition</div>
                      <div className="text-gray-400">AI identifies the service and extracts the verification code</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-green-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Auto-Injection</div>
                      <div className="text-gray-400">Code automatically filled in the waiting form field</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">0.3s</div>
                  <div className="text-green-100">Average SMS processing time</div>
                  <div className="text-sm text-green-200 mt-2">vs 15-60s traditional wait</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Accounts Management */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">SMS-Enabled Accounts</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                  <Plus className="h-5 w-5" />
                  <span>Add SMS Account</span>
                </button>
              </div>

              <div className="space-y-4">
                {smsAccounts.map((account) => (
                  <div key={account.id} className="p-6 bg-gray-700 rounded-xl border border-gray-600 hover:border-gray-500 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{account.name}</h4>
                          <div className="text-sm text-gray-400">{account.phoneNumber}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
                        <div className="text-sm text-green-600 font-medium">Active</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Last Code</div>
                        <div className="text-white font-medium">{account.lastCode}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Avg Delay</div>
                        <div className="text-white font-medium">{account.avgDelay}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Reliability</div>
                        <div className="text-white font-medium">{account.reliability}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-3">
                      <button className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg text-sm hover:bg-blue-900 transition-colors">
                        Configure
                      </button>
                      <button className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm hover:bg-gray-500 transition-colors">
                        Test SMS
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SMS Stats & Recent Codes */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">SMS Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Codes Today</span>
                  <span className="text-white font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Avg Processing</span>
                  <span className="text-green-500 font-bold">0.4s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-green-500 font-bold">98.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time Saved</span>
                  <span className="text-blue-500 font-bold">8.2 min</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Recent SMS Codes</h3>
              <div className="space-y-3">
                {recentCodes.map((code, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white text-sm">{code.service}</div>
                      <div className="text-xs text-gray-400">{code.time}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-gray-300 text-sm">{code.code}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        code.status === 'used' ? 'bg-green-500' : 
                        code.status === 'expired' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SMS Security & Privacy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            SMS Security & Privacy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Privacy Protection</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Local Processing Only</div>
                    <div className="text-gray-300 text-sm">SMS codes are processed locally on your device</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-semibold text-white">No Cloud Storage</div>
                    <div className="text-gray-300 text-sm">Codes are never stored or transmitted to our servers</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Automatic Deletion</div>
                    <div className="text-gray-300 text-sm">Codes deleted immediately after use or expiration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Features</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Pattern Learning</div>
                    <div className="text-gray-300 text-sm">AI learns SMS patterns to improve accuracy</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Multi-Number Support</div>
                    <div className="text-gray-300 text-sm">Handle codes from multiple phone numbers</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Spam Filtering</div>
                    <div className="text-gray-300 text-sm">Ignore non-2FA messages automatically</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMS vs Traditional Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            SMS 2FA: Before vs After SwiftAuth
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-900/20 border-2 border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Traditional SMS 2FA</h3>
              <div className="space-y-4">
                {[
                  { step: "Request login", time: "0s", icon: "🔐" },
                  { step: "Wait for SMS delivery", time: "15-60s", icon: "⏳" },
                  { step: "Check phone notifications", time: "5-10s", icon: "📱" },
                  { step: "Read and memorize code", time: "5-10s", icon: "👀" },
                  { step: "Switch back to browser", time: "3-5s", icon: "🔄" },
                  { step: "Type code manually", time: "5-15s", icon: "⌨️" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{step.icon}</span>
                      <span className="text-gray-300">{step.step}</span>
                    </div>
                    <span className="text-red-400 font-mono font-bold">{step.time}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-red-900/30 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-400">Total: 33-105s</div>
                  <div className="text-red-300 text-sm">Plus frustration and interruption</div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border-2 border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">SwiftAuth SMS</h3>
              <div className="space-y-4">
                {[
                  { step: "Request login", time: "0s", icon: "🔐" },
                  { step: "SMS auto-intercepted", time: "0.1s", icon: "📡" },
                  { step: "Code extracted by AI", time: "0.1s", icon: "🤖" },
                  { step: "Auto-filled in form", time: "0.1s", icon: "✨" },
                  { step: "Login completed", time: "0.1s", icon: "✅" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{step.icon}</span>
                      <span className="text-gray-300">{step.step}</span>
                    </div>
                    <span className="text-green-400 font-mono font-bold">{step.time}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-green-900/30 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-400">Total: 0.4s</div>
                  <div className="text-green-300 text-sm">Seamless and invisible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Provider Compatibility */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Universal SMS Provider Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Verizon', 'AT&T', 'T-Mobile', 'Sprint', 'Google Fi', 'Mint Mobile',
              'Visible', 'Cricket', 'Metro', 'Boost', 'US Cellular', 'Xfinity Mobile'
            ].map((provider, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-xl text-center border border-gray-600 hover:border-gray-500 transition-all">
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div className="text-white font-medium text-sm">{provider}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              SwiftAuth works with all major carriers and MVNOs worldwide. 
              <span className="text-blue-400"> International support available.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
