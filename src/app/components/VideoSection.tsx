import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 md:px-8 max-w-5xl mx-auto"
    >
      {/* Decoración superior */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-accent fill-accent" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl text-foreground text-center">
          Un momento especial
        </h2>
        <motion.div
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-accent fill-accent" />
        </motion.div>
      </div>

      {/* Container del video */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Marco decorativo */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30"></div>
        
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Placeholder del video */}
          <div className="relative aspect-video bg-gradient-to-br from-secondary/30 to-accent/20">
            {/* Reemplazar con tu video real */}
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1638325368965-0602781b31b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2OTMwMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            >
              <source src="/video/special-moment.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            
            {/* Overlay de texto si el video no está disponible */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Heart className="w-16 h-16 mx-auto mb-4 text-primary fill-primary" />
                <p className="text-foreground text-lg">
                  (Coloca tu video especial aquí)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corazones decorativos */}
        <motion.div
          className="absolute -top-8 -left-8"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart className="w-16 h-16 text-primary fill-primary opacity-60" />
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -right-8"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Heart className="w-16 h-16 text-accent fill-accent opacity-60" />
        </motion.div>
      </motion.div>

      {/* Mensaje debajo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-12"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 inline-block shadow-lg border border-border">
          <p className="text-lg text-foreground italic">
            "Los mejores momentos son los que vivimos juntos"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
