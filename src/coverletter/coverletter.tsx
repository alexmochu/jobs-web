import { ContactInfo, Summary } from './components/sections';
import { useDocumentTitle } from '../hooks';
import './index.css'

function CoverLetter() {
  useDocumentTitle();

  return (
    <div className="paper inline mx-auto p-3">
      <ContactInfo />
      <Summary />
    </div>
  );
}

export default CoverLetter;