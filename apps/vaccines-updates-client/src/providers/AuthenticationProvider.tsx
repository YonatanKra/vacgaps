import React, { FunctionComponent, createContext, useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export type AuthenticationContextProps = {
    token?: string;
    isLoggedIn: boolean;
    logout: VoidFunction;
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

// import 'facebook-js-sdk';
// declare global { const FB: any }
export const AuthenticationProvider: FunctionComponent = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [facebookAccessToken, setFacebookAccessToken] = useState<string | undefined>(undefined);

    const onAuthChanged = useCallback((response: fb.StatusResponse) => {
        const token = response.authResponse.accessToken;
        if (response.status !== 'connected' || !token) {
            setIsLoggedIn(false);
            setFacebookAccessToken(undefined);
            return;
        }
        setIsLoggedIn(true);
        setFacebookAccessToken(token);
    }, []);

    const logout = useCallback(() => {
        FB.logout(onAuthChanged);
    }, [onAuthChanged]);

    useEffect(() => {
        FB.getLoginStatus(onAuthChanged)
        FB.Event.subscribe('auth.statusChange', onAuthChanged);
        return () => FB.Event.unsubscribe('auth.statusChange', onAuthChanged)
    }, [onAuthChanged]);

    return (
        <AuthenticationContext.Provider value={{
            isLoggedIn,
            token: undefined,
            logout,
        }}>
            {isLoggedIn ?
                children :
                <>
                    <LoginButton />
                </>}
        </AuthenticationContext.Provider>
    );
};