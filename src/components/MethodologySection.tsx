import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface MethodologySectionProps {
  language: 'es' | 'en'
}

const MethodologySection: React.FC<MethodologySectionProps> = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestra Metodología',
      description: 'Para el muestreo de biodiversidad, empleamos un enfoque integral que combina herramientas avanzadas y el expertise de biólogos. Realizamos análisis de campo en los territorios, donde los biólogos elaboran listas detalladas de especies presentes, evalúan el potencial de sucesión ecológica y calculan los niveles de biodiversidad de la zona.',
      steps: [
        {
          title: 'Análisis de Campo',
          description: 'Nuestros biólogos realizan un estudio detallado del terreno, identificando especies y evaluando el estado de los ecosistemas presentes.'
        },
        {
          title: 'Monitoreo Satelital',
          description: 'Utilizamos tecnología satelital para monitorear continuamente el crecimiento vegetal y los cambios en el terreno.'
        },
        {
          title: 'Cámaras de Movimiento',
          description: 'Implementamos cámaras trampa para detectar especies animales difíciles de observar durante el muestreo directo.'
        },
        {
          title: 'Análisis de Expertos',
          description: 'Nuestro equipo de expertos analiza los datos recolectados para identificar nuevas especies y estudiar los cambios ecológicos.'
        }
      ]
    },
    en: {
      title: 'Our Methodology',
      description: 'For biodiversity sampling, we employ a comprehensive approach that combines advanced tools and the expertise of biologists. We conduct field analyses in the territories, where biologists create detailed lists of present species, assess the potential for ecological succession, and calculate the biodiversity levels of the area.',
      steps: [
        {
          title: 'Field Analysis',
          description: 'Our biologists conduct a detailed study of the terrain, identifying species and evaluating the state of present ecosystems.'
        },
        {
          title: 'Satellite Monitoring',
          description: 'We use satellite technology to continuously monitor plant growth and changes in the terrain.'
        },
        {
          title: 'Motion Cameras',
          description: 'We implement camera traps to detect animal species that are difficult to observe during direct sampling.'
        },
        {
          title: 'Expert Analysis',
          description: 'Our team of experts analyzes the collected data to identify new species and study ecological changes.'
        }
      ]
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            {translations[language].title}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {translations[language].description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/methodology.png" 
              alt="TokeNatura Methodology" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {translations[language].steps.map((step, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MethodologySection