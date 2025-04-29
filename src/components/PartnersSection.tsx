import React from 'react'
import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PartnersSectionProps {
  language: 'es' | 'en'
}

interface Partner {
  name: string
  logo: string
  url: string
  description: {
    es: string
    en: string
  }
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestros Aliados',
      subtitle: 'Colaboramos con organizaciones líderes para maximizar nuestro impacto',
      description: 'En TokeNatura, creemos en el poder de las alianzas estratégicas para potenciar nuestros esfuerzos de conservación. Trabajamos con empresas e instituciones comprometidas con la sostenibilidad y la protección de la biodiversidad.'
    },
    en: {
      title: 'Our Partners',
      subtitle: 'We collaborate with leading organizations to maximize our impact',
      description: 'At TokeNatura, we believe in the power of strategic partnerships to enhance our conservation efforts. We work with companies and institutions committed to sustainability and biodiversity protection.'
    }
  }

  const partners: Partner[] = [
    {
      name: 'Biotrust',
      logo: '/biotrust-logo.png',
      url: 'https://biotrust.com.co/',
      description: {
        es: 'Expertos en biología y conservación que aportan conocimiento científico a nuestros proyectos',
        en: 'Biology and conservation experts who contribute scientific knowledge to our projects'
      }
    },
    {
      name: 'XM',
      logo: '/logo-xm.png',
      url: 'https://www.xm.com.co/',
      description: {
        es: 'Líderes en el sector energético comprometidos con prácticas sostenibles y desarrollo responsable',
        en: 'Leaders in the energy sector committed to sustainable practices and responsible development'
      }
    },
    {
      name: 'Procálculo',
      logo: '/procalculo-logo.png',
      url: 'https://www.procalculo.com/',
      description: {
        es: 'Especialistas en análisis de datos y tecnología para el monitoreo efectivo de ecosistemas',
        en: 'Data analysis and technology specialists for effective ecosystem monitoring'
      }
    },
    {
      name: 'Flapz',
      logo: '/flapz-logo.png',
      url: 'https://www.flapz.app/',
      description: {
        es: 'Plataforma de movilidad aérea que facilita el acceso a regiones remotas para nuestros proyectos de conservación',
        en: 'Air mobility platform that facilitates access to remote regions for our conservation projects'
      }
    }
  ]

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="py-20 bg-green-50" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            {translations[language].title}
          </h2>
          <p className="text-xl text-green-600 mb-4">
            {translations[language].subtitle}
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {translations[language].description}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.name}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-48 h-24 mb-6">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-green-700 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-center mb-6">{partner.description[language]}</p>
              
              {partner.url !== '#' ? (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  {language === 'es' ? 'Visitar sitio web' : 'Visit website'}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              ) : (
                <span className="mt-auto inline-block text-gray-400">
                  {language === 'es' ? 'Próximamente' : 'Coming soon'}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection