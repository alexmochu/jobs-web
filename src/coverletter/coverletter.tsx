import { ContactInfo, Summary } from './components/sections';
import { useDocumentTitle } from '../hooks';
import './index.css'

function CoverLetter({state}) {
  useDocumentTitle();

  return (
    <div className="paper inline mx-auto p-3">
      <ContactInfo state={state} />
      <Summary state={state} />
    </div>
  );
}

export default CoverLetter;