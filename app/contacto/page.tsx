"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp
} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import HeroSection from "@/components/contacto/HeroSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visítenos",
      details: ["Av. Principal 123", "Distrito de Miraflores", "Lima, Perú"],
      color: "from-bg-container-primary to-bg-container-secondary"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Teléfonos",
      details: ["+51 987 654 321", "+51 1 234 5678"],
      color: "from-bg-container-primary to-bg-container-secondary"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: ["info@warmawasi.com", "citas@warmawasi.com"],
      color: "from-bg-container-primary to-bg-container-secondary"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horario de Atención",
      details: ["Lunes a Viernes: 8am - 6pm", "Sábados: 9am - 1pm", "Urgencias: 24/7"],
      color: "from-bg-container-primary to-bg-container-secondary"
    }
  ];

  const servicesOptions = [
    "Información General",
    "Cita de Valoración",
    "Tour de Instalaciones",
    "Información de Costos",
    "Emergencias",
    "Otros"
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-bg-primary to-bg-second">
      {/* Hero Section */}
      <HeroSection/>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Estamos para Atenderle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Múltiples formas de contactarnos para su comodidad
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-primary rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp Direct Button */}
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
                  <p className="text-white/90">
                    Respondemos en menos de 5 minutos
                  </p>
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

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
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
                    Gracias por contactarnos. Le responderemos dentro de las próximas 24 horas.
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
                        isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:shadow-xl"
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

            {/* Map and Additional Info */}
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

              {/* Emergency Contact */}
              <div className="bg-linear-to-br from-bg-container-primary to-bg-container-secondary rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MdOutlineSupportAgent className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Contacto de Emergencia 24/7
                    </h3>
                    <p className="mb-3 opacity-90">
                      Para situaciones urgentes o emergencias médicas
                    </p>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">+51 1 234 5678</p>
                      <p className="opacity-90">Línea directa de emergencias</p>
                    </div>
                  </div>
                </div>
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}
