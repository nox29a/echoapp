import React from 'react';

const NeuralNetworkBackground = () => {
  return (
    <section className="min-h-screen h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Neural Network Elements */}
      <div className="absolute inset-0">
        {/* Główne węzły - responsywne rozmiary */}
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full shadow-emerald-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '15%', 
            left: '12%',
            animationDelay: '0s',
            boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '25%', 
            left: '75%',
            animationDelay: '1s',
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full shadow-emerald-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '45%', 
            left: '15%',
            animationDelay: '2s',
            boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '65%', 
            left: '80%',
            animationDelay: '1.5s',
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full shadow-emerald-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '75%', 
            left: '25%',
            animationDelay: '0.5s',
            boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '35%', 
            right: '10%',
            animationDelay: '2.5s',
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
          }}
        />

        {/* Mniejsze kropki - więcej dla gęstszej sieci */}
        <div 
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full animate-ping"
          style={{ top: '20%', left: '35%', animationDelay: '0s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
          style={{ top: '40%', left: '65%', animationDelay: '1s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full animate-ping"
          style={{ top: '55%', left: '45%', animationDelay: '2s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
          style={{ top: '70%', left: '60%', animationDelay: '1.5s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full animate-ping"
          style={{ top: '30%', left: '85%', animationDelay: '3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
          style={{ top: '80%', left: '50%', animationDelay: '0.8s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full animate-ping"
          style={{ top: '10%', left: '55%', animationDelay: '2.2s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
          style={{ top: '85%', left: '15%', animationDelay: '1.8s' }}
        />
        
        {/* Dodatkowe kropki dla gęstszej sieci */}
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden sm:block"
          style={{ top: '8%', left: '25%', animationDelay: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '18%', left: '90%', animationDelay: '2.8s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden md:block"
          style={{ top: '32%', left: '28%', animationDelay: '1.3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '42%', left: '92%', animationDelay: '3.5s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden sm:block"
          style={{ top: '52%', left: '8%', animationDelay: '0.3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '62%', left: '25%', animationDelay: '2.1s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden md:block"
          style={{ top: '72%', left: '88%', animationDelay: '4.2s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '82%', left: '35%', animationDelay: '1.7s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden sm:block"
          style={{ top: '92%', left: '75%', animationDelay: '3.1s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '38%', left: '48%', animationDelay: '0.7s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden md:block"
          style={{ top: '58%', left: '72%', animationDelay: '2.4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '22%', left: '68%', animationDelay: '4.1s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden sm:block"
          style={{ top: '78%', left: '42%', animationDelay: '1.9s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '48%', left: '82%', animationDelay: '3.3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-ping hidden md:block"
          style={{ top: '28%', left: '52%', animationDelay: '0.9s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"
          style={{ top: '88%', left: '62%', animationDelay: '2.6s' }}
        />

        {/* Linie połączeń - responsywne */}
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse hidden sm:block"
          style={{
            top: '18%',
            left: '15%',
            width: '20%',
            transform: 'rotate(15deg)',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"
          style={{
            top: '28%',
            left: '55%',
            width: '18%',
            transform: 'rotate(-25deg)',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse hidden md:block"
          style={{
            top: '48%',
            left: '18%',
            width: '25%',
            transform: 'rotate(35deg)',
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"
          style={{
            top: '68%',
            left: '60%',
            width: '20%',
            transform: 'rotate(-15deg)',
            animationDelay: '3s'
          }}
        />
        
        {/* Dodatkowe linie dla większych ekranów */}
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-pulse hidden lg:block"
          style={{
            top: '35%',
            left: '25%',
            width: '15%',
            transform: 'rotate(60deg)',
            animationDelay: '1.8s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-pulse hidden sm:block"
          style={{
            top: '58%',
            left: '70%',
            width: '22%',
            transform: 'rotate(-45deg)',
            animationDelay: '3.2s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-pulse hidden md:block"
          style={{
            top: '75%',
            left: '35%',
            width: '18%',
            transform: 'rotate(25deg)',
            animationDelay: '0.6s'
          }}
        />

        {/* Pionowe linie - responsywne */}
        <div
          className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-pulse hidden sm:block"
          style={{
            top: '20%',
            left: '40%',
            height: '6rem',
            animationDelay: '2.5s'
          }}
        />
        <div
          className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"
          style={{
            top: '40%',
            left: '75%',
            height: '6rem',
            animationDelay: '1.2s'
          }}
        />
        <div
          className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-pulse hidden md:block"
          style={{
            top: '60%',
            left: '30%',
            height: '4rem',
            animationDelay: '3.7s'
          }}
        />

        {/* Subtelne cząsteczki */}
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '25%', left: '20%', animationDelay: '0s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '45%', left: '80%', animationDelay: '2s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '65%', left: '40%', animationDelay: '4s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '15%', left: '90%', animationDelay: '6s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '85%', left: '70%', animationDelay: '1s', animationDuration: '8s' }}
        />

        {/* Większe świetliste obszary */}
        <div 
          className="absolute w-32 h-32 bg-emerald-400/5 rounded-full blur-xl animate-pulse"
          style={{ top: '10%', left: '10%', animationDelay: '0s', animationDuration: '6s' }}
        />
        <div 
          className="absolute w-24 h-24 bg-cyan-400/5 rounded-full blur-xl animate-pulse"
          style={{ top: '60%', right: '15%', animationDelay: '3s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-28 h-28 bg-emerald-400/5 rounded-full blur-xl animate-pulse"
          style={{ bottom: '20%', left: '20%', animationDelay: '1.5s', animationDuration: '7s' }}
        />
      </div>

      {/* Interactive floating orb - centralized AI presence */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
        <div className="relative">
          {/* Main orb */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-emerald-400/20 via-cyan-400/30 to-purple-400/20 rounded-full blur-sm animate-pulse backdrop-blur-lg border border-emerald-400/30" 
               style={{animationDuration: '3s'}}>
          </div>
          
          {/* Inner core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 rounded-full animate-ping backdrop-blur-md"
               style={{animationDuration: '2s'}}>
          </div>
          
          {/* Core center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50">
          </div>

          {/* Orbiting particles */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin" style={{animationDuration: '20s'}}>
              <div className="w-2 h-2 bg-emerald-400 rounded-full absolute" style={{top: '-80px', left: '-1px'}}></div>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute" style={{top: '56px', right: '-56px', transform: 'rotate(120deg)'}}></div>
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full absolute" style={{top: '56px', left: '-56px', transform: 'rotate(240deg)'}}></div>
            </div>
          </div>

          {/* Energy rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 border border-emerald-400/10 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '0s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[28rem] sm:h-[28rem] border border-cyan-400/5 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* Main content - responsywny */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40 md:mt-48">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-2xl mb-4 sm:mb-6">
          Echo
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
          Twój codzienny towarzysz mindfulness
        </p>
        
        {/* Interactive prompt */}
        <div className="group cursor-pointer max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base font-medium">
                "Jak się dziś czujesz?"
              </p>
            </div>
<a href="#echo-voice" className="inline-block">
  <p className="text-xs text-emerald-300/70 mt-2 group-hover:text-emerald-300 transition-colors">
    Kliknij, aby rozpocząć rozmowę z Echo
  </p>
</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - responsywny */}
      <div className="absolute bottom-4 sm:bottom-6 animate-bounce text-cyan-300 text-xl sm:text-2xl">
        ↓
      </div>
    </section>
  );
};

export default NeuralNetworkBackground;