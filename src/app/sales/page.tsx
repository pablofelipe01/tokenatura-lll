'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SalesPage = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const [activeTab, setActiveTab] = useState<'process' | 'contracts' | 'faq'>('process')

  const translations = {
    es: {
      title: 'Adquiere tus Tokens de Biodiversidad',
      subtitle: 'Contribuye a la conservación de ecosistemas únicos',
      processTitle: 'Proceso de Compra',
      contractsTitle: 'Contratos Verificados',
      faqTitle: 'Preguntas Frecuentes',
      paymentTitle: 'Pago por Transferencia Bancaria',
      paymentDescription: 'En TokeNatura, facilitamos la adquisición de tokens de biodiversidad mediante transferencia bancaria en moneda tradicional (fiat). Este proceso nos permite mantener un registro transparente de las transacciones y facilitar el acceso a quienes no están familiarizados con las criptomonedas.',
      blockchainTitle: 'Transferencia a tu Billetera Blockchain',
      blockchainDescription: 'Una vez completada tu transferencia bancaria, nuestro equipo procesará la asignación de tus tokens directamente a tu billetera blockchain. Todos nuestros tokens están desplegados en la red Polygon, conocida por sus bajas comisiones y compromiso con la sostenibilidad.',
      walletTitle: 'Billetera Recomendada',
      walletDescription: 'Recomendamos utilizar Phantom como billetera para recibir y gestionar tus tokens de biodiversidad. Phantom ofrece una interfaz intuitiva y excelentes medidas de seguridad.',
      walletLink: 'Visitar Phantom.com',
      contactTitle: 'Contacto para Compra',
      contactDescription: 'Para iniciar el proceso de compra, por favor contáctanos directamente. Nuestro equipo te proporcionará información detallada sobre los métodos de pago disponibles y responderá a cualquier consulta que puedas tener.',
      contactButton: 'Contactar para comprar',
      verifiedTitle: 'Contratos Auditados y Verificados',
      contractAddress: 'Dirección del Contrato:',
      contractType: 'Tipo de Contrato:',
      contractDescription: 'Contrato ERC-1155 con los siguientes tokens (ID 0, 1 y 2):',
      viewOnPolygon: 'Ver en Polygonscan',
      tokenDetails: 'Detalles de los Tokens',
      tokenID: 'ID del Token',
      tokenMedia: 'Multimedia',
      tokenName: 'Nombre',
      tokenDescription: 'Descripción',
      tokenSupply: 'Suministro',
      noDescription: 'Sin descripción',
      steps: [
        {
          title: '1. Selección de Token',
          description: 'Elige entre nuestras opciones de token según el impacto de conservación que desees generar.',
          icon: '🌱'
        },
        {
          title: '2. Contacto con TokeNatura',
          description: 'Comunícate con nuestro equipo a través del formulario de contacto o por correo electrónico.',
          icon: '✉️'
        },
        {
          title: '3. Proceso de Pago',
          description: 'Realiza el pago mediante transferencia bancaria con los datos que te proporcionaremos.',
          icon: '🏦'
        },
        {
          title: '4. Envío de Billetera',
          description: 'Comparte la dirección de tu billetera blockchain para recibir tus tokens.',
          icon: '💼'
        },
        {
          title: '5. Asignación de Tokens',
          description: 'En un plazo de 24-48 horas, recibirás tus tokens en tu billetera blockchain.',
          icon: '🔗'
        }
      ],
      faqs: [
        {
          question: '¿Necesito conocimientos de blockchain para comprar tokens?',
          answer: 'No es necesario. Nuestro equipo te guiará en todo el proceso y te ayudará a configurar tu billetera si lo necesitas.'
        },
        {
          question: '¿Qué hace que estos tokens sean especiales?',
          answer: 'Cada token representa una hectárea real de tierra protegida con toda su biodiversidad. Estás contribuyendo directamente a la conservación de ecosistemas críticos.'
        },
        {
          question: '¿Cómo puedo verificar mi impacto?',
          answer: 'A través de nuestro sistema de monitoreo, recibirás informes regulares sobre el estado de conservación de los terrenos asociados a tus tokens.'
        },
        {
          question: '¿Puedo transferir mis tokens a otra persona?',
          answer: 'Sí, los tokens son transferibles como cualquier otro activo digital en la blockchain.'
        },
        {
          question: '¿Por qué eligieron la red Polygon?',
          answer: 'Polygon ofrece bajas comisiones de transacción y es significativamente más eficiente energéticamente que otras redes, alineándose con nuestra misión de sostenibilidad.'
        }
      ]
    },
    en: {
      title: 'Acquire your Biodiversity Tokens',
      subtitle: 'Contribute to the conservation of unique ecosystems',
      processTitle: 'Purchase Process',
      contractsTitle: 'Verified Contracts',
      faqTitle: 'Frequently Asked Questions',
      paymentTitle: 'Payment by Bank Transfer',
      paymentDescription: 'At TokeNatura, we facilitate the acquisition of biodiversity tokens through bank transfer in traditional currency (fiat). This process allows us to maintain a transparent record of transactions and facilitate access for those who are not familiar with cryptocurrencies.',
      blockchainTitle: 'Transfer to your Blockchain Wallet',
      blockchainDescription: 'Once your bank transfer is completed, our team will process the allocation of your tokens directly to your blockchain wallet. All our tokens are deployed on the Polygon network, known for its low fees and commitment to sustainability.',
      walletTitle: 'Recommended Wallet',
      walletDescription: 'We recommend using Phantom as a wallet to receive and manage your biodiversity tokens. Phantom offers an intuitive interface and excellent security measures.',
      walletLink: 'Visit Phantom.com',
      contactTitle: 'Contact for Purchase',
      contactDescription: 'To start the purchase process, please contact us directly. Our team will provide you with detailed information about the available payment methods and answer any questions you may have.',
      contactButton: 'Contact to purchase',
      verifiedTitle: 'Audited and Verified Contracts',
      contractAddress: 'Contract Address:',
      contractType: 'Contract Type:',
      contractDescription: 'ERC-1155 contract with the following tokens (ID 0, 1, and 2):',
      viewOnPolygon: 'View on Polygonscan',
      tokenDetails: 'Token Details',
      tokenID: 'Token ID',
      tokenMedia: 'Media',
      tokenName: 'Name',
      tokenDescription: 'Description',
      tokenSupply: 'Supply',
      noDescription: 'No description',
      steps: [
        {
          title: '1. Token Selection',
          description: 'Choose among our token options according to the conservation impact you wish to generate.',
          icon: '🌱'
        },
        {
          title: '2. Contact TokeNatura',
          description: 'Communicate with our team through the contact form or by email.',
          icon: '✉️'
        },
        {
          title: '3. Payment Process',
          description: 'Make the payment by bank transfer with the details we will provide you.',
          icon: '🏦'
        },
        {
          title: '4. Wallet Submission',
          description: 'Share your blockchain wallet address to receive your tokens.',
          icon: '💼'
        },
        {
          title: '5. Token Allocation',
          description: 'Within 24-48 hours, you will receive your tokens in your blockchain wallet.',
          icon: '🔗'
        }
      ],
      faqs: [
        {
          question: 'Do I need blockchain knowledge to buy tokens?',
          answer: 'Not necessary. Our team will guide you through the entire process and help you set up your wallet if needed.'
        },
        {
          question: 'What makes these tokens special?',
          answer: 'Each token represents a real hectare of protected land with all its biodiversity. You are directly contributing to the conservation of critical ecosystems.'
        },
        {
          question: 'How can I verify my impact?',
          answer: 'Through our monitoring system, you will receive regular reports on the conservation status of the lands associated with your tokens.'
        },
        {
          question: 'Can I transfer my tokens to someone else?',
          answer: 'Yes, the tokens are transferable like any other digital asset on the blockchain.'
        },
        {
          question: 'Why did you choose the Polygon network?',
          answer: 'Polygon offers low transaction fees and is significantly more energy-efficient than other networks, aligning with our sustainability mission.'
        }
      ]
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="TokeNatura Logo" width={40} height={40} className="rounded-md" />
            <span className="text-2xl font-bold text-green-800">TokeNatura</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-green-700 hover:text-green-500 transition-colors">
              {language === 'es' ? 'Inicio' : 'Home'}
            </Link>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-md ${
                  language === 'es' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md ${
                  language === 'en' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{translations[language].title}</h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">{translations[language].subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'process' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {translations[language].processTitle}
            </button>
            <button 
              onClick={() => setActiveTab('contracts')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'contracts' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {translations[language].contractsTitle}
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'faq' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {translations[language].faqTitle}
            </button>
          </div>

          {activeTab === 'process' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    {translations[language].processTitle}
                  </h2>
                  
                  <motion.ul 
                    className="space-y-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {translations[language].steps.map((step, index) => (
                      <motion.li 
                        key={index} 
                        className="flex"
                        variants={fadeIn}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mr-4">
                          <span role="img" aria-label="step icon">{step.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-green-700 mb-1">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      {translations[language].paymentTitle}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {translations[language].paymentDescription}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      {translations[language].blockchainTitle}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {translations[language].blockchainDescription}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                      {translations[language].walletTitle}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {translations[language].walletDescription}
                    </p>
                    <a 
                      href="https://phantom.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                    >
                      {translations[language].walletLink}
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                  
                  <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">
                      {translations[language].contactTitle}
                    </h3>
                    <p className="text-green-100 mb-6">
                      {translations[language].contactDescription}
                    </p>
                    <Link 
                      href="/#contact" 
                      className="inline-block bg-white text-green-700 hover:bg-green-100 font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      {translations[language].contactButton}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contracts' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-green-800 mb-6">
                  {translations[language].verifiedTitle}
                </h2>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <div className="space-y-3">
                    <p>
                      <span className="font-medium">{translations[language].contractAddress}</span> 
                      <code className="ml-2 bg-gray-200 px-2 py-1 rounded text-green-800 font-mono">0xC58...824F6</code>
                    </p>
                    <p>
                      <span className="font-medium">{translations[language].contractType}</span> 
                      <span className="ml-2">ERC-1155</span>
                    </p>
                    <p className="font-medium">{translations[language].contractDescription}</p>
                    
                    <div className="pt-2">
                      <a 
                        href="https://polygonscan.com/address/0xC58B802861320065cfee5D2Fe9Dc810Fb96824F6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                      >
                        {translations[language].viewOnPolygon}
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  {translations[language].tokenDetails}
                </h3>
                
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {translations[language].tokenID}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {translations[language].tokenMedia}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {translations[language].tokenName}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {translations[language].tokenDescription}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {translations[language].tokenSupply}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">0</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-16 w-24 relative">
                            <Image
                              src="/im9.png"
                              alt="Kwintro"
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Kwintro</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Astraptes Fulgerator</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">500</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-16 w-24 relative">
                            <Image
                              src="/im10.png"
                              alt="CHOGÓ"
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CHOGÓ</td>
                        <td className="px-6 py-4 text-sm text-gray-500 italic">{translations[language].noDescription}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">500</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-16 w-24 relative">
                            <Image
                              src="/im8.png"
                              alt="Zitamen"
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Zitamen</td>
                        <td className="px-6 py-4 text-sm text-gray-500 italic">{translations[language].noDescription}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">
                {translations[language].faqTitle}
              </h2>
              
              <div className="space-y-6">
                {translations[language].faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-green-700 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            {language === 'es' ? '¿Listo para invertir en biodiversidad?' : 'Ready to invest in biodiversity?'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Cada token adquirido representa una hectárea de terreno protegida y contribuye directamente a la conservación de ecosistemas críticos para nuestro planeta.'
              : 'Each token acquired represents a protected hectare of land and directly contributes to the conservation of ecosystems critical to our planet.'
            }
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {language === 'es' ? 'Contactar ahora' : 'Contact now'}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/logo.png" alt="TokeNatura Logo" width={40} height={40} className="rounded-md" />
              <span className="text-2xl font-bold">TokeNatura</span>
            </div>
            
            <p className="text-green-300 text-center md:text-right">
              &copy; 2025 TokeNatura. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default SalesPage