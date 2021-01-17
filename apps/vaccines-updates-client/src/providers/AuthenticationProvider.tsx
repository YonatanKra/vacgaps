import React, { FunctionComponent, createContext, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

export type AuthenticationContextProps = {
    token?: string;
    isLoggedIn: boolean;
};

const AuthenticationContext = createContext<AuthenticationContextProps>({} as any);

export const useAuthentication = (): AuthenticationContextProps => useContext(AuthenticationContext);

const LoginButtonContainer = styled.div`
    position: absolute; 
    width: 300px;
    right: 50%; 
    top: 50%;
    margin-right: -150px;
    margin-top: -150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-size: 18px;
        margin: 20px;
        text-align: center;
    }
`;

const LoginButton = () => {
    return (
        <LoginButtonContainer>
            <label className="title">התחבר</label>
            <div
                className="fb-login-button"
                data-width=""
                data-size="large"
                data-button-type="continue_with"
                data-layout="default"
                data-auto-logout-link="false"
                data-use-continue-as="true">
            </div>
        </LoginButtonContainer>);
};


// import 'facebook-js-sdk'; // try remove this comment

export const AuthenticationProvider: FunctionComponent = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const callback: (response: fb.StatusResponse) => void = response => {
            console.log("gil", response)
        };

        FB.Event.subscribe('auth.statusChange', callback);

        return () => FB.Event.unsubscribe('auth.statusChange', callback)
    }, []);

    return (
        <AuthenticationContext.Provider value={{
            isLoggedIn,
            token: undefined,
        }}>
            {isLoggedIn ?
                children :
                <>
                    <LoginButton />
                </>}
        </AuthenticationContext.Provider>
    );
};