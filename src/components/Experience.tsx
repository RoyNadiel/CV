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
    <div className='space-y-2'>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='font-bold text-lg text-[#374151]'>{title}</h3>
          <p className='text-gray-600'>
            {company} {description}
          </p>
        </div>
        <span className='text-gray-500 text-sm'>{duration}</span>
      </div>
      <ul className='list-disc list-inside text-gray-600 space-y-1 text-sm'>
        {challenges.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
