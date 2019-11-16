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
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
    };
  }

  isValidationInvalid(validation) {
    const { value } = this.props;
    const { validator } = validation;

    let message;

    if (validator === 'isNotEmpty') {
      return !value;
    }

    if (validator === 'isEmail') {
      const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return !EMAIL_REGEX.test(value);
    }

    return message;
  };

  getValidationMessageFromValidations() {
    const { validations } = this.props;

    const invalidValidation = validations.find((validation) => this.isValidationInvalid(validation));

    return invalidValidation && invalidValidation.message;
  }


  render() {
    const { dirty } = this.state;

    const validationMessage = this.getValidationMessageFromValidations();

    return (
      <div>
        <HTMLInput 
          {...this.props} 
          onChange={(event) => {
            this.setState({
              dirty: true,
            });

            this.props.onChange(event);
          }}
        />
        {dirty && validationMessage && (
          <Error>{validationMessage}</Error>
        )}
      </div>
    );
  }
}