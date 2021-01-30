import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';

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

export const LoginButton = () => {
    return (
        <LoginButtonContainer>
            <label className="title">התחבר</label>
            <div
                className="fb-login-button"
                data-width=""
                data-size="large"
                data-button-type="continue_with"
                data-layout="default"
                data-auto-logout-link="true"
                data-use-continue-as="true">
            </div>
        </LoginButtonContainer>);
};
