import Image from 'next/image';
import iconPerson from '@/public/icon-person.svg';
import iconCog from '@/public/icon-cog.svg';
import iconChart from '@/public/icon-chart.svg';

const features = [
  {
    tag: 'Experienced Individuals',
    icon: iconPerson,
  },
  {
    tag: 'Easy to Implement',
    icon: iconCog,
  },
  {
    tag: 'Enhanced Productivity',
    icon: iconChart,
  },
];

const ContactFeatures = () => {
  return (
    <div>
      <h2 className='text-[64px] leading-[56px] text-primary-white font-bold mb-20 tablet:text-center mobile:text-[30px]'>
        Contact
      </h2>

      <h3 className='text-[28px] leading-[28px] text-primary-light-coral font-bold mb-10 tablet:text-center mobile:text-[22px]'>
        Ask us about
      </h3>

      <ul className='flex flex-col gap-8'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center gap-6 text-primary-white'>
            <Image
              src={feature.icon}
              alt='icon of a person'
              className='self-start'
            />

            <h3 className='text-[18px] text-primary-white font-semibold'>
              {feature.tag}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactFeatures;
