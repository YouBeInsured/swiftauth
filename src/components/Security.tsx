import React from 'react';
import { Shield, Lock, Eye, Server, Key, Fingerprint, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-blue-500" />,
      title: "End-to-End Encryption",
      description: "All data encrypted with AES-256 before leaving your device. Zero-knowledge architecture means we never see your credentials.",
      technical: "AES-256-GCM encryption with PBKDF2 key derivation"
    },
    {
      icon: <Fingerprint className="h-8 w-8 text-green-500" />,
      title: "Biometric Authentication",
      description: "Advanced biometric verification using device-native security chips. Your biometrics never leave your device.",
      technical: "Secure Enclave / TEE integration with FIDO2 WebAuthn"
    },
    {
      icon: <Server className="h-8 w-8 text-purple-500" />,
      title: "Distributed Architecture",
      description: "No single point of failure. Credentials distributed across multiple secure nodes with redundant backups.",
      technical: "Multi-region deployment with Byzantine fault tolerance"
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-500" />,
      title: "Zero-Knowledge Protocol",
      description: "We mathematically cannot access your data. Even under legal pressure, there's nothing to hand over.",
      technical: "SRP protocol with client-side key derivation"
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-500" />,
      title: "Open Source Security",
      description: "Core security modules are open source and audited by the community. Full transparency in our security model.",
      technical: "Regular third-party security audits and bug bounty program"
    },
    {
      icon: <Key className="h-8 w-8 text-yellow-500" />,
      title: "Hardware Security Keys",
      description: "Full support for YubiKey, Titan, and other FIDO2 hardware keys for ultimate security.",
      technical: "CTAP2 and WebAuthn Level 2 compliance"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", color: "text-green-500" },
    { name: "ISO 27001", status: "Certified", color: "text-green-500" },
    { name: "GDPR", status: "Compliant", color: "text-blue-500" },
    { name: "CCPA", status: "Compliant", color: "text-blue-500" },
    { name: "FIDO Alliance", status: "Member", color: "text-purple-500" }
  ];

  const threatModel = [
    {
      threat: "Credential Theft",
      mitigation: "Zero-knowledge encryption prevents credential access even if servers are compromised",
      risk: "Eliminated"
    },
    {
      threat: "Man-in-the-Middle",
      mitigation: "Certificate pinning and end-to-end encryption with perfect forward secrecy",
      risk: "Mitigated"
    },
    {
      threat: "Device Compromise",
      mitigation: "Hardware security module integration and remote wipe capabilities",
      risk: "Contained"
    },
    {
      threat: "Social Engineering",
      mitigation: "Multi-factor verification and anomaly detection with user confirmation",
      risk: "Detected"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-12 w-12 text-blue-500" />
            <h1 className="text-5xl font-bold text-white">
              Security First
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SwiftAuth is built on military-grade security principles. Speed without security is worthless - 
            that's why we've engineered the most secure 2FA platform ever created.
          </p>
        </div>

        {/* Security Promise */}
        <div className="mb-20 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Security Promise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">$10M</div>
                <div className="text-gray-300">Security Insurance Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">0</div>
                <div className="text-gray-300">Security Breaches Since Launch</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Enterprise-Grade Security Architecture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-gray-600">
                <div className="w-16 h-16 mb-6 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="p-3 bg-gray-900 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Technical Implementation:</div>
                  <div className="text-sm text-gray-400 font-mono">{feature.technical}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Model */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Comprehensive Threat Protection
          </h2>
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Threat Vector</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Our Mitigation</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  {threatModel.map((item, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          <span className="font-medium text-white">{item.threat}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-300">{item.mitigation}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.risk === 'Eliminated' ? 'bg-green-900 text-green-300' :
                          item.risk === 'Mitigated' ? 'bg-blue-900 text-blue-300' :
                          item.risk === 'Contained' ? 'bg-yellow-900 text-yellow-300' :
                          'bg-purple-900 text-purple-300'
                        }`}>
                          {item.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Industry Certifications & Compliance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:shadow-lg transition-all">
                <CheckCircle className={`h-8 w-8 mx-auto mb-3 ${cert.color}`} />
                <div className="font-bold text-white text-sm mb-1">{cert.name}</div>
                <div className={`text-xs ${cert.color}`}>{cert.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Audit */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Continuous Security Validation
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-900 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">Third-Party Security Audits</div>
                    <div className="text-gray-300">Quarterly penetration testing by leading cybersecurity firms</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">Real-Time Monitoring</div>
                    <div className="text-gray-300">AI-powered threat detection with instant response protocols</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-600">
              <h4 className="text-xl font-bold text-white mb-6">Latest Security Report</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Last Audit:</span>
                  <span className="text-green-500 font-medium">December 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Vulnerabilities Found:</span>
                  <span className="text-green-500 font-medium">0 Critical, 0 High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Security Score:</span>
                  <span className="text-green-500 font-medium">A+ (98/100)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime:</span>
                  <span className="text-green-500 font-medium">99.99%</span>
                </div>
              </div>
              <button className="w-full mt-6 px-4 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                View Full Report
              </button>
            </div>
          </div>
        </div>


        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Trusted by Security Professionals</h3>
            <p className="text-green-100 mb-6">
              "SwiftAuth represents the gold standard in authentication security. Their zero-knowledge 
              architecture and biometric integration set a new benchmark for the industry."
            </p>
            <div className="text-sm text-green-200">
              — Dr. Sarah Chen, Chief Security Officer at CyberDefense Corp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
