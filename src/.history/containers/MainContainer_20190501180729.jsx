import React, {useState, useMemo} from 'react';
import styled from 'styled-components';
import useGetCharacters from './../hooks/useGetCharacters';
import Filter from '../components/filter';
import Main from '../components/Main';
import Characters from '../components/Characters';
import Modal from '../components/Modal';

const MainContainer = () => {
  const request = useGetCharacters();

  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState(request.data);
  const [modalHandler, setModalHandler] = useState({isOpen: false, character: null})

  useMemo(() => {
    const filteredList = request.data.filter(character => {
      return character.name.toLowerCase().includes(query.toLowerCase());
    });

    setCharacters(filteredList);
  }, [request.data, query]);

  const handleQuery = (query) => setQuery(query);

  const getCharacter = (id) => {
    return request.data.filter(character => character.id == id);
  }

  const closeModal = () => {
    setModalHandler({
      isOpen: false,
      character: {}
    })
  }

  const handleClick = (e) => {
    const [character] = getCharacter(e);

    setModalHandler({
      isOpen: true,
      character
    })
  }

  return request.isLoading ? <div>Loading</div> :(
    <Main>
      <HeadingStyled>Rick and Morty</HeadingStyled>
      <Filter handleQuery={handleQuery} query={query}/>
      <Characters handleClick={handleClick} characters={characters} />
      {
        modalHandler.isOpen &&
        <Modal closeModal={closeModal} {...modalHandler.character} />
      }
    </Main>
  )
}

const HeadingStyled = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin: 60px;
  text-align: center;
`;

export default MainContainer;
