import React, { useState }  from "react";
import Navigation from '../../components/Navigation'
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/gallery/search`, {
          params: { query: query },
        });
  
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
        <div>
            <Navigation />
            <div>
      <input
        type="text"
        placeholder="Search for titles and images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map((result) => (
          <div key={result._id}>
            <img src={result.image} alt={result.title} />
            <p>{result.title}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
}

export default Search;