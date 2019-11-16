import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Layout = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);
`;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const MOBILE_REGEX = /^(04)\d{8}/;

export default class EnterYourDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: {
          label: 'Name',
          value: '',
          validations: [{
            validator: (value) => !!value,
            message: 'Please input your name',
          }],
        },
        email: {
          label: 'Email',
          value: '',
          validations: [{
            validator: (value) => !!value,
            message: 'Please input your email',
          }, {
            validator: (value) => EMAIL_REGEX.test(value),
            message: 'Please input a valid email',
          }],
        },
        confirmEmail: {
          label: 'Confirm Email',
          value: '',
          validations: [{
            validator: (value) => !!value,
            message: 'Please input your confirm email',
          }, {
            validator: (value) => EMAIL_REGEX.test(value),
            message: 'Please input a valid confirmation email',
          }],
        },
        phoneNumber: {
          label: 'Phone Number',
          value: '',
          validations: [{
            validator: (value) => !!value,
            message: 'Please input your phone number',
          }, {
            validator: (value) => MOBILE_REGEX.test(value),
            message: 'Please input a valid phone number',
          }],
        },
        address: {
          label: 'Address',
          value: '',
          validations: [{
            validator: (value) => !!value,
            message: 'Please input your address',
          }],
        },
        postcode: {
          label: 'Postcode',
          value: '',
          validations: [{
            validator: (value) => !!value,
            message: 'Please input your postcode',
          }, {
            validator: (value) => /\d{4}/.test(value),
            message: 'Please input a valid postcode',
          }],
        },
      }
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
            const { label, value, validations } = formData[key];

            return (
              <Input 
                key={key}
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