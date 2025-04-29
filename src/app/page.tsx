'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TeamSection from '@/components/TeamSection'
import MethodologySection from '@/components/MethodologySection'
import ProjectSection from '@/components/ProjectSection'
import TokenSaleSection from '@/components/TokenSaleSection'
import ContactSection from '@/components/ContactSection'
import BiodiversityStudy from '@/components/BiodiversityStudy'
import PartnersSection from '@/components/PartnersSection'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground'
import { motion } from 'framer-motion'

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const translations = {
    es: {
      hero: {
        title: 'TokeNatura',
        subtitle: 'Tokenizando la biodiversidad para un futuro sostenible',
        description: 'Somos un biobanco especializado en la tokenización de activos, con un enfoque específico en el mercado de la biodiversidad.',
        cta: 'Descubre más'
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Nuestra misión en TokeNatura es proporcionar una solución de compensación ambiental para las empresas, ayudando a mitigar el impacto de sus actividades y restaurar los niveles de biodiversidad en territorios ancestrales, como los terrenos Arhuacos. Con nuestra tecnología, no solo tokenizamos estas áreas para su preservación, sino que también promovemos la restauración ecológica. Creemos firmemente que, en el futuro, los campesinos que actualmente recurren a la deforestación con fines agrícolas se darán cuenta de que la preservación, respaldada por nuestra tecnología, es una alternativa más rentable y sostenible.'
      },
      nav: {
        methodology: 'Metodología',
        project: 'Proyecto',
        biodiversity: 'Biodiversidad',
        team: 'Equipo',
        partners: 'Aliados',
        tokens: 'Tokens',
        contact: 'Contacto'
      }
    },
    en: {
      hero: {
        title: 'TokeNatura',
        subtitle: 'Tokenizing biodiversity for a sustainable future',
        description: 'We are a biobank specialized in asset tokenization, with a specific focus on the biodiversity market.',
        cta: 'Discover more'
      },
      mission: {
        title: 'Our Mission',
        description: 'Our mission at TokeNatura is to provide an environmental compensation solution for companies, helping to mitigate the impact of their activities and restore biodiversity levels in ancestral territories, such as Arhuaco lands. With our technology, we not only tokenize these areas for preservation but also promote ecological restoration. We firmly believe that in the future, farmers who currently resort to deforestation for agricultural purposes will realize that preservation, supported by our technology, is a more profitable and sustainable alternative.'
      },
      nav: {
        methodology: 'Methodology',
        project: 'Project',
        biodiversity: 'Biodiversity',
        team: 'Team',
        partners: 'Partners',
        tokens: 'Tokens',
        contact: 'Contact'
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="TokeNatura Logo" width={40} height={40} className="rounded-md" />
            <span className="text-2xl font-bold text-green-800">TokeNatura</span>
          </div>
          
          <div className="hidden md:flex space-x-6 text-green-700">
            <Link href="#methodology" className="hover:text-green-500 transition-colors">
              {translations[language].nav.methodology}
            </Link>
            <Link href="#project" className="hover:text-green-500 transition-colors">
              {translations[language].nav.project}
            </Link>
            <Link href="#biodiversity" className="hover:text-green-500 transition-colors">
              {translations[language].nav.biodiversity}
            </Link>
            <Link href="#team" className="hover:text-green-500 transition-colors">
              {translations[language].nav.team}
            </Link>
            <Link href="#partners" className="hover:text-green-500 transition-colors">
              {translations[language].nav.partners}
            </Link>
            <Link href="#tokens" className="hover:text-green-500 transition-colors">
              {translations[language].nav.tokens}
            </Link>
            <Link href="#contact" className="hover:text-green-500 transition-colors">
              {translations[language].nav.contact}
            </Link>
          </div>
          
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Fondo animado */}
        <div className="absolute inset-0 z-0">
          <AnimatedHeroBackground />
        </div>
        <motion.div 
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{translations[language].hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{translations[language].hero.subtitle}</p>
          <p className="text-lg mb-10">{translations[language].hero.description}</p>
          <Link 
            href="#methodology" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-block"
          >
            {translations[language].hero.cta}
          </Link>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              {translations[language].mission.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {translations[language].mission.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <div id="methodology">
        <MethodologySection language={language} />
      </div>
      
      <div id="project">
        <ProjectSection language={language} />
      </div>
      
      <div id="biodiversity">
        <BiodiversityStudy language={language} />
      </div>
      
      <div id="team">
        <TeamSection language={language} />
      </div>
      
      <div id="partners">
        <PartnersSection language={language} />
      </div>
      
      <div id="tokens">
        <TokenSaleSection language={language} />
      </div>
      
      <div id="contact">
        <ContactSection language={language} />
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="TokeNatura Logo" width={40} height={40} className="rounded-md" />
                <span className="text-2xl font-bold">TokeNatura</span>
              </div>
              <p className="text-green-200 mt-2">
                {language === 'es' ? 
                  'Tokenizando la biodiversidad para un futuro sostenible' : 
                  'Tokenizing biodiversity for a sustainable future'
                }
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
              </h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#methodology" className="hover:text-white transition-colors">
                  {translations[language].nav.methodology}
                </a></li>
                <li><a href="#project" className="hover:text-white transition-colors">
                  {translations[language].nav.project}
                </a></li>
                <li><a href="#biodiversity" className="hover:text-white transition-colors">
                  {translations[language].nav.biodiversity}
                </a></li>
                <li><a href="#team" className="hover:text-white transition-colors">
                  {translations[language].nav.team}
                </a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h3>
              <address className="not-italic text-green-200">
                <p>Email: info@tokenatura.com</p>
                <p>{language === 'es' ? 'Teléfono' : 'Phone'}: +57 300 123 4567</p>
              </address>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-green-700 text-center text-green-300">
            <p>&copy; 2025 TokeNatura. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}