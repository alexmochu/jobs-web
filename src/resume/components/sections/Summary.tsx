import { SectionWrapper } from '../shared';

export const Summary = ({personal}) => {
  const { summary } = personal
  return (
    <SectionWrapper title="Summary">
      <p>{summary}</p>
    </SectionWrapper>
  );
};