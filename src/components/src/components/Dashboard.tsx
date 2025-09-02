import React, { useState } from 'react';
import { Plus, Shield, Clock, Smartphone, Mail, Key, Settings, BarChart3, Zap } from 'lucide-react';

export default function Dashboard() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const accounts = [
    { 
      id: 'gmail', 
      name: 'Gmail', 
      type: 'email', 
      status: 'active',
      lastUsed: '2 minutes ago',
      avgTime: '0.3s',
      color: 'from-red-500 to-red-600'
    },
    { 
      id: 'github', 
      name: 'GitHub', 
      type: 'authenticator', 
      status: 'active',
      lastUsed: '1 hour ago',
      avgTime: '0.5s',
      color: 'from-gray-700 to-gray-800'
    },
    { 
      id: 'aws', 
      name: 'AWS Console', 
      type: 'sms', 
      status: 'active',
      lastUsed: '3 hours ago',
      avgTime: '0.7s',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      id: 'banking', 
      name: 'Chase Bank', 
      type: 'sms', 
      status: 'active',
      lastUsed: 'Yesterday',
      avgTime: '0.4s',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const stats = [
    { label: 'Total Time Saved', value: '47.2 hours', icon: Clock, color: 'text-green-600' },
    { label: 'Active Accounts', value: '12', icon: Shield, color: 'text-blue-600' },
    { label: 'Avg Auth Time', value: '0.4s', icon: Zap, color: 'text-purple-600' },
    { label: 'Success Rate', value: '99.8%', icon: BarChart3, color: 'text-emerald-600' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">SwiftAuth Dashboard</h1>
          <p className="text-xl text-gray-300">Manage all your 2FA accounts from one unified platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Accounts List */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Connected Accounts</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                  <Plus className="h-5 w-5" />
                  <span>Add Account</span>
                </button>
              </div>

              <div className="space-y-4">
                {accounts.map((account) => (
                  <div 
                    key={account.id}
                    onClick={() => setSelectedAccount(account.id === selectedAccount ? null : account.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedAccount(account.id === selectedAccount ? null : account.id);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={selectedAccount === account.id}
                    className="p-6 border-2 border-gray-600 rounded-xl hover:border-blue-500 cursor-pointer transition-all hover:shadow-md bg-gray-700/50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${account.color} rounded-xl flex items-center justify-center`}>
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{account.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Last used: {account.lastUsed}</span>
                            <span>Avg time: {account.avgTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 font-medium">Active</span>
                      </div>
                    </div>

                    {selectedAccount === account.id && (
                      <div className="mt-6 pt-6 border-t border-gray-600">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-300">Authentication Type:</span>
                            <div className="mt-1 capitalize text-gray-400">{account.type}</div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-300">Security Level:</span>
                            <div className="mt-1 text-green-600">High</div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-300">Auto-Login:</span>
                            <div className="mt-1 text-blue-600">Enabled</div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-300">Sync Status:</span>
                            <div className="mt-1 text-green-600">Synchronized</div>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
                            Edit Settings
                          </button>
                          <button className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-500 transition-colors">
                            View Logs
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  Bulk Pre-Auth All Accounts
                </button>
                <button className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Security Health Check
                </button>
                <button className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Export Backup Codes
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { time: '2 min ago', action: 'Gmail login', status: 'success' },
                  { time: '1 hour ago', action: 'GitHub login', status: 'success' },
                  { time: '3 hours ago', action: 'AWS Console', status: 'success' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{activity.action}</div>
                      <div className="text-sm text-gray-400">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white text-center">
              <h4 className="text-lg font-bold mb-2">Time Saved Today</h4>
              <div className="text-3xl font-bold mb-2">12.4 minutes</div>
              <div className="text-green-100 text-sm">Equivalent to 76 hours per year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
