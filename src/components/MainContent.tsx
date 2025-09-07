import { useTranslation } from '../context/TranslationContext';
import { Education } from './Education';
import { Experience } from './Experience';

export const MainContent = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white p-4 lg:p-12 print:p-12 space-y-10'>
      <section className='space-y-4'>
        <h2 className='text-2xl font-bold tracking-wider text-[#0082E6]'>{t('profile.title')}</h2>
        <p className='text-gray-600 leading-relaxed'>{t('profile.description')}</p>
      </section>

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold tracking-wider text-[#0082E6]'>
          {t('experience.title')}
        </h2>

        <Experience
          title={t('experience.writtingJs.title')}
          company={t('experience.writtingJs.company')}
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
          title={t('experience.ecommerce.title')}
          company={t('experience.ecommerce.company')}
          duration={t('experience.ecommerce.duration')}
          description={t('experience.ecommerce.description')}
          challenges={[
            t('experience.ecommerce.challenges.0'),
            t('experience.ecommerce.challenges.1'),
            t('experience.ecommerce.challenges.2'),
            t('experience.ecommerce.challenges.3'),
          ]}
        />

        <Experience
          title={t('experience.chessGame.title')}
          company={t('experience.chessGame.company')}
          duration={t('experience.chessGame.duration')}
          description={t('experience.chessGame.description')}
          challenges={[
            t('experience.chessGame.challenges.0'),
            t('experience.chessGame.challenges.1'),
            t('experience.chessGame.challenges.2'),
            t('experience.chessGame.challenges.3'),
          ]}
        />

        <Experience
          title={t('experience.writer.title')}
          company={t('experience.writer.company')}
          duration={t('experience.writer.duration')}
          description={t('experience.writer.description')}
          challenges={[
            t('experience.writer.challenges.0'),
            t('experience.writer.challenges.1'),
            t('experience.writer.challenges.2'),
            t('experience.writer.challenges.3'),
          ]}
        />
      </section>

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold tracking-wider text-[#0082E6]'>{t('education.title')}</h2>

        <div className='space-y-6'>
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
    </div>
  );
};
