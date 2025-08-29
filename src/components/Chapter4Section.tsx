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
    // Przekierowanie na podstronę /form używając React Router
    navigate('/form');
  };

  const steps = [
    {
      icon: '',
      title: 'Podziel się',
      description: 'Opowiedz Echo o swoim dniu',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: '',
      title: 'Echo słucha i zadaje pytania',
      description: 'AI analizuje i rozumie Twoje potrzeby',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '',
      title: 'Otrzymaj wsparcie',
      description: 'Personalizowane techniki i porady',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '',
      title: 'Rozwijaj się',
      description: 'Buduj codzienne nawyki mindfulness',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section 
      id="chapter5" 
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-cyan-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-yellow-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s', animationDuration: '5s'}} />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}} />

        {/* Sparkle effects */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full animate-ping"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Sun-like radiating lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-t from-transparent via-emerald-400/20 to-transparent animate-pulse"
              style={{
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: '0 100px',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center my-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-yellow-400 mb-6 drop-shadow-2xl leading-tight">
            Porozmawiaj z Echo dzisiaj
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Sprawdź, jak codzienny kontakt z AI może pomóc Ci odzyskać spokój i balans. 
            <span className="text-emerald-300"> Twój dzień może być lżejszy – zacznij od jednej wiadomości.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Interactive Chat Demo */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
              
              {/* Chat Header */}
              <div className="flex items-center mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mr-4 relative">
                  <span className="text-white font-bold text-lg">E</span>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Echo AI</h3>
                  <p className="text-emerald-300 text-sm">Online • Gotowy do rozmowy</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-400/20">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                    <div className={`max-w-xs lg:max-w-sm p-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-emerald-400/20 text-emerald-100 border border-emerald-400/30' 
                        : 'bg-white/10 text-gray-200 border border-white/10'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-white/10 text-gray-200 border border-white/10 p-3 rounded-2xl max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex space-x-3">
                <input 
                  type="text" 
                  placeholder="Napisz wiadomość do Echo..." 
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button 
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-xl font-medium hover:from-emerald-500 hover:to-cyan-500 transition-all transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Wyślij</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Jak działa Echo?
            </h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative transition-all duration-500 hover:scale-102"
                >
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 bg-emerald-400/5">
                    
                    {/* Step number */}
                    <div className="absolute -left-3 top-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-white">
                      {index + 1}
                    </div>

                    <div className="flex items-start space-x-4 ml-4">
                      <div className="text-4xl transform transition-all duration-300 group-hover:scale-105">
                        {step.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`text-lg lg:text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-300 text-sm lg:text-base">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        {index < steps.length - 1 && (
                          <svg className="w-4 h-8 text-emerald-400/50 mt-2" fill="currentColor" viewBox="0 0 24 24">
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
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 text-sm mt-4">
            Pierwszy krok ku lepszemu samopoczuciu już na Ciebie czeka
          </p>
        </div>
      <div className='mb-16'></div>
      </div>

    </section>
  );
};

export default Chapter5ChatSection;