import { SectionWrapper } from '../shared';

export const Summary = ({state}) => {
  const { letterDetails } = state

  return (
    <>
    {letterDetails ?
    <SectionWrapper title="Summary">
      <p>{letterDetails}</p>
    </SectionWrapper>
    : null}
    </>
  );
};