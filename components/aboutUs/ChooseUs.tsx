export default function ChooseUs() {
  return (
    <section className="py-16 bg-linear-to-br from-bg-primary to-bg-second">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">¿Por Qué Elegirnos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Experiencia Comprobada',
                desc: 'Más de 200 proyectos exitosos en diversas industrias'
              },
              {
                title: 'Tecnología de Vanguardia',
                desc: 'Utilizamos las últimas tecnologías y mejores prácticas'
              },
              {
                title: 'Enfoque Personalizado',
                desc: 'Soluciones adaptadas a las necesidades específicas de cada cliente'
              },
              {
                title: 'Soporte Continuo',
                desc: 'Acompañamiento post-implementación y actualizaciones constantes'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-text-primary text-2xl font-bold mb-2">0{index + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
