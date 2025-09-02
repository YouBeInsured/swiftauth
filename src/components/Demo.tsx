import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Smartphone, Mail, Key, Fingerprint } from 'lucide-react';

interface DemoProps {
  onViewChange: (view: string) => void;
}

export default function Demo({ onViewChange }: DemoProps) {
  const [demoStep, setDemoStep] = useState<'traditional' | 'swiftauth' | 'comparison'>('traditional');
  const [traditionalTime, setTraditionalTime] = useState(0);
  const [swiftAuthTime, setSwiftAuthTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startDemo = (type: 'traditional' | 'swiftauth') => {
    if (isRunning) return; // Prevent multiple simultaneous demos
    
    setIsRunning(true);
    setDemoStep(type);
    
    if (type === 'traditional') {
      setTraditionalTime(0);
      const interval = setInterval(() => {
        setTraditionalTime(prev => {
          if (prev >= 35) {
            clearInterval(interval);
            setIsRunning(false);
            setTimeout(() => setDemoStep('comparison'), 1000);
            return 35;
          }
          return prev + 1;
        });
      }, 100);
    } else {
      setSwiftAuthTime(0);
      const interval = setInterval(() => {
        setSwiftAuthTime(prev => {
          if (prev >= 0.8) {
            clearInterval(interval);
            setIsRunning(false);
            setTimeout(() => setDemoStep('comparison'), 1000);
            return 0.8;
          }
          return prev + 0.1;
        });
      }, 100);
    }
  };

  const resetDemo = () => {
    setDemoStep('traditional');
    setTraditionalTime(0);
    setSwiftAuthTime(0);
    setIsRunning(false);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Live Authentication Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the dramatic difference between traditional 2FA and SwiftAuth. 
            See how we achieve 99% time reduction in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Traditional 2FA Demo */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-red-500/30">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-900/50 rounded-2xl flex items-center justify-center">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Traditional 2FA</h3>
              <p className="text-gray-400">The painful process you know too well</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <Smartphone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-300">Wait for SMS (15-60s)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <Key className="h-5 w-5 text-gray-500" />
                <span className="text-gray-300">Open authenticator app</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-gray-300">Check email backup</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {traditionalTime.toFixed(1)}s
              </div>
              <button
                onClick={() => startDemo('traditional')}
                disabled={isRunning}
                className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isRunning && demoStep === 'traditional' ? 'Running...' : 'Start Traditional Demo'}
              </button>
            </div>
          </div>

          {/* SwiftAuth Demo */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-green-500/30">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-900/50 rounded-2xl flex items-center justify-center">
                <Fingerprint className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SwiftAuth</h3>
              <p className="text-gray-400">Authentication reimagined</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 p-3 bg-green-900/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-300">Biometric verification</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-900/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-300">Pre-authenticated tokens</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-900/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-300">Instant access granted</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {swiftAuthTime.toFixed(1)}s
              </div>
              <button
                onClick={() => startDemo('swiftauth')}
                disabled={isRunning}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {isRunning && demoStep === 'swiftauth' ? 'Running...' : 'Start SwiftAuth Demo'}
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Results */}
        {demoStep === 'comparison' && traditionalTime > 0 && swiftAuthTime > 0 && (
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">Results</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-2">Traditional 2FA</div>
                <div className="text-4xl font-bold text-red-300">{traditionalTime.toFixed(1)}s</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">SwiftAuth</div>
                <div className="text-4xl font-bold text-green-300">{swiftAuthTime.toFixed(1)}s</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Time Saved</div>
                <div className="text-4xl font-bold text-yellow-300">
                  {Math.round(((traditionalTime - swiftAuthTime) / traditionalTime) * 100)}%
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={resetDemo}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Run Demo Again
              </button>
              <button
                onClick={() => onViewChange('dashboard')}
                className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Try SwiftAuth Dashboard
              </button>
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">How SwiftAuth Works</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Setup",
                description: "Connect all your 2FA-enabled accounts once",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2", 
                title: "Smart Learning",
                description: "AI learns your usage patterns and pre-authenticates",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "3",
                title: "Biometric Unlock",
                description: "Single fingerprint or face scan for instant access",
                color: "from-green-500 to-green-600"
              },
              {
                step: "4",
                title: "Seamless Login",
                description: "Automatic code injection and form completion",
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
