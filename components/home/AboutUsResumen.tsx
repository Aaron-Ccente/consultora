import React from 'react';
import Link from 'next/link';

export default function AboutUsResumen() {
  return (
    <section className="py-12 md:py-16 bg-linear-to-br from-bg-primary to-bg-second">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Innovación y Excelencia en Soluciones Tecnológicas
          </h2>
          
          <div className="prose prose-lg mx-auto mb-8 text-gray-700">
            <p className="text-xl md:text-2xl font-medium mb-4 text-text-primary">
              Liderando la transformación digital desde 2025
            </p>
            
            <p className="mb-6 text-lg">
              Somos una consultora especializada en el desarrollo de software a medida, 
              arquitecturas cloud y soluciones empresariales que impulsan el crecimiento 
              y la competitividad de nuestros clientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-text-primary text-4xl font-bold mb-2">200+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Proyectos Exitosos</h3>
                <p className="text-gray-600">
                  Soluciones implementadas en diversas industrias y sectores
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-text-primary text-4xl font-bold mb-2">50+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Clientes Satisfechos</h3>
                <p className="text-gray-600">
                  Empresas que confían en nuestra experiencia tecnológica
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-text-primary text-4xl font-bold mb-2">98%</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Retención</h3>
                <p className="text-gray-600">
                  Tasa de satisfacción y continuidad en nuestras relaciones
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-10 text-gray-800">
              Nuestro equipo multidisciplinario combina expertise técnico con 
              comprensión empresarial para entregar soluciones que realmente 
              marcan la diferencia.
            </p>
          </div>
          
          <Link 
            href="/sobre-nosotros"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-background-boton-primary hover:bg-boton-hover rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Saber más
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}