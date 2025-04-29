import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Componente para la galería de imágenes automática
const AutomaticImageGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 10;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === totalImages ? 1 : prevIndex + 1
      );
    }, 3000); // Cambiar imagen cada 3 segundos
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      {Array.from({ length: totalImages }).map((_, index) => {
        const imageNumber = index + 1;
        return (
          <div 
            key={imageNumber}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImageIndex === imageNumber ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={`/im${imageNumber}.png`} 
              alt={`Biodiversity Image ${imageNumber}`} 
              fill
              className="object-cover object-center"
              priority={imageNumber === 1}
            />
          </div>
        );
      })}
      
      {/* Indicadores de imagen */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {Array.from({ length: totalImages }).map((_, index) => {
          const imageNumber = index + 1;
          return (
            <button
              key={imageNumber}
              onClick={() => setCurrentImageIndex(imageNumber)}
              className={`w-2 h-2 rounded-full ${
                currentImageIndex === imageNumber 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/80'
              } transition-colors`}
              aria-label={`Ver imagen ${imageNumber}`}
            />
          );
        })}
      </div>
    </>
  );
};

interface BiodiversityStudyProps {
  language: 'es' | 'en'
}

const BiodiversityStudy: React.FC<BiodiversityStudyProps> = ({ language }) => {
  const translations = {
    es: {
      title: 'Estudio de Biodiversidad',
      subtitle: 'Territorio Indígena Arhuaco de la Sierra Nevada de Santa Marta',
      objective: 'Objetivo',
      objectiveText: 'Documentar la biodiversidad en un área de alta importancia ecológica, utilizando un muestreo en diferentes altitudes y evaluando la relación entre diversidad y factores microclimáticos.',
      methodology: 'Metodología',
      methodologyText: 'Se realizó un muestreo en cuatro altitudes diferentes dentro del bosque montano de la Sierra Nevada. Se establecieron parcelas en cada altura y se documentaron las especies de plantas presentes, utilizando índices de diversidad como el Índice de Shannon y el de Simpson para medir la riqueza y equidad de especies.',
      results: 'Resultados',
      resultsItems: [
        'Identificación de 33 familias de plantas, destacando Bromeliaceae, Rubiaceae y Arecaceae.',
        'El índice de Shannon y Simpson mostró que la mayor diversidad se dio a los 1,800 m.s.n.m., mientras que a 1,400 m.s.n.m. se observó la menor diversidad.',
        'Se identificaron especies clave para la conservación, como el jaguar (Panthera onca) y el margay (Leopardus wiedii), así como el paujil colombiano (Crax alberti), en peligro crítico.'
      ],
      threats: 'Amenazas',
      threatsText: 'Los bosques enfrentan riesgos graves como la deforestación y el cambio climático, los cuales están fragmentando el hábitat y reduciendo la biodiversidad.',
      conclusions: 'Conclusiones',
      conclusionsText: 'La Sierra Nevada es un ecosistema irreemplazable con altos niveles de endemismo. Es vital integrar enfoques de conservación que involucren a las comunidades indígenas, quienes poseen un conocimiento valioso para la gestión sostenible.'
    },
    en: {
      title: 'Biodiversity Study',
      subtitle: 'Arhuaco Indigenous Territory of the Sierra Nevada de Santa Marta',
      objective: 'Objective',
      objectiveText: 'Document biodiversity in an area of high ecological importance, using sampling at different altitudes and evaluating the relationship between diversity and microclimatic factors.',
      methodology: 'Methodology',
      methodologyText: 'Sampling was conducted at four different altitudes within the montane forest of the Sierra Nevada. Plots were established at each height and the plant species present were documented, using diversity indices such as the Shannon Index and Simpson Index to measure species richness and equity.',
      results: 'Results',
      resultsItems: [
        'Identification of 33 plant families, highlighting Bromeliaceae, Rubiaceae, and Arecaceae.',
        'The Shannon and Simpson index showed that the greatest diversity occurred at 1,800 m.a.s.l., while at 1,400 m.a.s.l. the lowest diversity was observed.',
        'Key species for conservation were identified, such as the jaguar (Panthera onca) and the margay (Leopardus wiedii), as well as the critically endangered Colombian curassow (Crax alberti).'
      ],
      threats: 'Threats',
      threatsText: 'The forests face serious risks such as deforestation and climate change, which are fragmenting the habitat and reducing biodiversity.',
      conclusions: 'Conclusions',
      conclusionsText: 'The Sierra Nevada is an irreplaceable ecosystem with high levels of endemism. It is vital to integrate conservation approaches that involve indigenous communities, who possess valuable knowledge for sustainable management.'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            {translations[language].title}
          </h2>
          <p className="text-xl text-green-600">
            {translations[language].subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {translations[language].objective}
              </h3>
              <p className="text-gray-700">
                {translations[language].objectiveText}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {translations[language].methodology}
              </h3>
              <p className="text-gray-700">
                {translations[language].methodologyText}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {translations[language].results}
              </h3>
              <ul className="space-y-2">
                {translations[language].resultsItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-8">
              <AutomaticImageGallery />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {translations[language].threats}
              </h3>
              <p className="text-gray-700">
                {translations[language].threatsText}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {translations[language].conclusions}
              </h3>
              <p className="text-gray-700">
                {translations[language].conclusionsText}
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                {language === 'es' ? 'Propuesta de Valor' : 'Value Proposition'}
              </h4>
              <p className="text-gray-700">
                {language === 'es' 
                  ? 'TokeNatura propone un modelo de conservación que combina tecnología blockchain para monitorear la inversión en protección ambiental, ofreciendo incentivos económicos a los propietarios para preservar estos ecosistemas.'
                  : 'TokeNatura proposes a conservation model that combines blockchain technology to monitor investment in environmental protection, offering economic incentives to landowners to preserve these ecosystems.'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BiodiversityStudy