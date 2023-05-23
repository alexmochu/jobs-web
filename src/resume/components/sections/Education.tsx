import { SectionWrapper } from '../shared';

export const Education = ({education}) => {
  return (
    <SectionWrapper title="Education">
      <ul className="ml-2">
        {education.map((education, i) => (
          <li key={education.school} className={i % 2 ? `mt-1 exp-list` : `mt-half exp-list`}>
            <div className="flex">
              <h3>
                {education.school} - {education.city}
              </h3>
              <span className="ml-auto text-muted">{education.startDate} - {education.endDate}</span>
            </div>
            <h4 className='italic'>
              {education.degree}
              {/* , {education.major} */}
            </h4>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};