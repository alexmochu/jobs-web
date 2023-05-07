import { ContactInfo, Education, Skills, Summary, WorkExperience } from './components/sections';
import { useDocumentTitle } from '../hooks';
import './index.css'

function Resume() {
  useDocumentTitle();

  return (
    <div className="paper inline mx-auto p-3">
      <ContactInfo />

      <Summary />

      <WorkExperience />

      <Education />

      <Skills />
    </div>
  );
}

export default Resume;