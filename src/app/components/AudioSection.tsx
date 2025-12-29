import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Play, Pause, Heart } from 'lucide-react';

interface AudioItemProps {
  title: string;
  description: string;
  audioSrc: string;
  image: string;
}

function AudioItem({ title, description, audioSrc, image }: AudioItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-shadow">
        {/* Imagen */}
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay con botón de play */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 text-primary" />
              ) : (
                <Play className="w-10 h-10 text-primary ml-1" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="text-xl text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          {/* Control de audio */}
          <button
            onClick={togglePlay}
            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                Pausar
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Escuchar
              </>
            )}
          </button>

          {/* Onda de audio animada */}
          {isPlaying && (
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-primary rounded-full"
                  animate={{
                    height: [8, 24, 8],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </motion.div>
  );
}

export function AudioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const audioItems = [
    {
      title: "Nuestro primer momento",
      description: "Ese instante que atesoraré por siempre",
      audioSrc: "/audio/moment1.mp3",
      image: "https://images.unsplash.com/photo-1758522483963-79baac73f06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzZWxmaWUlMjBoYXBweXxlbnwxfHx8fDE3NjY5NjU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Tu risa que amo",
      description: "El sonido más hermoso del mundo",
      audioSrc: "/audio/moment2.mp3",
      image: "https://images.unsplash.com/photo-1760669332509-dad70673e138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbWlsaW5nJTIwY2xvc2V8ZW58MXx8fHwxNzY2OTY1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div
      ref={ref}
      className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-primary fill-primary" />
          <h2 className="text-3xl md:text-4xl text-foreground">Momentos para escuchar</h2>
          <Heart className="w-8 h-8 text-primary fill-primary" />
        </div>
        <p className="text-muted-foreground text-lg">
          Sonidos que guardan nuestros recuerdos más preciados
        </p>
      </motion.div>

      {/* Grid de audios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {audioItems.map((item, index) => (
          <AudioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}