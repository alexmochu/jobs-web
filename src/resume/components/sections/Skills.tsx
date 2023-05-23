import { SectionWrapper } from '../shared';

export const Skills = ({skills}) => {

  return (
    <SectionWrapper title="Skills">
      {skills.map((skill) => (
        <p className="inline-block" key={skill}>
          <span className="mx-1">•</span>
          <span>{skill}</span>
        </p>
      ))}
    </SectionWrapper>
  );
};