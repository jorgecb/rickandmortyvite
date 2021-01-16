import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
  const openModal = () => {
    props.handleClick(props.id);
  }

  return (
    <Container onClick={openModal}>
      <Picture src={props.image} type={props.type} />
      <Name type={props.type}>{props.name}</Name>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;

const Name = styled.p`
  color: ${props => props.type == "modal" ? "#FFC107": "#FFF"};
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const Picture = styled.img`
  cursor: ${props => props.type == "modal" ? "default" : "pointer"};
  border: 5px solid white;
  width: 100%;
`;

export default Character;
