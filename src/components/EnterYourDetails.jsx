import React from 'react';
import styled from 'styled-components';
import Input from './Input';

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
          validation: {
            validator: 'isNotEmpty',
            message: 'Please input your name',
          },
        },
        email: {
          label: 'Email',
          value: '',
          validation: {
            validator: 'isNotEmpty',
            message: 'Please input your email',
          },
        },
        confirmEmail: {
          label: 'Confirm Email',
          value: '',
          validation: {
            validator: 'isNotEmpty',
            message: 'Please input your confirmEmail',
          },
        },
        phoneNumber: {
          label: 'Phone Number',
          value: '',
          validation: {
            validator: 'isNotEmpty',
            message: 'Please input your phoneNumber',
          },
        },
        address: {
          label: 'Address',
          value: '',
          validation: {
            validator: 'isNotEmpty',
            message: 'Please input your address',
          },
        },
        postcode: {
          label: 'Postcode',
          value: '',
          validation: {
            validator: 'isNotEmpty',
            message: 'Please input your postcode',
          },
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
            const { label, value, validation } = formData[key];

            return (
              <Input 
                key={key}
                placeholder={label}
                value={value}
                validation={validation}
                onChange={this.handleInputChange(key)}
              />
            )
          })}
        </Layout>
      </>
    );
  }
}