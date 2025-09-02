import React, { useState } from 'react';
import Header from './src/components/Header';
import HomePage from './components/HomePage';
import Demo from './components/Demo';
import SMSManager from './components/SMSManager';
import Security from './components/Security';
import Dashboard from './components/src/components/Dashboard';
import Pricing from './components/Pricing';
import Upsells from './components/Upsells';
import MarketAnalysis from './components/MarketAnalysis';
import BetaLaunch from './components/BetaLaunch';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onViewChange={setCurrentView} />;
      case 'demo':
        return <Demo onViewChange={setCurrentView} />;
      case 'sms':
        return <SMSManager />;
      case 'security':
        return <Security />;
      case 'dashboard':
        return <Dashboard />;
      case 'pricing':
        return <Pricing />;
      case 'upsells':
        return <Upsells />;
      case 'market':
        return <MarketAnalysis />;
      case 'beta':
        return <BetaLaunch />;
      default:
        return <HomePage onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      {renderView()}
    </div>
  );
}

export default App;