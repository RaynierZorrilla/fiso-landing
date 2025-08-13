import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Accesibilidad',
      description: 'Creemos que las herramientas financieras de calidad deben estar disponibles para todos, sin importar su situación económica.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'La protección de tus datos financieros es nuestra máxima prioridad. Utilizamos la mejor tecnología de seguridad disponible.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Construimos una comunidad de usuarios que se apoyan mutuamente en su camino hacia la libertad financiera.'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Constantemente innovamos para ofrecer las mejores herramientas y experiencias a nuestros usuarios.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Fundación',
      description: 'FISO nace con la misión de democratizar las finanzas personales'
    },
    {
      year: '2024',
      title: 'Primeros 10K usuarios',
      description: 'Alcanzamos nuestra primera meta de usuarios activos'
    },
    {
      year: '2024',
      title: 'Lanzamiento IA',
      description: 'Integramos inteligencia artificial para consejos personalizados'
    },
    {
      year: '2025',
      title: '50K+ usuarios',
      description: 'Superamos las expectativas y seguimos creciendo'
    }
  ];

  const team = [
    {
      name: 'Carlos Sánchez',
      role: 'Desarrollador de Software',
      studentId: '2022-0465',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software apasionado por crear soluciones innovadoras.'
    },
    {
      name: 'Jean Abreu',
      role: 'Desarrollador de Software',
      studentId: '2023-0557',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software comprometido con la excelencia técnica.'
    },
    {
      name: 'Stephanie López',
      role: 'Desarrolladora de Software',
      studentId: '2022-0614',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software con enfoque en experiencias de usuario excepcionales.'
    },
    {
      name: 'Ernesto Savinon',
      role: 'Desarrollador de Software',
      studentId: '2023-01987',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software dedicado a crear aplicaciones robustas y escalables.'
    },
    {
      name: 'Raynier Zorrilla',
      role: 'Desarrollador de Software',
      studentId: '2022-1460',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software con pasión por las tecnologías emergentes.'
    },
    {
      name: 'Carlos Jiménez',
      role: 'Desarrollador de Software',
      studentId: '2022-0020',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software enfocado en soluciones empresariales.'
    },
    {
      name: 'Dienely Frías',
      role: 'Desarrolladora de Software',
      studentId: '2023-0185',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software comprometida con la innovación tecnológica.'
    },
    {
      name: 'Hamsell Jiménez',
      role: 'Desarrollador de Software',
      studentId: '2023-0184',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software con visión para el futuro de la tecnología.'
    },
    {
      name: 'Reylin Martínez',
      role: 'Desarrollador de Software',
      studentId: '2019-8111',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software con experiencia en múltiples tecnologías.'
    },
    {
      name: 'Diego Díaz',
      role: 'Desarrollador de Software',
      studentId: '2021-1490',
      university: 'Instituto Tecnológico de las Américas (ITLA)',
      country: 'República Dominicana',
      bio: 'Estudiante de Desarrollo de Software dedicado a crear soluciones de calidad.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Usuarios Activos', icon: Users },
    { number: '$2M+', label: 'Dinero Ahorrado', icon: TrendingUp },
    { number: '95%', label: 'Satisfacción', icon: Star },
    { number: '24/7', label: 'Soporte', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <motion.nav 
        className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img src="/assets/svg/fiso-mark-blue-purple.svg" alt="FISO Logo" className='w-10 h-10' />
              <span className="ml-3 text-xl font-bold text-gray-900">FISO</span>
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Inicio
                </Link>
                <Link to="/about" className="text-blue-600 px-3 py-2 text-sm font-medium">
                  Sobre Nosotros
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sobre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FISO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa comprometida con democratizar las finanzas personales. Creemos que todos merecen acceso a herramientas financieras de calidad, sin importar su situación económica.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                <p className="text-lg leading-relaxed">
                  Democratizar las finanzas personales proporcionando herramientas gratuitas, 
                  seguras y fáciles de usar que empoderen a las personas para tomar control 
                  de su futuro financiero.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                <p className="text-lg leading-relaxed">
                  Ser la plataforma líder en finanzas personales gratuitas, 
                  ayudando a millones de personas en todo el mundo a alcanzar 
                  su libertad financiera.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían todo lo que hacemos
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Viaje
            </h2>
            <p className="text-xl text-gray-600">
              Los hitos que han marcado nuestro crecimiento
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Estudiantes de Desarrollo de Software del ITLA
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-2">ID: {member.studentId}</p>
                <p className="text-gray-500 text-sm mb-3">{member.university}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Listo para unirte a nuestra misión?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Únete a miles de usuarios que ya están transformando sus finanzas con FISO, completamente gratis.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Comenzar Ahora - Es Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;