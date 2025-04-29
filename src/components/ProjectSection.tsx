import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectSectionProps {
  language: 'es' | 'en'
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ language }) => {
  const translations = {
    es: {
      title: 'Proyecto Sierra Nevada',
      subtitle: 'La Línea Negra',
      description: 'El proyecto en la Sierra Nevada, denominado La Línea Negra, es una colaboración estratégica con los Mamos, líderes espirituales y guardianes de la tierra, quienes participan activamente en cada fase del proceso. Desde la selección de los terrenos a tokenizar hasta la implementación de medidas para restaurar áreas afectadas, su conocimiento ancestral guía las decisiones clave.',
      funding: 'Los fondos generados por la venta de tokens se destinarán, inicialmente, a recuperar terrenos indígenas que actualmente están en manos de campesinos, donde la biodiversidad ha sido severamente afectada. Este proyecto ha sido planeado meticulosamente durante un largo período para garantizar su éxito y sostenibilidad.',
      features: [
        'Colaboración directa con líderes espirituales Arhuacos',
        'Recuperación de territorios ancestrales',
        'Restauración de ecosistemas degradados',
        'Conservación de la biodiversidad',
        'Monitoreo constante de resultados'
      ]
    },
    en: {
      title: 'Sierra Nevada Project',
      subtitle: 'La Línea Negra',
      description: 'The Sierra Nevada project, known as La Línea Negra, is a strategic collaboration with the Mamos, spiritual leaders and guardians of the land, who actively participate in every phase of the process. From selecting the terrains to be tokenized to implementing measures for restoring affected areas, their ancestral knowledge guides key decisions.',
      funding: 'The funds generated from token sales will initially be used to recover Indigenous lands currently held by farmers, where biodiversity has been severely impacted. This project has been meticulously planned over a long period to ensure its success and sustainability.',
      features: [
        'Direct collaboration with Arhuaco spiritual leaders',
        'Recovery of ancestral territories',
        'Restoration of degraded ecosystems',
        'Conservation of biodiversity',
        'Constant monitoring of results'
      ]
    }
  }

  return (
    <section className="py-20 bg-green-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
              {translations[language].title}
            </h2>
            <h3 className="text-xl text-green-600 mb-6">
              {translations[language].subtitle}
            </h3>
            <p className="text-gray-700 mb-6">
              {translations[language].description}
            </p>
            <p className="text-gray-700 mb-8">
              {translations[language].funding}
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-green-700 mb-4">
                {language === 'es' ? 'Características Clave:' : 'Key Features:'}
              </h4>
              <ul className="space-y-2">
                {translations[language].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/sierra-nevada.png" 
                alt="Sierra Nevada Project" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-medium">
                    {language === 'es' ? 'Territorio Indígena Arhuaco' : 'Arhuaco Indigenous Territory'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection