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
      name: '',
      email: '',
      confirmEmail: '',
      phoneNumber: '',
      address: '',
      postcode: '',
    };
  }

  handleInputChange(event, key) {
    const { target: { value } } = event;

    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <>
        <h2>Please input your details</h2>
        <Layout>
          <Input
            placeholder="Name" 
            onChange={(event) => this.handleInputChange(event, 'name')}
            value={this.state.name} 
          />
          <Input
            placeholder="Email" 
            onChange={(event) => this.handleInputChange(event, 'email')}
            value={this.state.email} 
          />
          <Input
            placeholder="Confirm Email" 
            onChange={(event) => this.handleInputChange(event, 'confirmEmail')}
            value={this.state.confirmEmail} 
          />
          <Input
            placeholder="phoneNumber" 
            onChange={(event) => this.handleInputChange(event, 'phoneNumber')}
            value={this.state.phoneNumber} 
          />
          <Input
            placeholder="Address" 
            onChange={(event) => this.handleInputChange(event, 'address')}
            value={this.state.address} 
          />
          <Input
            placeholder="Postcode" 
            onChange={(event) => this.handleInputChange(event, 'postcode')}
            value={this.state.postcode} 
          />
        </Layout>
      </>
    );
  }
}