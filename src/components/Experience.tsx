type ExperienceProps = {
  title: string;
  company: string;
  duration: string;
  description: string;
  challenges: string[];
};

export const Experience = ({
  title,
  company,
  duration,
  description,
  challenges,
}: ExperienceProps) => {
  return (
    <div className='space-y-1'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-4'>
        <div className='text-black'>
          <span className='font-bold'>{company}</span>
          <span>, {title}</span>
        </div>
        <span className='shrink-0 text-sm text-black font-medium'>{duration}</span>
      </div>
      <p className='text-sm text-black italic leading-tight'>{description}</p>
      <ul className='list-none space-y-0.5 pl-4'>
        {challenges.map((item, index) => (
          <li key={index} className='text-sm text-black leading-relaxed flex items-start gap-2'>
            <span className='mt-1 shrink-0'>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
