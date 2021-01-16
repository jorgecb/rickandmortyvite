import React from 'react';
import styled from 'styled-components';
import Character from './Character';

const Characters = (props) => {
  return (
    <Container>
    {
      props.characters.map((character, key) => (
        <Character {...character} handleClick={props.handleClick} key={`character-${key}`} />
      ))
    }
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 30px auto;
  width: 100%;
`;

export default Characters;
