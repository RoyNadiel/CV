import { Phone, Mail, MapPin, Github, Linkedin, BriefcaseBusiness } from 'lucide-react';
import { translations } from '../constants/translations';
import { useTranslation } from '../context/TranslationContext';

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-[#0082E6] text-white  pt-16 md:pt-4 p-4 lg:p-8 print:p-8 space-y-8 sidebar'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-2'>Roy Nadiel Almada</h1>
        <h2 className='text-xl text-gray-100 tracking-wider'>FULL STACK DEVELOPER</h2>
      </div>

      <div className='space-y-6'>
        <h3 className='text-xl font-bold tracking-wider'>{t('contact.title')}</h3>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <MapPin className='text-white/80' size={18} />
            <span className='text-sm'>Venezuela, Isla de Margarita</span>
          </div>
          <div className='flex items-center gap-3'>
            <Phone className='text-white/80' size={18} />
            <span className='text-sm'>+58 412 195 1892</span>
          </div>
          <div className='flex items-center gap-3'>
            <Mail className='text-white/80' size={18} />
            <a href='mailto:almadaroy19@gnail.com' 
            target='_blank' className='text-sm hover:text-white/70 transition-colors'>
              almadaroy19@gmail.com
              </a>
          </div>
          <div className='flex items-center gap-3'>
            <Github className='text-white/80' size={18} />
            <a
              target='_blank'
              href='https://github.com/RoyNadiel'
              className='text-sm hover:text-white/70 transition-colors'
            >
              github.com/RoyNadiel
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <Linkedin className='text-white/80' size={18} />
            <a
              target='_blank'
              href='https://www.linkedin.com/in/roy-almada-397a19186/'
              className='text-sm hover:text-white/70 transition-colors'
            >
              https://www.linkedin.com/in/RoyNadiel
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <BriefcaseBusiness className='text-white/80' size={18} />
            <a
              target='_blank'
              href='https://roynadiel.github.io/Portfolio'
              className='text-sm hover:text-white/70 transition-colors'
            >
              https://roynadiel.github.io/Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className='space-y-6'>
        <h3 className='text-xl font-bold tracking-wider'>{t('skills.title')}</h3>
        <div className='space-y-4'>
          <div>
            <h4 className='text-gray-100 text-sm mb-2'>Technical</h4>
            <div className='flex flex-wrap gap-2'>
              {translations.en.skills.technical.map((_, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-[#0066B8] text-sm rounded-full hover:bg-[#005299] transition-colors'
                >
                  {t(`skills.technical.${index}`)}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-gray-100 text-sm mb-2'>Soft</h4>
            <div className='flex flex-wrap gap-2'>
              {translations.en.skills.soft.map((_, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-[#0066B8] text-sm rounded-full hover:bg-[#005299] transition-colors'
                >
                  {t(`skills.soft.${index}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
