import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid rgb(238, 238, 238);
`;

export default class EnterYourDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: {
          label: 'Name',
          value: '',
        },
        email: {
          label: 'Email',
          value: '',
        },
        confirmEmail: {
          label: 'Confirm Email',
          value: '',
        },
        phoneNumber: {
          label: 'Phone Number',
          value: '',
        },
        address: {
          label: 'Address',
          value: '',
        },
        postcode: {
          label: 'Postcode',
          value: '',
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
            const { label, value } = formData[key];

            return (
              <Input 
                key={key}
                placeholder={label}
                value={value}
                onChange={this.handleInputChange(key)}
              />
            )
          })}
        </Layout>
      </>
    );
  }
}