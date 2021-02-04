import styled from 'styled-components';
import React, { FunctionComponent, useCallback, useState } from 'react';
import ReportToEdit  from './parts/report-to-edit';
import HealthService from './parts/health-service';
import City from './parts/city';
import Address from './parts/address';
import Age from './parts/age';
import TargetGroups from './parts/target-groups';
import VaccinesAvailability from './parts/vaccines-availability';
import WorkingHours from './parts/working-hours';
import Comments from './parts/comments';
import HideReport from './parts/hide-report';
import { FormItem } from './form-item';
import { Button } from '@material-ui/core';
import { useSendReport } from '../../hooks/useSendReport';
import * as logo from './resources/logo.jpeg';
import { useFormData } from '../../providers';

const Container = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
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
            padding-bottom: 0;
        }
    }
`;

const StyledFormITem = styled(FormItem)`
    display: flex;
    flex-direction: column;
`;

const FormStateWrapper = styled.label`
    margin: 5px;

    * {
        &[data-success] {
            color: green;
        }
        &[data-error] {
            color: orange;
        }
    }
`;

type FormState = 'idle' | 'sending' | 'sent' | 'has-error';

export const MainForm: FunctionComponent<{ className?: string }> = props => {
    const sendReport = useSendReport();
    const [formState, setFormState] = useState<FormState>('idle');

    const onSendClicked = useCallback(async () => {
        try {
            setFormState('sending')
            await sendReport();
            setFormState('sent')
        } catch (error) {
            setFormState('has-error')
        }
    }, [sendReport]);

    const { canSendReport } = useFormData();

    return (
        <Container className={props.className}>
            <Logo src={logo.default}></Logo>
            <h1>הכנסת פרטי חיסונים זמינים</h1>
            <FormInputsWrapper>
                <ReportToEdit />
                <HealthService />
                <City />
                <Address />
                <WorkingHours />
                <Age />
                <TargetGroups />
                <VaccinesAvailability />
                <Comments />
                <HideReport />
                <StyledFormITem>
                    <Button
                        disabled={!canSendReport}
                        variant="contained"
                        color="primary"
                        onClick={onSendClicked}>שלח</Button>
                    <FormStateWrapper>
                        {formState === 'has-error' && <label data-error>אירעה שגיאה</label>}
                        {formState === 'sent' && <label data-success>נשלח בהצלחה !</label>}
                    </FormStateWrapper>
                </StyledFormITem>
            </FormInputsWrapper>
        </Container >
    );
} 
