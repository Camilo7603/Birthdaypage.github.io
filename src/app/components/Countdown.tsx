import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-13T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <motion.div
        key={value}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-primary/30 p-6 min-w-[100px]"
      >
        <span className="text-4xl md:text-5xl text-primary block">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-muted-foreground mt-2 text-sm uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Título con más emoción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, 0], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-10 h-10 text-accent fill-accent" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl text-foreground leading-snug">
              Contando los días para volver a celebrarte
            </h2>
            <motion.div
              animate={{ rotate: [0, -15, 0], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Sparkles className="w-10 h-10 text-accent fill-accent" />
            </motion.div>
          </div>
          <motion.p 
            className="text-muted-foreground text-xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            13 de enero de 2027
          </motion.p>
          <motion.p 
            className="text-primary/70 italic text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Porque cada año contigo es más especial que el anterior
          </motion.p>
        </motion.div>

        {/* Contador */}
        <div className="relative">
          {/* Decoración de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <TimeUnit value={timeLeft.days} label="Días" />
              <TimeUnit value={timeLeft.hours} label="Horas" />
              <TimeUnit value={timeLeft.minutes} label="Minutos" />
              <TimeUnit value={timeLeft.seconds} label="Segundos" />
            </div>

            {/* Decoración de corazones y estrellas */}
            <div className="flex justify-center gap-4 mt-8">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {i % 2 === 0 ? (
                    <Heart className="w-7 h-7 text-primary fill-primary opacity-60" />
                  ) : (
                    <Star className="w-6 h-6 text-accent fill-accent opacity-60" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mensaje emocional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
            Mientras tanto, seguiré guardando cada sonrisa, cada abrazo, cada momento a tu lado 💜
          </p>
        </motion.div>
      </div>
    </div>
  );
}