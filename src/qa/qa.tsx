import { Answer } from './components/sections';
import { useDocumentTitle } from '../hooks';
import './index.css'

function QAnswer() {
  useDocumentTitle();

  return (
    <div className="paper inline mx-auto p-3">
      <Answer />
    </div>
  );
}

export default QAnswer;