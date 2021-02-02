import React from 'react';
import styled from 'styled-components';
import { FormDataProvider, AuthenticationProvider } from '../providers';
import { MainForm } from '../components/main-form';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: auto;
    background-color: #e6e8e8;
    display: flex;
    justify-content: center;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  min-width: 300px;
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
`;

const StyledMainForm = styled(MainForm)`
`;

export function App() {
  return (
    <AuthenticationProvider>
      <GlobalStyle />
      <FormDataProvider>
        <MainContainer>
          <StyledMainForm />
        </MainContainer>
      </FormDataProvider>
    </AuthenticationProvider>
  );
}

export default App;
