import React, { useState, useEffect } from 'react';

const MindfulnessTechniquesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTechnique, setActiveTechnique] = useState(0);
  const [breathingStep, setBreathingStep] = useState(0);
  const [breathingActive, setBreathingActive] = useState(false);
  const [gratitudeItems, setGratitudeItems] = useState(['', '', '']);
  const [bodyPartIndex, setBodyPartIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  // Breathing exercise states
  const breathingSteps = ['Wdech...', 'Zatrzymaj...', 'Wydech...', 'Zatrzymaj...'];
  const breathingDurations = [4000, 2000, 6000, 2000]; // in milliseconds

  // Body scan parts
  const bodyParts = [
    'stopy', 'łydki', 'uda', 'biodra', 'brzuch', 
    'plecy', 'ramiona', 'ręce', 'szyja', 'twarz', 'cała głowa'
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Breathing exercise logic
  useEffect(() => {
    let interval;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingStep(prev => {
          const nextStep = (prev + 1) % 4;
          return nextStep;
        });
      }, breathingDurations[breathingStep]);
    }
    return () => clearInterval(interval);
  }, [breathingActive, breathingStep]);

  // Body scan logic
  useEffect(() => {
    let interval;
    if (isScanning) {
      interval = setInterval(() => {
        setBodyPartIndex(prev => {
          if (prev >= bodyParts.length - 1) {
            setIsScanning(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isScanning, bodyPartIndex]);

  const startBreathing = () => {
    setBreathingActive(true);
    setBreathingStep(0);
  };

  const stopBreathing = () => {
    setBreathingActive(false);
    setBreathingStep(0);
  };

  const startBodyScan = () => {
    setIsScanning(true);
    setBodyPartIndex(0);
  };

  const stopBodyScan = () => {
    setIsScanning(false);
    setBodyPartIndex(0);
  };

  const updateGratitude = (index, value) => {
    const newItems = [...gratitudeItems];
    newItems[index] = value;
    setGratitudeItems(newItems);
  };

  const techniques = [
    {
      id: 'breathing',
      title: 'Oddychanie 4-7-8',
      description: 'Skuteczna technika oddechowa do redukcji stresu i uspokojenia umysłu',
      icon: '🫁',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'from-cyan-400/10 to-blue-500/10'
    },
    {
      id: 'gratitude',
      title: 'Dziennik wdzięczności',
      description: 'Codzienne praktykowanie wdzięczności zwiększa poziom szczęścia',
      icon: '✨',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-400/10 to-orange-500/10'
    },
    {
      id: 'bodyscan',
      title: 'Skanowanie ciała',
      description: 'Świadome obserwowanie różnych części ciała dla głębokiej relaksacji',
      icon: '🧘',
      color: 'from-emerald-400 to-green-500',
      bgColor: 'from-emerald-400/10 to-green-500/10'
    },
    {
      id: 'mindful-moment',
      title: '5-4-3-2-1',
      description: 'Technika uziemiania przez świadome obserwowanie otoczenia',
      icon: '👁️',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-400/10 to-pink-500/10'
    }
  ];

  return (
    <section 
      id="mindfulness-techniques" 
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Meditation-inspired floating elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '8s'}} />
        <div className="absolute top-1/2 right-16 w-36 h-36 bg-cyan-400/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '10s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-emerald-400/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s', animationDuration: '12s'}} />
        <div className="absolute bottom-16 right-1/3 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s', animationDuration: '9s'}} />

        {/* Zen circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full animate-ping"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Flowing energy lines */}
        <div className="absolute top-1/4 left-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse transform -rotate-12" style={{animationDelay: '1s'}} />
        <div className="absolute top-3/4 right-1/4 w-1 h-28 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-pulse transform rotate-45" style={{animationDelay: '4s'}} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 mb-6 drop-shadow-2xl">
            Techniki Mindfulness
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Odkryj zestaw sprawdzonych technik, które pomogą Ci znaleźć spokój w codziennym życiu. 
            <span className="text-emerald-300"> Echo poprowadzi Cię przez każde ćwiczenie krok po kroku.</span>
          </p>
        </div>

        {/* Technique Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techniques.map((technique, index) => (
            <div
              key={technique.id}
              className={`group transition-all duration-700 ${
                activeTechnique === index ? 'scale-105' : 'hover:scale-102'
              } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setActiveTechnique(index)}
            >
              <div className={`relative bg-gradient-to-br ${technique.bgColor} backdrop-blur-md rounded-3xl p-8 border transition-all duration-300 cursor-pointer ${
                activeTechnique === index 
                  ? 'border-white/30 shadow-2xl' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                
                {/* Active indicator */}
                {activeTechnique === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                )}

                <div className="flex items-start space-x-6">
                  <div className={`text-6xl transform transition-all duration-300 ${
                    activeTechnique === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                  }`}>
                    {technique.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                      activeTechnique === index 
                        ? `text-transparent bg-clip-text bg-gradient-to-r ${technique.color}` 
                        : 'text-white group-hover:text-emerald-300'
                    }`}>
                      {technique.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {technique.description}
                    </p>
                    
                    {/* Interactive element based on technique */}
                    {technique.id === 'breathing' && activeTechnique === index && (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 transition-all duration-1000 ${
                            breathingActive 
                              ? `border-cyan-400 scale-110 shadow-lg shadow-cyan-400/50` 
                              : 'border-white/30'
                          }`}>
                            <div className={`text-lg font-semibold text-white transition-all duration-500 ${
                              breathingActive ? 'opacity-100' : 'opacity-70'
                            }`}>
                              {breathingActive ? breathingSteps[breathingStep] : 'Gotowy?'}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-4">
                          {!breathingActive ? (
                            <button
                              onClick={startBreathing}
                              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-500 hover:to-blue-600 transition-all transform hover:scale-105"
                            >
                              Rozpocznij oddychanie
                            </button>
                          ) : (
                            <button
                              onClick={stopBreathing}
                              className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-xl font-medium hover:from-red-500 hover:to-pink-600 transition-all transform hover:scale-105"
                            >
                              Zatrzymaj
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {technique.id === 'gratitude' && activeTechnique === index && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Za co jesteś dziś wdzięczny?</h4>
                        {gratitudeItems.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <span className="text-yellow-400 text-xl">✨</span>
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => updateGratitude(idx, e.target.value)}
                              placeholder={`Powód ${idx + 1}...`}
                              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 transition-all"
                            />
                          </div>
                        ))}
                        {gratitudeItems.every(item => item.trim() !== '') && (
                          <div className="mt-4 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                            <p className="text-yellow-200 text-center">
                              Wspaniałe! Praktykowanie wdzięczności wzmacnia pozytywne myślenie. 🌟
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {technique.id === 'bodyscan' && activeTechnique === index && (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="mb-4">
                            <div className="text-white text-lg mb-2">
                              {isScanning ? `Skup się na: ${bodyParts[bodyPartIndex]}` : 'Przygotuj się na skanowanie ciała'}
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${isScanning ? ((bodyPartIndex + 1) / bodyParts.length) * 100 : 0}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex justify-center space-x-4">
                            {!isScanning ? (
                              <button
                                onClick={startBodyScan}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-white rounded-xl font-medium hover:from-emerald-500 hover:to-green-600 transition-all transform hover:scale-105"
                              >
                                Rozpocznij skanowanie
                              </button>
                            ) : (
                              <button
                                onClick={stopBodyScan}
                                className="px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-xl font-medium hover:from-red-500 hover:to-pink-600 transition-all transform hover:scale-105"
                              >
                                Zatrzymaj
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {technique.id === 'mindful-moment' && activeTechnique === index && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Technika 5-4-3-2-1</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                            <span className="text-purple-400 font-bold">5</span>
                            <span className="text-gray-300">rzeczy, które widzisz</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                            <span className="text-purple-400 font-bold">4</span>
                            <span className="text-gray-300">rzeczy, których możesz dotknąć</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                            <span className="text-purple-400 font-bold">3</span>
                            <span className="text-gray-300">dźwięki, które słyszysz</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                            <span className="text-purple-400 font-bold">2</span>
                            <span className="text-gray-300">zapachy, które czujesz</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                            <span className="text-purple-400 font-bold">1</span>
                            <span className="text-gray-300">smak w ustach</span>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-purple-400/10 rounded-xl border border-purple-400/30">
                          <p className="text-purple-200 text-center text-sm">
                            Ta technika pomaga wrócić do teraźniejszości w momentach stresu lub niepokoju.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-emerald-400/5 via-cyan-400/5 to-purple-400/5 rounded-3xl p-12 backdrop-blur-lg border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Dlaczego regularna praktyka mindfulness jest ważna?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl">🧠</div>
                <h4 className="text-xl font-semibold text-emerald-300">Lepsze samopoczucie</h4>
                <p className="text-gray-300 text-sm">
                  Regularna praktyka zmniejsza poziom stresu i poprawia nastrój
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl">⚡</div>
                <h4 className="text-xl font-semibold text-cyan-300">Większa koncentracja</h4>
                <p className="text-gray-300 text-sm">
                  Mindfulness wzmacnia zdolność skupienia i świadomość
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl">💤</div>
                <h4 className="text-xl font-semibold text-purple-300">Lepszy sen</h4>
                <p className="text-gray-300 text-sm">
                  Techniki relaksacyjne poprawiają jakość i głębokość snu
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-lg text-gray-300 mb-6">
                Echo pomaga budować codzienne nawyki mindfulness dostosowane do Twojego rytmu życia
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 text-white rounded-xl font-medium hover:from-emerald-500 hover:via-cyan-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg">
                Rozpocznij swoją praktykę z Echo
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .breathing-circle {
          animation: breathe 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MindfulnessTechniquesSection;