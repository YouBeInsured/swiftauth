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
                  <div className="text-sm text-green-200 mt-2
