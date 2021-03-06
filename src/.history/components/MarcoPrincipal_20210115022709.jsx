import React from 'react';
import styled from 'styled-components';

const MarcoPrincipal = (props) => {
  return (
    <MainStyled>
      <MainContainer>
        {props.children}
      </MainContainer>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  background-color: black;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export default MarcoPrincipal;
