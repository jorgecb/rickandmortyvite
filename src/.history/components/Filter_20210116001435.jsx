import React from 'react';
import styled from 'styled-components';

const Filter = (props) => {
  return (
    
      <FilterInput type="text"
        value={props.query}
        placeholder="Busca tun personaje"
        onChange={(e) => {
          props.handleQuery(e.target.value);
        }}
      />
    
  )
}

const FilterInput = styled.input`
border: 2px solid #607D8B;
color: #777;
display: block;
font-size: 18px;
height: 30px;
top: 21px;
position: relative;
width: 39%;
float: right;
`;

export default Filter;