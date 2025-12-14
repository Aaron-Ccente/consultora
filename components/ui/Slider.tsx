"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { SliderSection } from "@/interface/Slider";

const sections: SliderSection[] = [
  {
    phrase: "Soluciones tecnológicas que transforman",
    smallPhrase:
      "Desarrollamos software a medida que impulsa la innovación y optimiza los procesos de tu empresa para alcanzar nuevos niveles de eficiencia.",
    button: true,
    background: "/Carrusel/test4.webp",
    alt: "Consultora de software desarrollando soluciones tecnológicas innovadoras",
    title: "Transformación Digital",
  },
  {
    phrase: "Innovación a un click de distancia",
    smallPhrase:
      "Nuestras soluciones en la nube permiten acceder a tecnología de vanguardia desde cualquier lugar, potenciando tu negocio 24/7.",
    button: true,
    background: "/Carrusel/test3.webp",
    alt: "Soluciones cloud y software empresarial accesibles desde cualquier dispositivo",
    title: "Tecnología Accesible",
  },
  {
    phrase: "Tu crecimiento digital inicia aquí",
    smallPhrase:
      "Diseñamos e implementamos sistemas que escalan con tu empresa, asegurando un crecimiento sostenible y eficiente.",
    button: true,
    background: "/Carrusel/test2.webp",
    alt: "Consultoría de software para crecimiento y escalabilidad empresarial",
    title: "Escalabilidad Tecnológica",
  },
  {
    phrase: "No dejemos que la tecnología obsoleta limite tu potencial",
    smallPhrase:
      "9 de cada 10 empresas pierden competitividad por no actualizar sus sistemas a tiempo.",
    button: true,
    background: "/Carrusel/test5.webp",
    alt: "Modernización de sistemas legacy y actualización tecnológica empresarial",
    title: "Modernización Tecnológica",
  },
];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Manejo de selección de slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Navegación entre slides
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  // Control del autoplay
  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      if (isPlaying) {
        autoplay.stop();
      } else {
        autoplay.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [emblaApi, isPlaying]);

  // Next/Previous controls
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Configurar eventos
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className="relative w-full overflow-hidden bg-white mt-20 max-lg:mt-0"
      role="region"
      aria-label="Carrusel de servicios"
    >
      {/* Contenedor principal del carrusel */}
      <div className="overflow-hidden max-h-[800px]" ref={emblaRef}>
        <div className="flex">
          {sections.map((item, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0"
              key={`slide-${index}`}
              aria-hidden={selectedIndex !== index}
              aria-label={`Slide ${index + 1} de ${sections.length}`}
            >
              {/* Fondo con imagen y gradiente */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/40 to-transparent z-10" />
                <div className="relative w-full h-full">
                  <Image
                    src={item.background}
                    alt={item.alt}
                    title={item.title}
                    fill
                    className="object-center object-fill"
                    priority={index === 0}
                    sizes="100vw"
                    quality={75}
                  />
                </div>
              </div>

              {/* Contenido del slide */}
              <div className="relative z-20 mx-auto max-w-scv18 w-full lg:min-h-[800px] min-h-[340px] flex items-center px-4 lg:px-30">
                <div className="max-w-2xl space-y-4 lg:space-y-6 text-white">
                  {/* Título principal */}
                  <h1
                    className="text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.phrase}
                  </h1>

                  {/* Descripción con animación */}
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={`desc-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                      >
                        <p
                          className="text-base lg:text-xl opacity-90 drop-shadow-lg"
                          style={{
                            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                          }}
                        >
                          {item.smallPhrase}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Botón CTA */}
                  {item.button && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="pt-4"
                    >
                      <Link href="/ReservarCita" className="inline-block">
                        <button
                          className="bg-linear-to-br from-background-boton-primary to-background-boton-secondary cursor-pointer text-white font-semibold px-6 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                          aria-label="Reservar cita de terapia"
                        >
                          Solicitar Presupuesto
                        </button>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación - Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div
          className="flex space-x-3"
          role="tablist"
          aria-label="Navegación del carrusel"
        >
          {sections.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir al slide ${index + 1}`}
              aria-selected={selectedIndex === index}
              role="tab"
              className={`
                w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent
                ${
                  selectedIndex === index
                    ? "bg-background-boton-primary scale-110"
                    : "bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Controles de navegación - Flechas */}
      <div className="hidden lg:block">
        <button
          onClick={scrollPrev}
          aria-label="Slide anterior"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Slide siguiente"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Control de autoplay */}
      <button
        onClick={toggleAutoplay}
        aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
        className="absolute top-4 right-4 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
      >
        {isPlaying ? (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
