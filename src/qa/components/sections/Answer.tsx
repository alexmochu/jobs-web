import { useConfig } from '../../../hooks';
import { SectionWrapper } from '../shared';

export const Answer = () => {
  const config = useConfig();

  return (
    <SectionWrapper title="Answer">
      <p>{config.summary}</p>
    </SectionWrapper>
  );
};