import React, {useState, useMemo} from 'react';
import styled from 'styled-components';
import useGetCharacters from './../hooks/useGetCharacters';
import Filter from '../components/filter';

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
    <MainStyled>
      <BodyContainer>
        
      <HeadingStyled>
      <TitleStyled>
               Rick and Morty FRONT
          </TitleStyled>
      <Filter handleQuery={handleQuery} query={query}/>
         

      </HeadingStyled>
      
      
      <Characters handleClick={handleClick} characters={characters} />
      {
        modalHandler.isOpen &&
        <Modal closeModal={closeModal} {...modalHandler.character} />
      }
      </BodyContainer>
    </MainStyled>
    
   
  )
}

const HeadingStyled = styled.nav`
  text-align: center;
  height: 81px;
    background: #ccc;
    padding: 0px 10px;
`;
const TitleStyled = styled.span`
font-family: 'Segoe UI Symbol',sans-serif;
font-size: 30px;
font-weight: bold;
width: 35%;
float: left;
text-align: center;
top: 15px;
position: relative;
@media (min-width: 768px) {
  display:none;
}
`;

const MainStyled = styled.main`
  background-color: black;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
`;

const BodyContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export default MainContainer;
