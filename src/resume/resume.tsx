import { ContactInfo, Education, Skills, Summary, WorkExperience } from './components/sections';
import { useDocumentTitle } from '../hooks';
import './index.css'

function Resume({personal, work, education, skills, links}) {
  // const { personalInfo } = state
  useDocumentTitle();

  return (
    <div className="paper inline mx-auto p-3">
      <ContactInfo personal={personal} links={links} />

      <Summary personal={personal} />

      <WorkExperience work={work}/>

      <Education education={education}/>

      <Skills skills={skills}/>
    </div>
  );
}

export default Resume;