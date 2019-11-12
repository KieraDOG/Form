import React from 'react';
import styled from 'styled-components';
import EnterYourDetails from './components/EnterYourDetails';

const StyledApp = styled.div`
  padding: 1rem;
`;

function App() {
  return (
    <StyledApp>
      <EnterYourDetails />
    </StyledApp>
  );
}

export default App;
