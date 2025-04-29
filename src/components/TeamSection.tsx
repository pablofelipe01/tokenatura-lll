import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamSectionProps {
  language: 'es' | 'en'
}

const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestro Equipo',
      subtitle: 'Conoce a los profesionales que hacen posible nuestro proyecto',
      description: 'En TokeNatura, nuestro equipo combina experiencia en biología, conservación, tecnología blockchain y gestión comunitaria. Colaboramos estrechamente con los Guardianes de la Sierra y expertos ecológicos para desarrollar un modelo de conservación eficaz y sostenible.',
      members: [
        { name: 'Yesica Padilla', role: 'CTO', img: 'team-yesica.png' },
        { name: 'Emilio Zea', role: 'CEO', img: 'team-emilio.png' },
        { name: 'Jaime Zapata', role: 'Guardián de la Sierra', img: 'team-jaime.png' },
        { name: 'Mario Mejía', role: 'Guardián de la Sierra', img: 'team-mario.png' },
        { name: 'Mariana Herrera', role: 'Bióloga', img: 'team-mariana.png' },
        { name: 'Mateo Villegas', role: 'Biólogo', img: 'team-mateo.png' },
        { name: 'Nicolás Salcedo', role: 'Biólogo', img: 'team-nicolas.png' },
        { name: 'Lucy', role: 'Guardiana de la Sierra', img: 'team-lucy.png' }
      ]
    },
    en: {
      title: 'Our Team',
      subtitle: 'Meet the professionals who make our project possible',
      description: 'At TokeNatura, our team combines expertise in biology, conservation, blockchain technology, and community management. We work closely with the Guardians of the Sierra and ecological experts to develop an effective and sustainable conservation model.',
      members: [
        { name: 'Yesica Padilla', role: 'CTO', img: 'team-yesica.png' },
        { name: 'Emilio Zea', role: 'CEO', img: 'team-emilio.png' },
        { name: 'Jaime Zapata', role: 'Guardian of the Sierra', img: 'team-jaime.png' },
        { name: 'Mario Mejía', role: 'Guardian of the Sierra', img: 'team-mario.png' },
        { name: 'Mariana Herrera', role: 'Biologist', img: 'team-mariana.png' },
        { name: 'Mateo Villegas', role: 'Biologist', img: 'team-mateo.png' },
        { name: 'Nicolás Salcedo', role: 'Biologist', img: 'team-nicolas.png' },
        { name: 'Lucy', role: 'Guardian of the Sierra', img: 'team-lucy.png' }
      ]
    }
  }

  return (
    <section className="py-20 bg-green-50">
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {translations[language].members.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image 
                  src={`/${member.img}`} 
                  alt={member.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection