import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-r from-[#128C7E] to-[#25D366] rounded-2xl p-6 mb-16 shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-full">
            <FaWhatsapp className="text-[#25D366] text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Atención Inmediata por WhatsApp
            </h3>
            <p className="text-white/90">Respondemos en menos de 5 minutos</p>
          </div>
        </div>
        <a
          href="https://wa.me/51987654321"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#128C7E] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
        >
          <FaWhatsapp className="text-lg" />
          Enviar Mensaje
        </a>
      </div>
    </motion.div>
  );
}
