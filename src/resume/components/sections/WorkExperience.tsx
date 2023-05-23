import { SectionWrapper } from '../shared';

export const WorkExperience = ({work}) => {

  return (
    <SectionWrapper title="Work Experience">
      <ul className="ml-2">
        {work.map((item, i) => (
          <li key={item.employer} className={i % 2 ? `mt-1 exp-list` : `mt-half exp-list`}>
            <div className="flex">
              <h3>
                {item.employer} - {item.city}
              </h3>
              <span className="ml-auto text-muted">{item.startDate} - {item.endDate}</span>
            </div>
            <h4 className='italic'>{item.title}</h4>
            <p>{item.description}</p>
            {/* <ul className="ml-3">
              {workExperience.bulletPoints.map((bulletPoint) => (
                <li className="list" key={bulletPoint}>{bulletPoint}</li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};