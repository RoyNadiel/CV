import { useRef } from 'react';
import { MainContent } from './components/MainContent';
import { PrintButton } from './components/buttons/PrintButton';
import LanguageButton from './components/buttons/LanguageButton';
import { EditButton } from './components/buttons/EditButton';
import { TranslationProvider } from './context/TranslationContext';

const App = () => {
  const contentRef = useRef<HTMLDivElement>(null!);

  return (
    <TranslationProvider>
      <div className='flex gap-x-0.5 fixed top-2 right-2 z-50 print:!hidden'>
        <PrintButton contentRef={contentRef} />
        <LanguageButton />
        <EditButton />
      </div>
      <div ref={contentRef} className='min-h-screen bg-gray-100 p-0 print:p-0 lg:p-8'>
        <div className='cv-container w-full min-h-screen lg:min-h-0 lg:max-w-[8.5in] mx-auto bg-white shadow-none lg:shadow-2xl rounded-none lg:rounded-sm print:rounded-none print:shadow-none overflow-hidden'>
          <MainContent />
        </div>
      </div>
    </TranslationProvider>
  );
};

export default App;
