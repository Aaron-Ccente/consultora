import {motion} from 'framer-motion'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function InformationContact() {
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

  return (
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
  )
}
