import { SearchBar, Results } from './components/sections';

function Search() {
  return (
    <div className="paper inline mx-auto p-3">
      <SearchBar />
      <h3 className='mt-14'><span className='text-1xl text-gray-500'>Recomended jobs</span>  12</h3>
      <Results />
    </div>
  );
}

export default Search;