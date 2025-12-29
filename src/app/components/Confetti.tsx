import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
}

export function Confetti({ trigger }: { trigger: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger) {
      const newPieces: ConfettiPiece[] = [];
      const colors = ['#c8a2d9', '#e8c9f3', '#f4e4f9', '#d4c1eb', '#fbbce8'];
      
      for (let i = 0; i < 50; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5
        });
      }
      
      setPieces(newPieces);

      // Limpiar después de la animación
      setTimeout(() => setPieces([]), 4000);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              x: `${piece.x}vw`,
              y: -20,
              rotate: 0,
              opacity: 1
            }}
            animate={{
              y: '110vh',
              rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
              x: `${piece.x + (Math.random() * 20 - 10)}vw`,
              opacity: [1, 1, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: piece.delay,
              ease: "easeIn"
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              backgroundColor: piece.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
