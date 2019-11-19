import React from 'react';
import styled from 'styled-components';
import Input, { validator } from './Input';

const Layout = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default class EnterYourDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: {
          label: 'Name',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your name',
          }],
        },
        email: {
          label: 'Email',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your email',
          }, {
            validator: validator.isEmail,
            message: 'Please input a valid email',
          }],
        },
        confirmEmail: {
          label: 'Confirm Email',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your confirm email',
          }, {
            validator: validator.isEmail,
            message: 'Please input a valid confirm email',
          }, {
            validator: validator.isIdentical,
            message: 'confirm email does not match email',
            options: {
              getTarget: () => this.state.formData.email.value,
            },
          }],
        },
        phoneNumber: {
          label: 'Phone Number',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your phone number',
          }, {
            validator: validator.isMobile,
            message: 'Please input a valid phone number',
          }],
        },
        address: {
          label: 'Address',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your address',
          }],
        },
        postcode: {
          label: 'Postcode',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your postcode',
          }, {
            validator: (value) => /\d{4}/.test(value),
            message: 'Please input a valid postcode',
          }],
        },
        password: {
          label: 'Password',
          type: 'password',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your password',
          }],
        },
        confirmPassword: {
          label: 'Confirm password',
          type: 'password',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please input your confirm password',
          }, {
            validator: validator.isIdentical,
            message: 'NOT MATCH',
            options: {
              getTarget: () => this.state.formData.password.value,
            },
          }],
        },
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(key) {
    return (event) => {
      const { target: { value } } = event;

      this.setState((prevState) => {
        return {
          formData: {
            ...prevState.formData,
            [key]: {
              ...prevState.formData[key],
              value,
            },
          },
        };
      });
    };
  }

  render() {
    const { formData } = this.state;

    return (
      <>
        <h2>Please input your details</h2>
        <Layout>
          {Object.keys(formData).map((key) => {
            const { label, value, validations, type } = formData[key];

            return (
              <Input 
                key={key}
                type={type}
                placeholder={label}
                value={value}
                validations={validations}
                onChange={this.handleInputChange(key)}
              />
            )
          })}
        </Layout>
      </>
    );
  }
}