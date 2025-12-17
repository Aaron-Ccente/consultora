import {motion} from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Extra() {
  return (
     <section className="py-12 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg-primary rounded-2xl p-8 shadow-xl "
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              ¿Listo para Conocernos?
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Agende una visita sin compromiso para conocer nuestras instalaciones y conversar con nuestro equipo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+51959085189"
                className="bg-bg-primary text-text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border-boton"
              >
                <FaPhoneAlt className="inline mr-2" />
                Llamar Ahora
              </a>
              <a
                href="#form"
                className="bg-linear-to-br from-bg-container-primary to-bg-container-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Solicitar Cita
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  )
}
