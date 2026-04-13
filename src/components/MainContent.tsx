import { useTranslation } from '../context/TranslationContext';
import { translations } from '../constants/translations';
import { Education } from './Education';
import { Experience } from './Experience';

export const MainContent = () => {
  const { t, currentLang } = useTranslation();

  return (
    <div className='bg-white px-4 py-6 sm:px-8 sm:py-8 lg:px-14 lg:py-12 print:px-12 print:py-10 space-y-6'>
      {/* ── Header ── */}
      <header className='text-center space-y-2'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight'>Roy Nadiel Almada</h1>
        <p className='text-sm text-black tracking-widest uppercase'>Software Developer</p>
        <div className='flex flex-wrap justify-center items-center text-xs text-black gap-y-1 pt-1'>
          <span>Venezuela, Isla de Margarita</span>
          <span className='contact-separator' />
          <a
            href='mailto:almadaroy19@gmail.com?subject=Inquiry&body=Hello, I would like to contact you'
            className='text-[#004F90] hover:underline'
          >
            almadaroy19@gmail.com
          </a>
          <span className='contact-separator' />
          <span>+58 412 195 1892</span>
          <span className='contact-separator' />
          <a
            href='https://roynadiel.github.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#004F90] hover:underline'
          >
            roynadiel.github.io
          </a>
          <span className='contact-separator' />
          <a
            href='https://github.com/RoyNadiel'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#004F90] hover:underline'
          >
            RoyNadiel
          </a>
          <span className='contact-separator' />
          <a
            href='https://www.linkedin.com/in/roy-almada-397a19186/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#004F90] hover:underline'
          >
            roy-almada-397a19186
          </a>
        </div>
      </header>

      {/* ── Profile ── */}
      <section>
        <div className='harvard-section-title'>
          <span>{t('profile.title')}</span>
        </div>
        <p className='text-sm text-black leading-relaxed text-justify'>
          {t('profile.description')}
        </p>
      </section>

      {/* ── Experience ── */}
      <section className='space-y-4'>
        <div className='harvard-section-title'>
          <span>{t('experience.title')}</span>
        </div>

        <Experience
          title={t('experience.tasaActual.title')}
          company={currentLang === 'en' ? 'Personal Project' : 'Proyecto Personal'}
          duration={t('experience.tasaActual.duration')}
          description={t('experience.tasaActual.description')}
          challenges={[
            t('experience.tasaActual.challenges.0'),
            t('experience.tasaActual.challenges.1'),
            t('experience.tasaActual.challenges.2'),
            t('experience.tasaActual.challenges.3'),
          ]}
        />

        <Experience
          title={t('experience.writtingJs.title')}
          company={currentLang === 'en' ? 'Personal Project' : 'Proyecto Personal'}
          duration={t('experience.writtingJs.duration')}
          description={t('experience.writtingJs.description')}
          challenges={[
            t('experience.writtingJs.challenges.0'),
            t('experience.writtingJs.challenges.1'),
            t('experience.writtingJs.challenges.2'),
            t('experience.writtingJs.challenges.3'),
          ]}
        />

        <Experience
          title={t('experience.deshi.title')}
          company={currentLang === 'en' ? 'Personal Project' : 'Proyecto Personal'}
          duration={t('experience.deshi.duration')}
          description={t('experience.deshi.description')}
          challenges={[
            t('experience.deshi.challenges.0'),
            t('experience.deshi.challenges.1'),
            t('experience.deshi.challenges.2'),
            t('experience.deshi.challenges.3'),
          ]}
        />

        <Experience
          title={t('experience.quoteCreator.title')}
          company={currentLang === 'en' ? 'Personal Project' : 'Proyecto Personal'}
          duration={t('experience.quoteCreator.duration')}
          description={t('experience.quoteCreator.description')}
          challenges={[
            t('experience.quoteCreator.challenges.0'),
            t('experience.quoteCreator.challenges.1'),
            t('experience.quoteCreator.challenges.2'),
            t('experience.quoteCreator.challenges.3'),
          ]}
        />
      </section>

      {/* ── Education ── */}
      <section className='space-y-4'>
        <div className='harvard-section-title'>
          <span>{t('education.title')}</span>
        </div>

        <div className='space-y-4'>
          <Education
            degree={t('education.udo.title')}
            school={t('education.udo.institution')}
            duration={t('education.udo.duration')}
            details={t('education.udo.details')}
          />

          <Education
            degree={t('education.highSchool.title')}
            school={t('education.highSchool.institution')}
            duration={t('education.highSchool.duration')}
            details={t('education.highSchool.details')}
          />
        </div>
      </section>

      {/* ── Skills ── */}
      <section>
        <div className='harvard-section-title'>
          <span>{t('skills.title')}</span>
        </div>

        <div className='space-y-2 text-sm text-black'>
          <p>
            <span className='font-bold'>{currentLang === 'en' ? 'Technical' : 'Técnicas'}:</span>{' '}
            {translations[currentLang as 'en' | 'es'].skills.technical.join(', ')}
          </p>
          <p>
            <span className='font-bold'>{currentLang === 'en' ? 'Soft Skills' : 'Blandas'}:</span>{' '}
            {translations[currentLang as 'en' | 'es'].skills.soft.join(', ')}
          </p>
          <p>
            <span className='font-bold'>{currentLang === 'en' ? 'Languages' : 'Idiomas'}:</span>{' '}
            {translations[currentLang as 'en' | 'es'].skills.languages.map((lang, index) => (
              <span key={index}>
                {index > 0 && ', '}
                {lang.toLowerCase().includes('english') || lang.toLowerCase().includes('inglés') ? (
                  <a
                    href='https://cert.efset.org/en/4fxqHD'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#004F90] hover:underline'
                  >
                    {t(`skills.languages.${index}`)}
                  </a>
                ) : (
                  t(`skills.languages.${index}`)
                )}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};
