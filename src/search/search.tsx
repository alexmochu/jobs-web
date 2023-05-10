import { SearchBar, Results } from './components/sections';

function Search() {
  return (
    <div className="paper inline mx-auto p-3">
      <SearchBar />
      <h3 className='mt-20'>Recomended jobs 12</h3>
      <Results />
    </div>
  );
}

export default Search;