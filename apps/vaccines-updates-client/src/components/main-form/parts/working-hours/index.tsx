import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { AutoComplete, OptionType } from '../common/auto-complete';
import DateTimePicker from 'react-datetime-picker';

const WorkingHoursWrapper = styled.div`
    display: flex;
    flex-direction: column;

    >*{
        width: 100%;
    }
`;

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
    const { serviceStartTime, setServiceStartTime, serviceEndTime, setServiceEndTime } = useFormData();

    return (
        <WorkingHoursWrapper>
            <FormItem className={props.className}>
                <h3>זמן תחילת פעילות</h3>
                <DateTimePickerWrapper>
                    <DateTimePicker
                        value={serviceStartTime ? new Date(serviceStartTime) : ''}
                        onChange={value=>setServiceStartTime(value?.toJSON())}
                    />
                </DateTimePickerWrapper>
            </FormItem>

            <FormItem className={props.className}>
                <h3>זמן סיום פעילות</h3>
                <DateTimePickerWrapper>
                    <DateTimePicker
                        value={new Date(serviceEndTime)}
                        onChange={value=>setServiceEndTime(value.toJSON())}
                    />
                </DateTimePickerWrapper>
            </FormItem>
        </WorkingHoursWrapper>
    );
};

export default Comp;