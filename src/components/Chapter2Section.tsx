import React from 'react';

const Chapter1Section = () => {
  return (
    <section
      id="chapter1"
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Neural Network Background - zmodyfikowany dla Chapter 1 */}
      <div className="absolute inset-0">
        {/* Główne węzły - w kolorach orange/pink dla spójności z tytułem */}
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full shadow-orange-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '20%', 
            left: '10%',
            animationDelay: '0s',
            boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full shadow-pink-500/50 shadow-lg animate-pulse"
          style={{ 
            top: '30%', 
            left: '85%',
            animationDelay: '1s',
            boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full shadow-orange-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '50%', 
            left: '8%',
            animationDelay: '2s',
            boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full shadow-pink-500/50 shadow-lg animate-pulse"
          style={{ 
            top: '70%', 
            left: '90%',
            animationDelay: '1.5s',
            boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full shadow-orange-400/50 shadow-lg animate-pulse"
          style={{ 
            top: '80%', 
            left: '15%',
            animationDelay: '0.5s',
            boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full shadow-pink-500/50 shadow-lg animate-pulse"
          style={{ 
            top: '15%', 
            right: '8%',
            animationDelay: '2.5s',
            boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
          }}
        />

        {/* Mniejsze kropki - w kolorach orange/pink */}
        <div 
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
          style={{ top: '25%', left: '30%', animationDelay: '0s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/60 rounded-full animate-ping"
          style={{ top: '45%', left: '70%', animationDelay: '1s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
          style={{ top: '60%', left: '40%', animationDelay: '2s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/60 rounded-full animate-ping"
          style={{ top: '35%', left: '55%', animationDelay: '1.5s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
          style={{ top: '75%', left: '60%', animationDelay: '3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/60 rounded-full animate-ping"
          style={{ top: '85%', left: '45%', animationDelay: '0.8s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-ping"
          style={{ top: '12%', left: '60%', animationDelay: '2.2s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/60 rounded-full animate-ping"
          style={{ top: '88%', left: '75%', animationDelay: '1.8s' }}
        />
        
        {/* Dodatkowe kropki dla gęstszej sieci */}
        <div 
          className="absolute w-1 h-1 bg-orange-400/50 rounded-full animate-ping hidden sm:block"
          style={{ top: '18%', left: '45%', animationDelay: '4s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/50 rounded-full animate-ping"
          style={{ top: '28%', left: '25%', animationDelay: '2.8s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-orange-400/50 rounded-full animate-ping hidden md:block"
          style={{ top: '38%', left: '80%', animationDelay: '1.3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/50 rounded-full animate-ping"
          style={{ top: '48%', left: '20%', animationDelay: '3.5s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-orange-400/50 rounded-full animate-ping hidden sm:block"
          style={{ top: '58%', left: '75%', animationDelay: '0.3s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/50 rounded-full animate-ping"
          style={{ top: '68%', left: '35%', animationDelay: '2.1s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-orange-400/50 rounded-full animate-ping hidden md:block"
          style={{ top: '78%', left: '80%', animationDelay: '4.2s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-500/50 rounded-full animate-ping"
          style={{ top: '22%', left: '75%', animationDelay: '1.7s' }}
        />

        {/* Linie połączeń w kolorach orange/pink */}
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-pulse hidden sm:block"
          style={{
            top: '22%',
            left: '12%',
            width: '25%',
            transform: 'rotate(20deg)',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-pulse"
          style={{
            top: '32%',
            left: '60%',
            width: '22%',
            transform: 'rotate(-30deg)',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent animate-pulse hidden md:block"
          style={{
            top: '52%',
            left: '10%',
            width: '30%',
            transform: 'rotate(40deg)',
            animationDelay: '1s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-pulse"
          style={{
            top: '72%',
            left: '65%',
            width: '25%',
            transform: 'rotate(-20deg)',
            animationDelay: '3s'
          }}
        />
        
        {/* Dodatkowe linie dla większych ekranów */}
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-orange-400/25 to-transparent animate-pulse hidden lg:block"
          style={{
            top: '42%',
            left: '30%',
            width: '18%',
            transform: 'rotate(65deg)',
            animationDelay: '1.8s'
          }}
        />
        <div
          className="absolute h-px bg-gradient-to-r from-transparent via-pink-500/25 to-transparent animate-pulse hidden sm:block"
          style={{
            top: '62%',
            left: '70%',
            width: '20%',
            transform: 'rotate(-50deg)',
            animationDelay: '3.2s'
          }}
        />

        {/* Pionowe linie */}
        <div
          className="absolute w-px bg-gradient-to-b from-transparent via-orange-400/20 to-transparent animate-pulse hidden sm:block"
          style={{
            top: '25%',
            left: '35%',
            height: '6rem',
            animationDelay: '2.5s'
          }}
        />
        <div
          className="absolute w-px bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse"
          style={{
            top: '45%',
            left: '75%',
            height: '6rem',
            animationDelay: '1.2s'
          }}
        />

        {/* Większe świetliste obszary */}
        <div 
          className="absolute w-32 h-32 bg-orange-400/5 rounded-full blur-xl animate-pulse"
          style={{ top: '15%', left: '5%', animationDelay: '0s', animationDuration: '6s' }}
        />
        <div 
          className="absolute w-28 h-28 bg-pink-500/5 rounded-full blur-xl animate-pulse"
          style={{ top: '65%', right: '10%', animationDelay: '3s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-24 h-24 bg-orange-400/5 rounded-full blur-xl animate-pulse"
          style={{ bottom: '25%', left: '15%', animationDelay: '1.5s', animationDuration: '7s' }}
        />

        {/* Subtelne cząsteczki */}
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '30%', left: '20%', animationDelay: '0s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '55%', left: '85%', animationDelay: '2s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '75%', left: '50%', animationDelay: '4s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-bounce"
          style={{ top: '20%', left: '90%', animationDelay: '6s', animationDuration: '8s' }}
        />
      </div>

      {/* Gradient overlay - mocniejszy dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>

      {/* Main content */}
      <div className="max-w-4xl relative z-10 text-content">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          Czujesz, że praca Cię przytłacza?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Masz wrażenie, że dni mijają w biegu i samotności?
        </p>
      </div>
    </section>
  );
};

export default Chapter1Section;