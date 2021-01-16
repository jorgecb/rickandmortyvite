import React from 'react';
import styled from 'styled-components';

const Filter = (props) => {
  return (
    <div>
      <FilterInput type="text"
        value={props.query}
        placeholder="Busca tun personaje"
        onChange={(e) => {
          props.handleQuery(e.target.value);
        }}
      />
    </div>
  )
}

const FilterInput = styled.input`
  border: 4px solid #607D8B;
  color: #666;
  display: block;
  font-size: 20px;
  height: 50px;
  padding-left: 10px;
  width: 100%;
`;

export default Filter;
