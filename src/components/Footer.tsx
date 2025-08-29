import React, { useState, useEffect } from 'react';

const EchoFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFloatingElement, setActiveFloatingElement] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Animacja floating elementów
    const floatingInterval = setInterval(() => {
      setActiveFloatingElement(prev => (prev + 1) % 6);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(floatingInterval);
    };
  }, []);

  const footerLinks = {
    product: [
      { name: 'Jak działa Echo', href: '#how-it-works' },
      { name: 'Rozmowa głosowa', href: '#voice-chat' },
      { name: 'Techniki mindfulness', href: '#techniques' },
      { name: 'Personalizacja', href: '#personalization' }
    ],
    resources: [
      { name: 'Blog o mindfulness', href: '#blog' },
      { name: 'Przewodniki', href: '#guides' },
      { name: 'Wsparcie', href: '#support' },
      { name: 'FAQ', href: '#faq' }
    ],
    company: [
      { name: 'O nas', href: '#about' },
      { name: 'Prywatność', href: '#privacy' },
      { name: 'Warunki użytkowania', href: '#terms' },
      { name: 'Kontakt', href: '#contact' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#twitter' },
    { name: 'LinkedIn', icon: '💼', href: '#linkedin' },
    { name: 'Instagram', icon: '📷', href: '#instagram' },
    { name: 'YouTube', icon: '📺', href: '#youtube' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Neural network inspired floating elements */}
        <div 
          className={`absolute w-2 h-2 bg-emerald-400 rounded-full shadow-emerald-400/50 shadow-lg transition-all duration-1000 ${
            activeFloatingElement === 0 ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{ 
            top: '15%', 
            left: '8%',
            animationDelay: '0s',
            boxShadow: '0 0 15px rgba(52, 211, 153, 0.4)'
          }}
        />
        <div 
          className={`absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg transition-all duration-1000 ${
            activeFloatingElement === 1 ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{ 
            top: '35%', 
            right: '12%',
            animationDelay: '1s',
            boxShadow: '0 0 12px rgba(34, 211, 238, 0.4)'
          }}
        />
        <div 
          className={`absolute w-1 h-1 bg-yellow-400/60 rounded-full transition-all duration-1000 ${
            activeFloatingElement === 2 ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{ top: '60%', left: '15%', animationDelay: '2s' }}
        />
        <div 
          className={`absolute w-1 h-1 bg-purple-400/60 rounded-full transition-all duration-1000 ${
            activeFloatingElement === 3 ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{ top: '25%', left: '85%', animationDelay: '3s' }}
        />
        <div 
          className={`absolute w-1 h-1 bg-emerald-400/60 rounded-full transition-all duration-1000 ${
            activeFloatingElement === 4 ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{ top: '70%', right: '25%', animationDelay: '4s' }}
        />
        <div 
          className={`absolute w-1 h-1 bg-cyan-400/60 rounded-full transition-all duration-1000 ${
            activeFloatingElement === 5 ? 'animate-ping' : 'animate-pulse'
          }`}
          style={{ top: '80%', left: '50%', animationDelay: '5s' }}
        />

        {/* Connection lines */}
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-pulse hidden md:block"
          style={{
            top: '20%',
            left: '10%',
            width: '25%',
            transform: 'rotate(15deg)',
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse hidden lg:block"
          style={{
            top: '65%',
            right: '15%',
            width: '20%',
            transform: 'rotate(-25deg)',
            animationDelay: '3s'
          }}
        />

        {/* Soft glowing areas */}
        <div 
          className="absolute w-40 h-40 bg-emerald-400/3 rounded-full blur-3xl animate-pulse"
          style={{ top: '10%', left: '5%', animationDelay: '0s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-32 h-32 bg-cyan-400/3 rounded-full blur-2xl animate-pulse"
          style={{ bottom: '20%', right: '10%', animationDelay: '4s', animationDuration: '10s' }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Top section with logo and newsletter */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Echo
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Twój codzienny towarzysz mindfulness. Odkryj spokój i równowagę dzięki personalizowanemu wsparciu AI.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                </div>
                <span className="text-emerald-300 text-sm font-medium">Zawsze gotowy do rozmowy</span>
              </div>
            </div>

            {/* Newsletter Section */}
    
          </div>

          {/* Links Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Product Links */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-lg">Produkt</h5>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-lg">Zasoby</h5>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-lg">Firma</h5>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-300 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-white font-semibold mb-4 text-lg">Śledź nas</h5>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-emerald-400/20 group-hover:to-cyan-400/20 transition-all duration-200">
                      <span className="text-sm">{social.icon}</span>
                    </div>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm">
                © 2024 Echo AI. Wszystkie prawa zastrzeżone.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Wersja 1.0</span>
                <span>•</span>
                <span>Bezpieczne szyfrowanie</span>
                <span>•</span>
                <span>GDPR Compliant</span>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Wszystkie systemy działają</span>
              </div>
              <div className="text-gray-400 text-sm">
                99.9% uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/50 via-cyan-400/50 to-yellow-400/50"></div>
    </footer>
  );
};

export default EchoFooter;