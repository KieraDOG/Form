import React from 'react';
import styled from 'styled-components';

const HTMLInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid rgb(238, 238, 238);
`;

export default class Input extends React.Component {
  render() {
    return (
      <HTMLInput {...this.props} />
    );
  }
}