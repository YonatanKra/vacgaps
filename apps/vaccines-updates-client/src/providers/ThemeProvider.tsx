import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

type Theme = {
    colors: {
        primary: string;
        secondary: string;
    }
};

const theme: Theme = {
    colors: {
        primary: 'blue',
        secondary: 'gray',
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}

const CustomThemeProvider: FunctionComponent = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>{children}</>
    </ThemeProvider>
);

export { CustomThemeProvider as ThemeProvider };
