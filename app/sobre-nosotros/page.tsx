import ChooseUs from '@/components/aboutUs/ChooseUs';
import History from '@/components/aboutUs/History';
import MisionAndVision from '@/components/aboutUs/MisionAndVision';
import Team from '@/components/aboutUs/Team';
import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen pt-20 max-lg:pt-0">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-bg-container-primary to-bg-container-secondary text-white py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Más de una década transformando negocios a través de la innovación tecnológica
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <History/>

      {/* Nuestra Misión, Visión y Valores */}
      <MisionAndVision/>

      {/* Nuestro Equipo */}
      <Team/>

      {/* Por Qué Elegirnos */}
      <ChooseUs/>

      {/* CTA Final */}
      <section className="py-16 bg-bg-container-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones tecnológicas pueden impulsar el crecimiento de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="px-8 py-3 bg-white text-bg-container-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contáctanos
            </Link>
            <Link 
              href="/proyectos"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}