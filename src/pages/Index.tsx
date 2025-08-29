
import NeuralNetworkBackground from "@/components/Hero";
import Chapter5ChatSection from "@/components/Chapter4Section";
import Chapter3Section from "@/components/Chapter3Section";
import Chapter5Section from "@/components/Chapter5Section";
import Chapter1Section from "@/components/Chapter2Section";
import EchoFooter from "@/components/Footer";

import { CookieBanner } from "@/components/CookieBanner";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page metadata
    document.title = "MindCheck - 3 minuty dla Twojego spokoju | Głosowy AI-coach dobrostanu";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Nagraj 3-minutową wiadomość głosową i otrzymaj spersonalizowany plan 3 kroków na dziś. Bezpieczne narzędzie AI wspierające dobrostan psychiczny.'
    );
  }, []);

  return (
    <>
      
      <main className="min-h-screen">
        <NeuralNetworkBackground />
                {/* <Chapter4Section /> */}

        <Chapter3Section />
        <Chapter5ChatSection />
        <Chapter5Section /> 

      </main>
      <EchoFooter />
      <CookieBanner />
    </>
  );
};

export default Index;
