import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookies-accepted", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-8 md:right-8 lg:left-auto lg:max-w-md"
        >
          <Card className="shadow-large border-0">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground mb-3 leading-relaxed">
                    Używamy niezbędnych plików cookies do zapewnienia podstawowej funkcjonalności strony. 
                    Nie stosujemy trackingu ani analityki.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      onClick={acceptCookies}
                      className="text-xs"
                    >
                      Akceptuję
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={rejectCookies}
                      className="text-xs"
                    >
                      Tylko niezbędne
                    </Button>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={rejectCookies}
                  className="h-6 w-6 p-0 flex-shrink-0"
                  aria-label="Zamknij banner cookies"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}