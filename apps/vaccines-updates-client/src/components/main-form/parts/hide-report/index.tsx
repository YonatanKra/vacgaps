import { Checkbox } from '@material-ui/core';
import { FormItem } from '../../form-item';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useFormData } from '../../../../providers/FormDataProvider';

const HideReportContainer = styled.div`
    display:flex;

    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }

    label {
        margin-right: 10px;
    }
`;

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setHideReport, hideReport } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>הסתרה</h3>
            <HideReportContainer>
                <Checkbox
                    id='hideCheck'
                    onChange={_ => setHideReport(_.target.checked)}
                    checked={!!hideReport}
                />
                <label htmlFor='hideCheck'>הסתר דיווח</label>
            </HideReportContainer>
        </FormItem>
    );
};

export default Comp;