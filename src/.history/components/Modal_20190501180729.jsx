import React, {useEffect} from 'react';
import styled from 'styled-components';
import Character from './Character';

const Modal = (props) => {
  const handleEscPress = (event) => {
    if(event.keyCode === 27) {
      props.closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress)
    return () => document.removeEventListener('keydown', handleEscPress)
  });

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={props.closeModal}>x</CloseButton>
        <Character {...props} type="modal"/>
        <p><b>Status: </b>{props.status}</p>
        <p><b>Species: </b>{props.species}</p>
        <p><b>Gender: </b>{props.gender}</p>
        <p><b>Location: </b>{props.location.name}</p>
      </ModalContent>
    </ModalContainer>
  )
}

const CloseButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 22px;
  font-weight: bold;
  float: right;
  border: 1px solid;
  position: absolute;
  right: -20px;
  top: -20px;
`;

const ModalContent = styled.div`
  background-color: #fff;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  width: 400px;
`;

const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 69, 0, 0.30196078431372547);
  height: 100%;
  width: 100%;
`;

export default Modal;
