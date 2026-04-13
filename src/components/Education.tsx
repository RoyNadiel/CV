type EducationProps = {
  degree: string;
  school: string;
  duration: string;
  details: string;
};

export const Education = ({ degree, school, duration, details }: EducationProps) => {
  return (
    <div className='space-y-0.5'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-4'>
        <div className='text-black'>
          <span className='font-bold'>{school}</span>
          <span>, {degree}</span>
        </div>
        <span className='shrink-0 text-sm text-black font-medium'>{duration}</span>
      </div>
      {details && (
        <ul className='list-none pl-4'>
          <li className='text-sm text-black leading-relaxed flex items-start gap-2'>
            <span className='mt-1 shrink-0'>•</span>
            <span>{details}</span>
          </li>
        </ul>
      )}
    </div>
  );
};
