import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../providers/ThemeProvider';
import { AddressListProvider } from '../providers/AddressesProvider';
import { FormDataProvider } from '../providers/FormDataProvider';
import { MainForm } from '../components/main-form';
import { createGlobalStyle } from 'styled-components';
import { AuthenticationProvider } from '../providers/AuthenticationProvider';
// import 'facebook-js-sdk';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: #e6e8e8;
    display: flex;
    justify-content: center;
  }
`;

const MainContainer = styled.div`
  direction: rtl;
  font-family: sans-serif;
  width: 100%;
  min-width: 300px;
  max-width: 800px;
  margin: 50px auto;
`;

const StyledMainForm = styled(MainForm)`
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AuthenticationProvider>
          <FormDataProvider>
            <AddressListProvider>
              <MainContainer>
                <StyledMainForm />
              </MainContainer>
            </AddressListProvider>
          </FormDataProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
