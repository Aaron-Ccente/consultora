import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Mapa() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Map */}
      <div className="bg-bg-primary rounded-2xl p-6 border border-gray-100 shadow-xl">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Nuestra Ubicación
        </h3>
        <div className="relative h-64 rounded-xl overflow-hidden bg-linear-to-br from-gray-200 to-gray-300 mb-4">
          {/* Mapa placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-bg-container-primary to-bg-container-secondary rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <p className="text-gray-700 font-semibold">
                Av. Principal 123, Miraflores
              </p>
              <p className="text-gray-600 text-sm">Lima, Perú</p>
            </div>
          </div>
        </div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-primary font-semibold hover:text-text-secondary transition-colors"
        >
          <FaMapMarkerAlt />
          Ver en Google Maps
        </a>
      </div>

      {/* FAQ Link */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Preguntas Frecuentes
        </h3>
        <p className="text-gray-600 mb-4">
          ¿Tiene dudas sobre nuestros servicios, costos o procedimientos?
        </p>
        <a
          href="/faq"
          className="inline-flex items-center gap-2 text-text-primary font-semibold hover:text-text-secondary transition-colors"
        >
          Ver preguntas frecuentes
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
