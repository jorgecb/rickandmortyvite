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
  margin-top: 20px;
  padding-left: 10px;
  width: 60%;
`;

export default Filter;