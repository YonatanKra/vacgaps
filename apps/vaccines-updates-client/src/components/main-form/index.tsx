import styled from 'styled-components';
import React, { FunctionComponent, useState } from 'react';
import HealthService from './parts/health-service';
import City from './parts/city';
import Address from './parts/address';
import Age from './parts/age';
import TargetGroups from './parts/target-groups';
import VaccinesAvailability from './parts/vaccines-availability';
import WorkingHours from './parts/working-hours';
import { FormItem } from './form-item';
import { Button } from '@material-ui/core';

import * as logo from './resources/logo.jpeg';

const Container = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color:white;
    width: 100%;
    input {
        text-align: right !important;
    }

    h1 {
        font-size: 16px;
    }

    h3 {
        margin-top: 10px;
        font-size: 14px;
        transition: all .5s ease-in-out;
        line-height: 0;
    }
`;

const Logo = styled.img`
    width: 70px;
    border-radius: 100px;
`;

const FormInputsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    >* {
    }
    
    ${FormItem} {
        padding: 20px 0;
        border-bottom: 1px solid #00000011;
        &:last-child {
            border: none;
        }
    }
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

type Props = {
    className?: string;
}

export const MainForm: FunctionComponent<Props> = props => {
    return (
        <Container className={props.className}>
            <Logo src={logo.default}></Logo>
            <h1>הכנסת פרטי חיסונים זמינים</h1>
            <FormInputsWrapper>
                <HealthService />
                <City />
                <Address />
                <Age />
                <TargetGroups />
                <VaccinesAvailability />
                <WorkingHours />
                <FormItem><Button variant="contained" color="primary">שלח</Button></FormItem>
            </FormInputsWrapper>
        </Container >
    );
} 
