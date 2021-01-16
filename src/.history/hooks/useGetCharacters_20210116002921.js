import {useEffect, useState} from 'react';

const useGetCharacters = () => {
  const [results, setResults] = useState({data: [], isLoading: true});

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,183')
    .then(res => res.json())
    .then(data => {
      setResults({
        isLoading: false,
        data: data.results
      })
    })

  }, []);

  return results;
}

export default useGetCharacters;
