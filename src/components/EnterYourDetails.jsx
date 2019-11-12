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

  render() {
    return (
      <>
        <h2>Please input your details</h2>
        <Layout>
          <Input
            placeholder="Name" 
            onChange={({ target: { value } }) => this.setState({
              name: value,
            })} 
            value={this.state.name} 
          />
          <Input
            placeholder="Email" 
            onChange={({ target: { value } }) => this.setState({
              email: value,
            })} 
            value={this.state.email} 
          />
          <Input
            placeholder="Confirm Email" 
            onChange={({ target: { value } }) => this.setState({
              confirmEmail: value,
            })} 
            value={this.state.confirmEmail} 
          />
          <Input
            placeholder="phoneNumber" 
            onChange={({ target: { value } }) => this.setState({
              phoneNumber: value,
            })} 
            value={this.state.phoneNumber} 
          />
          <Input
            placeholder="Address" 
            onChange={({ target: { value } }) => this.setState({
              address: value,
            })} 
            value={this.state.address} 
          />
          <Input
            placeholder="Postcode" 
            onChange={({ target: { value } }) => this.setState({
              postcode: value,
            })} 
            value={this.state.postcode} 
          />
        </Layout>
      </>
    );
  }
}