import Link from 'next/link'

export default function Team() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Un equipo multidisciplinario de expertos apasionados por la tecnología 
              y comprometidos con el éxito de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Ana Rodríguez', role: 'CEO & Fundadora', exp: '15+ años en TI' },
              { name: 'Carlos Méndez', role: 'CTO', exp: '12+ años en desarrollo' },
              { name: 'Laura Sánchez', role: 'Directora de Proyectos', exp: '10+ años en gestión' },
              { name: 'Miguel Torres', role: 'Arquitecto Cloud', exp: '8+ años en infraestructura' },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-br from-bg-container-secondary to-bg-container-primary flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.exp} de experiencia</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/equipo" 
              className="inline-flex items-center text-text-primary hover:text-hover-primary font-semibold"
            >
              Conocer a todo el equipo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
  )
}
