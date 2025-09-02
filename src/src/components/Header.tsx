import React, { useState } from 'react';
import { Shield, Menu, X, Home, Play, Users, MessageSquare, Lock, LayoutDashboard, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'demo', label: 'Demo', icon: Play },
    { id: 'beta', label: 'Beta', icon: Users },
    { id: 'sms', label: 'SMS', icon: MessageSquare },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'upsells', label: 'Premium', icon: TrendingUp },
    { id: 'market', label: 'Market', icon: BarChart3 }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SwiftAuth
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-700/50">
                <button className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all">
                  Sign In
                </button>
                <button className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
