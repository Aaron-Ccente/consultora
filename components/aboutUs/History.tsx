export default function History() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Fundada en 2015, nuestra consultora nació con la visión de cerrar la brecha 
                  entre la tecnología y los objetivos de negocio. Lo que comenzó como un pequeño 
                  equipo de desarrolladores apasionados, hoy es una empresa reconocida por 
                  entregar soluciones tecnológicas que generan impacto real.
                </p>
                <p className="text-lg">
                  A lo largo de los años, hemos evolucionado junto con la industria, 
                  adoptando metodologías ágiles, tecnologías emergentes y mejores prácticas 
                  que nos permiten ofrecer valor excepcional a cada cliente.
                </p>
                <p className="text-lg">
                  Nuestra trayectoria está marcada por relaciones duraderas, proyectos 
                  desafiantes y un compromiso inquebrantable con la excelencia técnica.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              {/* Imagen placeholder */}
              <div className="absolute inset-0 bg-linear-to-br from-bg-container-primary to-bg-container-secondary flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Equipo de Innovación</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
