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

const Error = styled.p`
  color: red;
`;

export default class Input extends React.Component {
  getValidationMessage() {
    const { validation } = this.props;
    const { validator } = validation;

    let message;

    if (validator === 'isNotEmpty') {
      const valid = !!this.props.value;

      if (!valid) {
        ({ message } = validation);
      }
    }

    return message;
  };

  render() {
    const validationMessage = this.getValidationMessage();

    return (
      <div>
        <HTMLInput {...this.props} />
        {validationMessage && (
          <Error>{validationMessage}</Error>
        )}
      </div>
    );
  }
}