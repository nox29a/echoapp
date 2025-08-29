import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chapter5ChatSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Simulate chat conversation
    const demoMessages = [
      { sender: 'user', text: 'Cześć Echo, dziś miałem trudny dzień w pracy...', delay: 2000 },
      { sender: 'echo', text: 'Rozumiem, że to był wymagający dzień. Chcesz mi opowiedzieć, co konkretnie było trudne?', delay: 3500 },
      { sender: 'user', text: 'Czułem się przytłoczony zadaniami i nie wiedziałem od czego zacząć', delay: 5000 },
      { sender: 'echo', text: 'To całkowicie normalne uczucie. Spróbujmy techniki "jednego następnego kroku" - zamiast myśleć o wszystkich zadaniach, skupmy się tylko na najbliższym. Co myślisz?', delay: 7000 }
    ];

    demoMessages.forEach((message, index) => {
      setTimeout(() => {
        if (message.sender === 'echo') {
          setIsTyping(true);
          setTimeout(() => {
            setChatMessages(prev => [...prev, message]);
            setIsTyping(false);
          }, 1000);
        } else {
          setChatMessages(prev => [...prev, message]);
        }
      }, message.delay);
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSendMessage = () => {
    navigate('/form');
  };

  const steps = [
    {
      icon: '💬',
      title: 'Podziel się',
      description: 'Opowiedz Echo o swoim dniu',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: '🎯',
      title: 'Echo słucha i zadaje pytania',
      description: 'AI analizuje i rozumie Twoje potrzeby',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '💡',
      title: 'Otrzymaj wsparcie',
      description: 'Personalizowane techniki i porady',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🌱',
      title: 'Rozwijaj się',
      description: 'Buduj codzienne nawyki mindfulness',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section 
      id="chapter5" 
      className="min-h-screen relative flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900"
    >
      {/* Animated Background - Responsywne rozmiary */}
      <div className="absolute inset-0">
        {/* Floating orbs - dostosowane do rozmiaru ekranu */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-emerald-400/10 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute top-1/4 sm:top-1/3 right-8 sm:right-20 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-cyan-400/8 rounded-full blur-lg sm:blur-xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}} />
        <div className="absolute bottom-1/3 left-1/6 sm:left-1/4 w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 bg-yellow-400/8 rounded-full blur-lg sm:blur-xl animate-pulse" style={{animationDelay: '4s', animationDuration: '5s'}} />
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-purple-400/10 rounded-full blur-lg sm:blur-xl animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}} />

        {/* Sparkle effects - mniej na mniejszych ekranach */}
        {[...Array(window.innerWidth > 768 ? 20 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-emerald-400/40 rounded-full animate-ping"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Sun-like radiating lines - ukryte na bardzo małych ekranach */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-12 sm:h-16 md:h-20 bg-gradient-to-t from-transparent via-emerald-400/20 to-transparent animate-pulse"
              style={{
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: '0 60px',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-yellow-400 mb-4 sm:mb-6 drop-shadow-2xl leading-tight px-2">
            Porozmawiaj z Echo dzisiaj
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Sprawdź, jak codzienny kontakt z AI może pomóc Ci odzyskać spokój i balans. 
            <span className="text-emerald-300 block sm:inline"> Twój dzień może być lżejszy – zacznij od jednej wiadomości.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center mb-12 lg:mb-16">
          
          {/* Interactive Chat Demo */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} order-2 lg:order-1`}>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
              
              {/* Chat Header */}
              <div className="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 relative flex-shrink-0">
                  <span className="text-white font-bold text-base sm:text-lg">E</span>
                  <div className="absolute -bottom-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full border-2 border-slate-900"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-base sm:text-lg truncate">Echo AI</h3>
                  <p className="text-emerald-300 text-xs sm:text-sm">Online • Gotowy do rozmowy</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-64 sm:h-72 md:h-80 overflow-y-auto mb-3 sm:mb-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-emerald-400/20 px-1">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                    <div className={`max-w-[85%] sm:max-w-xs lg:max-w-sm p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-emerald-400/20 text-emerald-100 border border-emerald-400/30' 
                        : 'bg-white/10 text-gray-200 border border-white/10'
                    }`}>
                      <p className="text-xs sm:text-sm leading-relaxed break-words">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-white/10 text-gray-200 border border-white/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <input 
                  type="text" 
                  placeholder="Napisz wiadomość do Echo..." 
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button 
                  onClick={handleSendMessage}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-lg sm:rounded-xl font-medium hover:from-emerald-500 hover:to-cyan-500 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Wyślij</span>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} order-1 lg:order-2`}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left px-2">
              Jak działa Echo?
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative transition-all duration-500 hover:scale-102"
                >
                  <div className="relative bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-400/30 bg-emerald-400/5">
                    
                    {/* Step number */}
                    <div className="absolute -left-2 sm:-left-3 top-4 sm:top-6 w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-white flex-shrink-0">
                      {index + 1}
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 ml-3 sm:ml-4">
                      <div className="text-2xl sm:text-3xl md:text-4xl transform transition-all duration-300 group-hover:scale-105 flex-shrink-0">
                        {step.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow indicator - ukryte na bardzo małych ekranach */}
                      <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
                        {index < steps.length - 1 && (
                          <svg className="w-3 sm:w-4 h-6 sm:h-8 text-emerald-400/50 mt-1 sm:mt-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90)" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} px-2`}>
          <p className="text-gray-400 text-xs sm:text-sm">
            Pierwszy krok ku lepszemu samopoczuciu już na Ciebie czeka
          </p>
        </div>
        
        <div className='mb-8 sm:mb-12 lg:mb-16'></div>
      </div>
    </section>
  );
};

export default Chapter5ChatSection;