import React, { useState, useEffect } from 'react';

const EchoVoiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [userEnteredCode, setUserEnteredCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  useEffect(() => {
    // Dodanie skryptu ElevenLabs ConvAI
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      // Usunięcie skryptu przy czyszczeniu komponentu
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      clearTimeout(timer);
    };
  }, []);

  // Funkcja do wysyłania danych do webhooka z FormData
  const sendToWebhook = async (email, code) => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('verificationCode', code);
      formData.append('timestamp', new Date().toISOString());
      formData.append('source', 'echo-ai-verification');

      const response = await fetch('https://nox29a.app.n8n.cloud/webhook-test/a975ecce-4571-40be-b813-0ebe7bd294c6', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Webhook response:', data);
      return true;
    } catch (error) {
      console.error('Błąd podczas wysyłania do webhooka:', error);
      
      // Fallback - symulacja wysłania jeśli webhook nie działa
      console.log(`Symulacja: Email z kodem weryfikacyjnym wysłany na ${email}, kod: ${code}`);
      return true; // Zwracamy true dla celów demonstracyjnych
    }
  };

  // Funkcja do obsługi wysłania kodu weryfikacyjnego
  const handleSendVerification = async () => {
    setVerificationError('');
    
    if (!email) {
      setVerificationError('Proszę wprowadzić adres email');
      return;
    }

    // Walidacja adresu email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setVerificationError('Proszę wprowadzić poprawny adres email');
      return;
    }

    setIsLoading(true);
    
    // Generowanie kodu weryfikacyjnego
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(generatedCode);
    
    // Wysyłanie danych do webhooka
    try {
      await sendToWebhook(email, generatedCode);
      setIsVerificationSent(true);
      alert(`Kod weryfikacyjny został wysłany na adres ${email}. Sprawdź swoją skrzynkę pocztową.`);
    } catch (error) {
      setVerificationError('Błąd podczas wysyłania kodu weryfikacyjnego. Spróbuj ponownie.');
      console.error('Błąd:', error);
    }
    
    setIsLoading(false);
  };

  // Funkcja do weryfikacji kodu
  const handleVerifyCode = () => {
    if (userEnteredCode === verificationCode) {
      setIsEmailVerified(true);
      setVerificationError('');
      alert('Email zweryfikowany pomyślnie! Możesz teraz korzystać z rozmowy głosowej.');
    } else {
      setVerificationError('Nieprawidłowy kod weryfikacyjny. Spróbuj ponownie.');
    }
  };

  // Funkcja do resetowania procesu weryfikacji
  const resetVerification = () => {
    setIsVerificationSent(false);
    setUserEnteredCode('');
    setVerificationError('');
  };

  return (
    <section 
      id="echo-voice" 
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Voice wave-like floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}} />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-yellow-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-emerald-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}} />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s', animationDuration: '6s'}} />

        {/* Sound wave sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-ping"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Concentric circles for voice effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-emerald-400/10 rounded-full animate-ping"
              style={{
                width: `${(i + 1) * 80}px`,
                height: `${(i + 1) * 80}px`,
                left: `${-(i + 1) * 40}px`,
                top: `${-(i + 1) * 40}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center my-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 mb-6 drop-shadow-2xl leading-tight">
            🎙️ Rozmowa głosowa z Echo
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Gotowy na prawdziwą konwersację? Echo może rozmawiać z Tobą głosowo, 
            oferując jeszcze bardziej naturalne i spersonalizowane wsparcie.
          </p>
        </div>

        {/* Main Voice Chat Interface */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-emerald-400/10 via-yellow-400/10 to-emerald-400/10 rounded-3xl p-8 lg:p-12 backdrop-blur-lg border border-emerald-400/20 text-center">
            
            {/* Weryfikacja emaila */}
            {!isEmailVerified ? (
              <div className="bg-black/50 rounded-xl p-8 mb-8 border border-emerald-400/30">
                <h4 className="text-xl font-semibold text-white mb-4">Weryfikacja emaila</h4>
                <p className="text-gray-300 mb-6">
                  Aby korzystać z rozmowy głosowej, musisz zweryfikować swój adres email.
                </p>
                
                {!isVerificationSent ? (
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Twój adres email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 transition-all"
                    />
                    {verificationError && (
                      <p className="text-red-400 text-sm">{verificationError}</p>
                    )}
                    <button
                      onClick={handleSendVerification}
                      disabled={isLoading}
                      className="w-full px-6 py-3 bg-gradient-to-r from-emerald-400 to-yellow-400 text-white rounded-xl font-medium hover:from-emerald-500 hover:to-yellow-500 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Wysyłanie...
                        </span>
                      ) : (
                        'Wyślij kod weryfikacyjny'
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-emerald-300 mb-2">
                      Kod weryfikacyjny został wysłany na adres: {email}
                    </p>
                    <input
                      type="text"
                      placeholder="Wprowadź kod weryfikacyjny"
                      value={userEnteredCode}
                      onChange={(e) => setUserEnteredCode(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 transition-all"
                    />
                    {verificationError && (
                      <p className="text-red-400 text-sm">{verificationError}</p>
                    )}
                    <div className="flex gap-3">
                      <button
                        onClick={handleVerifyCode}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-400 to-yellow-400 text-white rounded-xl font-medium hover:from-emerald-500 hover:to-yellow-500 transition-all transform hover:scale-105"
                      >
                        Zweryfikuj kod
                      </button>
                      <button
                        onClick={resetVerification}
                        className="px-4 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-all"
                      >
                        Zmień email
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-emerald-300 mb-6">
                ✅ Twój email został zweryfikowany! Możesz teraz korzystać z rozmowy głosowej.
              </p>
            )}
            
            {/* ElevenLabs Integration Container */}
            <div className="elevenlabs-convai-container rounded-xl overflow-hidden shadow-2xl bg-black backdrop-blur-md border border-emerald-400/30 p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-center my-40">
                  <h4 className="text-xl font-semibold text-white">Echo Voice</h4>
                  <p className="text-yellow-300">
                    {isEmailVerified ? 'Kliknij, aby rozpocząć rozmowę' : 'Zweryfikuj email, aby rozpocząć rozmowę'}
                  </p>
                </div>
              </div>
              
              {/* Komponent ElevenLabs - wyświetlany tylko po weryfikacji */}
              {isEmailVerified ? (
                <div className="bg-black rounded-lg p-8 flex justify-center">
                  <div className="elevenlabs-convai-container">
                    <elevenlabs-convai agent-id="agent_5501k3tx0sj4exe8xg5hx1vrwsqt"></elevenlabs-convai>
                  </div>
                </div>
              ) : (
                <div className="bg-black/50 rounded-lg p-12 flex items-center justify-center">
                  <p className="text-gray-400 text-center">
                    Rozmowa głosowa będzie dostępna po weryfikacji adresu email.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Final message */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        </div>
      </div>
    </section>
  );
};

export default EchoVoiceSection;