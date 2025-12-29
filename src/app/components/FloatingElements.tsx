import { motion } from 'motion/react';
import { Heart, Star, Moon } from 'lucide-react';

export function FloatingElements() {
  const elements = [
    ...Array(15).fill('heart'),
    ...Array(15).fill('star'),
    ...Array(12).fill('moon'),
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((type, i) => {
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 5;
        const delay = Math.random() * 4;
        const size = type === 'heart' ? 28 + Math.random() * 28 : 20 + Math.random() * 20;
        
        // Variación de tonos pastel
        const heartColors = ['text-primary/50', 'text-[#d4b5e6]/50', 'text-[#c89ed9]/50'];
        const starColors = ['text-accent/50', 'text-[#f0d8f7]/50', 'text-[#e5bff1]/50'];
        const moonColors = ['text-secondary/50', 'text-[#f8e8fc]/50', 'text-[#ead5f4]/50'];
        
        const heartFills = ['fill-primary/40', 'fill-[#d4b5e6]/40', 'fill-[#c89ed9]/40'];
        const starFills = ['fill-accent/40', 'fill-[#f0d8f7]/40', 'fill-[#e5bff1]/40'];
        const moonFills = ['fill-secondary/40', 'fill-[#f8e8fc]/40', 'fill-[#ead5f4]/40'];

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 30, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            {type === 'heart' && (
              <Heart
                className={`${heartColors[i % 3]} ${heartFills[i % 3]} drop-shadow-md`}
                style={{ width: size, height: size }}
              />
            )}
            {type === 'star' && (
              <Star
                className={`${starColors[i % 3]} ${starFills[i % 3]} drop-shadow-md`}
                style={{ width: size, height: size }}
              />
            )}
            {type === 'moon' && (
              <Moon
                className={`${moonColors[i % 3]} ${moonFills[i % 3]} drop-shadow-md`}
                style={{ width: size, height: size }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}