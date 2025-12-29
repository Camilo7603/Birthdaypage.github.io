import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart } from "lucide-react";

interface TimelineItem {
  image: string;
  caption: string;
  hiddenMessage: string;
}

const timelineData: TimelineItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1758522483963-79baac73f06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzZWxmaWUlMjBoYXBweXxlbnwxfHx8fDE3NjY5NjU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "El primer día que supe que eras especial ✨",
    hiddenMessage: "Desde ese momento, todo cambió",
  },
  {
    image:
      "https://images.unsplash.com/photo-1760669332509-dad70673e138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbWlsaW5nJTIwY2xvc2V8ZW58MXx8fHwxNzY2OTY1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Cuando descubrí tu sonrisa perfecta 🌸",
    hiddenMessage: "Esa sonrisa que ilumina mis días",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NjY5NzAzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Nuestras conversaciones hasta el amanecer 🌙",
    hiddenMessage: "Cada palabra contigo vale oro",
  },
  {
    image:
      "https://images.unsplash.com/photo-1638325368965-0602781b31b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2OTMwMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Las pequeñas aventuras que creamos juntos 🎈",
    hiddenMessage: "Contigo lo ordinario es extraordinario",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWdnaW5nfGVufDF8fHx8MTc2Njk3MDM3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Tus abrazos que lo curan todo 💕",
    hiddenMessage: "Mi lugar seguro eres tú",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514846528774-8de9d4a07023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMG91dGRvb3J8ZW58MXx8fHwxNzY2OTY1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Los paseos sin destino que tanto amo 🌿",
    hiddenMessage: "Perdernos juntos es mi plan favorito",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBraXNzaW5nfGVufDF8fHx8MTc2Njk3MDM3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Cada beso que se siente como el primero 💫",
    hiddenMessage: "No me canso de amarte más cada día",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nfGVufDF8fHx8MTc2Njk3MDM3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Bailar en la cocina solo porque sí 🎵",
    hiddenMessage: "Los mejores momentos son los espontáneos",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzdW5zZXR8ZW58MXx8fHwxNzY2OTcwMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Y seguimos escribiendo nuestra historia 💜",
    hiddenMessage: "Lo mejor aún está por venir",
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: isEven ? -150 : 150,
        scale: 0.8,
      }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Imagen */}
      <motion.div
        className="w-full md:w-1/2 group relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
          <img
            src={item.image}
            alt={item.caption}
            className="w-full h-[400px] object-cover"
          />

          {/* Mensaje oculto con hover - más visible */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/60 flex items-center justify-center p-8 cursor-pointer"
          >
            <div className="text-center">
              <Heart className="w-12 h-12 text-white fill-white mx-auto mb-4" />
              <p className="text-white text-xl font-medium">
                "{item.hiddenMessage}"
              </p>
            </div>
          </motion.div>

          {/* Indicador de mensaje oculto */}
          <motion.div
            className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
        </div>

        {/* Decoración de esquina */}
        <motion.div
          className="absolute -top-4 -right-4"
          animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-12 h-12 text-primary fill-primary drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Texto */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border">
          <p className="text-xl text-foreground leading-relaxed">
            {item.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <div className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl text-foreground mb-4">
          Nuestra Historia
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </motion.div>

      {/* Línea central decorativa */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>

      {/* Items de la línea de tiempo */}
      <div className="space-y-32">
        {timelineData.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}