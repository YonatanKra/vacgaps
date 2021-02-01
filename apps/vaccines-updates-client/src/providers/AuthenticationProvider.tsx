import React, { FunctionComponent, createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { types } from 'util';
import { LoginButton } from '../components/login';
import { isSupervisor } from '../services/vacgaps-api-client';

type AuthenticationState = 'logged-out' | 'logged-in' | 'not-authorized';

export type AuthenticationContextProps = {
    token?: string;
    authenticationState: AuthenticationState;
    logout: VoidFunction;
};

const LogoutButtonWrapper = styled.div`
    height: 50px;
    width: 200px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 50px;
`;

const TextButton = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    width: auto;
    text-decoration: underline;
    font-size: 14px;
    color: gray;
    padding: 4px 10px;
    cursor: pointer;
`;

const AuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const AuthenticationContext = createContext<AuthenticationContextProps>({
    isLoggedIn: false,
} as unknown as AuthenticationContextProps);

export const useAuthentication = (): AuthenticationContextProps => useContext(AuthenticationContext);

const LoginComponents: FunctionComponent = ({ children }) => {
    const { authenticationState } = useAuthentication();

    if (authenticationState === 'logged-out') return <LoginButton />;
    if (authenticationState === 'logged-in') return <>{children}</>;
    if (authenticationState === 'not-authorized') return <>לא מורשה</>;
    return null;
}

export const AuthenticationProvider: FunctionComponent = ({ children }) => {
    const [isCheckingLoginStatus, setIsCheckingLoginStatus] = useState<boolean>(true);
    const [facebookAccessToken, setFacebookAccessToken] = useState<string | undefined>(undefined);
    const [authenticationState, setAuthenticationState] = useState<AuthenticationState>('logged-out');

    const onAuthChanged = useCallback(async (response: fb.StatusResponse) => {
        const token = response?.authResponse?.accessToken;
        if (response.status !== 'connected' || !token) {
            setAuthenticationState('logged-out');
            setFacebookAccessToken(undefined);
            return;
        }

        setIsCheckingLoginStatus(true);
        try {
            const isAuthorized = await isSupervisor(token);
            if (isAuthorized) {
                setAuthenticationState('logged-in')
                setFacebookAccessToken(token);
            } else {
                setFacebookAccessToken(undefined);
                setAuthenticationState('not-authorized');
            }
        } catch (error) {
            setFacebookAccessToken(undefined);
            setAuthenticationState('logged-out');
        } finally {
            setIsCheckingLoginStatus(false);
        }
    }, []);

    const onAuthChangedSync = useCallback((response: fb.StatusResponse) => {
        onAuthChanged(response);
    }, [onAuthChanged]);

    const logout = useCallback(() => {
        FB.logout(onAuthChangedSync);
    }, []);

    useEffect(() => {
        setIsCheckingLoginStatus(true);
        FB.getLoginStatus(onAuthChanged);
        FB.Event.subscribe('auth.statusChange', onAuthChanged);
        return () => FB.Event.unsubscribe('auth.statusChange', onAuthChanged)
    }, [onAuthChanged]);

    const shouldShowLogoutButton = useMemo(
        () => !isCheckingLoginStatus && (authenticationState === 'logged-in' || authenticationState === 'not-authorized'),
        [isCheckingLoginStatus, authenticationState]);

    return (
        <AuthenticationContext.Provider value={{
            authenticationState,
            token: facebookAccessToken,
            logout,
        }}>
            <AuthWrapper>
                <LoginComponents>{children}</LoginComponents>
                {shouldShowLogoutButton &&
                    <LogoutButtonWrapper>
                        <TextButton onClick={logout}>התנתק</TextButton>
                    </LogoutButtonWrapper>}
            </AuthWrapper>
        </AuthenticationContext.Provider>
    );
};
