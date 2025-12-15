export default function MisionAndVision() {
  return (
    <section className="py-16 bg-bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Lo que nos Define</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-bg-second p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-bg-container-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700">
                Desarrollar soluciones tecnológicas innovadoras que impulsen la transformación 
                digital de las empresas, optimizando sus procesos y maximizando su competitividad 
                en el mercado global.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-bg-second p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser la consultora de tecnología preferida en Latinoamérica, reconocida por 
                nuestra capacidad de anticipar tendencias y ofrecer soluciones que 
                redefinan los estándares de la industria tecnológica.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-bg-second p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span><strong>Innovación:</strong> Buscamos constantemente nuevas formas de crear valor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span><strong>Integridad:</strong> Actuamos con transparencia y ética profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span><strong>Excelencia:</strong> Compromiso con la más alta calidad en cada proyecto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-primary mr-2">•</span>
                  <span><strong>Colaboración:</strong> Trabajamos como un equipo unido con nuestros clientes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
