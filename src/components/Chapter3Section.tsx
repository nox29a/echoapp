import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chapter3Section = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Auto-switch between features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  
    const handleDiscoverClick = () => {
      navigate('/form');
  };

  const features = [
    {
      id: 'checkin',
      icon: '',
      title: 'Codzienny Check-in',
      description: 'Kilka słów o Twoim dniu',
      details: 'Zacznij każdy dzień od krótkiej refleksji. Echo pomoże Ci zrozumieć swoje emocje i potrzeby.',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      mockup: (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/30 max-w-sm mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-2" />
            <span className="text-cyan-300 text-sm font-medium">Dziś - 28 sierpnia</span>
          </div>
          <h4 className="text-white font-semibold mb-3">Jak się dziś czujesz?</h4>
          <div className="flex space-x-2 mb-4">
            {['😊', '😐', '😔', '😴', '😤'].map((emoji, i) => (
              <button key={i} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg transition-all ${i === 1 ? 'border-cyan-400 bg-cyan-400/20' : 'border-white/20 hover:border-cyan-400/50'}`}>
                {emoji}
              </button>
            ))}
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="text-gray-300 text-sm">Dzisiaj czuję się trochę przytłoczony pracą...</span>
            <div className="w-2 h-4 bg-cyan-400 animate-pulse inline-block ml-1" />
          </div>
        </div>
      )
    },
    {
      id: 'tips',
      icon: '',
      title: 'Szybkie Wskazówki',
      description: 'Proste praktyki przywracające spokój',
      details: 'Otrzymuj spersonalizowane techniki mindfulness dopasowane do Twojego aktualnego stanu emocjonalnego.',
      color: 'from-lime-400 to-green-500',
      bgColor: 'bg-lime-400/10',
      borderColor: 'border-lime-400/30',
      mockup: (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-lime-400/30 max-w-sm mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center mr-3">
              💡
            </div>
            <span className="text-lime-300 font-medium">Wskazówka dla Ciebie</span>
          </div>
          <h4 className="text-white font-semibold mb-3">Technika 5-4-3-2-1</h4>
          <p className="text-gray-300 text-sm mb-4">
            Znajdź 5 rzeczy, które widzisz, 4 które słyszysz, 3 które dotykasz...
          </p>
          <div className="flex space-x-3">
            <button className="flex-1 bg-lime-400/20 text-lime-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-400/30 transition-all">
              Rozpocznij
            </button>
            <button className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm hover:border-lime-400/50 transition-all">
              Później
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'tracking',
      icon: '',
      title: 'Śledzenie Nastroju',
      description: 'Obserwuj progres i kontroluj stres',
      details: 'Wizualizuj swoje emocjonalne wzorce i odkryj, co naprawdę wpływa na Twoje samopoczucie.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      mockup: (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-purple-300 font-medium">Twój progres</span>
            <span className="text-xs text-gray-400">Ostatnie 7 dni</span>
          </div>
          
          {/* Mini chart */}
          <div className="mb-4">
            <div className="flex items-end space-x-2 h-20">
              {[60, 45, 75, 80, 65, 85, 90].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500 to-pink-400 rounded-t transition-all duration-1000"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-400 mt-1">
                    {['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-white/5 rounded-lg p-2">
              <div className="text-purple-300 font-bold">7</div>
              <div className="text-xs text-gray-400">dni z rzędu</div>
            </div>
            <div className="bg-white/5 rounded-lg p-2">
              <div className="text-pink-300 font-bold">+23%</div>
              <div className="text-xs text-gray-400">lepszy nastrój</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="chapter3" 
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/50 "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs with different colors */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0s', animationDuration: '6s'}} />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-lime-400/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-purple-400/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s', animationDuration: '7s'}} />
        
        {/* Neural network dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center my-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-lime-400 to-purple-400 mb-6 drop-shadow-2xl leading-tight">
            Poznaj Echo
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Twój osobisty przewodnik w świecie mindfulness. 
            <span className="text-cyan-300"> Każdy dzień staje się łatwiejszy i bardziej świadomy.</span>
          </p>
        </div>

        {/* Feature showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Feature selection */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'scale-105' 
                    : 'hover:scale-102 opacity-70 hover:opacity-90'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${
                  activeFeature === index 
                    ? `${feature.borderColor} ${feature.bgColor}` 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  
                  {/* Active indicator */}
                  {activeFeature === index && (
                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-cyan-400 to-lime-400 rounded-r" />
                  )}

                  <div className="flex items-start space-x-4">
                    <div className={`text-4xl lg:text-5xl transform transition-all duration-300 ${
                      activeFeature === index ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-all duration-300 ${
                        activeFeature === index 
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${feature.color}` 
                          : 'text-white group-hover:text-cyan-300'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm lg:text-base mb-3">
                        {feature.description}
                      </p>
                      <p className={`text-gray-300 text-sm lg:text-base transition-all duration-300 ${
                        activeFeature === index ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {feature.details}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`transform transition-all duration-300 ${
                      activeFeature === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
                        <span className="text-white text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive mockup */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Phone frame */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-600">
                <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] relative overflow-hidden">
                  
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-1 bg-green-400 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-6 py-4 border-b border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-lg mr-3" />
                      <span className="text-white font-semibold text-lg">Echo</span>
                    </div>
                  </div>

                  {/* Dynamic content based on active feature */}
                  <div className="p-6 h-full">
                    <div className={`transition-all duration-500 ${activeFeature === 0 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                      {features[0].mockup}
                    </div>
                    <div className={`transition-all duration-500 ${activeFeature === 1 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                      {features[1].mockup}
                    </div>
                    <div className={`transition-all duration-500 ${activeFeature === 2 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                      {features[2].mockup}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-lime-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
   <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button 
          onClick={handleDiscoverClick}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400/20 via-lime-400/20 to-purple-400/20 rounded-full border border-cyan-400/30 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="flex space-x-2 mr-3">
            {features.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeFeature ? 'bg-cyan-400' : 'bg-white/30'}`} />
            ))}
          </div>
          <span className="text-cyan-300 font-medium">
            Odkryj pełną moc mindfulness z Echo
          </span>
          <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse ml-3" />
        </button>
        <div className='mb-16'></div>
      </div></div>
    </section>
  );
};

export default Chapter3Section;