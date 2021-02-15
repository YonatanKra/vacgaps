import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { AutoComplete, OptionType } from '../common/auto-complete';
import DateTimePicker from 'react-datetime-picker';

const DateTimePickerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    direction: ltr;

    >*{
        width: 100%;
    }
`;

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { serviceEndTime, setServiceEndTime } = useFormData();

    const partialEndingTime: string = useMemo(() => {
        return dateFormat(Date.now(), 'dd/mm/yyyy');
    }, []);

    return (
        <FormItem className={props.className}>
            <h3>זמן סיום פעילות</h3>
            <DateTimePickerWrapper>
                <DateTimePicker
                    value={new Date(serviceEndTime)}
                    onChange={value=>setServiceEndTime(value.toJSON())}
                />
            </DateTimePickerWrapper>
        </FormItem>
    );
};

export default Comp;