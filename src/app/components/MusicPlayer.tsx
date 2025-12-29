import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border-2 border-primary/30 p-4 flex items-center gap-3"
      >
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white hover:shadow-lg transition-shadow"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-0.5" />
          )}
        </button>
        
        <div className="flex items-center gap-2 pr-2">
          <Volume className="w-4 h-4 text-primary" />
          <div className="flex flex-col">
            <span className="text-xs text-foreground">Congratulations</span>
            <span className="text-xs text-muted-foreground">Mac Miller</span>
          </div>
        </div>

        {/* Animación de onda cuando está reproduciendo */}
        {isPlaying && (
          <div className="flex items-center gap-1 ml-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary rounded-full"
                animate={{
                  height: [8, 20, 8],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Nota: En producción, reemplaza con la URL real del audio */}
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
      >
        {/* Placeholder - reemplazar con URL real del audio */}
        <source src="/audio/congratulations.mp3" type="audio/mpeg" />
      </audio>
    </motion.div>
  );
}
