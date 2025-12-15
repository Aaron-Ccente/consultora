"use client"
import { useState } from 'react';
import { Menu, X, ChevronDown, Building2, Briefcase, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavDesktop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Inicio', href: '/', current: pathname === '/' },
    { 
      name: 'Servicios', 
      href: '/servicios',
      submenu: [
        { name: 'Desarrollo de Software', href: '/servicios/desarrollo-software' },
        { name: 'Consultoría IT', href: '/servicios/consultoria-it' },
        { name: 'Soluciones Cloud', href: '/servicios/cloud' },
        { name: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
      ]
    },
    { name: 'Proyectos', href: '/proyectos', current: pathname === '/proyectos' },
    { name: 'Nosotros', href: '/sobre-nosotros', current: pathname === '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto', current: pathname === '/contacto' }
  ];

  const contactInfo = {
    phone: '+34 912 345 678',
    email: 'info@ceosoluciones.com'
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 hidden lg:block bg-white/90 border-b border-gray-100 shadow-sm z-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    CEO<span className="text-blue-600">Soluciones</span>
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Consultoría Tecnológica</p>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                          >
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-3 text-blue-600" />
                              {subItem.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50 ${item.current ? 'text-blue-600 bg-blue-50' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="flex items-center space-x-6">
              <div className="hidden xl:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">{contactInfo.phone}</span>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">{contactInfo.email}</span>
                </div>
              </div>
              
              <Link 
                href="/contacto"
                className="bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white/90 border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo Mobile */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    CEO<span className="text-blue-600">Soluciones</span>
                  </h1>
                </div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-100 py-4`}>
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="py-2">
                      <div className="text-gray-700 font-medium px-2 py-2">{item.name}</div>
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-blue-600 py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-2 py-3 text-gray-700 hover:text-blue-600 font-medium ${item.current ? 'text-blue-600 bg-blue-50 rounded-lg' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Contact Info Mobile */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">{contactInfo.email}</span>
                  </div>
                </div>
                
                <Link 
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full mt-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center hover:from-blue-700 hover:to-blue-800 transition-colors duration-200"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavDesktop;