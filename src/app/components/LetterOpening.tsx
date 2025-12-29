import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Moon } from 'lucide-react';

interface LetterOpeningProps {
  onComplete: () => void;
}

export function LetterOpening({ onComplete }: LetterOpeningProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  
  const letterText = "Para la persona más especial del mundo...\n\nHoy celebramos tus 23 años y tres años juntos.\n\nCreé esta página solo para ti,\nporque eres mi lugar favorito del universo.\n\n¿Lista para revivir nuestra historia juntos?";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setShowText(true), 800);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showText && displayedText.length < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(letterText.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [showText, displayedText, letterText]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30 p-4 overflow-hidden">
        {/* Elementos flotantes de fondo - lluvia suave consistente */}
        {[...Array(50)].map((_, i) => {
          const type = i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'star' : 'moon';
          
          // Tamaños variados pero consistentes
          const sizeVariation = (i * 7) % 20; // Variación pseudoaleatoria pero consistente
          const size = type === 'heart' 
            ? 38 + sizeVariation
            : type === 'star' 
            ? 30 + sizeVariation * 0.8
            : 34 + sizeVariation * 0.9;
          
          // Posición horizontal distribuida uniformemente
          const startX = (i * 13) % 100; // Distribución más uniforme
          
          // Movimiento diagonal suave consistente
          const diagonalOffset = ((i * 11) % 30) - 15; // -15 a 15vw, consistente
          
          // Velocidad de caída lenta y variada
          const duration = 18 + ((i * 5) % 12); // 18-30 segundos, consistente
          const delay = (i * 0.6) % 10; // Delay escalonado consistente
          
          return (
            <motion.div
              key={i}
              className="absolute will-change-transform"
              style={{
                left: `${startX}%`,
                top: '-10%',
              }}
              initial={{
                y: 0,
                x: 0,
                opacity: 0,
              }}
              animate={{
                y: '120vh',
                x: `${diagonalOffset}vw`,
                opacity: [0, 0.75, 0.75, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear",
                times: [0, 0.15, 0.85, 1],
              }}
            >
              {type === 'heart' && (
                <Heart 
                  className="text-primary/75 fill-primary/65" 
                  style={{ 
                    width: size, 
                    height: size,
                    filter: 'drop-shadow(0 2px 6px rgba(200, 162, 217, 0.4))'
                  }}
                />
              )}
              {type === 'star' && (
                <Star 
                  className="text-accent/75 fill-accent/65" 
                  style={{ 
                    width: size, 
                    height: size,
                    filter: 'drop-shadow(0 2px 6px rgba(232, 201, 243, 0.4))'
                  }}
                />
              )}
              {type === 'moon' && (
                <Moon 
                  className="text-secondary/75 fill-secondary/65" 
                  style={{ 
                    width: size, 
                    height: size,
                    filter: 'drop-shadow(0 2px 6px rgba(244, 228, 249, 0.4))'
                  }}
                />
              )}
            </motion.div>
          );
        })}

        {/* Sobre */}
        <motion.div
          className="relative w-full max-w-2xl z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tapa del sobre */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-br from-primary/80 to-accent/80 rounded-t-3xl origin-top"
            style={{
              clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
            }}
            animate={{
              rotateX: isOpen ? -180 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Carta interior */}
          <motion.div
            className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col items-center justify-center"
            initial={{ y: 50 }}
            animate={{ y: isOpen ? -20 : 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {showText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-20 h-20 mx-auto text-primary fill-primary mb-8 drop-shadow-xl" />
                </motion.div>
                
                <pre className="text-lg text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                  {displayedText}
                </pre>

                {displayedText === letterText && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onComplete}
                    className="mt-8 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Empezar a leer 💜
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}