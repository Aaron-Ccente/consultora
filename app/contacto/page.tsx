"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/contacto/HeroSection";
import Form from "@/components/contacto/Form";
import WhatsApp from "@/components/contacto/WhatsApp";
import InformationContact from "@/components/contacto/InformationContact";
import Mapa from "@/components/contacto/Mapa";
import Extra from "@/components/contacto/Extra";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-bg-primary to-bg-second">
      {/* Hero Section */}
      <HeroSection />

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

          {/* informacion de contacto */}
          <InformationContact />

          {/* WhatsApp Direct Button */}
          <WhatsApp />

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Form />

            {/* Map and Additional Info */}
            <Mapa />
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Extra />
    </div>
  );
}
