import React from 'react'

interface LanguageSwitcherProps {
  language: 'es' | 'en'
  setLanguage: (lang: 'es' | 'en') => void
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  return (
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
  )
}

export default LanguageSwitcher