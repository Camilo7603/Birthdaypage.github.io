import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LetterOpening } from './components/LetterOpening';
import { FloatingElements } from './components/FloatingElements';
import { Timeline } from './components/Timeline';
import { VideoSection } from './components/VideoSection';
import { AudioSection } from './components/AudioSection';
import { BirthdayMessage } from './components/BirthdayMessage';
import { Countdown } from './components/Countdown';
import { MusicPlayer } from './components/MusicPlayer';
import { Confetti } from './components/Confetti';

export default function App() {
  const [showLetter, setShowLetter] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    // Trigger confetti cuando se completa la carta
    if (!showLetter) {
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, [showLetter]);

  const handleLetterComplete = () => {
    setShowLetter(false);
  };

  return (
    <>
      {/* Animación de carta inicial */}
      {showLetter && <LetterOpening onComplete={handleLetterComplete} />}

      {/* Confetti */}
      <Confetti trigger={showConfetti} />

      {/* Contenido principal */}
      {!showLetter && (
        <div className="min-h-screen relative overflow-hidden">
          {/* Fondo animado con gradientes */}
          <motion.div
            style={{ y: backgroundY }}
            className="fixed inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/15"></div>
            
            {/* Burbujas de gradiente grandes */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl"></div>
          </motion.div>

          {/* Elementos flotantes decorativos */}
          <FloatingElements />

          {/* Header decorativo */}
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 pt-12 pb-8 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-4">
                Feliz Cumpleaños
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              23 años de ti, 3 años juntos 💜
            </motion.p>
          </motion.header>

          {/* Línea de tiempo */}
          <Timeline />

          {/* Divisor decorativo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-1 w-64 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-16"
          />

          {/* Sección de video */}
          <VideoSection />

          {/* Divisor decorativo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-1 w-64 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-16"
          />

          {/* Sección de audios con fotos */}
          <AudioSection />

          {/* Divisor decorativo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-1 w-64 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto my-16"
          />

          {/* Mensaje de cumpleaños */}
          <BirthdayMessage />

          {/* Divisor decorativo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-1 w-64 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-16"
          />

          {/* Cuenta regresiva */}
          <Countdown />

          {/* Divisor decorativo final */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-1 w-64 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-16"
          />

          {/* Dedicatoria final - Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative py-20 text-center"
          >
            <div className="max-w-3xl mx-auto px-4">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-8"
              >
                <span className="text-7xl">💜</span>
              </motion.div>
              
              <motion.p 
                className="text-2xl md:text-3xl text-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Esta página fue creada con amor, cuidado y muchas ganas de verte sonreír.
              </motion.p>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Para la persona más especial del mundo.
                <br />
                Que este sea el inicio del mejor año de tu vida.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl p-8 inline-block border-2 border-primary/30"
              >
                <p className="text-lg md:text-xl text-primary italic">
                  "Contigo, cada día es una celebración"
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-base text-muted-foreground/60 mt-12"
              >
                Con todo mi corazón, hoy y siempre 💕
              </motion.p>
            </div>
          </motion.footer>

          {/* Reproductor de música */}
          <MusicPlayer />
        </div>
      )}
    </>
  );
}