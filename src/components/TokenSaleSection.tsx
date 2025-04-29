import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface TokenSaleSectionProps {
  language: 'es' | 'en'
}

const TokenSaleSection: React.FC<TokenSaleSectionProps> = ({ language }) => {
  const translations = {
    es: {
      title: 'Venta de Tokens',
      subtitle: 'Transformamos la conservación en una oportunidad única de impacto',
      description: 'Hemos tokenizado 1,500 hectáreas de tierra en zonas clave para la biodiversidad, donde cada token representa una hectárea protegida. Con esta innovadora propuesta, te invitamos a ser parte activa de un movimiento global para salvaguardar ecosistemas esenciales.',
      whyInvest: '¿Por qué invertir en TokeNatura?',
      reasons: [
        {
          title: 'Diversidad de opciones',
          description: 'Ofrecemos tres tipos de tokens, cada uno vinculado a un área específica de conservación. Esto te permite elegir según tus intereses y tu compromiso con la protección de la biodiversidad.',
          emoji: '🌿'
        },
        {
          title: 'Protección comunitaria',
          description: 'Nuestros terrenos están resguardados por comunidades indígenas, guardianes de estos ecosistemas, quienes aportan su sabiduría ancestral y garantizan una gestión sostenible y respetuosa.',
          emoji: '🛡️'
        },
        {
          title: 'Tecnología avanzada de monitoreo',
          description: 'Utilizamos monitoreo satelital en tiempo real para supervisar y proteger cada hectárea tokenizada. Esto asegura transparencia y demuestra el impacto real de tu inversión.',
          emoji: '🛰️'
        }
      ],
      joinTheChange: 'Únete al cambio',
      joinDescription: 'Con TokeNatura, no solo estás contribuyendo a la preservación del medio ambiente, sino que también formas parte de un proyecto innovador que combina tecnología de vanguardia con un modelo de gestión comunitaria.',
      ctaButton: '¡Invierte en el futuro!',
      ctaSubtext: 'Sé parte de este movimiento global y contribuye a un mundo más verde y sostenible.'
    },
    en: {
      title: 'Token Sale',
      subtitle: 'We transform conservation into a unique impact opportunity',
      description: 'We have tokenized 1,500 hectares of land in key areas for biodiversity, where each token represents one protected hectare. With this innovative proposal, we invite you to be an active part of a global movement to safeguard essential ecosystems.',
      whyInvest: 'Why invest in TokeNatura?',
      reasons: [
        {
          title: 'Diversity of options',
          description: 'We offer three types of tokens, each linked to a specific conservation area. This allows you to choose according to your interests and commitment to biodiversity protection.',
          emoji: '🌿'
        },
        {
          title: 'Community protection',
          description: 'Our lands are protected by indigenous communities, guardians of these ecosystems, who contribute their ancestral wisdom and ensure sustainable and respectful management.',
          emoji: '🛡️'
        },
        {
          title: 'Advanced monitoring technology',
          description: 'We use real-time satellite monitoring to supervise and protect each tokenized hectare. This ensures transparency and demonstrates the real impact of your investment.',
          emoji: '🛰️'
        }
      ],
      joinTheChange: 'Join the change',
      joinDescription: 'With TokeNatura, you are not only contributing to environmental preservation, but you are also part of an innovative project that combines cutting-edge technology with a community management model.',
      ctaButton: 'Invest in the future!',
      ctaSubtext: 'Be part of this global movement and contribute to a greener, more sustainable world.'
    }
  }

  const tokenCards = [
    {
      id: 'tier1',
      name: language === 'es' ? 'Token Básico' : 'Basic Token',
      price: '50 USD',
      hectares: 1,
      color: 'bg-green-600',
      features: [
        language === 'es' ? '1 hectárea protegida' : '1 protected hectare',
        language === 'es' ? 'Certificado digital' : 'Digital certificate',
        language === 'es' ? 'Actualizaciones trimestrales' : 'Quarterly updates'
      ]
    },
    {
      id: 'tier2',
      name: language === 'es' ? 'Token Premium' : 'Premium Token',
      price: '250 USD',
      hectares: 5,
      color: 'bg-green-700',
      features: [
        language === 'es' ? '5 hectáreas protegidas' : '5 protected hectares',
        language === 'es' ? 'Certificado digital' : 'Digital certificate',
        language === 'es' ? 'Actualizaciones mensuales' : 'Monthly updates',
        language === 'es' ? 'Acceso a eventos exclusivos' : 'Access to exclusive events'
      ]
    },
    {
      id: 'tier3',
      name: language === 'es' ? 'Token Corporativo' : 'Corporate Token',
      price: '1000+ USD',
      hectares: 20,
      color: 'bg-green-800',
      features: [
        language === 'es' ? '20+ hectáreas protegidas' : '20+ protected hectares',
        language === 'es' ? 'Certificado digital personalizado' : 'Customized digital certificate',
        language === 'es' ? 'Informes personalizados' : 'Customized reports',
        language === 'es' ? 'Visitas guiadas a terrenos' : 'Guided visits to territories',
        language === 'es' ? 'Marca asociada a la conservación' : 'Brand associated with conservation'
      ]
    }
  ]

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {translations[language].title}
          </h2>
          <p className="text-xl text-green-300 mb-6">
            {translations[language].subtitle}
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {translations[language].description}
          </p>
        </motion.div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">
            {translations[language].whyInvest}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations[language].reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="bg-green-800 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-full bg-green-700 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl" role="img" aria-label={reason.title}>
                    {reason.emoji}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-center">{reason.title}</h4>
                <p className="text-gray-300 text-center">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tokenCards.map((card, index) => (
            <motion.div 
              key={card.id}
              className={`${card.color} rounded-xl overflow-hidden shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
                <div className="text-3xl font-bold mb-3">{card.price}</div>
                <p className="text-sm text-green-200 mb-6">
                  {language === 'es' 
                    ? `${card.hectares} hectárea${card.hectares > 1 ? 's' : ''} protegida${card.hectares > 1 ? 's' : ''}`
                    : `${card.hectares} protected hectare${card.hectares > 1 ? 's' : ''}`
                  }
                </p>
                
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-green-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/sales" className="bg-white text-green-800 hover:bg-green-100 font-semibold py-2 px-6 rounded-full transition-colors inline-block">
                  {language === 'es' ? 'Adquirir Token' : 'Purchase Token'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            {translations[language].joinTheChange}
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            {translations[language].joinDescription}
          </p>
          <Link href="/sales" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block">
            {translations[language].ctaButton}
          </Link>
          <p className="text-green-300 mt-4">
            {translations[language].ctaSubtext}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenSaleSection