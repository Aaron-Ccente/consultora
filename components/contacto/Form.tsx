"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function Form() {
  const servicesOptions: string[] = [
    "Información General",
    "Cita de Valoración",
    "Tour de Instalaciones",
    "Información de Costos",
    "Emergencias",
    "Otros",
  ];
  type Contacto = {
    nombre: string,
    email: string,
    telefono: string,
    asunto: string,
    mensaje: string
  }

  const [formData, setFormData] = useState<Contacto>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    }, 5000);
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-bg-primary rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <h2 className="text-3xl font-bold text-text-primary mb-2">
        Envíenos un Mensaje
      </h2>
      <p className="text-gray-600 mb-8">
        Complete el formulario y nos pondremos en contacto con usted
      </p>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="inline-flex p-4 rounded-full bg-bg-primary text-text-primary mb-6">
            <FaCheckCircle className="text-5xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            ¡Mensaje Enviado!
          </h3>
          <p className="text-gray-600">
            Gracias por contactarnos. Le responderemos dentro de las próximas 24
            horas.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-border-boton outline-none transition-all duration-300"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-border-boton outline-none transition-all duration-300"
                placeholder="ejemplo@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-border-boton outline-none transition-all duration-300"
                placeholder="+51 999 999 999"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Asunto *
              </label>
              <select
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-border-boton outline-none transition-all duration-300"
              >
                <option value="">Seleccione un asunto</option>
                {servicesOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-border-boton outline-none transition-all duration-300"
              placeholder="Describa su consulta o solicitud..."
            />
          </div>

          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-linear-to-r from-bg-container-primary to-bg-container-secondary text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                isSubmitting
                  ? "opacity-80 cursor-not-allowed"
                  : "hover:shadow-xl"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </div>
        </form>
      )}
    </motion.div>
  );
}
