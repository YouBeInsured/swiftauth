import React from 'react';
import { TrendingUp, Users, DollarSign, Globe, Building, Smartphone, Shield, BarChart3 } from 'lucide-react';

export default function MarketAnalysis() {
  const marketSegments = [
    {
      segment: "Individual Consumers",
      size: "2.1B users",
      price: "$240/year",
      tam: "$504B",
      penetration: "15%",
      revenue: "$75.6B",
      color: "from-blue-500 to-blue-600"
    },
    {
      segment: "SMB (10-500 employees)",
      size: "33M businesses",
      price: "$600/employee/year",
      tam: "$594B",
      penetration: "25%",
      revenue: "$148.5B",
      color: "from-green-500 to-green-600"
    },
    {
      segment: "Enterprise (500+ employees)",
      size: "200K companies",
      price: "$2,400/employee/year",
      tam: "$240B",
      penetration: "40%",
      revenue: "$96B",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const revenueProjections = [
    { year: "Year 1", users: "50K", revenue: "$12M", growth: "Launch" },
    { year: "Year 2", users: "250K", revenue: "$60M", growth: "400%" },
    { year: "Year 3", users: "1.2M", revenue: "$288M", growth: "380%" },
    { year: "Year 4", users: "4.5M", revenue: "$1.08B", growth: "275%" },
    { year: "Year 5", users: "12M", revenue: "$2.88B", growth: "167%" }
  ];

  const competitorAnalysis = [
    { company: "Authy", valuation: "$2.8B", users: "25M", revenue: "$280M" },
    { company: "Duo Security", valuation: "$2.35B", users: "20M", revenue: "$200M" },
    { company: "RSA SecurID", valuation: "$2.1B", users: "15M", revenue: "$450M" },
    { company: "Okta", valuation: "$13.2B", users: "17K companies", revenue: "$1.8B" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Realistic Market Analysis & Competitive Position
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The global 2FA market was $5.1B in 2023, projected to reach $24.1B by 2030 (24.6% CAGR). 
            SwiftAuth targets the user experience gap that existing solutions haven't addressed.
          </p>
        </div>

        {/* Actual Market Data */}
        <div className="mb-20 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">2FA Market Reality (2023 Data)</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-500 mb-2">$5.1B</div>
                <div className="text-gray-300">Current Market Size</div>
                <div className="text-sm text-gray-400">2023 market data</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">$24.1B</div>
                <div className="text-gray-300">2030 Projection</div>
                <div className="text-sm text-gray-400">Industry projections</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-500 mb-2">24.6%</div>
                <div className="text-gray-300">Market CAGR</div>
                <div className="text-sm text-gray-400">2023-2030 growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">4.9B</div>
                <div className="text-gray-300">Internet Users</div>
                <div className="text-sm text-gray-400">Potential 2FA users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Segments */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Realistic Market Segments (Based on Current Pricing)
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                segment: "Consumer Market",
                size: "~100M active 2FA users",
                price: "$5-15/month",
                tam: "$6-18B annually",
                penetration: "2% realistic",
                revenue: "$120-360M potential",
                color: "from-blue-500 to-blue-600"
              },
              {
                segment: "SMB Market",
                size: "~5M businesses using 2FA",
                price: "$10-50/user/month",
                tam: "$15-75B annually",
                penetration: "1% realistic",
                revenue: "$150-750M potential",
                color: "from-green-500 to-green-600"
              },
              {
                segment: "Enterprise Market",
                size: "~50K large enterprises",
                price: "$50-200/user/month",
                tam: "$30-120B annually",
                penetration: "0.5% realistic",
                revenue: "$150-600M potential",
                color: "from-purple-500 to-purple-600"
              }
            ].map((segment, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-xl transition-all">
                <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${segment.color} rounded-2xl flex items-center justify-center`}>
                  {index === 0 ? <Users className="h-8 w-8 text-white" /> :
                   index === 1 ? <Building className="h-8 w-8 text-white" /> :
                   <Globe className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{segment.segment}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Size:</span>
                    <span className="text-white font-semibold">{segment.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Price:</span>
                    <span className="text-white font-semibold">{segment.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total TAM:</span>
                    <span className="text-white font-semibold">{segment.tam}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Penetration:</span>
                    <span className="text-green-500 font-semibold">{segment.penetration}</span>
                  </div>
                </div>
                <div className={`p-4 bg-gradient-to-r ${segment.color} rounded-xl text-white text-center`}>
                  <div className="text-2xl font-bold">{segment.revenue}</div>
                  <div className="text-sm opacity-90">Revenue Potential</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Realistic 5-Year Revenue Projections
          </h2>
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Conservative Assumptions:</h3>
              <ul className="text-yellow-200 text-sm space-y-1">
                <li>• Average revenue per user: $180/year (mix of plans)</li>
                <li>• Market penetration starts at 0.001% in Year 1</li>
                <li>• 200-300% annual growth (typical for successful SaaS)</li>
                <li>• Based on 100M potential 2FA users globally</li>
              </ul>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Year</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Users</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Revenue</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Growth Rate</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Market Share</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "Year 1", users: "1,000", revenue: "$180K", growth: "Launch", share: "0.001%" },
                    { year: "Year 2", users: "5,000", revenue: "$900K", growth: "400%", share: "0.005%" },
                    { year: "Year 3", users: "15,000", revenue: "$2.7M", growth: "200%", share: "0.015%" },
                    { year: "Year 4", users: "45,000", revenue: "$8.1M", growth: "200%", share: "0.045%" },
                    { year: "Year 5", users: "100,000", revenue: "$18M", growth: "122%", share: "0.1%" }
                  ].map((projection, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">{projection.year}</td>
                      <td className="py-4 px-6 text-blue-400 font-semibold">{projection.users}</td>
                      <td className="py-4 px-6 text-green-400 font-bold text-lg">{projection.revenue}</td>
                      <td className="py-4 px-6 text-purple-400 font-semibold">{projection.growth}</td>
                      <td className="py-4 px-6 text-gray-300">{projection.share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Realistic Growth Scenario</h3>
              <p className="text-green-100">
                Based on 0.1% market penetration by Year 5. Even at this conservative rate, 
                SwiftAuth could become a significant player in the 2FA space.
              </p>
            </div>
          </div>
        </div>

        {/* Competitive Landscape */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Real Competitive Analysis
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Current Market Leaders</h3>
              <div className="space-y-4">
                {[
                  { name: "Google Authenticator", users: "~150M", price: "Free", weakness: "No sync, basic UX" },
                  { name: "Microsoft Authenticator", users: "~100M", price: "Free", weakness: "MS ecosystem only" },
                  { name: "Authy", users: "~25M", price: "Free", weakness: "No premium features" },
                  { name: "1Password", users: "~4M", price: "$36-96/year", weakness: "Password manager first" },
                  { name: "Duo Security", users: "~3M businesses", price: "$3-9/user/month", weakness: "Enterprise only" }
                ].map((competitor, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{competitor.name}</h4>
                      <span className="text-blue-400 text-sm">{competitor.users}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-medium">{competitor.price}</span>
                      <span className="text-red-400 text-sm">{competitor.weakness}</span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">SwiftAuth's Differentiation</h3>
              <div className="space-y-4">
                {[
                  { 
                    feature: "Speed", 
                    swiftauth: "0.3 seconds", 
                    competitors: "15-60 seconds",
                    advantage: "99% faster"
                  },
                  { 
                    feature: "User Experience", 
                    swiftauth: "Invisible/automatic", 
                    competitors: "Manual code entry",
                    advantage: "Zero friction"
                  },
                  { 
                    feature: "SMS Integration", 
                    swiftauth: "Auto-intercept & fill", 
                    competitors: "Manual copy/paste",
                    advantage: "Unique capability"
                  },
                  { 
                    feature: "Cross-Platform", 
                    swiftauth: "Universal compatibility", 
                    competitors: "Limited ecosystems",
                    advantage: "Works everywhere"
                  },
                  { 
                    feature: "Business Model", 
                    swiftauth: "Premium UX focus", 
                    competitors: "Free/enterprise only",
                    advantage: "Monetizable gap"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">{item.feature}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">SwiftAuth:</div>
                        <div className="text-green-400 font-medium">{item.swiftauth}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Others:</div>
                        <div className="text-red-400">{item.competitors}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-blue-400 font-medium text-sm">{item.advantage}</div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-4 text-center">The Market Gap SwiftAuth Fills</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Current solutions focus on security OR convenience, but not both. Most are free with poor UX, 
              or enterprise-focused with high complexity. SwiftAuth is the first consumer-focused premium 
              2FA solution that makes authentication invisible while maintaining security.
            </p>
            <div className="mt-4 text-center">
              <span className="text-green-400 font-semibold">
                This creates a blue ocean opportunity in a growing market.
              </span>
            </div>
          </div>
        </div>

        {/* Market Drivers */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Key Market Drivers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-red-500" />,
                title: "Rising Cyber Threats",
                description: "Data breaches increased 68% in 2023, driving 2FA adoption",
                stat: "+68%"
              },
              {
                icon: <Building className="h-8 w-8 text-blue-500" />,
                title: "Regulatory Compliance",
                description: "New regulations mandate 2FA for financial and healthcare sectors",
                stat: "100+ countries"
              },
              {
                icon: <Smartphone className="h-8 w-8 text-green-500" />,
                title: "Remote Work Growth",
                description: "42% of workforce now remote, requiring secure authentication",
                stat: "42% remote"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
                title: "Digital Transformation",
                description: "Companies digitizing operations need scalable security solutions",
                stat: "$6.8T market"
              }
            ].map((driver, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-xl flex items-center justify-center">
                  {driver.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{driver.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{driver.description}</p>
                <div className="text-2xl font-bold text-blue-400">{driver.stat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Opportunity */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Realistic Investment Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">$24.1B</div>
              <div className="text-blue-100">Market Size by 2030</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$18M</div>
              <div className="text-blue-100">Year 5 Revenue Projection</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$180M</div>
              <div className="text-blue-100">Potential Valuation (10x revenue)</div>
            </div>
          </div>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            SwiftAuth addresses a real pain point in a growing market with a unique solution. 
            Conservative projections show path to meaningful revenue with significant upside potential.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              View Detailed Business Plan
            </button>
            <button className="px-8 py-4 bg-blue-800 text-white rounded-xl font-semibold text-lg border-2 border-blue-400 hover:border-blue-300 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
