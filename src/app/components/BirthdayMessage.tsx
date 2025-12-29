import { motion } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

export function BirthdayMessage() {
  return (
    <div className="relative py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Decoración superior */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, i % 2 === 0 ? 20 : -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                {i % 2 === 0 ? (
                  <Heart className="w-10 h-10 text-primary fill-primary" />
                ) : (
                  <Star className="w-8 h-8 text-accent fill-accent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mensaje principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-8">
              Felices 23 años, mi amor
            </h2>
          </motion.div>
        </motion.div>

        {/* Carta de cumpleaños */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          {/* Brillo de fondo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl"></div>

          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-2xl border-2 border-primary/30">
            {/* Decoración de esquina */}
            <motion.div
              className="absolute -top-6 -right-6"
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-gradient-to-br from-primary to-accent rounded-full p-4 shadow-xl">
                <Sparkles className="w-8 h-8 text-white fill-white" />
              </div>
            </motion.div>

            {/* Contenido */}
            <div className="space-y-6 text-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl"
              >
                Hoy celebramos tres años de construir algo hermoso juntos, 
                y 23 años de que el universo decidiera regalarnos tu existencia.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-lg md:text-xl"
              >
                Eres la persona con la que quiero reír en las madrugadas, 
                bailar en la cocina, perdernos en aventuras y encontrarnos 
                siempre en casa.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="text-lg md:text-xl"
              >
                Gracias por ser mi cómplice, mi hogar, mi lugar favorito. 
                Por hacer que cada día ordinario se sienta extraordinario.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="text-lg md:text-xl italic text-primary/80"
              >
                Que este año te traiga todo lo que sueñas y más. 
                Yo estaré aquí, celebrándote siempre.
              </motion.p>

              {/* Firma */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="pt-8 text-center"
              >
                <p className="text-2xl md:text-3xl text-primary">
                  Con todo mi amor, siempre
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-4"
                >
                  <Heart className="w-12 h-12 mx-auto text-primary fill-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decoración inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="flex justify-center gap-4 mt-12"
        >
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
